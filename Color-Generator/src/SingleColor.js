import { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, fontColor, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const alertTimeout = setTimeout(() => setAlert(false), 2000);
    return () => clearTimeout(alertTimeout);
  }, [alert]);

  return (
    <div
      style={{ backgroundColor: `rgb(${rgb.join(",")})` }}
      className="single-color"
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <div className={`color-value ${fontColor}`}>
        <p className="weight">{weight}%</p>
        <p className="color">{hexValue}</p>
        {alert && <p className="alert">Copied to Clipboard</p>}
      </div>
    </div>
  );
};
export default SingleColor;
