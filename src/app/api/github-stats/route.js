const GITHUB_API_URL = "https://api.github.com";
const USERNAME = "thhenrique23";

export async function GET(request) {
  try {
    const userResponse = await fetch(`${GITHUB_API_URL}/users/${USERNAME}`);
    const userData = await userResponse.json();
    const reposResponse = await fetch(
      `${GITHUB_API_URL}/users/${USERNAME}/repos?per_page=100`
    );
    if (!reposResponse.ok) throw new Error("Failed to fetch repositories");
    const reposData = await reposResponse.json();

    const languages = new Set();
    for (const repo of reposData) {
      const languagesResponse = await fetch(repo.languages_url);
      if (languagesResponse.ok) {
        const repoLanguages = await languagesResponse.json();
        Object.keys(repoLanguages).forEach((lang) => languages.add(lang));
      }
    }

    let totalCommits = 0;
    for (const repo of reposData) {
      const commitsResponse = await fetch(
        `${GITHUB_API_URL}/repos/${USERNAME}/${repo.name}/commits?per_page=1`
      );
      if (commitsResponse.ok) {
        const commitData = commitsResponse.headers.get("link");
        const total = commitData
          ? Number(commitData.match(/&page=(\d+)>; rel="last"/)?.[1] || 0)
          : 0;
        totalCommits += total;
      }
    }

    return new Response(
      JSON.stringify({
        totalRepositories: userData.public_repos,
        totalTechnologies: languages.size,
        totalCommits,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
