export default function Card({ image }) {
  return (
    <div className="flex flex-col items-center py-5 justify-center border rounded-md bg-gray-50">
      <div className="w-[70px] h-[70px] overflow-hidden border rounded-full">
        <img src={image ? image : "/person-icon.png"} alt="profile-img" />
      </div>

      <div className="text-center">
        <h4 className="flex items-center justify-center my-3">
          <b className="text-blue-900">Patrick Kabwe</b>
          <span className="ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
        </h4>

        <p className="my-2 text-gray-400 max-w-[89%] mx-auto">
          Full Stack Developer/Server Administrator
        </p>

        <p className=" text-gray-400">
          Status: <span className="text-green-500 font-bold">Online</span>
        </p>
      </div>
    </div>
  );
}
