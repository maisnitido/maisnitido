import { useSession, signIn } from "next-auth/react";
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '../../public/logo.jpg';
import Router from 'next/router';

export default function Home() {

  const { data: session } = useSession();

  if (session !== undefined) {
    Router.push('/');
  }
  
  return (    
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
          src={logo}
          alt={'Mais nitido'}></Image>
      </Box>
    </Box>
  )
}