import { Dispatch, SetStateAction, useRef, useState } from "react";
interface IChatRoomFooter {
  //setChatListItems: Dispatch<SetStateAction<{ key: string }[]>>;
  userId: string;
  chatId: string;
  setChatRoomMessage: Dispatch<
    SetStateAction<
      {
        key: string;
        msg_type: string;
        msg: string;
        userId: string;
        write_time: string;
        room_number: string;
      }[]
    >
  >;
}

export default function ChatRoomFooter({
  setChatRoomMessage,
  userId,
  chatId,
}: IChatRoomFooter) {
  const [newMsg, setMsg] = useState("");

  const sendChatMessage = (e: React.UIEvent) => {
    // var $li = document.createElement("li");
    // var $div = document.createElement("div");

    // var $div_msg = document.createElement("div");
    // var $div_user = document.createElement("div");
    // var $div_write_time = document.createElement("div");

    // var $input = document.getElementById(
    //   "send_message_input"
    // ) as HTMLInputElement;
    // var $ul = document.getElementById("chat_room_content_container_messages");

    // $div.setAttribute("class", "send_msg");
    // $div_user.append(userId);
    // $div.append($div_user);
    // $div_msg.innerText = $input.value || "문의바람";
    // $div.append($div_msg);
    // $div_write_time.append(new Date().toLocaleTimeString("ko-KR"));
    // $div.append($div_write_time);

    // $li.appendChild($div);
    // $ul?.append($li);
    // $input.value = "";
    if (!newMsg) {
      return;
    }

    setChatRoomMessage((messgeList) => {
      return [
        ...messgeList,
        {
          key: e.timeStamp.toString(),
          msg_type: "send_msg",
          msg: newMsg,
          userId: userId,
          write_time: new Date().toLocaleTimeString(),
          room_number: chatId,
        },
      ];
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
