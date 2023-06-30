import { Dispatch, SetStateAction, useRef, useState } from "react";
import AllMessage from "./AllMessage";
import NewMessage from "./NewMessage";
import PinnedMessage from "./PinnedMessage";
import { IChatRoom } from "../../../api/chat/chat_api";

interface IChatList {
  setChatListItems: Dispatch<SetStateAction<{ key: string }[]>>;
  setShowChatRoom: Dispatch<SetStateAction<boolean>>;
  setChatRoom: Dispatch<SetStateAction<IChatRoom>>;
  chatList: { key: string }[];
  chatCurrentData: IChatRoom;
  setChatId: Dispatch<SetStateAction<string>>;
}

export default function ChatList({
  setChatListItems,
  setShowChatRoom,
  setChatId,
  setChatRoom,
  chatList,
  chatCurrentData,
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
              setShowChatRoom={setShowChatRoom}
              setChatListItems={setChatListItems}
              setChatRoom={setChatRoom}
            />
            <PinnedMessage />
            <AllMessage
              chatList={chatList}
              setChatId={setChatId}
              setShowChatRoom={setShowChatRoom}
              setChatRoom={setChatRoom}
              chatCurrentData={chatCurrentData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
