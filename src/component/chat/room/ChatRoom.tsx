import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import ChatRoomHeader from "./ChatRoomHeader";
import ChatRoomContents from "./ChatRoomContents";
import ChatRoomFooter from "./ChatRoomFooter";
import { getChatRoomData, IChatRoom, IRoom } from "../../../api/chat/chat_api";
interface IChatRoomProps {
  setChatListItems: Dispatch<SetStateAction<{ key: string }[]>>;
  setShowRoomInfo: Dispatch<SetStateAction<boolean>>;
  setShowChatRoom: Dispatch<SetStateAction<boolean>>;
  setChatRoom: Dispatch<SetStateAction<IChatRoom>>;
  showRoomInfo: boolean;
  chatId: string;
  userId: string;
  chatList: { key: string }[];
  chatCurrentData: IChatRoom;
  chatRoom: IChatRoom;
}

export default function ChatRoom({
  chatList,
  setShowChatRoom,
  setChatListItems,
  setShowRoomInfo,
  setChatRoom,
  showRoomInfo,
  userId,
  chatId,
  chatCurrentData,
  chatRoom,
}: IChatRoomProps) {
  //const chatId = "chatList_#001";

  // const msgList = [
  //   {
  //     key: "555555.700000003",
  //     msg_type: "send_msg",
  //     msg: "안녕~~",
  //     userId: "user_1",
  //     write_time: "오전 9:00",
  //     room_number: "chatList_#001",
  //   },
  //   {
  //     key: "666666.700000003",
  //     msg_type: "send_msg",
  //     msg: "안녕~~",
  //     userId: "user_1",
  //     write_time: "오전 9:01",
  //     room_number: "chatList_#001",
  //   },
  //   {
  //     key: "777777.700000003",
  //     msg_type: "receive_msg",
  //     msg: "안녕~~!",
  //     userId: "user_2",
  //     write_time: "오후 9:10",
  //     room_number: "chatList_#001",
  //   },
  //   {
  //     key: "888888.700000003",
  //     msg_type: "receive_msg",
  //     msg: "안녕~~!!",
  //     userId: "user_2",
  //     write_time: "오후 9:11",
  //     room_number: "chatList_#001",
  //   },
  //   {
  //     key: "999999.700000003",
  //     msg_type: "receive_msg",
  //     msg: "안녕~~!!!!!!",
  //     userId: "user_2",
  //     write_time: "오후 9:13",
  //     room_number: "chatList_#001",
  //   },
  // ];

  console.log(chatCurrentData);

  return (
    <>
      <div className="chat_room_container" id={chatId}>
        <div className="chat_room" id="chat_room">
          <ChatRoomHeader />
          <ChatRoomContents
            setChatListItems={setChatListItems}
            setShowRoomInfo={setShowRoomInfo}
            setShowChatRoom={setShowChatRoom}
            showRoomInfo={showRoomInfo}
            setChatRoom={setChatRoom}
            userId={userId}
            chatId={chatId}
            chatCurrentData={chatCurrentData}
            chatRoom={chatRoom ?? ({} as IChatRoom)}
          />
          <ChatRoomFooter
            userId={userId}
            chatId={chatId}
            //setChatListItems={setChatListItems}
            setChatRoom={setChatRoom}
          />
        </div>
      </div>
    </>
  );
}
