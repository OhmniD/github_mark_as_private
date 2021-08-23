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
    const repos = await octokit.request("GET /user/repos");
    setRepos(repos);
    console.log(repos);
  };

  return <RepoTable repos={repos} />;
}

export default App;
