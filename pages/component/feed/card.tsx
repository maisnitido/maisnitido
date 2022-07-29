import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

interface Card {
    image: string,
    name: string,
    backgroundColor: string
}

function Card({image, name, backgroundColor} : Card) {
    return (
    <>
        <Typography color={'text.primary'}>2022</Typography>
        <Typography color={'text.primary'}>Maio</Typography>
        <Divider 
        sx={{ 
            width: '568.407px',
            marginTop: '10px',
            color: 'text.primary',
        }} />
        <Box
            width={350}
            height={150}
            display={'flex'}
            sx={{
            marginTop: '10px',
            backgroundColor: backgroundColor,
            borderRadius: '5px',
            }}>
            <Box
                display={'flex'}       
                justifyContent={'center'}
                flexDirection={'column'}>
                <Avatar                                  
                sx={{
                    width: 70, height: 70, marginLeft: 2
                }}
                src={image}/>                      
            </Box>
            <Box
                display={'flex'}
                justifyContent={'center'}
                flexDirection={'column'}
                sx={{
                marginLeft: '20px',
                }}>
                <Typography sx={{ color: 'white', width: 300 }}>sua mentoria com</Typography>
                <Typography sx={{ color: 'white', fontWeight: 'bold', width: 300 }}>{name}</Typography>
                <Typography sx={{ color: 'white', width: 300 }}>QUA</Typography>
                <Typography sx={{ color: 'white', fontWeight: 'bold', width: 300 }}>29/JUL/22 - 15h</Typography>                      
            </Box>
        </Box>
    </>
    );
}

export default Card;