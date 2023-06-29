import ChatList from "../../component/chat/list/ChatList";
import ChatRoom from "../../component/chat/room/ChatRoom";
import ChatRoomInfo from "../../component/chat/roomInfo/ChatRoomInfo";
import { useState } from "react";
export default function MainContainer() {
  const chatList = [
    { key: "chatList_#001" },
    { key: "chatList_#002" },
    { key: "chatList_#003" },
  ];
  const [items, setItems] = useState(chatList || []);

  return (
    <>
      <main className="app_content" id="app_content">
        <div className="wrapper_chat">
          <ChatList setItems={setItems} items={items} />
          <ChatRoom items={items} setItems={setItems} userId="user_1" />
          <ChatRoomInfo />
        </div>
      </main>
    </>
  );
}
