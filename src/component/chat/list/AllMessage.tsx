import { Dispatch, SetStateAction } from "react";
import { JsxElement } from "typescript";
import { IChatRoom, getChatRoomData } from "../../../api/chat/chat_api";

interface IAllMessage {
  chatList: { key: string }[];
  chatCurrentData: IChatRoom;
  setChatId: Dispatch<SetStateAction<string>>;
  setShowChatRoom: Dispatch<SetStateAction<boolean>>;
  setChatRoom: Dispatch<SetStateAction<IChatRoom>>;
}

export default function AllMessage({
  chatList,
  chatCurrentData,
  setChatId,
  setShowChatRoom,
  setChatRoom,
}: IAllMessage) {
  function onClickList(e: React.UIEvent<HTMLElement, MouseEvent>) {
    console.log(e.currentTarget.innerText);
    debugger;
    // 1 data key 세팅
    const chatKey = e.currentTarget.innerText;
    setChatId((id) => chatKey);
    console.log("setChatId");
    console.log(chatKey);

    getChatRoomData(chatKey)
      .then((result) => {
        // 3. chat room 행데이터
        setChatRoom((roomData) => {
          return {
            ...roomData,
            key: result.key,
            data: result.data,
          };
        });
        console.log("setChatRoom");
      })
      .then(() => {
        // 2 chat room 보이기
        setShowChatRoom((prev) => true);
        console.log("setShowChatRoom");
      });
  }

  return (
    <>
      <div id="all_message">
        <div>All Message</div>

        <ul id="chat_list_all">
          {chatList.map((item) => (
            <li key={item.key}>
              <div className="chat_list_item">
                <div onClick={onClickList} className="chat_title">
                  {item.key}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
