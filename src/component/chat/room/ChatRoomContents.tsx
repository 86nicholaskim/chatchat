import { Dispatch, memo, useCallback } from "react";
import { IChatRoom } from "../../../api/chat/chat_api";

interface IChatRoomContents {
  dispatch: Dispatch<any>;
  showRoomInfo: boolean;
  userId: string;
  chatId: string;
  chatCurrentData: IChatRoom;
  chatRoom: IChatRoom;
}

const ChatRoomContents = memo(
  ({ dispatch, showRoomInfo, chatId, chatCurrentData }: IChatRoomContents) => {
    const onClickShowMember = useCallback(
      (e: React.MouseEvent) => {
        console.log("멤버보기");
        dispatch({ type: "show_roominfo" });
      },
      [dispatch]
    );

    const onClickExit = useCallback(
      (e: React.MouseEvent) => {
        dispatch({ type: "remove_chat", remove_chat_id: chatCurrentData.key });
        showRoomInfo && dispatch({ type: "show_roominfo" });
        dispatch({ type: "show_chatroom" });
      },
      [chatId, dispatch, showRoomInfo]
    );

    console.log(chatCurrentData);

    return (
      <>
        <div className="chat_content">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="left_toolbar">
              <div className="chat_title">{chatCurrentData.title}</div>
            </div>
            <div className="right_toolbar">
              <button onClick={onClickShowMember}>멤버보기</button>
              <button id="exit" onClick={onClickExit}>
                나가기
              </button>
            </div>
          </div>
          <div className="chat_content_container">
            <ul id="chat_room_content_container_messages">
              {chatCurrentData.data.map((msgInfo) => {
                return (
                  <li key={msgInfo.key} className={msgInfo.msg_type}>
                    <div className="msg_content">{msgInfo.msg}</div>
                    <div className="msg_user">{msgInfo.userId}</div>
                    <div className="msg_write_time">{msgInfo.write_time}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
);

export default ChatRoomContents;
