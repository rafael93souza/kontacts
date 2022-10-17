import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorCard from '../../components/ErrorCard';
import FormSignUp from '../../components/FormSignUp';
import SuccessCard from '../../components/SuccessCard';
import useApp from '../../hooks/useApp';
import { validateEmail } from '../../utils/functions';
import { postRegister } from '../../utils/requests';
import './style.css';

function SignUp() {
    const { formUser, error, setError, success, setSuccess, navigate, handleClearForm
    } = useApp();

    useEffect(() => {
        setError("")
        setSuccess("")
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!formUser.email.trim() || !formUser.password.trim() || !formUser.name.trim()) {
            return setError("Preencha todos os campos!")
        }
        if (!validateEmail(formUser.email).status) {
            return setError(validateEmail(formUser.email).message)
        }

        try {
            const user = await postRegister({ nome: formUser.name, email: formUser.email, senha: formUser.password });
            handleClearForm()
            setSuccess("Cadastro realizado com sucesso");
            setTimeout(() => {
                navigate("/sign-in");
            }, 2300)

        } catch (error) {
            console.log(error)
            return setError(error.response.data)
        }

    }

    return (
        <div className='container-sign-up'>
            <div className='div-form-sing-up'>
                <div className='div-error-success'>
                    {error && <ErrorCard pag="sign-up" />}
                    {success && <SuccessCard pag="sign-up" />}
                </div>
                <form onSubmit={handleSubmit}>
                    <FormSignUp />
                    <button className='btn-sign-up btn-register'>CADASTRAR</button>
                    <button onClick={() => handleClearForm()} type='button' className='btn-sign-up btn-cancel'>CANCELAR</button>
                </form>
                <p className='redirect'>Já tem cadastro?<Link to='/sign-in'>  Clique aqui!</Link> </p>
            </div>
            <div className='divs-sign-up'>
            </div>
        </div>
    )
}

export default SignUp;