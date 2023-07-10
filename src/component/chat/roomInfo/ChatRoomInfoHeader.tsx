import React from "react";

const ChatRoomInfoHeader = React.memo(() => {
  return (
    <>
      <div className="chat_room_info_top">
        <div>
          <div>Room Image</div>
          <div>Room Name</div>
          <div>Room Description</div>
        </div>
      </div>
    </>
  );
});

export default ChatRoomInfoHeader;
