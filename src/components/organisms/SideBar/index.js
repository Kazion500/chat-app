import React from "react";
import Chat from "src/components/atoms/Chat";
import Card from "src/components/molecules/Card";

export default function SideBar() {
  return (
    <div className="h-full overflow-hidden">
      <Card image="/patrick.jpg" />
      <div className="my-4">
        <h4 className="font-semibold flex text-blue-900">
          Active Conversation
          <span className="font-base p-1 rounded-full w-5 h-5 flex justify-center items-center bg-green-500 text-white ml-2 text-xs">
            3
          </span>
        </h4>
      </div>

      <div className="overflow-scroll h-[185px]">
        <Chat name="Mutinta Muleya" sentMsg active />
        <Chat name="Anna Kabwe" image="/patrick.jpg" />
        <Chat name="Patrick Kabwe" />
        <Chat name="Patrick Kabwe" />
        <Chat name="Patrick Kabwe" />
        <Chat name="Patrick Kabwe" />
      </div>
    </div>
  );
}
