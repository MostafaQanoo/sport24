/* eslint-disable react-hooks/exhaustive-deps */
// import axios from 'axios';
import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { getToken } from './Services';

function App() {
  const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_GRANT_TYPE } =
    process.env;

  const fetchToken = async () => {
    const response = await getToken({
      client_id: REACT_APP_CLIENT_ID,
      client_secret: REACT_APP_CLIENT_SECRET,
      grant_type: REACT_APP_GRANT_TYPE,
    });
    localStorage.setItem(
      'token',
      JSON.stringify(response.data.data.access_token)
    );
  };

  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
