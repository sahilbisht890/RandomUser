const UserCard = ({ userInfo }) => {
  return (
    <>
      <div className="flex flex-col bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-black hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-black dark:hover:text-white mb-2 p-2 userCard">
        <img
          className="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg w-1/2"
          src={userInfo?.picture?.large || ""}
          alt="Profile Picture"
        />
        <div className="flex flex-col content-start align-baseline p-4 leading-normal w-1/2">
          <h5 className="mb-2 userName font-bold dark:text-white break-words whitespace-normal  tracking-tight">
            {`${userInfo?.name?.title || ""} ${userInfo?.name?.first || ""} ${
              userInfo?.name?.last || ""
            }`}
          </h5>
          <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">
            <span className="font-semibold text-blue-500">
              {userInfo?.gender}
            </span>
          </p>
          <p className="font-normal  dark:text-gray-300 ">
            <span className="font-semibold text-green-500 text-sm">Phone:</span>{" "}
            {userInfo?.phone}
          </p>
          <p className="font-normal  dark:text-gray-300 mt-2 break-words whitespace-normal text-gray-500 ">
             {userInfo?.email}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
