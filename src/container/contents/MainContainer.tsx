import ChatList from "../../component/chat/list/ChatList";
import ChatRoom from "../../component/chat/room/ChatRoom";
import ChatRoomInfo from "../../component/chat/roomInfo/ChatRoomInfo";
import { useRef, useState, useEffect, useReducer } from "react";
import { getChatRoomData, IChatRoom, IRoom } from "../../api/chat/chat_api";
export default function MainContainer() {
  const _userId = "user_id_1";
  const _chatList = [
    { key: "chatList_#001" },
    { key: "chatList_#002" },
    { key: "chatList_#003" },
  ];

  const initChatData = {
    key: "",
    members: [],
    data: [],
  };

  const reducer = (state: any, action: any) => {
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
          chat_id: action.chat_id,
        };

      case "remove_chat":
        return {
          ...state,
          chat_list: state.chat_list.filter(
            (item: any) => item.key !== action.remove_chat_id
          ),
        };
      case "add_chat":
        return {
          ...state,
          chat_list: [...state.chat_list, action.add_chat_id],
        };
      default:
        throw Error("Unknown action: " + action.type);
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    chat_id: "",
    chat_list: _chatList,
    showChatRoom: false,
    showRoomInfo: false,
    chat_room: initChatData as IChatRoom,
  });

  useEffect(() => {
    console.log("MainContainer mount/update");

    getChatRoomData(state.chat_id).then((result) => {
      console.log(state.chat_id);
      dispatch({
        type: "set_chatroom",
        chat_data: {
          key: result.key,
          data: result.data,
          members: result.members,
        },
      });
    });

    return () => {
      console.log("MainContainer unmount");
    };
  }, []);

  return (
    <>
      <main className="app_content" id="app_content">
        <div className="wrapper_chat">
          <ChatList
            dispatch={dispatch}
            chatList={state.chat_list}
            chatCurrentData={state.chat_room}
            showRoomInfo={state.showRoomInfo}
            showChatRoom={state.showChatRoom}
          />
          {state.showChatRoom ? (
            <ChatRoom
              dispatch={dispatch}
              showRoomInfo={state.showRoomInfo}
              userId={_userId}
              chatList={state.chat_list}
              chatId={state.chat_id}
              chatCurrentData={state.chat_room}
              chatRoom={state.chat_room}
            />
          ) : null}
          {state.showRoomInfo ? (
            <ChatRoomInfo chatCurrentData={state.chat_room} />
          ) : null}
        </div>
      </main>
    </>
  );
}
