import { EyeOffIcon, EyeIcon } from "@heroicons/react/solid";

export default function Button({ repo, handleClick }) {
	const publicButton = {
		className:
			"inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
		buttonText: "Make Public",
	};

	const privateButton = {
		className:
			"inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
		buttonText: "Make Private",
	};

	return (
		<button
			onClick={() => handleClick(repo)}
			type="button"
			className={
				repo.private ? publicButton.className : privateButton.className
			}
		>
			{repo.private ? publicButton.buttonText : privateButton.buttonText}
			{repo.private ? (
				<EyeIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
			) : (
				<EyeOffIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
			)}
		</button>
	);
}
