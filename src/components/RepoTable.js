/* This example requires Tailwind CSS v2.0+ */
import Button from "./Button";
import { useState, useEffect } from "react";

export default function RepoTable({ repos, setRepos, octokit }) {
  const handleClick = async (repo) => {
    await octokit.request(`PATCH /repos/${repo.full_name}`, {
      private: true,
    });
    const repoToRemove = repos.findIndex(
      (repository) => repo.id === repository.id
    );
    repo.private = true;
    repos.splice(repoToRemove, 1, repo);
    setRepos([...repos]);
  };

  const [repoNodes, setRepoNodes] = useState([]);

  useEffect(() => {
    const nodes = repos.map((repo, repoIdx) => (
      <tr
        key={repo.id}
        className={repoIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
      >
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
          {!repo.private ? (
            <Button repo={repo} handleClick={handleClick} />
          ) : null}
        </td>
      </tr>
    ));
    setRepoNodes(nodes);
  }, [repos]);

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
              <tbody>{repos && repoNodes}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
