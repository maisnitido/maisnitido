import {FormControl, FormLabel, Input, Button} from '@mui/material'
import { useState } from 'react';

function Index() {
    const [areas, setAreas] = useState([]);
    const [area, setArea] = useState([]);
    const add = () => {
        setAreas([...areas, area]);
        console.log(areas);
    }

    return (
        <div>
            <FormControl>
                <FormLabel>
                    Adicione sua area de conhecimento
                </FormLabel>
                <Input placeholder='ex.: arquitetura de sistema' onKeyDown={() => setArea(event.target.value)}>
                </Input>
                <Button onClick={() => add()}>Adicionar</Button>
                {areas.map(a => {return (<div>{a}</div>)})}
            </FormControl>
        </div>
    )
}

export default Index;