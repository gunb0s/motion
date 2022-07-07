import type { NextPage } from "next";

const createButtonStyle =
  "cursor-pointer rounded-full bg-violet-600 transition-colors px-4 py-2 hover:bg-violet-700 select-none";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-full py-10 px-4 space-y-10">
      <div className="py-10 px-4 bg-indigo-500 rounded-md shadow-lg">
        <ul className="flex justify-center space-x-3">
          <li className={createButtonStyle}>Video</li>
          <li className={createButtonStyle}>Image</li>
          <li className={createButtonStyle}>Text</li>
          <li className={createButtonStyle}>Todo</li>
        </ul>
      </div>
      <div className="flex-1 py-10 px-4 bg-indigo-500 rounded-md shadow-lg"></div>
    </div>
  );
};

export default Home;
