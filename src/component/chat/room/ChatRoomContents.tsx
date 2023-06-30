import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IChatRoom, IRoom, getChatRoomData } from "../../../api/chat/chat_api";

interface IChatRoomContents {
  setChatListItems: Dispatch<SetStateAction<{ key: string }[]>>;
  setShowRoomInfo: Dispatch<SetStateAction<boolean>>;
  setShowChatRoom: Dispatch<SetStateAction<boolean>>;
  setChatRoom: Dispatch<SetStateAction<IChatRoom>>;
  showRoomInfo: boolean;
  userId: string;
  chatId: string;
  chatCurrentData: IChatRoom;
  chatRoom: IChatRoom;
}

export default function ChatRoomContents({
  setChatListItems,
  setShowRoomInfo,
  setShowChatRoom,
  setChatRoom,
  showRoomInfo,
  userId,
  chatId,
  chatCurrentData,
  chatRoom,
}: IChatRoomContents) {
  console.log(chatCurrentData);

  console.log(chatCurrentData);

  // useEffect(() => {
  //   console.log("ChatRoomContents mount/update");

  //   setChatRoom((roomData) => {
  //     return {
  //       ...roomData,
  //       key: chatCurrentData.key,
  //       data: chatCurrentData.data,
  //     };
  //   });

  //   return () => {
  //     console.log("ChatRoomContents unmount");
  //   };
  // }, []);

  return (
    <>
      <div className="chat_content">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="left_toolbar">
            <div className="chat_title">{chatId}</div>
          </div>
          <div className="right_toolbar">
            <button
              onClick={(e) => {
                console.log("멤버보기");
                debugger;
                setShowRoomInfo((show) => !show);

                // document.getElementById("chat_room_info_container")?.hidden
                //   ? document
                //       .getElementById("chat_room_info_container")
                //       ?.removeAttribute("hidden")
                //   : document
                //       .getElementById("chat_room_info_container")
                //       ?.setAttribute("hidden", "");
              }}
            >
              멤버보기
            </button>
            <button
              id="exit"
              onClick={(e) => {
                setChatListItems((items) =>
                  items.filter((item) => item.key !== chatId)
                );

                // chat info
                showRoomInfo && setShowRoomInfo((showRoom) => !showRoom);

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
            {
              /*chatRoom.data.map((msgInfo) => {*/
              chatCurrentData.data.map((msgInfo) => {
                return (
                  <li key={msgInfo.key} className={msgInfo.msg_type}>
                    <div className="msg_content">{msgInfo.msg}</div>
                    <div className="msg_user">{msgInfo.userId}</div>
                    <div className="msg_write_time">{msgInfo.write_time}</div>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </>
  );
}
