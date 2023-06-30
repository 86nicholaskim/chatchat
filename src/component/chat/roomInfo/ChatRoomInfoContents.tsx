import ChatRoomInfoAttachments from "./ChatRoomInfoAttachments";
import ChatRoomInfoMembers from "./ChatRoomInfoMembers";
import { IChatRoomMember } from "../../../api/chat/chat_api";
interface IChatRoomInfoContentsProps {
  members: IChatRoomMember[];
}

export default function ChatRoomInfoContents({
  members,
}: IChatRoomInfoContentsProps) {
  return (
    <>
      <ChatRoomInfoMembers members={members} />
      <ChatRoomInfoAttachments />
    </>
  );
}
