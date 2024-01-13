import { Dispatch, useCallback, useEffect, useState } from "react";
import AllMessage from "./AllMessage";
import NewMessage from "./NewMessage";
import PinnedMessage from "./PinnedMessage";
import { IChatRoom, IChatRoomKey } from "../../../api/chat/chat_api";
import Search from "./Search";

interface IChatList {
  dispatch: Dispatch<any>;
  chatList: IChatRoomKey[];
  chatCurrentData: IChatRoom;
  showRoomInfo: boolean;
  showChatRoom: boolean;
}

export interface ISearchProps {
  onSearch: ({ keyword }: { keyword: string }) => void;
}

export default function ChatList({
  dispatch,
  chatList,
  chatCurrentData,
  showRoomInfo,
  showChatRoom,
}: IChatList) {
  const [chat_list_view, setChatListView] = useState(chatList);

  const onSearch: ISearchProps["onSearch"] = useCallback(
    ({ keyword }) => {
      if (!keyword) {
        setChatListView(chatList);
        return;
      }

      setChatListView((prev) =>
        chatList.filter((item) => item.title.includes(keyword))
      );
    },
    [chatList]
  );

  useEffect(() => {
    setChatListView(chatList);
  }, [chatList]);

  return (
    <>
      <div className="chat_list_container">
        <div className="chat_list" id="chat_list">
          <div className="chat_list_header">
            <h1>chat_list</h1>
          </div>
          <div className="chat_list_contents">
            <NewMessage
              dispatch={dispatch}
              showRoomInfo={showRoomInfo}
              showChatRoom={showChatRoom}
            />
            <Search onSearch={onSearch} />
            <PinnedMessage />
            <AllMessage
              dispatch={dispatch}
              chatList={chat_list_view}
              chatCurrentData={chatCurrentData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
