import { Dispatch, SetStateAction } from "react";
import { JsxElement } from "typescript";

interface IAllMessage {
  chatList: { key: string }[];
  setShowChatRoom: Dispatch<SetStateAction<boolean>>;
}

export default function AllMessage({ chatList, setShowChatRoom }: IAllMessage) {
  function onClickList(e: React.UIEvent<HTMLElement, MouseEvent>) {
    console.log(e);
    debugger;
    const roomTitle = e.currentTarget.innerText;

    // 1 show
    setShowChatRoom((prev) => true);

    // 2 data
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
