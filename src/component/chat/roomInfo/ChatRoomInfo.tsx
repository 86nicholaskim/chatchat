import ChatRoomInfoContents from "./ChatRoomInfoContents";
import ChatRoomInfoHeader from "./ChatRoomInfoHeader";
import { IChatRoom } from "../../../api/chat/chat_api";
import React from "react";
interface IChatRoomInfoProp {
  chatCurrentData: IChatRoom;
}

const ChatRoomInfo = React.memo(({ chatCurrentData }: IChatRoomInfoProp) => {
  return (
    <>
      <div id="chat_room_info_container" className="chat_room_info_container">
        <div className="chat_room_info" id="chat_room_info">
          <h1>chat_room_info</h1>
          <ChatRoomInfoHeader />
          <ChatRoomInfoContents members={chatCurrentData.members} />
        </div>
      </div>
    </>
  );
});

export default ChatRoomInfo;
