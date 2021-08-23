import "./App.css";
import RepoTable from "./components/RepoTable";
import { pat } from "./services/auth";
import { Octokit } from "@octokit/core";
import { useState, useEffect } from "react";

function App() {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		getRepos();
	}, []);

	const octokit = new Octokit({
		auth: pat.key,
	});

	const getRepos = async () => {
		const repos = await octokit.request("GET /user/repos", { per_page: 100 });

		setRepos(repos.data.filter((repo) => repo.owner.login === pat.username));
		console.log(repos);
	};

	return (
		<div className="m-6">
			<div className="pb-5 border-b border-gray-200">
				<h3 className="text-lg leading-6 font-medium text-gray-900">
					Mark GitHub repositories as private
				</h3>
			</div>
			{repos.length > 0 ? (
				<RepoTable repos={repos} setRepos={setRepos} octokit={octokit} />
			) : null}
		</div>
	);
}

export default App;
