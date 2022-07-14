import { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url, inicialState) {
  const [data, setData] = useState(inicialState);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return data;
}
