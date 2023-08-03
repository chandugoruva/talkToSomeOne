import "./index.css"
import {AiOutlineDelete} from "react-icons/ai"
import {Link} from "react-router-dom"
import ReactContext from "../Context"
const ChatItem=(props)=>{
    const {each}=props
    return(
        <ReactContext.Consumer>
        {value=>{
            const {setChatId,deletedChat}=value
            const sendId=()=>{
                setChatId(each.id)
            }
            const deleteChat=()=>{
                deletedChat(each.id)
            }
            return(
                <div>
                <div className="flex-items">
                <Link to={`/chat/${each.id}`} className="li">
        <div className="chat-div" onClick={sendId}>
            <p className="name">{each.name}</p> 
            </div>
        </Link>
        <div>
        <button type="button" className="delete-button" onClick={deleteChat}>
            <AiOutlineDelete className="icon2"/>
            </button>
            </div>
            </div>
            <hr/>
            </div>

            )
        }}
        
        </ReactContext.Consumer>
    )
}
export default ChatItem