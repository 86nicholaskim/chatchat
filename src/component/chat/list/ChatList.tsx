import { Dispatch, SetStateAction, useRef, useState } from "react";
import AllMessage from "./AllMessage";
import NewMessage from "./NewMessage";
import PinnedMessage from "./PinnedMessage";
import { IChatRoom } from "../../../api/chat/chat_api";

interface IChatList {
  dispatch: Dispatch<any>;
  chatList: { key: string }[];
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
