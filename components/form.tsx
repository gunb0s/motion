import type { MotionContentType } from "../pages";

interface CreateFormProps {
  type: MotionContentType;
  onClose: () => void;
}

function Form({ type }: Pick<CreateFormProps, "type">) {
  return (
    <div className="mb-6 space-y-2">
      <div className="flex flex-col space-y-1">
        <label className="font-medium text-slate-300" htmlFor={type}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </label>
        <input
          className="focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          id={type}
          type="text"
          required
        />
      </div>
      {type === "todo" ? (
        ""
      ) : (
        <div className="flex flex-col space-y-1">
          <label className="font-medium text-slate-300" htmlFor="desc">
            Description
          </label>
          <input
            className="focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            id="desc"
            type="text"
            required
          />
        </div>
      )}
    </div>
  );
}

export default function CreateForm({ type, onClose }: CreateFormProps) {
  return (
    <div
      className="absolute left-0 top-0 m-0 w-full h-full flex items-center justify-center bg-slate-700/75"
      onClick={(e) => {
        onClose();
      }}
    >
      <form
        className="px-10 py-4 bg-indigo-600 w-2/3 rounded-xl shadow-2xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Form type={type} />
        <button className="bg-indigo-300 w-full py-2 rounded-md shadow-md mb-3 font-medium text-slate-700 transition-colors hover:bg-indigo-400 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:outline-none">
          Create
        </button>
      </form>
    </div>
  );
}
