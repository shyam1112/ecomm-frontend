import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from './logo.jpg'
function Nav() {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <div>
            <img alt="logo" className="logo" src={logo}/>
            <div className="navdiv">
                {
                    auth?<ul className="nav-li">
                        <li className="item"><Link to='/'>Home</Link></li>
                        <li className="item"><Link to='/add'>Add product</Link></li>
                        <li className="item"><Link to='/update'>Update product</Link></li>
                        <li className="item"><Link to='/Profile'>Profile</Link></li>
                        <li className="item"><Link to='/order'>Order</Link></li>
                        <li className="item" > <Link onClick={logout} to='/signup'>Logout </Link> </li>
                    </ul>:
                    <div className="nav-li navright">
                    {/* <Link to='/signup'>Sign-up</Link>&nbsp;&nbsp;&nbsp;&nbsp; */}
                    <Link to='/login'>Login</Link>
                </div>

                }
            </div>
        </div>
    )
}
export default Nav;