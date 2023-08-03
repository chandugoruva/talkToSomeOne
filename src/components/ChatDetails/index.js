import "./index.css"
import {BiArrowBack} from "react-icons/bi"
import {SlOptionsVertical} from "react-icons/sl"
import ReactContext from "../Context"
import {Link} from "react-router-dom"
const ChatDetails=(props)=>(
    <ReactContext.Consumer>
    {value=>{
        const {chatData,clickedChatId,isDarkTheme}=value
        const matchedData=chatData.filter(each=>each.id===clickedChatId)
        console.log(matchedData)
        const hii=matchedData.length!==0
        let ch;
        if(hii){
            console.log(matchedData)
            ch=matchedData[0].name
        }
        else{
            ch=""
        }
        const bg=isDarkTheme==="light"?"bg-color-light":"bg-color-dark"
        return(
            <div>
    <div className="navBar2">
    <div className="flex">
    <Link to="/home" className="li">
    <button type="button" className="button2"><BiArrowBack className="icon"/></button>
    </Link>
    <p className="heading">{ch}</p>
    </div>
    <SlOptionsVertical className="icon4"/>
    </div>
    <div className={`chat ${bg}`}>
    <div className="msg">
    <p className="outgoing-div">hiii</p>
    </div>
    <div className="msg2">
    <p className="incoming-msg">How are you?</p>
    </div>
    <div className="msg">
    <p className="outgoing-div">Iam fine what about you?</p>
    </div>
    <div className="msg2">
    <p className="incoming-msg">Iam also fine what about your studies?</p>
    </div>
    </div>
    </div>
        )
    }}
    
    </ReactContext.Consumer>
)
export default ChatDetails