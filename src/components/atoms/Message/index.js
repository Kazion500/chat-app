export default function Message({ image, content, yours }) {
  return (
    <div className={`flex items-start mb-5 ${yours && "justify-end"}`}>
      <div
        className={`${
          yours && "hidden"
        }  w-[40px] h-[40px] flex justify-center items-center rounded-full overflow-hidden`}
      >
        <img
          src={image ? image : "/person-icon.png"}
          alt="profile-img"
          className={` w-full h-full object-cover`}
        />
      </div>

      <div className={`max-w-[65%] mx-3`}>
        <div
          className={`${
            yours ? "bg-white text-blue-900 " : "bg-blue-900 text-white "
          } p-3 rounded-md shadow`}
        >
          <p>{content?.message}</p>
        </div>
        <small className="text-gray-400">{content?.time}</small>
      </div>
    </div>
  );
}
