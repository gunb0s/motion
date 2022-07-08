import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import Content from "../components/content";
import CreateForm from "../components/form";

export type MotionContentType = "text" | "todo" | "video" | "image";
export interface MotionContent {
  type: MotionContentType;
  [key: string]: any;
}

const createButtonStyle =
  "cursor-pointer rounded-full bg-violet-600 transition-colors px-4 py-2 hover:bg-violet-700 select-none";

const Home: NextPage = () => {
  const [contents, setContents] = useState<MotionContent[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [type, setType] = useState<MotionContentType>("video");

  useEffect(() => {
    axios.get("/api/contents").then((res) => setContents(res.data));
  }, []);

  const onClose = () => {
    setShow(false);
  };

  const onShow = (type: MotionContentType) => {
    setShow(true);
    setType(type);
  };

  return (
    <div className="flex flex-col h-full py-10 px-4">
      <div className="py-10 px-4 bg-indigo-500 rounded-md shadow-lg mb-10">
        <ul className="flex justify-center space-x-3">
          <li
            className={createButtonStyle}
            onClick={() => {
              onShow("video");
            }}
          >
            Video
          </li>
          <li
            className={createButtonStyle}
            onClick={() => {
              onShow("image");
            }}
          >
            Image
          </li>
          <li
            className={createButtonStyle}
            onClick={() => {
              onShow("text");
            }}
          >
            Text
          </li>
          <li
            className={createButtonStyle}
            onClick={() => {
              onShow("todo");
            }}
          >
            Todo
          </li>
        </ul>
      </div>
      <div className="flex-1 py-10 px-4 bg-indigo-500 rounded-md shadow-lg space-y-3 overflow-y-scroll">
        {contents.map((content, idx) => (
          <Content key={idx} content={content} />
        ))}
      </div>
      {show && <CreateForm type={type} onClose={onClose} />}
    </div>
  );
};

export default Home;
