import { useSession, signIn } from "next-auth/react";
import { useState, useEffect } from "react"; 
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '../../public/logo_branco.png';
import Router from 'next/router';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Home = () => {

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState('');

  const { data: session, status } = useSession();

  useEffect(() => {    
    if (status == 'authenticated') {      
      axios
      .get('http://localhost:3001/person/isvalid/' + session.user?.email)
      .then(res => 
        {
          axios.get('http://localhost:3001/person/' + session.user?.email)
          .then(() => Router.push('/'))
          .catch(err => {
            if (err.response.status == 404) {
              Router.push('/cadastro');
            }            
          })
        })
      .catch(err => 
        {
          setOpen(true); 
          setAlert(err.response.data);
        })
    }
  }, [status]);
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {alert}
        </Alert>
    </Snackbar>
    <Box
      height={'100vh'}
      justifyContent={'center'}
      display={'flex'}
      flexDirection={'column'}
      sx={{
        backgroundColor: 'secondary.main',
        width: 1,
        display: 'flex',
        alignItems: 'center',
    }}>
      <Box 
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        sx={{
          backgroundColor: 'primary.main', 
          width: 300,
          height: 300,
          borderRadius: 53,
          alignItems: 'center',
          color: 'text.primary'
      }}>
        <Box
          display={'flex'}
          justifyContent={'center'}
        >          
          <Button 
            onClick={() => signIn('google')}
            sx={{
              color: 'text.secondary'
            }}
            variant='outlined' 
            endIcon={<GoogleIcon sx={{color: 'text.primary'}} />}
          >
            Logar com 
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: '40px'
        }}>
        <Image
          width={300}
          height={50}
          src={logo}
          alt={'Mais nitido'}></Image>
      </Box>
    </Box>
    </>
  )
}

export default Home;