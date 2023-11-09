import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function FormDemo() {
    const [name, setName] = useState("")
    const [volume, setVolume] = useState(50)
    const updateName = evt => {
        setName(evt.target.value)
    }
    const changeVolume = (evt, new_volume) => {
        setVolume(new_volume)
    }
    return (
        <Box sx={{ border: '1px solid black', p: 2 }}>
            <h1>Name: {name}</h1>
            <TextField
                id="outlined-basic"
                label="Puppy Name"
                variant="outlined"
                placeholder='Fido'
                value={name}
                onChange={updateName}
            />
            <h1>Volume: {volume}</h1>
            <Slider
                aria-label="Volume"
                value={volume}
                onChange={changeVolume}
            />
        </Box>
    )
}