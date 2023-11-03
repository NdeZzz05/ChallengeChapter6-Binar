import { useEffect } from "react";
import { useSelector } from "react-redux";

function TokenProtected({ children }) {
  const Data = useSelector((state) => state.authLogin);

  useEffect(() => {
    if (Data?.token === undefined) {
      window.location.href = "/";
    }
  }, [Data]);

  return children;
}

export default TokenProtected;
