import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import useApp from '../../hooks/useApp';
import './style.css';
export default function SuccessCard() {
    const { success, setSuccess } = useApp();

    useEffect(() => {
        setTimeout(() => {
            setSuccess("")
        }, 3000)
    }, []);

    return (
        <div className='div-success'>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert
                    variant="filled"
                    severity="success"
                    sx={{
                        fontSize: '1.6rem',
                        backgroundColor: "var(--cor-green-900)",
                    }}
                >{success}</Alert>
            </Stack>
        </div>
    );
}
