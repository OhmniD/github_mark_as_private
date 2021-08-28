import "./App.css";
import RepoTable from "./components/RepoTable";
import { pat } from "./services/auth";
import { Octokit } from "@octokit/core";
import { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import parseLinkHeader from "parse-link-header";

function App() {
  const [repos, setRepos] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [totalRepos, setTotalRepos] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 7;

  useEffect(() => {
    getRepos();
  }, []);

  const octokit = new Octokit({
    auth: pat.key,
  });

  const getRepos = async (pageNumber) => {
    const repos = await octokit.request("GET /user/repos", {
      page: pageNumber,
      per_page: perPage,
      affiliation: "owner",
    });

    setRepos(repos.data);

    if (pageNumbers.length === 0) {
      getPageNumbers(repos);
      getTotalRepos();
    }
  };

  const getTotalRepos = async () => {
    const user = await octokit.request("GET /user");

    setTotalRepos(user.data.public_repos + user.data.total_private_repos);
  };

  const getPageNumbers = (repos) => {
    const links = parseLinkHeader(repos.headers.link);
    const pageNumbers = [];
    for (let i = 1; i <= parseInt(links.last.page); i++) {
      pageNumbers.push(i);
    }
    setPageNumbers(pageNumbers);
  };

  const handlePaginationClick = (pageNumber) => {
    getRepos(pageNumber);
    setCurrentPage(pageNumber);
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
      <Pagination
        handlePaginationClick={handlePaginationClick}
        pageNumbers={pageNumbers}
        totalRepos={totalRepos}
        currentPage={currentPage}
        perPage={perPage}
      />
    </div>
  );
}

export default App;
