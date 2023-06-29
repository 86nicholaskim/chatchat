import { JsxElement } from "typescript";

interface IAllMessage {
  items: { key: string }[];
}

export default function AllMessage({ items }: IAllMessage) {
  function onClickList(e: React.UIEvent<HTMLElement, MouseEvent>) {
    console.log(e);
    debugger;
    const roomTitle = e.currentTarget.innerText;
  }

  return (
    <>
      <div id="all_message">
        <div>All Message</div>

        <ul id="chat_list_all">
          {items.map((item) => (
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
