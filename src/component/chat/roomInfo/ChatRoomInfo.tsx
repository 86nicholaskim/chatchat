import ChatRoomInfoContents from "./ChatRoomInfoContents";
import ChatRoomInfoHeader from "./ChatRoomInfoHeader";

export default function ChatRoomInfo() {
  return (
    <>
      <div id="chat_room_info_container" className="chat_room_info_container">
        <div className="chat_room_info" id="chat_room_info">
          <h1>chat_room_info</h1>
          <ChatRoomInfoHeader />
          <ChatRoomInfoContents />
        </div>
      </div>
    </>
  );
}
