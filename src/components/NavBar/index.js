import "./index.css"
import {AiOutlineMenu} from "react-icons/ai"
import ReactContext from "../Context"
const NavBar=()=>(
    <ReactContext.Consumer>
    {value=>{
        const {menuOption}=value
        const optionButtonClicked=()=>{
            menuOption()
        }
        return(
            <nav className="navBar">
    <button type="button" className="menu-button"  onClick={optionButtonClicked}>
    <AiOutlineMenu className="icon"/>
    </button>
    <p className="heading">Talk to Someone</p>
    </nav>
        )
    }}
    
    </ReactContext.Consumer>
)
export default NavBar