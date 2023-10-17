import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, randomSentence } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      console.log("api polling started");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: randomSentence(),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 border border-black h-[460px] w-full bg-slate-100 rounded-t-md overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full border border-black ml-2 rounded-b-md p-2 flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Charan",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="w-full outline-none  "
          placeholder="Type something..."
        />
        <button className="bg-green-400 px-2 font-semibold rounded-sm text-white">
          SEND
        </button>
      </form>
    </>
  );
};

export default LiveChat;
