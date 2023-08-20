import { Dispatch, SetStateAction, useCallback } from "react";
import { JsxElement } from "typescript";
import {
  IChatRoom,
  IChatRoomKey,
  getChatRoomData,
} from "../../../api/chat/chat_api";
import { IChatAction } from "../../../reducer/ chat/reducer";

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
  const onClickList = useCallback(
    async (e: React.UIEvent<HTMLElement, MouseEvent>) => {
      const chatTitle = e.currentTarget.innerText;
      const chatKey =
        chatList.find((item) => item.title === chatTitle)?.key || "";

      dispatch({ type: "update_chat_id", chat_id: chatKey });

      const result = await getChatRoomData(chatKey);
      dispatch({
        type: "set_chatroom",
        chat_data: {
          key: result.key,
          title: result.title,
          data: result.data,
          members: result.members,
        } as IChatAction["chat_data"],
      });
      dispatch({ type: "show_chatroom" });
    },
    [chatList, dispatch]
  );

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
