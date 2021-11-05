import { useEffect, useState } from 'react';
import { validate } from './validate';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/action/action';
import './login.scss'
import { Link } from 'react-router-dom';

const initState = {
    email: "",
    password: ""
}

const Login = () => {

    const state = useSelector(state => state.user)
    const { success, error } = state;
    const [user, setUser] = useState(initState);
    const [err, setErr] = useState(user);
    const [suc, setSuccess] = useState("");
    const dispatch = useDispatch();

    const onChangeHandle = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErr(validate(user))
    }

    
    useEffect(() =>{
        try{
            if(Object.keys(err).length === 0){
               dispatch(userLogin(user))
               setUser(initState)
               setSuccess(success)
            }
        } catch(err){
            alert(err)
        }

    }, [err])

    return (

        <div className="login_form">
            <h2>Login</h2>

            { suc && <div className="succss">
                {suc}
            </div> }

            { error && <div className="err">
                {error}
            </div> }

            <div className="login_wrapper">
                <form onSubmit={handleSubmit}>
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
                        { err.email && <p className="error"> {err.email} </p> }
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
                        { err.password && <p className="error"> {err.password} </p> }

                    </div>

                    <button type="submit">Login</button>
                </form>
                <p>Haven't account <Link to="/register">Register</Link> </p>
            </div>
        </div>
    )
}

export default Login
