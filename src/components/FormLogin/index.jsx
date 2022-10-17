import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useEffect } from 'react';
import useApp from '../../hooks/useApp';
import './style.css';

export default function FormLogin() {
    const { formUser, setFormUser } = useApp();

    useEffect(() => {
        setFormUser({ name: "", email: "", password: "", showPassword: false })
    }, []);

    const handleChange = (prop) => (event) => {
        setFormUser({ ...formUser, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setFormUser({
            ...formUser,
            showPassword: !formUser.showPassword,
        });
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className='div-inputs-login'>
                <p>Bem vindo</p>
                <h1>Faça o login com sua conta</h1>
                <FormControl sx={{ mt: '1.6rem', minWidth: '100%' }} variant="outlined">
                    <InputLabel htmlFor="email"
                        sx={{ fontSize: '1.6rem' }}
                    >E-mail</InputLabel>
                    <OutlinedInput
                        id="email"
                        type='email'
                        value={formUser.email}
                        onChange={handleChange('email')}
                        label="email"
                        sx={{
                            height: '51px',
                            width: '100%',
                            fontSize: '1.6rem'
                        }}
                    />
                </FormControl>
                <FormControl sx={{ mt: "1.6rem", minWidth: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password"
                        sx={{ fontSize: '1.6rem' }}
                    >Senha</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={formUser.showPassword ? 'text' : 'password'}
                        value={formUser.password}
                        onChange={handleChange('password')}
                        sx={{
                            height: '51px',
                            width: '100%',
                            fontSize: '1.6rem'
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {formUser.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"

                    />
                </FormControl>
            </div >
        </Box >
    );
}
