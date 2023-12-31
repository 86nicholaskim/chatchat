import { memo } from "react";
const attachItems = [
  {
    key: "777777.700000003",
    attach_type: "document",
    attach_class: "attachments-info-document",
    files: 129,
    size: "375MB",
    description: "129 Files - 375MB",
  },
  {
    key: "777788.700000003",
    attach_type: "photo",
    attach_class: "attachments-info-photo",
    files: 829,
    size: "17GB",
    description: "829 Files - 17GB",
  },
  {
    key: "777799.700000003",
    attach_type: "videos",
    attach_class: "attachments-info-videos",
    files: 82,
    size: "27GB",
    description: "82 Files - 27GB",
  },
  {
    key: "777766.700000003",
    attach_type: "others",
    attach_class: "attachments-info-others",
    files: 182,
    size: "19GB",
    description: "182 Files - 19GB",
  },
];
const ChatRoomInfoAttachments = memo(() => {
  return (
    <>
      <div className="chat_room_info_attachments">
        <h3>Attachments</h3>
        <ul>
          {attachItems.map((item) => {
            return (
              <li key={item.key} className={item.attach_class}>
                <div className={`${item.attach_class}-content`}>
                  <div>{item.description}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
});

export default ChatRoomInfoAttachments;
