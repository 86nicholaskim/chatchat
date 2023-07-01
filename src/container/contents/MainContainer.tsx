import ChatList from "../../component/chat/list/ChatList";
import ChatRoom from "../../component/chat/room/ChatRoom";
import ChatRoomInfo from "../../component/chat/roomInfo/ChatRoomInfo";
import { useRef, useState, useEffect } from "react";
import { getChatRoomData, IChatRoom, IRoom } from "../../api/chat/chat_api";
export default function MainContainer() {
  const _chatList = [
    { key: "chatList_#001" },
    { key: "chatList_#002" },
    { key: "chatList_#003" },
  ];

  const initChatData = {
    key: "",
    members: [],
    data: [],
  };

  const [chatList, setChatListItems] = useState(_chatList || []);
  const [chatId, setChatId] = useState("");
  const [showChatRoom, setShowChatRoom] = useState(false);
  const [showRoomInfo, setShowRoomInfo] = useState(false);

  const [chatRoom, setChatRoom] = useState<IChatRoom>(initChatData);

  const chatData = useRef<IChatRoom>(initChatData);

  // const chatRoomRef = useRef({
  //   getChatRoomData: () =>
  //     getChatRoomData(chatId).then((result) => {
  //       chatData.current = result;
  //       // setChatRoom((roomData) => {
  //       //   return { ...roomData, key: result.key, data: result.data };
  //       // });
  //     }),
  // });

  useEffect(() => {
    console.log("MainContainer mount/update");

    // const roomData = getChatRoomData(chatId);
    // console.log(roomData);
    // setChatRoom((data) => {
    //   console.log(roomData);
    //   debugger;
    //   return {
    //     ...data,
    //     key: roomData.key,
    //     data: roomData.data,
    //     members: roomData.members,
    //   };
    // });

    getChatRoomData(chatId).then((result) => {
      debugger;
      console.log(chatId);
      setChatRoom((roomData) => {
        return {
          ...roomData,
          key: result.key,
          data: result.data,
          members: result.members,
        };
      });
    });

    // const chatDataApi = chatRoomRef.current;
    // chatDataApi.getChatRoomData();
    return () => {
      console.log("MainContainer unmount");
    };
  }, []);

  return (
    <>
      <main className="app_content" id="app_content">
        <div className="wrapper_chat">
          <ChatList
            setChatListItems={setChatListItems}
            setShowChatRoom={setShowChatRoom}
            setChatRoom={setChatRoom}
            setShowRoomInfo={setShowRoomInfo}
            setChatId={setChatId}
            chatList={chatList}
            //chatCurrentData={chatData.current}
            chatCurrentData={chatRoom}
            showRoomInfo={showRoomInfo}
            showChatRoom={showChatRoom}
          />
          {showChatRoom ? (
            <ChatRoom
              chatList={chatList}
              setShowChatRoom={setShowChatRoom}
              setChatListItems={setChatListItems}
              setShowRoomInfo={setShowRoomInfo}
              showRoomInfo={showRoomInfo}
              setChatRoom={setChatRoom}
              userId="user_1"
              chatId={chatId}
              //chatCurrentData={chatData.current}
              chatCurrentData={chatRoom}
              chatRoom={chatRoom}
            />
          ) : null}
          {showRoomInfo ? (
            <ChatRoomInfo
              //chatCurrentData={chatData.current}
              chatCurrentData={chatRoom}
            />
          ) : null}
        </div>
      </main>
    </>
  );
}
