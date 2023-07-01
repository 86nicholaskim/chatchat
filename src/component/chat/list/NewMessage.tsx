import { Dispatch, SetStateAction, useRef, useState } from "react";
import { getChatRoomData, IChatRoom, IRoom } from "../../../api/chat/chat_api";

interface INewMessage {
  setShowChatRoom: Dispatch<SetStateAction<boolean>>;
  setChatListItems: Dispatch<SetStateAction<{ key: string }[]>>;
  setChatRoom: Dispatch<SetStateAction<IChatRoom>>;
  setShowRoomInfo: Dispatch<SetStateAction<boolean>>;
  showRoomInfo: boolean;
  showChatRoom: boolean;
}

export default function NewMessage({
  setChatListItems,
  setShowChatRoom,
  setChatRoom,
  setShowRoomInfo,
  showRoomInfo,
  showChatRoom,
}: INewMessage) {
  //const input = useRef(null);
  const [newRoom, setNewRoom] = useState("");

  const createChatRoom = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== "Enter") {
      return;
    }
    if (e.nativeEvent.isComposing) {
      return;
    }
    // console.log("new_room_input");
    // var $li = document.createElement("li");
    // var $div = document.createElement("div");
    // var $input = document.getElementById("new_room_input") as HTMLInputElement;

    // $div.innerText = $input.value || "chatList New";
    // $li.appendChild($div);

    // var $ul = document.getElementById("chat_list_all");
    // $ul?.append($li);

    document.getElementById("new_room")?.setAttribute("hidden", "");

    setChatListItems((items) => {
      return [...items, { key: newRoom }];
    });
    setShowChatRoom((showRoom) => !showRoom);
    setNewRoom((input) => {
      console.log(input);
      return "";
    });

    getChatRoomData(newRoom).then((result) => {
      debugger;
      console.log(newRoom);
      setChatRoom((roomData) => {
        return {
          ...roomData,
          key: result.key,
          data: result.data,
          members: result.members,
        };
      });
    });
  };

  return (
    <>
      <div id="new_message">
        <div className="chat_list_title">
          <div id="title">Message</div>
          <div id="new">
            <button
              onClick={() => {
                document.getElementById("new_room")?.removeAttribute("hidden");
                debugger;
                // chat info
                showRoomInfo && setShowRoomInfo((showRoom) => !showRoom);

                // chat room
                showChatRoom && setShowChatRoom((show) => !show);
              }}
            >
              (+)New
            </button>
          </div>
        </div>
        <div id="new_room" hidden={true}>
          <input
            id="new_room_input"
            value={newRoom}
            onChange={(e) => {
              setNewRoom(e.target.value);
            }}
            onKeyDown={createChatRoom}
            placeholder="Enter New Room Name."
          />
        </div>
        <div id="search">
          <div className="search_button" id="search_button"></div>
          <input placeholder="Search" />
        </div>
      </div>
    </>
  );
}
