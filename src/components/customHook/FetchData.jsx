import { useEffect, useState } from 'react';
import axios from 'axios';
import SpecificError from '../../models/ErrorData';

/**
 * custom hook used to fetch data from a type of api into a react component
 * @param {string} url api url for reading data
 * @param {number} timer setTimeout delay to simulate loading
 * @param {string} Factory factory pattern name calling the object constructor pattern
 * @param {string} apiType api type for the factory pattern
 * @returns {React.ReactElement} array with fetch datas and all other states
 */
const FetchData = (url, timer, Factory, apiType) => {
  const [data, setdata] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setTimeout(() => {
          const userData = new Factory(res.data, apiType);
          if (userData.data instanceof SpecificError === false) {
            setdata(userData.data);
          } else {
            setIsError(true);
            setError(userData.data);
          }
          setIsLoading(false);
        }, timer);
      })
      .catch((err) => {
        setTimeout(() => {
          setIsError(true);
          setError(new SpecificError('Erreur 404', 'Données non disponibles'));
          setIsLoading(false);
        }, timer);
      });
  }, [url, timer, Factory, apiType]);

  return [data, isLoading, isError, error];
};

export default FetchData;
