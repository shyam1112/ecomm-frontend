import { Link, Navigate, useNavigate } from "react-router-dom";

function Nav(){
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/signup');
    }
    return(
        <div>
            <div className="navdiv">
            <ul className="nav-li">
                <li className="item"><Link to='/'>Home</Link></li>
                <li className="item"><Link to='/add'>Add product</Link></li>
                <li className="item"><Link to='/update'>Update product</Link></li>
                <li className="item"><Link to='/Profile'>Profile</Link></li>
                <li className="item" >{auth?<Link onClick={logout} to='/signup'>Logout</Link>:
                <div>
                <Link to='/signup'>Sign-up</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/login'>Login</Link>
                </div>
                }</li>
                
            </ul>
            </div>
        </div>
    )
}
export default Nav;