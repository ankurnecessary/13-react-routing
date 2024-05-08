import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function Root () {
  return <>
    <MainNavigation />
    <h1>Root</h1>
    <Outlet />
  </>;
}

export default Root;
