import './Login-styles.css'
import LoginForm from '../../components/login/LoginForm';
import Footer from '../../components/login/Footer';
import RegisterForm from '../../components/login/RegisterForm';
import { useState } from 'react';
const Login = () => {

    const [visible, setVisible] = useState(false)
    return (
        <div className='login_wrapper'>
            <LoginForm setVisible={setVisible} />
            {visible && <RegisterForm setVisible={setVisible} />}
            <Footer />

        </div>
    )
}

export default Login;