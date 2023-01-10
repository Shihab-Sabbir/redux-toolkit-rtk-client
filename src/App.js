import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { setUser } from './features/authSlice';
import { router } from './router/router';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('redux-rtk-current-user'));
    if (currentUser) { dispatch(setUser(currentUser)) }
  }, [])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;