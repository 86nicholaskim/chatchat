import { Dispatch, SetStateAction, useRef, useState } from "react";
import AllMessage from "./AllMessage";
import NewMessage from "./NewMessage";
import PinnedMessage from "./PinnedMessage";

interface IChatList {
  setItems: Dispatch<SetStateAction<{ key: string }[]>>;
  items: { key: string }[];
}

export default function ChatList({ setItems, items }: IChatList) {
  return (
    <>
      <div className="chat_list_container">
        <div className="chat_list" id="chat_list">
          <div className="chat_list_header">
            <h1>chat_list</h1>
          </div>
          <div className="chat_list_contents">
            <NewMessage setItems={setItems} />
            <PinnedMessage />
            <AllMessage items={items} />
          </div>
        </div>
      </div>
    </>
  );
}
