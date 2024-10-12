import React,{Component} from "react";
import {MenuItems} from "./MenuItem";
import './Navbar.css';
import {Button} from "./Button";
import {HiOutlineAcademicCap} from "react-icons/hi";

class Navbar extends Component{
    state = { clicked: false}

    handleclick=()=>{
        this.setState({clicked: !this.state.clicked })
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h4 className="navbar-logo "><HiOutlineAcademicCap className="cap"/><b>Defence Hub</b></h4>
                <div className="menu-icon" onClick={this.handleclick}>
                    <i className={this.state.clicked ? 'fas fa-times' :"fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                    {MenuItems.map((item,index) => {
                        return(
                            <li key={index}>
                             <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                        )  
                       
                    })
                    }
                    
                </ul>
                    <Button>Sign Up</Button>
                    <Button>Sign In</Button>
            </nav>
        )
    }
}
export default Navbar;