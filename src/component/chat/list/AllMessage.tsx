import { Dispatch, SetStateAction } from "react";
import { JsxElement } from "typescript";
import {
  IChatRoom,
  IChatRoomKey,
  getChatRoomData,
} from "../../../api/chat/chat_api";

interface IAllMessage {
  chatList: IChatRoomKey[];
  chatCurrentData: IChatRoom;
  dispatch: Dispatch<any>;
}

export default function AllMessage({
  chatList,
  chatCurrentData,
  dispatch,
}: IAllMessage) {
  function onClickList(e: React.UIEvent<HTMLElement, MouseEvent>) {
    // 1 data key 세팅
    const chatKey = e.currentTarget.innerText;
    console.log("setChatId");
    console.log(chatKey);
    dispatch({ type: "update_chat_id", chat_id: chatKey });

    getChatRoomData(chatKey)
      .then((result) => {
        // 2. chat room 행데이터
        dispatch({
          type: "set_chatroom",
          chat_data: {
            key: result.key,
            data: result.data,
            members: result.members,
          },
        });
        console.log("setChatRoom");
      })
      .then(() => {
        // 3 chat room 보이기
        dispatch({ type: "show_chatroom" });
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
                  {item.title}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
