import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(url, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => alert(err));
  }, [url]);
  return data;
};
