import { Dispatch, useState } from "react";
import {
  getChatRoomData,
  IChatRoom,
  IChatRoomKey,
  IRoom,
  setChatRoomData,
} from "../../../api/chat/chat_api";

interface INewMessage {
  dispatch: Dispatch<any>;
  showRoomInfo: boolean;
  showChatRoom: boolean;
}

export default function NewMessage({
  dispatch,
  showRoomInfo,
  showChatRoom,
}: INewMessage) {
  const [newRoom, setNewRoom] = useState("");

  const createChatRoom = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== "Enter") {
      return;
    }
    if (e.nativeEvent.isComposing) {
      return;
    }
    const key = `${e.timeStamp}`;
    document.getElementById("new_room")?.setAttribute("hidden", "");

    dispatch({
      type: "add_chat",
      add: { key: key, title: newRoom } as IChatRoomKey,
    });

    dispatch({ type: "update_chat_id", title: newRoom });

    setNewRoom((input) => {
      console.log(input);
      return "";
    });

    // setChatRoomData(newRoom) chat_api파일 함수에 임시데이터값에 추가
    setChatRoomData(key, newRoom);
    getChatRoomData(key).then((result) => {
      console.log(key);
      dispatch({
        type: "set_chatroom",
        chat_data: {
          key: result.key,
          title: result.title,
          data: result.data,
          members: result.members,
        },
      });
    });

    dispatch({ type: "show_chatroom" });
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
                // chat info
                showRoomInfo && dispatch({ type: "show_roominfo" });

                // chat room
                showChatRoom && dispatch({ type: "show_chatroom" });
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
      </div>
    </>
  );
}
