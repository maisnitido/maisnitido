import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/logo_azul.png";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { useSession, signIn } from "next-auth/react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import style from '../styles/feed.module.css';
import Card from './component/feed/card';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={style.tab}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          {/* <Typography>{children}</Typography> */}
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Dash() {

  const { data: session, status } = useSession();

  const areas = ['Agronomia',
                    'Biotecnologia',
                    'Ecologia ',
                    'Engenharia Ambiental',
                    'Engenharia de Pesca',
                    'Engenharia Hídrica',
                    'Gestão Ambiental',
                    'Geologia ',
                    'Oceanografia ',
                    'Engenharia Agrícola ',
                    'Engenharia de Energia ',
                    'Engenharia Florestal ',
                    'Medicina Veterinária',
                    'Meteorologia',
                    'Zootecnia',
                    'Bioquímica',
                    'Biofísica',
                    'Biomedicina',
                    'Ciências Biológicas',
                    'Educação Física',
                    'Enfermagem',
                    'Estética',
                    'Farmácia',
                    'Fisioterapia',
                    'Fonoaudiologia',
                    'Gerontologia',
                    'Medicina',
                    'Musicoterapia',
                    'Nutrição',
                    'Obstetrícia',
                    'Odontologia',
                    'Quiropraxia',
                    'Radiologia',
                    'Saúde Coletiva',
                    'Terapia Ocupacional',
                    'Análise e Desenvolvimento de Sistemas',
                    'Astronomia',
                    'Ciência da Computação',
                    'Estatística',
                    'Física',
                    'Geofísica',
                    'Geologia',
                    'Informática Biomédica',
                    'Matemática',
                    'Meteorologia',
                    'Nanotecnologia',
                    'Oceanografia',
                    'Química',
                    'Sistemas de Informação',
                    'Engenharia Aeronáutica',
                    'Engenharia Agrícola',
                    'Engenharia Agronômica',
                    'Engenharia de Agrimensura e Cartográfica',
                    'Engenharia de Alimentos',
                    'Engenharia Ambiental e Sanitária',
                    'Engenharia Biomédica',
                    'Engenharia de Bioprocessos',
                    'Engenharia Civil',
                    'Engenharia de Computação',
                    'Engenharia de Controle e Automação',
                    'Engenharia Elétrica',
                    'Engenharia Eletrônica',
                    'Engenharia de Energia',
                    'Engenharia Florestal',
                    'Engenharia de Fortificação e Construção',
                    'Engenharia Mecânica',
                    'Engenharia Mecânica e de Armamento',
                    'Engenharia de Materiais',
                    'Engenharia de Minas',
                    'Engenharia Metalúrgica',
                    'Engenharia Naval',
                    'Engenharia de Pesca',
                    'Engenharia de Produção',
                    'Engenharia de Petróleo',
                    'Engenharia Química',
                    'Engenharia de Software',
                    'Engenharia de Telecomunicações',
                    'Antropologia',
                    'Arqueologia',
                    'Ciência Política',
                    'Filosofia',
                    'Geografia',
                    'História',
                    'Psicologia',
                    'Sociologia',
                    'Teologia',
                    'Administração',
                    'Recursos Humanos',
                    'Arquivologia',
                    'Arquitetura e Urbanismo',
                    'Biblioteconomia',
                    'Ciências Contábeis',
                    'Direito',
                    'Economia',
                    'Educomunicação',
                    'Eventos',
                    'Jornalismo',
                    'Museologia',
                    'Pedagogia',
                    'Produção Cultural',
                    'Produção Editorial',
                    'Produção Multimídia',
                    'Publicidade e Propaganda',
                    'Rádio e TV',
                    'Relações Internacionais',
                    'Relações Públicas',
                    'Secretariado',
                    'Serviço Social',
                    'Turismo',
                    'Artes Cênicas',
                    'Artes Plásticas',
                    'Cinema',
                    'Dança',
                    'Design',
                    'Design de Games',
                    'Design Gráfico',
                    'Design de Moda',
                    'Design de Interiores',
                    'Design de Produto ',
                    'Fotografia',
                    'História da Arte',
                    'Linguística',
                    'Letras',
                    'Moda',
                    'Música',
                    'Teatro',
                    'Tradução e Interpretação'];

  const nextMentorships = [
    {
      date: '2012',
      name: 'Carlos Eduardo de Medeiros'
    },
    {
      date: '2002',
      name: 'Thiago Borchese'
    }
  ]

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  return (
    <>
      <Box
        display={'flex'}
        height={25}
        sx={{          
          marginTop: '70px',
          marginLeft: '50px',
        }}>
          <Image src={logo}></Image>
          <SearchIcon 
            sx={{ 
                marginLeft: '100px',
                fontSize: '30px',
                color: 'text.secondary',
            }}/>
          <Autocomplete
              id="asynchronous-demo"
              sx={{
                width: 400,
                marginLeft: '30px',           
              }}
              open={open}
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              isOptionEqualToValue={(area, value) => area === value}
              getOptionLabel={(area) => area}
              options={areas}
              loading={loading}
              renderInput={(params) => (
                <TextField                  
                  {...params}
                  label="O que você procura?"
                  size="small"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
            <Box justifyContent={'flex-end'} display={'flex'} width={'40%'}>
              <Avatar src={session?.user?.image || ''} />
            </Box>
        </Box>
      
        <Box 
          display={'flex'}
          sx={{ 
            width: '100%',
            marginTop: '50px',
            marginLeft: '300px',
          }}>
          <Box 
            sx={{ 
              borderBottom: 1, 
              borderColor: 'divider',              
            }}>
            <Tabs
              value={value}
              textColor={'secondary'}              
              onChange={handleChange}
              TabIndicatorProps={{ style: { background: '#0A0445'}}}
              >
              <Tab
                label="PRÓXIMA MENTORIAS" 
                {...a11yProps(0)} />  
              <Tab 
                label="MENTORIAS REALIZADAS" 
                {...a11yProps(1)} />
              <Tab 
                label="PERFIS CURTIDOS" 
                {...a11yProps(2)} />
            </Tabs>
          </Box>          
        </Box>

        <Box 
          display={'flex'}
          sx={{ 
            width: '100%',
            marginTop: '50px',
            marginLeft: '300px',
          }}>
            <TabPanel value={value} index={0}>              
                <Card image={session?.user?.image || ''} name={session?.user?.name || ''} backgroundColor={'#426262'}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Card image={session?.user?.image || ''} name={session?.user?.name || ''} backgroundColor={'#4E2379'}/>
              <Card image={session?.user?.image || ''} name={session?.user?.name || ''} backgroundColor={'#DCD143'}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Card image={session?.user?.image || ''} name={session?.user?.name || ''} backgroundColor={'#C67449'}/>
            </TabPanel>
        </Box>
    </>
  )
}

export default Dash