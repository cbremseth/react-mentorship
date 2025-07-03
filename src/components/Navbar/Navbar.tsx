import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

function Navbar() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Explore Skills</Button>
            <Button variant="text">Start Learning</Button>
            <Button variant="text">Featured</Button>
            <Button variant="text">Answers</Button>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Stack>
    );

}

export default Navbar;