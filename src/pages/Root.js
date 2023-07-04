import { Outlet, useLoaderData, useSubmit} from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';

function RootLayout() {
  const token = useLoaderData
  const submit=useSubmit
  useEffect(()=>{
    if(!token){
      return
    }
    if(token==='EXPIRED'){
      submit(null,{action:'/logout',method:'post'})
      return;
    }
    setTimeout(()=>{
      submit(null,{action:'/logout',method:'post'})
    },1*60*60*1000)

  },[submit,token])


  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
