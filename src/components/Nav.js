import { Link, Navigate, useNavigate } from "react-router-dom";

function Nav() {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <div>
            <img alt="logo" className="logo" src="https://scontent.fbom19-3.fna.fbcdn.net/v/t39.30808-6/300794579_421759580020244_753011159807902456_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HjPvBkNODnUAX_-mvYC&_nc_ht=scontent.fbom19-3.fna&oh=00_AfAkkvzz5AhPZD4CQYY2G1znUJ5tJO8xeew-qwb5AUpEow&oe=64F28D69"/>
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
                    <Link to='/signup'>Sign-up</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/login'>Login</Link>
                </div>

                }
            </div>
        </div>
    )
}
export default Nav;