import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorCard from '../../components/ErrorCard';
import FormLogin from '../../components/FormLogin';
import SuccessCard from '../../components/SuccessCard';
import useApp from '../../hooks/useApp';
import { postLogin } from '../../utils/requests';
import { setItem } from '../../utils/storage';
import './style.css';


function SignIn() {
    const { formUser, setFormUser,
        error, setError,
        success, setSuccess,
        setTokenLS, setUserLS,
        navigate } = useApp();

    useEffect(() => {
        setError("")
        setSuccess("")
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!formUser.email.trim() || !formUser.password.trim()) {
            return setError("Preencha todos os campos");
        }
        try {
            const response = await postLogin({ email: formUser.email, senha: formUser.password });
            setItem("token", response.data.token);
            setUserLS(response.data.usuario);
            navigate("/main");
        } catch (error) {
            if(error?.response?.data?.mensagem){
                setError(error?.response?.data?.mensagem)
            }else{
                setError("Algo errado aconteceu")
            }
        }
    }

    return (
        <div className='container-sign-in'>
            <div className='divs-sign-in'>
            </div>

            <div className='div-form-sing-in'>
                <form onSubmit={handleSubmit}>
                    <FormLogin />
                    <button className='btn-login'>LOGIN</button>
                </form>
                <p className='redirect'>Não tem cadastro?<Link to='/sign-up'>  Clique aqui!</Link> </p>

                <div className='div-error-success-sign-in'>
                    {error && <ErrorCard pag="sign-in" />}
                    {success && <SuccessCard pag="sign-in" />}
                </div>
            </div>
        </div>
    )
}

export default SignIn;