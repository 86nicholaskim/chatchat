import { IChatRoom, IChatRoomKey } from "../../api/chat/chat_api";

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "set_chatroom":
      return {
        ...state,
        chat_room: {
          ...action.chat_data,
        },
      };
    case "add_chatroom_message":
      return {
        ...state,
        chat_room: {
          ...state.chat_room,
          data: [...state.chat_room.data, action.chat_data.data],
        },
      };
    case "show_chatroom":
      return { ...state, showChatRoom: !state.showChatRoom };
    case "show_roominfo":
      return { ...state, showRoomInfo: !state.showRoomInfo };
    case "update_chat_id":
      return {
        ...state,
        chat_id: action.title,
      };

    case "remove_chat":
      const remove = state.chat_list.filter(
        (item: any) => item.key !== action.remove_chat_id
      );
      return {
        ...state,
        chat_list: remove,
        _chat_list: remove,
      };
    case "add_chat":
      const add = [...state.chat_list, action.add];
      return {
        ...state,
        chat_list: add,
        _chat_list: add,
      };
    case "search_keyword":
      return {
        ...state,
        chat_list: state._chat_list.filter((item: IChatRoomKey) =>
          item.title.includes(action.keyword)
        ),
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
};
