import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

export const PrivateRoute = ({ component: Component, isLogin, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                isLogin ? (
                    <Component {...props} />
                ) :(
                    <Redirect to="/login" />
                )
    )}
        />


    )
}

const mapToState = () => ({
    isLogin: localStorage.getItem("login")
}
)
export default connect(mapToState)(PrivateRoute)
