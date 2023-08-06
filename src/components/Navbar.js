import { Component } from "react";
import "./Navbar.css";
import { Menu } from "./Menu";
import {Link} from "react-router-dom"
import logo from "../images/White.png"

class Navbar extends Component{
    state={clicked:false};
    handleclick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
               <div className="logo-container">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
              <div className="menu-icons" onClick={this.handleclick}>
                <i className={this.state.clicked ? "fas fa-times":"fas fa-bars"}></i>
               
              </div>
              
              <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
                {Menu.map((item, index)=>{
                    return(
                        <li key={index}>
                         <Link className={item.cName} to={item.url}>
          <i className={item.icon}></i>
          {item.title}
        </Link>
                    </li>
                    )
                })}
             <button>Login</button>
              </ul>
            </nav>
        )
    }
}

export default Navbar;