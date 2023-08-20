import { Dispatch, memo, useCallback, useState } from "react";
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

const NewMessage = memo(
  ({ dispatch, showRoomInfo, showChatRoom }: INewMessage) => {
    const [newRoom, setNewRoom] = useState("");
    const [isHidden, setHidden] = useState(true);
    const createChatRoom = async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.code !== "Enter") {
        return;
      }
      if (e.nativeEvent.isComposing) {
        return;
      }
      const key = `${e.timeStamp}`;
      document.getElementById("new_room")?.setAttribute("hidden", "");

      // setChatRoomData(newRoom) chat_api파일 함수에 임시데이터값에 추가
      const set_result = await setChatRoomData(key, newRoom);
      const result = await getChatRoomData(key);

      if (!set_result) {
        return;
      }
      dispatch({
        type: "add_chat",
        add: { key: key, title: newRoom } as IChatRoomKey,
      });

      dispatch({ type: "update_chat_id", title: newRoom });

      setNewRoom((input) => {
        console.log(input);
        return "";
      });

      dispatch({
        type: "set_chatroom",
        chat_data: {
          key: result.key,
          title: result.title,
          data: result.data,
          members: result.members,
        },
      });

      dispatch({ type: "show_chatroom" });
    };

    const onClickNew = useCallback(
      (e: React.MouseEvent) => {
        setHidden((prev) => !prev);
        showRoomInfo && dispatch({ type: "show_roominfo" });
        showChatRoom && dispatch({ type: "show_chatroom" });
      },
      [dispatch, showChatRoom, showRoomInfo]
    );

    return (
      <>
        <div id="new_message">
          <div className="chat_list_title">
            <div id="title">Message</div>
            <div id="new">
              <button onClick={onClickNew}>(+)New</button>
            </div>
          </div>
          <div id="new_room" hidden={isHidden}>
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
);
export default NewMessage;
