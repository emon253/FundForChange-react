import axios from "axios";
import { useEffect, useState } from "react";
const useApiCall = (URL) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState();
  const BASE_URL = "http://localhost:8080";
  useEffect(() => {
    axios
      .get(BASE_URL+URL)
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [URL]);

  return { response, error };
};

export default useApiCall;
