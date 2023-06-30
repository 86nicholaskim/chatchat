import { Dispatch, SetStateAction, useRef, useState } from "react";

interface IChatRoomContents {
  setChatListItems: Dispatch<SetStateAction<{ key: string }[]>>;
  setshowRoomInfo: Dispatch<SetStateAction<boolean>>;
  setShowChatRoom: Dispatch<SetStateAction<boolean>>;
  showRoomInfo: boolean;
  userId: string;
  chatId: string;
  msgList: {
    key: string;
    msg_type: string;
    msg: string;
    userId: string;
    write_time: string;
    room_number: string;
  }[];
}

export default function ChatRoomContents({
  setChatListItems,
  setshowRoomInfo,
  setShowChatRoom,
  showRoomInfo,
  userId,
  chatId,
  msgList,
}: IChatRoomContents) {
  return (
    <>
      <div className="chat_room_container" id={chatId}>
        <div className="chat_content">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="left_toolbar">
              <div className="chat_title">{chatId}</div>
            </div>
            <div className="right_toolbar">
              <button
                onClick={(e) => {
                  console.log("멤버보기");

                  setshowRoomInfo((show) => !show);

                  // document.getElementById("chat_room_info_container")?.hidden
                  //   ? document
                  //       .getElementById("chat_room_info_container")
                  //       ?.removeAttribute("hidden")
                  //   : document
                  //       .getElementById("chat_room_info_container")
                  //       ?.setAttribute("hidden", "");
                }}
              >
                멤버
              </button>
              <button
                id="exit"
                onClick={(e) => {
                  setChatListItems((items) =>
                    items.filter((item) => item.key !== chatId)
                  );

                  // chat info
                  showRoomInfo && setshowRoomInfo((showRoom) => !showRoom);

                  // chat room
                  setShowChatRoom((show) => !show);

                  // // chat info
                  // document
                  //   .getElementById("chat_room_info_container")
                  //   ?.setAttribute("hidden", "");

                  // // chat room
                  // document
                  //   .getElementById("chat_room_container")
                  //   ?.setAttribute("hidden", "");
                }}
              >
                나가기
              </button>
            </div>
          </div>
          <div className="chat_content_container">
            <ul id="chat_room_content_container_messages">
              {msgList.map((msgInfo) => {
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
      </div>
    </>
  );
}
