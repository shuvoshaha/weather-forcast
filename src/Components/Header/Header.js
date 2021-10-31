import { data } from './data'
import { NavLink } from 'react-router-dom';
import './style.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <nav>
                    <ul>
                        {
                            data && data.map((item, indx) =>{
                                return (
                                    <li key={indx}>
                                        <NavLink to={item.path} exact activeClassName="active_item">
                                            { item.name }
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
