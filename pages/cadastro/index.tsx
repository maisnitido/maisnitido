import Box from '@mui/material/Box'

function Index() {
    return (
        <Box
            height={'100vh'}
            width={'100%'}
            justifyContent={'center'}
            flexDirection={'column'}
            sx={{
                backgroundColor: 'primary.main',
                alignItems: 'center',
            }}>
                <Box
                    height={300}
                    width={300}
                    sx={{
                        backgroundColor: 'secundary.main'
                    }}>

                </Box>
            </Box>
    )    
}

export default Index;