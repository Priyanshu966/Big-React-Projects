import { useState } from "react";
import useFetchData from "./useFetchData";
import UserFilter from "./UserFilter";
import UserInfo from "./UserInfo";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const { isLoading, isError, data } = useFetchData(url);
  const [count, setCount] = useState(0);
  console.log(data);
  const showUser = (index) => {
    setCount(index);
  };

  if (isLoading) {
    return (
      <main>
        <h2>Loading....</h2>
      </main>
    );
  }
  if (isError) {
    return (
      <main>
        <h2>There was an error....</h2>
      </main>
    );
  }

  return (
    <main>
      <UserFilter data={data} showUser={showUser} count={count} />
      <UserInfo data={data} count={count} />
    </main>
  );
};

export default App;
