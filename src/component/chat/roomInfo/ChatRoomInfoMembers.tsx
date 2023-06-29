export default function ChatRoomInfoMembers() {
  const memberInfos = [
    {
      key: "117777.700000003",
      member_type: "member_info",
      member_class: "member-info",
      name: "member 1",
    },
    {
      key: "227777.700000003",
      member_type: "member_info",
      member_class: "member-info",
      name: "member 2",
    },
    {
      key: "337777.700000003",
      member_type: "member_info",
      member_class: "member-info",
      name: "member 3",
    },
  ];

  return (
    <>
      <div className="chat_room_info_member">
        <h3>Members</h3>
        <ul>
          {memberInfos.map((memberInfo) => {
            return (
              <li key={memberInfo.key} className={memberInfo.member_class}>
                <div className={`${memberInfo.member_class}-content`}>
                  {memberInfo.name}
                </div>
              </li>
            );
          })}
          {/* <li className="member-info">
            <div className="member-info-content">member 1</div>
          </li>
          <li className="member-info">
            <div className="member-info-content">member 2</div>
          </li>
          <li className="member-info">
            <div className="member-info-content">member 3</div>
          </li> */}
        </ul>
      </div>
    </>
  );
}
