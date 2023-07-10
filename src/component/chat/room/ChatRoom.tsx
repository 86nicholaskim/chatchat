import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import ChatRoomHeader from "./ChatRoomHeader";
import ChatRoomContents from "./ChatRoomContents";
import ChatRoomFooter from "./ChatRoomFooter";
import { getChatRoomData, IChatRoom, IRoom } from "../../../api/chat/chat_api";
interface IChatRoomProps {
  dispatch: Dispatch<any>;
  showRoomInfo: boolean;
  chatId: string;
  userId: string;
  chatList: { key: string }[];
  chatCurrentData: IChatRoom;
  chatRoom: IChatRoom;
}

export default function ChatRoom({
  dispatch,
  showRoomInfo,
  chatList,
  userId,
  chatId,
  chatCurrentData,
  chatRoom,
}: IChatRoomProps) {
  console.log(chatCurrentData);

  return (
    <>
      <div className="chat_room_container" id={chatId}>
        <div className="chat_room" id="chat_room">
          <ChatRoomHeader />
          <ChatRoomContents
            dispatch={dispatch}
            showRoomInfo={showRoomInfo}
            userId={userId}
            chatId={chatId}
            chatCurrentData={chatCurrentData}
            chatRoom={chatRoom ?? ({} as IChatRoom)}
          />
          <ChatRoomFooter userId={userId} chatId={chatId} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
}
