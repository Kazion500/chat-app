import Head from "next/head";
import MessageBody from "src/components/organisms/MessageBody";
import SideBar from "src/components/organisms/SideBar";

export default function Home() {
  return (
    <div className="text-sm">
      <Head>
        <title>Kaz-ChatApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-50 h-screen flex w-full justify-center items-center ">
        <div className="max-w-[65%]">
          <h3 className="text-2xl text-center text-gray-500 mb-5 font-semibold py-2 bg-white border rounded-md">
            Welcome to <br />{" "}
            <span className="text-blue-900">"Kazion's Chat App"</span>
          </h3>
          <div className="flex mx-auto rounded-md py-5 shadow-lg bg-white max-h-[480px] overflow-hidden">
            <div className="w-[30%] px-6">
              <SideBar />
            </div>
            <div className="flex-1 pr-6">
              <MessageBody />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
