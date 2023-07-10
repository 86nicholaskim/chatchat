import { Dispatch, SetStateAction, useRef, useState } from "react";

import { IChatRoom } from "../../../api/chat/chat_api";

interface IChatRoomFooter {
  userId: string;
  chatId: string;
  dispatch: Dispatch<any>;
}

export default function ChatRoomFooter({
  dispatch,
  userId,
  chatId,
}: IChatRoomFooter) {
  const [newMsg, setMsg] = useState("");

  const sendChatMessage = (e: React.UIEvent) => {
    if (!newMsg) {
      return;
    }
    dispatch({
      type: "add_chatroom_message",
      chat_data: {
        key: chatId,
        data: {
          key: e.timeStamp.toString(),
          msg_type: "send_msg",
          msg: newMsg,
          userId: userId,
          write_time: new Date().toLocaleTimeString(),
          room_number: chatId,
        },
      },
    });

    console.log("sendChatMessage");
    setMsg((prevMsg) => "");
  };

  const sendChatMessageByEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.code !== "Enter") {
      return;
    }

    console.log("sendChatMessageByEnter");
    sendChatMessage(e);
  };

  return (
    <>
      <div className="chat_room_footer">
        <div className="chat_room_footer_message">
          <input
            id="send_message_input"
            placeholder="Type a message"
            value={newMsg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                console.log(e);
                return;
              }
            }}
            onKeyDown={sendChatMessageByEnter}
          ></input>
          <div className="img">[img]</div>
          <div className="map">[map]</div>
          <div className="mic">[mic]</div>
          <button id="send_message_button" onClick={sendChatMessage}>
            {String.fromCodePoint(0x1f680)}
          </button>
        </div>
      </div>
    </>
  );
}
