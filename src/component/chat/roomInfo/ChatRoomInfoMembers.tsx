import { memo } from "react";
import { IChatRoomMember } from "../../../api/chat/chat_api";

interface IChatRoomInfoMembersProps {
  members: IChatRoomMember[];
}

const ChatRoomInfoMembers = memo(({ members }: IChatRoomInfoMembersProps) => {
  return (
    <>
      <div className="chat_room_info_member">
        <h3>Members</h3>
        <ul>
          {members.map((memberInfo) => {
            return (
              <li key={memberInfo.key} className={memberInfo.member_class}>
                <div className={`${memberInfo.member_class}-content`}>
                  {memberInfo.member_name}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
});

export default ChatRoomInfoMembers;
