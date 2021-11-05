import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/action/action'; 
import './style.scss'

const Header = () => {
    const dispatch = useDispatch();
    const isLogin = localStorage.getItem("login")
    return (
        <div className="header">
            <div className="container">
                <nav>
                    <h2>Data Table with Chats</h2>
                    {
                        isLogin && <ul>
                        <li onClick={() => dispatch(userLogout())}>Logout</li>
                    </ul>
                    }
                </nav>
            </div>
        </div>
    )
}

export default Header
