import './App.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';
import Navbar from './Navbar';

function App() {
    return (
        <div>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="text" color="error">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="contained" color="secondary">Contained</Button>
                <Button variant="outlined" size="large">Outlined</Button>
                <Button variant="outlined" color="success">Outlined</Button>
            </Stack>
            <RatingDemo />
            <FormDemo />
            <Navbar />
        </div>
    )
}

export default App
