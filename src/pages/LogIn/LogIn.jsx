import './LogIn.scss';
import FormField from '../../components/FormField/FormField';
import CTA from '../../components/CTA/CTA';
import { Link } from "react-router-dom";

function LogIn() {

    return (
        <main className='login'>
            <section className='login__container'>
                <h1 className='login__heading'>Welcome Back!</h1>
                <form className='login__form'>
                    <div className='login__email-container'>
                        <h2 className='login__email labels'>Email</h2>
                        <FormField
                            type="email"
                            name="email"
                            placeholder="email"
                            componentClass="login__email--input" />
                    </div>
                    <div className='login__password-container'>
                        <h2 className='login__password labels'>Password</h2>
                        <FormField
                            type="password"
                            name="password"
                            placeholder="password"
                            componentClass="login__password--input" />
                    </div>
                    <CTA componentClass="login__button"
                        componentText="Log In" />
                    <p className='login__signup-text'>Don't have an account? <Link to='/signup' className='login__signup-link'>Sign Up</Link></p>
                </form>
            </section>
        </main>
    )
}

export default LogIn;