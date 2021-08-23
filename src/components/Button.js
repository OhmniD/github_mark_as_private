import { EyeOffIcon } from "@heroicons/react/solid";

export default function Button({ repo, handleClick }) {
  return (
    <button
      onClick={() => handleClick(repo)}
      type="button"
      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Make Private
      <EyeOffIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
    </button>
  );
}
