import { useSession, signIn } from "next-auth/react";
import { useState, useEffect } from "react"; 
import Box from '@mui/material/Box';
import gmailIcon from '../../public/gmail.png';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '../../public/logo_azul.png';
import Router from 'next/router';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Home = () => {

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState('');

  const { data: session, status } = useSession();
  
  // useEffect(() => {    
  //   if (status == 'authenticated') {      
  //     axios
  //     .get('http://localhost:3001/person/isvalid/' + session.user?.email)
  //     .then(res => 
  //       {
  //         axios.get('http://localhost:3001/person/' + session.user?.email)
  //         .then(() => Router.push('/'))
  //         .catch(err => {
  //           if (err.response.status == 404) {
  //             Router.push('/cadastro');
  //           }            
  //         })
  //       })
  //     .catch(err => 
  //       {
  //         setOpen(true); 
  //         setAlert(err.response.data);
  //       })
  //   }
  // }, [status]);
  
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
      width={1}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'center'}
      display={'flex'}
      sx={{
        backgroundColor: 'primary.main'
      }}
      >
        <Box>
          <Typography
            sx={{
              color: 'text.primary',
              fontWeight: 'bold',
              fontSize: '30px',
              textAlign: 'center',
            }}>Entrar no Mais Nítido</Typography>
          <Typography
            sx={{
              color: 'text.primary',              
              fontSize: '20px',
              textAlign: 'center',
            }}>Utilize o endereço de email que você usa no trabalho</Typography>
        </Box>
        <Box
          sx={{
            marginTop: '70px',
          }}>
          <Button 
            variant="outlined"
            startIcon={<Image 
                          src={gmailIcon}
                          width={50}
                          height={50}></Image>}
            sx={{
              color: '#4285F4',              
              borderColor: '#4285F4',
            }}
            onClick={() => signIn('google')}>
              Entre com o Google
            </Button>
        </Box>
        <Box
          sx={{
            marginTop: '150px',
          }}>
          <Image src={logo} width={150} height={30} />
        </Box>
        <Box
          sx={{
            marginTop: '100px',
          }}>
            <Link href="#" color={'text.secondary'} underline={'hover'}>Privacidade e Termos</Link>
            <Link href="#" color={'text.secondary'} underline={'hover'} sx={{ marginLeft: '30px' }}>Fale Conosco</Link>
        </Box>
    </Box>
    </>
  )
}

export default Home;