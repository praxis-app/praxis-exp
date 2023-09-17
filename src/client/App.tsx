import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_ROOT = '/api';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(API_ROOT).then((res) => {
      setMessage(res.data);
    });
  }, []);

  return <>{message}</>;
};

export default App;
