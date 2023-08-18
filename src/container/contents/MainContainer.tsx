import ChatList from "../../component/chat/list/ChatList";
import ChatRoom from "../../component/chat/room/ChatRoom";
import ChatRoomInfo from "../../component/chat/roomInfo/ChatRoomInfo";
import { useRef, useState, useEffect, useReducer } from "react";
import {
  getChatRoomData,
  IChatRoom,
  IChatRoomKey,
  IRoom,
} from "../../api/chat/chat_api";
import { reducer } from "../../reducer/ chat/reducer";

const _userId = "user_id_1";
const _chatList: IChatRoomKey[] = [
  { key: "chatList_#001", title: "대화방방방01" },
  { key: "chatList_#002", title: "대화방방방02" },
  { key: "chatList_#003", title: "대화방방방03" },
];

const initChatData: IChatRoom = {
  key: "",
  title: "",
  members: [],
  data: [],
};

export default function MainContainer() {
  const [state, dispatch] = useReducer(reducer, {
    chat_id: "",
    _chat_list: _chatList.slice() as unknown as IChatRoomKey,
    chat_list: _chatList as unknown as IChatRoomKey,
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
          {state.showChatRoom && state.showRoomInfo ? (
            <ChatRoomInfo chatCurrentData={state.chat_room} />
          ) : null}
        </div>
      </main>
    </>
  );
}
