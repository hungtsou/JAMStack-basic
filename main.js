const reposList = async () => {
  const repos = await fetch(
    "https://api.github.com/users/hungtsou/repos?type=owner&sort=updated"
  ).then((res) => res.json());

  const markup = repos
    .map(
      (repo) =>
        `<ul>
          <li>Name: ${repo.name} (⭐️${repo.stargazers_count})</li> <li>CloneUrl: ${repo.clone_url} 👷</li>
        </ul>`
    )
    .join("");

  const container = document.getElementById("repos-list");
  container.innerHTML = markup;
};

reposList();
