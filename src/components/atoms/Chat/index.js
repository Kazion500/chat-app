export default function Chat({ name, image, active, sentMsg }) {
  return (
    <div
      className={`flex items-center px-3 py-1.5 rounded ${
        active && "bg-gray-50 "
      } mb-1 relative`}
    >
      <div className="w-[40px] h-[40px] border flex items-center justify-center rounded-full overflow-hidden mr-3">
        <img src={image ? image : "/person-icon.png"} alt="profile-img" />
      </div>
      <h2 className="font-semibold text-xs text-blue-900">{name}</h2>
      {sentMsg && (
        <span className="absolute right-6 top-3.5 font-base p-2 font-semibold rounded-full w-3 h-3 flex justify-center items-center bg-red-500 text-white ml-2 text-xs">
          3
        </span>
      )}
    </div>
  );
}
