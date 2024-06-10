import './SignUp.scss';
import FormField from '../../components/FormField/FormField';
import CTA from '../../components/CTA/CTA';
import ApoImoApi from '../../classes/apo-imo-api';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
    const navigate = useNavigate()
    const initialValue = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    };

    const [values, setValues] = useState(initialValue);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const isFormValid = () => {
        if (!values.first_name) {
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password
        }

        if (isFormValid()) {
            async function signUp() {
                try {
                    const apoImoApi = new ApoImoApi();
                    const response = await apoImoApi.signUp(user);
                    toast.success("User Registration successful!", {
                        position: "top-center",
                    });
                } catch (error) {
                    console.log(error);
                    toast.error("User sign up failed", {
                        position: "top-center",
                    });
                }
            }
            signUp();
            event.target.reset();
            setTimeout(() => navigate("/login"), 3000);
        } else {
            toast.error("Unable to register new user, there are errors in the form", {
                position: "top-center",
            });
        }
    };

    return (
        <main className='sign-up'>
            <section className='sign-up__container'>
                <h1 className='sign-up__heading'>Sign up to Apó Imọ</h1>
                <ToastContainer />
                <form onSubmit={handleSubmit} className='sign-up__form'>
                    <div className='sign-up__name-container'>
                        <div className='sign-up__firstname-container'>
                            <h2 className='sign-up__firstname labels'>First Name</h2>
                            <FormField
                                type="text"
                                name="first_name"
                                placeholder="first name"
                                eventHandler={handleInputChange}
                                value={values.first_name}
                                componentClass="sign-up__firstname--input" />
                        </div>
                        <div className='sign-up__lastname-container'>
                            <h2 className='sign-up__lastname labels'>Last Name</h2>
                            <FormField
                                type="text"
                                name="last_name"
                                placeholder="last name"
                                eventHandler={handleInputChange}
                                value={values.last_name}
                                componentClass="sign-up__lastname--input" />
                        </div>
                    </div>
                    <div className='sign-up__email-container'>
                        <h2 className='sign-up__email labels'>Email</h2>
                        <FormField
                            type="email"
                            name="email"
                            placeholder="email"
                            eventHandler={handleInputChange}
                            value={values.email}
                            componentClass="sign-up__email--input" />
                    </div>
                    <div className='sign-up__password-container'>
                        <h2 className='sign-up__password  labels'>Password</h2>
                        <FormField
                            type="password"
                            name="password"
                            placeholder="password"
                            eventHandler={handleInputChange}
                            value={values.password}
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