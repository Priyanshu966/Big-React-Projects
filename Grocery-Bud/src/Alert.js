import { useEffect } from "react";

const Alert = ({ type, msg, showAlert }) => {
  useEffect(() => {
    const errorTimeout = setTimeout(() => {
      showAlert(false, "", "");
    }, 3000);
    return () => clearTimeout(errorTimeout);
  }, []);
  return <div className={`alert alert-${type}`}>{msg}</div>;
};

export default Alert;
