import { MotionContent } from "../pages";

interface ContentProps {
  content: MotionContent;
}

function showContent(content: MotionContent) {
  switch (content.type) {
    case "text":
      return (
        <div>
          <h3>{content.title}</h3>
          <div>{content.description}</div>
        </div>
      );
    case "image":
      return (
        <div>
          <img src={content.url} />
          <div>Image</div>
        </div>
      );
    case "video":
      return (
        <div>
          <iframe src={content.url} allowFullScreen></iframe>
          <div>Video</div>
        </div>
      );
    case "todo":
      return (
        <div>
          {content.todos.map((todo: any, idx: string) => (
            <div key={idx}>{todo}</div>
          ))}
        </div>
      );
    default:
      throw new Error(`${content.type} is invalid type`);
  }
}

export default function Content({ content }: ContentProps) {
  return (
    <div className="px-4 py-10 bg-indigo-600 rounded-md shadow-xl">
      {showContent(content)}
    </div>
  );
}
