import Button from "./Button";
import GreyedOutButton from "./GreyedOutButton";

const RepoListItem = ({ repo, repoIdx, repos, setRepos, octokit }) => {
	const handleClick = async (repo) => {
		await octokit.request(`PATCH /repos/${repo.full_name}`, {
			private: !repo.private,
		});
		const repoToRemove = repos.findIndex(
			(repository) => repo.id === repository.id
		);
		repo.private = !repo.private;
		repos.splice(repoToRemove, 1, repo);
		setRepos([...repos]);
	};
	return (
		<tr className={repoIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
				{repo.name}
			</td>
			<td className="px-6 py-4 text-sm text-gray-500">{repo.owner.login}</td>
			<td className="px-6 py-4 text-sm text-gray-500">{repo.description}</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				{repo.language}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				{repo.private ? "Yes" : "No"}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				{repo.fork ? (
					<GreyedOutButton />
				) : (
					<Button repo={repo} handleClick={handleClick} />
				)}
			</td>
		</tr>
	);
};

export default RepoListItem;
