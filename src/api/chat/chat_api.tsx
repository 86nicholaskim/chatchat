interface IChatRoomData {
  key: string;
  data: {
    key: string;
    msg_type: string;
    msg: string;
    userId: string;
    write_time: string;
    room_number: string;
  }[];
}

export function getChatRoomData(chatId: string): IChatRoomData {
  const chatRoomData = [
    {
      key: "chatList_#001",
      data: [
        {
          key: "555555.700000003",
          msg_type: "send_msg",
          msg: "안녕~~",
          userId: "user_1",
          write_time: "오전 9:00",
          room_number: "chatList_#001",
        },
        {
          key: "666666.700000003",
          msg_type: "send_msg",
          msg: "안녕~~",
          userId: "user_1",
          write_time: "오전 9:01",
          room_number: "chatList_#001",
        },
        {
          key: "777777.700000003",
          msg_type: "receive_msg",
          msg: "안녕~~!",
          userId: "user_2",
          write_time: "오후 9:10",
          room_number: "chatList_#001",
        },
        {
          key: "888888.700000003",
          msg_type: "receive_msg",
          msg: "안녕~~!!",
          userId: "user_2",
          write_time: "오후 9:11",
          room_number: "chatList_#001",
        },
        {
          key: "999999.700000003",
          msg_type: "receive_msg",
          msg: "안녕~~!!!!!!",
          userId: "user_2",
          write_time: "오후 9:13",
          room_number: "chatList_#001",
        },
      ],
    },
    { key: "chatList_#002", data: [] },
    { key: "chatList_#003", data: [] },
  ];
  return (
    chatRoomData.find((x) => x.key === chatId) ||
    ({
      key: "",
      data: [],
    } as IChatRoomData)
  );
}
