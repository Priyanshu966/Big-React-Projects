import {useState, useEffect, createContext, useContext} from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = createContext();

const GithubProvider = ({children}) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [isLoading, setIsLoading] = useState(false);
  const [requests, setRequests] = useState(0);
  const [isError, setIsError] = useState({show: false, msg: ""});

  const fetchGithubUsers = async (user) => {
    setIsLoading(true);

    //UserInfo
    const response = await axios
      .get(`https://api.github.com/users/${user}`)
      .catch((error) => console.log(error));

    //UserData
    if (response) {
      setGithubUser(response.data);
      //UserFollowers
      const userFollowers = await axios
        .get(`https://api.github.com/users/john-smilga/followers`)
        .catch((error) => console.log(error));
      setFollowers(userFollowers.data);

      //UserRepos
      const userRepos = await axios
        .get(`https://api.github.com/users/${user}/repos?per_page=100`)
        .catch((error) => console.log(error));
      setRepos(userRepos.data);
      toggleError(false, "");
    } else {
      toggleError(true, "there is no user with that username");
    }

    setIsLoading(false);
  };

  const fetchRate = async () => {
    try {
      //Rate
      const resp = await axios.get("https://api.github.com/rate_limit");
      const rate = resp.data.rate.remaining;
      setRequests(rate);
      if (rate === 0) {
        toggleError(true, "sorry, you have exceeded your hourly rate limit!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleError = (show = false, msg = "") => {
    setIsError({show, msg});
  };

  useEffect(() => {
    fetchRate();
  }, [githubUser]);
  useEffect(() => {
    fetchGithubUsers("john-smilga");
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        isLoading,
        isError,
        requests,
        fetchGithubUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

const useGithubContext = () => {
  return useContext(GithubContext);
};

export {GithubProvider, useGithubContext};
