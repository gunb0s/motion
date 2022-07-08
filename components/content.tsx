import { MotionContent } from "../pages";

interface ContentProps {
  content: MotionContent;
}

function showContent(content: MotionContent) {
  switch (content.type) {
    case "text":
      return (
        <div className="space-y-2">
          <h3 className="text-slate-300 font-semibold text-xl">
            {content.title}
          </h3>
          <div className="text-slate-400 font-medium">
            {content.description}
          </div>
        </div>
      );
    case "image":
      return (
        <div className="flex space-x-3">
          <div className="w-3/5">
            <img className="w-full aspect-square" src={content.url} />
          </div>
          <div className="">{content.description}</div>
        </div>
      );
    case "video":
      return (
        <div className="flex space-x-3">
          <div className="w-3/5">
            <iframe
              className="w-full aspect-video"
              src={content.url}
              allowFullScreen
            ></iframe>
          </div>
          <div>{content.description}</div>
        </div>
      );
    case "todo":
      return (
        <div className="space-y-2">
          <h3 className="text-slate-300 font-semibold text-xl">Todos</h3>
          <div className="space-y-1 pl-3">
            {content.todos.map((todo: any, idx: string) => (
              <div key={idx} className="text-slate-400 font-medium">
                {todo}
              </div>
            ))}
          </div>
        </div>
      );
    default:
      throw new Error(`${content.type} is invalid type`);
  }
}

export default function Content({ content }: ContentProps) {
  return (
    <div className="px-4 py-10 bg-indigo-600 rounded-md shadow-xl cursor-pointer transition-colors hover:bg-indigo-700">
      {showContent(content)}
    </div>
  );
}
