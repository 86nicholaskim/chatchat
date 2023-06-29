import ChatRoomInfoAttachments from "./ChatRoomInfoAttachments";
import ChatRoomInfoMembers from "./ChatRoomInfoMembers";

export default function ChatRoomInfoContents() {
  return (
    <>
      <ChatRoomInfoMembers />
      <ChatRoomInfoAttachments />
    </>
  );
}
