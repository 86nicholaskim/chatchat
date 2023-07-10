import { Dispatch, memo } from "react";
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
    return (
      <>
        <div className="chat_content">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="left_toolbar">
              <div className="chat_title">{chatCurrentData.key}</div>
            </div>
            <div className="right_toolbar">
              <button
                onClick={(e) => {
                  console.log("멤버보기");
                  dispatch({ type: "show_roominfo" });
                }}
              >
                멤버보기
              </button>
              <button
                id="exit"
                onClick={(e) => {
                  console.log("exit: " + chatId);

                  dispatch({ type: "remove_chat", remove_chat_id: chatId });

                  // chat info
                  showRoomInfo && dispatch({ type: "show_roominfo" });

                  // chat room
                  dispatch({ type: "show_chatroom" });
                }}
              >
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
