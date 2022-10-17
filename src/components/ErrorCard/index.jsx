import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import useApp from '../../hooks/useApp';
import './style.css';

export default function ErrorCard({ pag }) {
    const { error, setError } = useApp();

    useEffect(() => {
        setTimeout(() => {
            setError("")
        }, 3000)
    }, []);
    return (
        <div className={`div-error-${pag}`}>
            <Stack
                variant="filled"
                sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error"
                    variant="filled"
                    sx={{
                        fontSize: '1.6rem',
                        backgroundColor: "var(--cor-red-900)",
                        color: "var(--cor-white-900)"
                    }}
                >{error}</Alert>
            </Stack>
        </div >

    );
}
