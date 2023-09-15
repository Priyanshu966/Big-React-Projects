import { useContext, createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { isLoading, error, user, loginWithRedirect, logout } = useAuth0();
  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    console.log(`User ${user}`);
    console.log(`isLoading ${isLoading}`);
    console.log(`error ${error}`);
    setMyUser(user);
  }, [user]);
  return (
    <UserContext.Provider
      value={{
        isLoading,
        error,
        user,
        loginWithRedirect,
        logout,
        myUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
