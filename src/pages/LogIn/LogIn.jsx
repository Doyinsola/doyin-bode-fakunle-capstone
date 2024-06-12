import './LogIn.scss';
import FormField from '../../components/FormField/FormField';
import CTA from '../../components/CTA/CTA';
import ApoImoApi from '../../classes/apo-imo-api';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LogIn() {
    const navigate = useNavigate();
    const initialValue = {
        email: "",
        password: "",
    };

    const [values, setValues] = useState(initialValue);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const isFormValid = () => {
        if (!values.email || !values.password) {
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid()) {
            const user = {
                email: values.email,
                password: values.password
            }
            async function login() {
                try {
                    const apoImoApi = new ApoImoApi();
                    const response = await apoImoApi.login(user);
                    sessionStorage.setItem("token", response.data.token);
                    toast.success("Authentication successful!", {
                        position: "top-center",
                    });
                } catch (error) {
                    console.log(error);
                    toast.error("Authentication failed!", {
                        position: "top-center",
                    });
                }
            }
            login();
            event.target.reset();
            setTimeout(() => navigate("/user/profile"), 3000);
        } else {
            toast.error("Unable to login, there are errors in the form", {
                position: "top-center",
            });
        }
    };

    return (
        <main className='login'>
            <section
                className='login__container'>
                <h1 className='login__heading'>Welcome Back!</h1>
                <ToastContainer />
                <form onSubmit={handleSubmit} className='login__form'>
                    <div className='login__email-container'>
                        <h2 className='login__email labels'>Email</h2>
                        <FormField
                            type="email"
                            name="email"
                            placeholder="email"
                            eventHandler={handleInputChange}
                            value={values.email}
                            componentClass="login__email--input" />
                    </div>
                    <div className='login__password-container'>
                        <h2 className='login__password labels'>Password</h2>
                        <FormField
                            type="password"
                            name="password"
                            placeholder="password"
                            eventHandler={handleInputChange}
                            value={values.password}
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