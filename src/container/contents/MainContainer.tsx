import ChatList from "../../component/chat/list/ChatList";
import { memo, useCallback, useEffect, useReducer } from "react";
import {
  getChatRoomData,
  IChatRoom,
  IChatRoomKey,
  IChatState,
} from "../../api/chat/chat_api";
import { reducer } from "../../reducer/ chat/reducer";
import { useInit } from "../../hook/chat/use_init";
import ChatRoom from "../../component/chat/room/ChatRoom";
import ChatRoomInfo from "../../component/chat/roomInfo/ChatRoomInfo";
import Main from "../../component/layout/Main";

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

const MainContainer = memo(() => {
  const [state, dispatch] = useReducer<
    (state: IChatState, action: any) => IChatState
  >(reducer, {
    chat_id: "",
    _chat_list: _chatList.slice() as IChatRoomKey[],
    chat_list: _chatList as IChatRoomKey[],
    showChatRoom: false,
    showRoomInfo: false,
    chat_room: initChatData as IChatRoom,
  });

  const initRoomAsync = useCallback(async () => {
    const result = await getChatRoomData(state.chat_id);
    dispatch({
      type: "set_chatroom",
      chat_data: {
        key: result.key,
        title: result.title,
        data: result.data,
        members: result.members,
      },
    });
  }, [state.chat_id]);

  // useEffect(() => {
  //   console.log("useInit mount/update");

  //   initRoomAsync();

  //   return () => {
  //     console.log("useInit unmount");
  //   };
  // }, []);

  useInit({ initAsync: initRoomAsync });

  return (
    <>
      <Main>
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
              chatId={state.chat_id}
              chatCurrentData={state.chat_room}
              chatRoom={state.chat_room}
            />
          ) : null}
          {state.showChatRoom && state.showRoomInfo ? (
            <ChatRoomInfo chatCurrentData={state.chat_room} />
          ) : null}
        </div>
      </Main>
    </>
  );
});
export default MainContainer;
