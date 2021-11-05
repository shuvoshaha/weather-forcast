import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

export const PublicRoute = ({ component: Component, isLogin, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                isLogin ? (
                    <Redirect to="/" />
                ) : (
                    <Component {...props} />
                )
            )}

        />
    )
}

const mapToState = () => ({
    isLogin: localStorage.getItem("login")
})

export default connect(mapToState)(PublicRoute)
