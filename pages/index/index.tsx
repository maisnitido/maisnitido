import React from "react";
import { useSession } from "next-auth/react";
import Button from '@mui/material/Button';

function user() {
  const { data: session } = useSession();
  
  return (<Button variant="contained"> Olá Mundo</Button>);


  if (!session) {
    return <p>You are not logged in.</p>;
  }
  return <h1>you are logged in</h1>;
}
export default user;