import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import ChatRoomHeader from "./ChatRoomHeader";
import ChatRoomContents from "./ChatRoomContents";
import ChatRoomFooter from "./ChatRoomFooter";
import { getChatRoomData } from "../../../api/chat/chat_api";
interface IChatRoom {
  setChatListItems: Dispatch<SetStateAction<{ key: string }[]>>;
  setshowRoomInfo: Dispatch<SetStateAction<boolean>>;
  setShowChatRoom: Dispatch<SetStateAction<boolean>>;
  showRoomInfo: boolean;
  chatId?: string;
  userId: string;
  chatList: { key: string }[];
}

export default function ChatRoom({
  chatList,
  setShowChatRoom,
  setChatListItems,
  setshowRoomInfo,
  showRoomInfo,
  userId,
}: IChatRoom) {
  const chatId = "chatList_#001";

  const msgList = [
    {
      key: "555555.700000003",
      msg_type: "send_msg",
      msg: "안녕~~",
      userId: "user_1",
      write_time: "오전 9:00",
      room_number: "chatList_#001",
    },
    {
      key: "666666.700000003",
      msg_type: "send_msg",
      msg: "안녕~~",
      userId: "user_1",
      write_time: "오전 9:01",
      room_number: "chatList_#001",
    },
    {
      key: "777777.700000003",
      msg_type: "receive_msg",
      msg: "안녕~~!",
      userId: "user_2",
      write_time: "오후 9:10",
      room_number: "chatList_#001",
    },
    {
      key: "888888.700000003",
      msg_type: "receive_msg",
      msg: "안녕~~!!",
      userId: "user_2",
      write_time: "오후 9:11",
      room_number: "chatList_#001",
    },
    {
      key: "999999.700000003",
      msg_type: "receive_msg",
      msg: "안녕~~!!!!!!",
      userId: "user_2",
      write_time: "오후 9:13",
      room_number: "chatList_#001",
    },
  ];

  useEffect(() => {
    //채팅서버연결
    console.log("mount/ update");

    return () => {
      //채팅서버종료

      console.log("unmount");
    };
  }, []);

  const [chatRoomMessageList, setChatRoomMessage] = useState(msgList);

  return (
    <>
      <div className="chat_room_container">
        <div className="chat_room" id="chat_room">
          <ChatRoomHeader />
          <ChatRoomContents
            setChatListItems={setChatListItems}
            setshowRoomInfo={setshowRoomInfo}
            setShowChatRoom={setShowChatRoom}
            showRoomInfo={showRoomInfo}
            userId={userId}
            chatId={chatId}
            msgList={chatRoomMessageList}
          />
          <ChatRoomFooter
            userId={userId}
            chatId={chatId}
            //setChatListItems={setChatListItems}
            setChatRoomMessage={setChatRoomMessage}
          />
        </div>
      </div>
    </>
  );
}
