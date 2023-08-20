import { ChangeEvent, Dispatch, useCallback, useMemo, useState } from "react";

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

  const onChangeMessage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMsg(e.target.value);
    },
    []
  );

  const onKeyUp = useCallback((e: React.KeyboardEvent) => {
    if (e.code === "Enter") {
      console.log(e);
      return;
    }
  }, []);

  const send_roket = useMemo(() => String.fromCodePoint(0x1f680), []);

  return (
    <>
      <div className="chat_room_footer">
        <div className="chat_room_footer_message">
          <input
            id="send_message_input"
            placeholder="message"
            value={newMsg}
            onChange={onChangeMessage}
            onKeyUp={onKeyUp}
            onKeyDown={sendChatMessageByEnter}
          ></input>
          <div className="img">[img]</div>
          <div className="map">[map]</div>
          <div className="mic">[mic]</div>
          <button id="send_message_button" onClick={sendChatMessage}>
            {send_roket}
          </button>
        </div>
      </div>
    </>
  );
}
