export interface IRoom {
  key?: string;
  msg_type?: string;
  msg?: string;
  userId?: string;
  write_time?: string;
  room_number?: string;
}

export interface IChatRoomKey {
  key: string;
  title: string;
}

export interface IChatRoom extends IChatRoomKey {
  members: {
    key?: string;
    member_name?: string;
    member_type?: string;
    member_class?: string;
  }[];
  data: IRoom[];
}

export interface IChatRoomMember {
  key?: string;
  member_name?: string;
  member_type?: string;
  member_class?: string;
}

const chatRoomData = [
  {
    key: "chatList_#001",
    title: "대화방방방01",
    members: [
      {
        key: "113111.800000004",
        member_name: "1member 1",
        member_type: "member_info",
        member_class: "member-info",
      },
      {
        key: "223111.800000004",
        member_name: "2member 2",
        member_type: "member_info",
        member_class: "member-info",
      },
      {
        key: "333111.800000004",
        member_name: "3member 3",
        member_type: "member_info",
        member_class: "member-info",
      },
    ],
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
  {
    key: "chatList_#002",
    title: "대화방방방02",
    members: [
      {
        key: "113344.800000004",
        member_name: "member 11",
        member_type: "member_info",
        member_class: "member-info",
      },
      {
        key: "223344.800000004",
        member_name: "member 22",
        member_type: "member_info",
        member_class: "member-info",
      },
      {
        key: "333344.800000004",
        member_name: "member 33",
        member_type: "member_info",
        member_class: "member-info",
      },
    ],
    data: [
      {
        key: "445555.800000003",
        msg_type: "send_msg",
        msg: "안녕~~안녕안녕",
        userId: "user_1",
        write_time: "오전 9:10",
        room_number: "chatList_#002",
      },
    ],
  },
  {
    key: "chatList_#003",
    title: "대화방방방03",
    members: [
      {
        key: "114344.800000004",
        member_name: "member 111",
        member_type: "member_info",
        member_class: "member-info",
      },
      {
        key: "224344.800000004",
        member_name: "member 222",
        member_type: "member_info",
        member_class: "member-info",
      },
      {
        key: "334344.800000004",
        member_name: "member 333",
        member_type: "member_info",
        member_class: "member-info",
      },
    ],
    data: [
      {
        key: "665555.800000003",
        msg_type: "send_msg",
        msg: "안녕~~안녕안녕안녕안녕",
        userId: "user_1",
        write_time: "오전 9:20",
        room_number: "chatList_#003",
      },
    ],
  },
] as IChatRoom[];

let initRoomData = {
  key: "",
  title: "",
  members: [],
  data: [
    {
      key: "",
      msg_type: "",
      msg: "대화방이 만들어졌습니다.",
      userId: "system",
      write_time: new Date().toLocaleTimeString(),
      room_number: "",
    },
  ],
} as IChatRoom;

export async function setChatRoomData(
  key: string,
  title: string
): Promise<boolean> {
  let result = false;
  initRoomData.key = key;
  initRoomData.title = title;

  await setTimeout(() => {
    chatRoomData.push(initRoomData);
    result = true;
  }, 1000);
  return result;
}

export async function getChatRoomData(chatId: string): Promise<IChatRoom> {
  console.log("getChatRoomData");

  await setTimeout(() => {
    console.log("await call ");
  }, 500);
  return (
    chatRoomData.find((x) => x.key === chatId) || (initRoomData as IChatRoom)
  );
}
