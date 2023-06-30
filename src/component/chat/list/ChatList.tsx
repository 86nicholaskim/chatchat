import { Dispatch, SetStateAction, useRef, useState } from "react";
import AllMessage from "./AllMessage";
import NewMessage from "./NewMessage";
import PinnedMessage from "./PinnedMessage";

interface IChatList {
  setChatListItems: Dispatch<SetStateAction<{ key: string }[]>>;
  setShowChatRoom: Dispatch<SetStateAction<boolean>>;
  chatList: { key: string }[];
}

export default function ChatList({
  setChatListItems,
  setShowChatRoom,
  chatList,
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
            />
            <PinnedMessage />
            <AllMessage chatList={chatList} setShowChatRoom={setShowChatRoom} />
          </div>
        </div>
      </div>
    </>
  );
}
