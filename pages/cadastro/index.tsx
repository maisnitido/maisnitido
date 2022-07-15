import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import NavigateNext from '@mui/icons-material/NavigateNext';
import axios from 'axios';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
  
function Index() {

    const [selected, setSelected] = useState<string[]>([]);

    const handleClick = () => {
        axios.post('http://localhost:3001/person', { selected })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    const handleChange = (value: string[]) => {        
        setSelected(value);
    }

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

    return (
        <Box
            height={'100vh'}
            justifyContent={'center'}
            flexDirection={'column'}
            display={'flex'}
            sx={{
                backgroundColor: 'primary.main',
                alignItems: 'center',
            }}>
                <Box
                    height={150}
                    width={600}
                    justifyContent={'center'}
                    flexDirection={'column'}
                    display={'flex'}
                    sx={{
                        backgroundColor: '#C4E8EC',
                        alignItems: 'center',
                    }}>
                        <Typography
                            component={'div'}
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '22px',
                                width: '400px',
                                lineHeight: '17px',
                                letterSpacing: '0px',
                                textAlign: 'center',
                            }}
                        >
                            Em quais áreas você pode compartilhar conhecimentos e experiências com mais facilidade?
                        </Typography>
                        <Typography
                            component={'div'}
                            marginTop={'10px'}
                            sx={{
                                fontSize: '12px',
                                width: '350px',
                                lineHeight: '15px',
                                letterSpacing: '0px',
                                textAlign: 'center',
                                color: '#0A0445',
                            }}
                        >
                            Selecione as alternativas que combine as opções apresentadas abaixo para direcionar ao máximo a(s) sua(s) área(s) de conhecimento.
                        </Typography>
                </Box>
                <Box
                    height={300}
                    width={600}
                    justifyContent={'center'}
                    display={'flex'}
                    sx={{
                        backgroundColor: 'white',
                        borderBottomLeftRadius: '53px',
                        borderBottomRightRadius: '53px',
                    }}>
                        <Autocomplete
                            onChange={(_event, value) => handleChange(value)}
                            sx={{
                                width: '500px',
                                marginTop: '60px',
                            }}
                            multiple
                            id="checkboxes-tags-demo"
                            options={areas}
                            disableCloseOnSelect
                            getOptionLabel={(area) => area}
                            renderOption={(props, option, { selected }) => (
                                <li style={{color: '#707070'}} {...props}>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                />
                                {option}
                                </li>
                            )}
                            style={{ width: 500 }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Ex.: Analista de Sistemas"
                                    placeholder="Adicionar Conhecimento" />
                            )}
                        />
                </Box>
                <Box
                    justifyContent={'center'}
                    display={'flex'}>
                        <Button
                            endIcon={<NavigateNext />}                     
                            sx={{
                                backgroundColor: 'secondary.main',
                                '&:hover': {
                                    backgroundColor: 'secondary.main'
                                },
                                color: 'white',
                                borderRadius: '60px',
                                borderColor: 'secondary.main',
                                border: '1px solid',
                                width: '150px',
                                height: '50px',
                                marginTop: '-25px',
                            }}
                            onClick={handleClick}>PRÓXIMO</Button>
                </Box>
            </Box>
    )
}

export default Index;