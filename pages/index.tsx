import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import Content from "../components/content";

export type MotionContentType = "text" | "todo" | "video" | "image";
export interface MotionContent {
  type: MotionContentType;
  [key: string]: any;
}

const createButtonStyle =
  "cursor-pointer rounded-full bg-violet-600 transition-colors px-4 py-2 hover:bg-violet-700 select-none";

const Home: NextPage = () => {
  const [contents, setContents] = useState<MotionContent[]>([]);

  useEffect(() => {
    axios.get("/api/contents").then((res) => setContents(res.data));
  }, []);

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
      <div className="flex-1 py-10 px-4 bg-indigo-500 rounded-md shadow-lg space-y-3">
        {contents.map((content, idx) => (
          <Content key={idx} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
