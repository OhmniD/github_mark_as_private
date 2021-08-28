/* This example requires Tailwind CSS v2.0+ */

// import { useState, useEffect } from "react";
import RepoListItem from "./RepoListItem";

export default function RepoTable({ repos, setRepos, octokit }) {
  // const [repoNodes, setRepoNodes] = useState([]);

  const repoNodes = repos.map((repo, repoIdx) => (
    <RepoListItem
      repo={repo}
      repoIdx={repoIdx}
      repos={repos}
      setRepos={setRepos}
      octokit={octokit}
      key={repo.id}
    />
  ));

  // useEffect(() => {

  // 	setRepoNodes(nodes);
  // }, [repos]);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Owner
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Language
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Private?
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>
              <tbody>{repos.length > 0 ? repoNodes : null}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
