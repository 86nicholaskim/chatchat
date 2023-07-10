import ChatRoomInfoAttachments from "./ChatRoomInfoAttachments";
import ChatRoomInfoMembers from "./ChatRoomInfoMembers";
import { IChatRoomMember } from "../../../api/chat/chat_api";
import { memo } from "react";
interface IChatRoomInfoContentsProps {
  members: IChatRoomMember[];
}

const ChatRoomInfoContents = memo(({ members }: IChatRoomInfoContentsProps) => {
  return (
    <>
      <ChatRoomInfoMembers members={members} />
      <ChatRoomInfoAttachments />
    </>
  );
});

export default ChatRoomInfoContents;
