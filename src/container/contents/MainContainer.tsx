import userEvent from "@testing-library/user-event";
import ChatList from "../../component/chat/list/ChatList";
import ChatRoom from "../../component/chat/room/ChatRoom";
import ChatRoomInfo from "../../component/chat/roomInfo/ChatRoomInfo";
import { useRef, useState } from "react";
export default function MainContainer() {
  const _chatList = [
    { key: "chatList_#001" },
    { key: "chatList_#002" },
    { key: "chatList_#003" },
  ];
  const [chatList, setChatListItems] = useState(_chatList || []);
  const [showChatRoom, setShowChatRoom] = useState(false);
  const [showRoomInfo, setshowRoomInfo] = useState(false);

  return (
    <>
      <main className="app_content" id="app_content">
        <div className="wrapper_chat">
          <ChatList
            setChatListItems={setChatListItems}
            setShowChatRoom={setShowChatRoom}
            chatList={chatList}
          />
          {showChatRoom ? (
            <ChatRoom
              chatList={chatList}
              setShowChatRoom={setShowChatRoom}
              setChatListItems={setChatListItems}
              setshowRoomInfo={setshowRoomInfo}
              showRoomInfo={showRoomInfo}
              userId="user_1"
            />
          ) : null}
          {showRoomInfo ? <ChatRoomInfo /> : null}
        </div>
      </main>
    </>
  );
}
