import { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = (url, timer) => {
  const [data, setdata] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setTimeout(() => {
          setdata(res.data);
          setIsLoading(false);
        }, timer);
      })
      .catch((error) => {
        console.log(error.AxiosError);
        setTimeout(() => {
          setIsError(true);
          setError(error);
          setIsLoading(false);
        }, timer);
      });
  }, [url, timer]);

  return [data, isLoading, isError, error];
};

export default FetchData;
