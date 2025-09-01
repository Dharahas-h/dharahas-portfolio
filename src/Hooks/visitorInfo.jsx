import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { IPInfo } from "../constants";

const TOKEN_KEY = "visitorInfo";
const EXPIRY_TIME = 5;

const useVisitorInfo = () => {
  const [visitorInfo, setVisitorInfo] = useState(null);

  useEffect(() => {
    const cached = Cookies.get(TOKEN_KEY);

    if (cached) {
      return;
    }

    fetch(`https://ipinfo.io/json?token=${IPInfo}`)
      .then((res) => res.json())
      .then((data) => {
        setVisitorInfo(data);
        console.log(data);
        Cookies.set(TOKEN_KEY, JSON.stringify(data), {
          expires: EXPIRY_TIME / (24 * 60),
        });
      });
  }, []);

  return visitorInfo;
};

export default useVisitorInfo;
