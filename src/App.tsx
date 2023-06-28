import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app" id="app">
      <header className="app_header" id="app_header"></header>
      <main className="app_content" id="app_content">
        <div className="wrapper-chat">
          <div className="chat_list" id="chat_list">
            <h1>chat_list</h1>
            <nav>
              <div>
                <div className="chat_list_title">
                  <div id="title">Message</div>
                  <div id="new">
                    <button
                      onClick={() => {
                        document
                          .getElementById("new_room")
                          ?.removeAttribute("hidden");
                      }}
                    >
                      (+)New
                    </button>
                  </div>
                </div>
                <div id="new_room" hidden={true}>
                  <input
                    id="new_room_input"
                    onKeyDown={(e) => {
                      console.log(e);
                      if (e.code !== "Enter") {
                        return;
                      }
                      console.log("Enter");
                      var $li = document.createElement("li");
                      var $div = document.createElement("div");
                      var inputValue = document.getElementById(
                        "new_room_input"
                      ) as HTMLInputElement;

                      //$div.setAttribute("class", "send-msg");

                      $div.innerText = inputValue.value || "ChatList New";
                      $li.appendChild($div);

                      var $ul = document.getElementById("chat_list_all");

                      $ul?.append($li);
                    }}
                    placeholder="Enter New Room Name."
                  />
                </div>
                <div id="search">
                  <div className="search_button" id="search_button"></div>
                  <input placeholder="Search" />
                </div>
              </div>
              <div>
                <div>Pinned Message</div>
                <ul>
                  <li>
                    <div className="chat_list_item_pinned">
                      <div className="chat_title"> Pinned ChatList #001</div>
                    </div>
                  </li>
                  <li>
                    <div className="chat_list_item_pinned">
                      <div className="chat_title"> Pinned ChatList #002</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <div>All Message</div>
                <ul id="chat_list_all">
                  <li>
                    <div className="chat_list_item">
                      <div className="chat_title"> ChatList #001</div>
                    </div>
                  </li>
                  <li>
                    <div className="chat_list_item">
                      <div className="chat_title"> ChatList #002</div>
                    </div>
                  </li>
                  <li>
                    <div className="chat_list_item">
                      <div className="chat_title"> ChatList #003</div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="chat_room" id="chat_room">
            <h1>chat_room</h1>
            <div className="chat_room_content">
              <div className="chat_room_toolbar">
                <button>Exit</button>
              </div>
              <div className="chat_room_content_container">
                <ul id="chat_room_content_container_messages">
                  <li className="send-msg">
                    <div className="msg-content">안녕~~</div>
                  </li>
                  <li className="send-msg">
                    <div className="msg-content">안녕~~</div>
                  </li>
                  <li className="receive-msg">
                    <div className="msg-content">안녕~~</div>
                  </li>
                  <li className="receive-msg">
                    <div className="msg-content">안녕~~</div>
                  </li>
                  <li className="receive-msg">
                    <div className="msg-content">안녕~~</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="chat_room_footer">
              <div className="chat_room_footer_message">
                <input
                  id="send_message_input"
                  placeholder="Type a message"
                ></input>
                <div className="img">[img]</div>
                <div className="map">[map]</div>
                <div className="mic">[mic]</div>
                <button
                  id="send_message_button"
                  onClick={() => {
                    var $li = document.createElement("li");
                    var $div = document.createElement("div");
                    var inputValue = document.getElementById(
                      "send_message_input"
                    ) as HTMLInputElement;

                    $div.setAttribute("class", "send-msg");

                    $div.innerText = inputValue.value || "안녕안녕";
                    $li.appendChild($div);

                    var $ul = document.getElementById(
                      "chat_room_content_container_messages"
                    );

                    $ul?.append($li);
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className="chat_room_info" id="chat_room_info">
            <h1>chat_room_info</h1>

            <div className="chat_room_info_top">
              <div>
                <div>Room Image</div>
                <div>Room Name</div>
                <div>Room Description</div>
              </div>
            </div>
            <div className="chat_room_info_member">
              <h3>Members</h3>
              <ul>
                <li className="member-info">
                  <div className="member-info-content">member 1</div>
                </li>
                <li className="member-info">
                  <div className="member-info-content">member 2</div>
                </li>
                <li className="member-info">
                  <div className="member-info-content">member 3</div>
                </li>
              </ul>
            </div>
            <div className="chat_room_info_attachments">
              <h3>Attachments</h3>
              <ul>
                <li className="attachments-info-document">
                  <div className="attachments-info-document-content">
                    <div>129 Files - 375MB</div>
                  </div>
                </li>
                <li className="attachments-info-photo">
                  <div className="attachments-info-photo-content">
                    <div>829 Files - 17GB</div>
                  </div>
                </li>
                <li className="attachments-info-videos">
                  <div className="attachments-info-videos-content">
                    <div>82 Files - 27GB</div>
                  </div>
                </li>
                <li className="attachments-info-others">
                  <div className="attachments-info-others-content">
                    <div>182 Files - 19GB</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="app_footer" id="app_footer"></footer>
    </div>
  );
}

export default App;
