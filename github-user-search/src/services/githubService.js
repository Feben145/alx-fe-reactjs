import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username, location, minRepos) => {
  try {
    const query = [`q=${username}`];

    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>${minRepos}`);

    const response = await axios.get(
      `${BASE_URL}/search/users?${query.join("+")}`
    );

    return response.data.items;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
