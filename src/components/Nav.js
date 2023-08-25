import { Link } from "react-router-dom";

function Nav(){
    return(
        <div>
            <div className="navdiv">

            <ul className="nav-li">
                <li className="item"><Link to='/'>Home</Link></li>
                <li className="item"><Link to='/add'>Add product</Link></li>
                <li className="item"><Link to='/update'>Update product</Link></li>
                <li className="item"><Link to='/login'>Login</Link></li>
                <li className="item"><Link to='/signup'>Sign-up</Link></li>
                <li className="item"><Link to='/Profile'>Profile</Link></li>
            </ul>
            </div>
        </div>
    )
}
export default Nav;