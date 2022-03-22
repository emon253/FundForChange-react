import axios from "axios";
import { useEffect, useState } from "react";
import authHeader from "../services/auth-header";

const useApiCall = (URL) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState();
  const BASE_URL = "http://localhost:8080";
  useEffect(() => {
    let token = authHeader();

    axios
      .get(BASE_URL + URL, {
        headers: {
          Authorization: token
        },
      })
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
