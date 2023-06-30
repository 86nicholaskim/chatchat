import ChatRoomInfoContents from "./ChatRoomInfoContents";
import ChatRoomInfoHeader from "./ChatRoomInfoHeader";
import { IChatRoom } from "../../../api/chat/chat_api";
interface IChatRoomInfoProp {
  chatCurrentData: IChatRoom;
}
export default function ChatRoomInfo({ chatCurrentData }: IChatRoomInfoProp) {
  console.log("ChatRoomInfo");
  console.log(chatCurrentData);

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
}
