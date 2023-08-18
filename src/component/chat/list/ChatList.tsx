import { Dispatch } from "react";
import AllMessage from "./AllMessage";
import NewMessage from "./NewMessage";
import PinnedMessage from "./PinnedMessage";
import { IChatRoom, IChatRoomKey } from "../../../api/chat/chat_api";
import Search from "./Search";

interface IChatList {
  dispatch: Dispatch<any>;
  chatList: IChatRoomKey[];
  chatCurrentData: IChatRoom;
  showRoomInfo: boolean;
  showChatRoom: boolean;
}

export default function ChatList({
  dispatch,
  chatList,
  chatCurrentData,
  showRoomInfo,
  showChatRoom,
}: IChatList) {
  return (
    <>
      <div className="chat_list_container">
        <div className="chat_list" id="chat_list">
          <div className="chat_list_header">
            <h1>chat_list</h1>
          </div>
          <div className="chat_list_contents">
            <NewMessage
              dispatch={dispatch}
              showRoomInfo={showRoomInfo}
              showChatRoom={showChatRoom}
            />
            <Search dispatch={dispatch} />
            <PinnedMessage />
            <AllMessage
              dispatch={dispatch}
              chatList={chatList}
              chatCurrentData={chatCurrentData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
