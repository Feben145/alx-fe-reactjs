import axios from "axios";

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async ({ query, location, minRepos }) => {
  try {
    let searchQuery = `q=${query}`;
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:>${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?${searchQuery}`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
