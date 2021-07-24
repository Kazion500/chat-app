import { useEffect } from "react";
import Message from "src/components/atoms/Message";

export default function MessageBody() {
  useEffect(() => {}, []);
  return (
    <div className="h-full">
      <div className="overflow-y-scroll h-[calc(100%-85px)] bg-gray-50 p-5 rounded-md ">
        <Message yours content={{ message: "Hi Babe", time: "20:30 Hrs" }} />

        <Message
          image="/mutinta.jpg"
          content={{ message: "Hi Hun", time: "20:32 Hrs" }}
        />

        <Message
          yours
          content={{
            message:
              "I miss you too, apparently i have been coding out a chat application. How are you?",
            time: "20:33 Hrs",
          }}
        />

        <Message
          image="/mutinta.jpg"
          content={{
            message: "I miss you, what have you been upto",
            time: "20:33 Hrs",
          }}
        />

        <Message
          yours
          content={{
            message:
              "I was doing some design work in preparation for the interview next week monday.",
            time: "20:34 Hrs",
          }}
        />

        <Message
          image="/mutinta.jpg"
          content={{
            message:
              "Awesome love, can't wait to see you tomorrow after church",
            time: "20:30 Hrs",
          }}
        />
      </div>

      {/* Textarea */}
      <div className="mt-4 flex items-center border rounded py-3 px-4 shadow-md">
        <div className="w-full h-[40px] overflow-hidden mr-3 bg-white border rounded relative">
          <textarea
            className="px-3 py-2 w-full h-full resize-none"
            placeholder="Write a message"
          ></textarea>
          <span className="absolute top-[51%] translate-y-[-50%] right-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>

        <button className="bg-blue-900 py-1 px-5 focus:ring-2 delay-100 transition-shadow  rounded text-white h-[40px]">
          Send
        </button>
      </div>
    </div>
  );
}
