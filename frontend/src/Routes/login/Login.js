import './Login-styles.css'
import LoginForm from '../../components/login/LoginForm';
import Footer from '../../components/login/Footer';
import RegisterForm from '../../components/login/RegisterForm';
const Login = () => {


    return (
        <div className='login_wrapper'>
            <LoginForm />
            <RegisterForm />
            <Footer />

        </div>
    )
}

export default Login;