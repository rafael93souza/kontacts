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
import { treatValuesInputStrings } from '../../utils/functions';
import './style.css';

export default function FormSignUp() {
    const { formUser, setFormUser } = useApp();

    useEffect(() => {
        setFormUser({ name: "", email: "", password: "", showPassword: false })
    }, []);

    const handleChange = (prop) => (event) => {
        if (prop === "name") {
            setFormUser({ ...formUser, [prop]: treatValuesInputStrings(event) });
        } else {
            setFormUser({ ...formUser, [prop]: event.target.value });
        }
    };

    const handleClickShowPassword = () => {
        setFormUser({
            ...formUser,
            showPassword: !formUser.showPassword,
        });
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className='div-inputs-signup'>
                <h1 className='h1-register'>Cadastre-se</h1>
                <FormControl sx={{ mt: '16px', minWidth: '100%' }} variant="outlined">
                    <InputLabel htmlFor="name"
                        sx={{ fontSize: '1.6rem' }}
                    >Nome</InputLabel>
                    <OutlinedInput
                        id="name"
                        type='name'
                        value={formUser.name}
                        onChange={handleChange('name')}
                        label="name"
                        sx={{
                            height: '51px',
                            width: '100%',
                            fontSize: '1.6rem'
                        }}
                    />
                </FormControl>
                <FormControl sx={{ mt: '16px', minWidth: '100%' }} variant="outlined">
                    <InputLabel htmlFor="email"
                        sx={{ fontSize: '1.6rem' }}
                    >E-mail</InputLabel>
                    <OutlinedInput
                        id="email"
                        type='text'
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
                <FormControl sx={{ mt: "16px", minWidth: '100%' }} variant="outlined">
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
                                    /*  onMouseDown={handleMouseDownPassword} */
                                    edge="end"
                                >
                                    {formUser.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"

                    />
                </FormControl>
            </div>
        </Box>
    );
}
