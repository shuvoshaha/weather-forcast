import { useEffect, useState } from 'react';
import { registerValidate } from './validate';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../redux/action/action';
import { Link } from 'react-router-dom';
import './login.scss'

const initState = {
    name: "",
    email: "",
    password: "",
    cf_password: ""
}

const SignUp = () => {

    const state = useSelector(state => state.user)
    const { success, error } = state;

    const [user, setUser] = useState(initState);
    const [err, setErr] = useState(user);
    const dispatch = useDispatch();
    console.log(success)

    const onChangeHandle = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErr(registerValidate(user))
    }


    useEffect(() => {

        if (Object.keys(err).length === 0) {
            dispatch(userRegister(user))
        }


    }, [err, dispatch])
    return (

        <div className="login_form">
            <h2>Register</h2>

            {success && <div className="succss">
                {success}
            </div>}

            {error && <div className="err">
                {error}
            </div>}

            <div className="login_wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="form_group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name..."
                            value={user.name}
                            onChange={onChangeHandle}
                        />
                        {err.name && <p className="error"> {err.name} </p>}
                    </div>

                    <div className="form_group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email..."
                            value={user.email}
                            onChange={onChangeHandle}
                        />
                        {err.email && <p className="error"> {err.email} </p>}
                    </div>

                    <div className="form_group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password..."
                            value={user.password}
                            onChange={onChangeHandle}

                        />
                        {err.password && <p className="error"> {err.password} </p>}

                    </div>

                    <div className="form_group">
                        <label htmlFor="cf_password">Confirm Password</label>
                        <input
                            type="password"
                            name="cf_password"
                            id="cf_password"
                            placeholder="Password..."
                            value={user.cf_password}
                            onChange={onChangeHandle}

                        />
                        {err.cf_password && <p className="error"> {err.cf_password} </p>}

                    </div>

                    <button type="submit">Register</button>
                </form>
                <p>Haven account? <Link to="/login">Login</Link> </p>

            </div>
        </div>
    )
}

export default SignUp
