import './SignUp.scss';
import FormField from '../../components/FormField/FormField';
import CTA from '../../components/CTA/CTA';
import { Link } from "react-router-dom";

function SignUp() {

    return (
        <main className='sign-up'>
            <section className='sign-up__container'>
                <h1 className='sign-up__heading'>Sign up to Apó Imọ</h1>
                <form className='sign-up__form'>
                    <div className='sign-up__name-container'>
                        <div className='sign-up__firstname-container'>
                            <h2 className='sign-up__firstname labels'>First Name</h2>
                            <FormField
                                type="text"
                                name="firstName"
                                placeholder="first name"
                                componentClass="sign-up__firstname--input" />
                        </div>
                        <div className='sign-up__lastname-container'>
                            <h2 className='sign-up__lastname labels'>Last Name</h2>
                            <FormField
                                type="text"
                                name="LastName"
                                placeholder="last name"
                                componentClass="sign-up__lastname--input" />
                        </div>
                    </div>
                    <div className='sign-up__email-container'>
                        <h2 className='sign-up__email labels'>Email</h2>
                        <FormField
                            type="email"
                            name="email"
                            placeholder="email"
                            componentClass="sign-up__email--input" />
                    </div>
                    <div className='sign-up__password-container'>
                        <h2 className='sign-up__password  labels'>Password</h2>
                        <FormField
                            type="password"
                            name="password"
                            placeholder="password"
                            componentClass="sign-up__password--input" />
                    </div>
                    <CTA componentClass="sign-up__button"
                        componentText="Create Account" />
                    <p className='sign-up__login-text'>Already have an account? <Link to='/login' className='sign-up__login-link'>Log In</Link></p>
                </form>
            </section>
        </main>
    )
}

export default SignUp;