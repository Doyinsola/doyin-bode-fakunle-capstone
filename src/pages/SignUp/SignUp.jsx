import './SignUp.scss';
import FormField from '../../components/FormField/FormField';
import CTA from '../../components/CTA/CTA';
import { Link } from "react-router-dom";

function SignUp() {

    return (
        <main>
            <h1>Welcome!</h1>
            <form>
                <div>
                    <div>
                        <h2>First Name</h2>
                        <FormField
                            type="text"
                            name="firstName"
                            placeholder="first name"
                            componentClass="" />
                    </div>
                    <div>
                        <h2>Last Name</h2>
                        <FormField
                            type="text"
                            name="LastName"
                            placeholder="last name"
                            componentClass="" />
                    </div></div>
                <div>
                    <h2>Email</h2>
                    <FormField
                        type="email"
                        name="email"
                        placeholder="email"
                        componentClass="" />
                </div>
                <div>
                    <h2>Password</h2>
                    <FormField
                        type="password"
                        name="password"
                        placeholder="password"
                        componentClass="" />
                </div>
                <CTA componentClass=""
                    componentText="Create Account" />
                <p>Already have an account? <Link to='/login'>Log In</Link></p>
            </form>
        </main>
    )
}

export default SignUp;