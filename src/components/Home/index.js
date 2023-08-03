import "./index.css"
import NavBar from "../NavBar"
import {v4} from "uuid"
import {useState} from "react"
import ChatItem from "../ChatItem"
import {GrAdd} from "react-icons/gr"
import Popup from "reactjs-popup"
import ReactContext from "../Context"
import {FaFacebookF} from "react-icons/fa"
import {SiMicrosoft} from "react-icons/si"
import {BsSkype} from "react-icons/bs"
import {Link} from "react-router-dom"
// const initialData=[{
//     name:"Jon snow",
//     id:v4()
//   },{
//     name:"Eric",
//     id:v4()
//   },{name:"chandu",id:v4()},{name:"rajKumar",id:v4()}]

const Home=()=>{
    const [input,setInput]=useState("")
    const changeInput=(event)=>{
        setInput(event.target.value)
    }     
    return (
      <ReactContext.Consumer>
      {value=>{
        const {chatData,addNewData,isOptionClicked,darkTheme,isDarkTheme,strangersDeleted,menuOption}=value
       
        const addContact=()=>{
          addNewData({name:input,id:v4()})
        setInput("")
    }
    const deleteStrangers=()=>{
      strangersDeleted()
    }
    const changeTheme=(event)=>{
      darkTheme(event.target.value)
    }
    const changeMenu=()=>{
      menuOption()
    }
    const bg=isDarkTheme==="light"?"bg-color-light":"bg-color-dark"
    const HomePage=()=>(
      <div className={`home-div ${bg}`}>
    <NavBar/>
    <ul>
    {chatData.length===0?"":chatData.map(each=><ChatItem each={each} key={each.id}/>)}
    </ul>
    <div className="button-flex">
    {ReactPopUp()}
    </div>
    </div>
    )
    const optionBar=()=>(
      <div className="option-div">
        <div className="options-header">
        <button type="button" className="options-button">Options</button>
        </div>
        <div className="looking-div">
        <select className="looking-options">
          <option>I am a girl looking for a guy</option>
          <option>I am a boy looking for a girl</option>
        </select>
        </div>
        <hr className="hr"/>
        <div className="options-div">
          <label  className="label2">age</label>
          <select className="age-options">
            <option>secret</option>
            <option>public</option>
          </select>
        </div>
        <div className="options-div">
          <label  className="label2">display language</label>
          <select className="age-options">
            <option>english</option>
            <option>telugu</option>
            <option>hindi</option>
          </select>
        </div>
        <div className="options-div">
          <label  className="label2">match language</label>
          <select className="age-options">
            <option>english</option>
            <option>telugu</option>
            <option>hindi</option>
          </select>
        </div>
        <hr className="hr"/>
        <div className="options-div">
          <label  className="label2">theme</label>
          <select className="age-options" onChange={changeTheme} value={isDarkTheme}>
            <option>light</option>
            <option>dark</option>
          </select>
        </div>
        <hr className="hr"/>
        <div className="link-accounts">
        <p className="label2">link account</p>
        <div className="icons">
          <FaFacebookF className="facebook-icon"/>
          <SiMicrosoft  className="microsoft-icon"/>
          <BsSkype  className="skype-icon"/>
        </div>
        </div>
        <Link to="/">
        <button type="button" className="button-logout" onClick={changeMenu}>logout</button>
        </Link>
        <hr  className="hr"/>
        <button type="button" className="button-delete-all-strangers" onClick={deleteStrangers}>delete all strangers</button>
        <br/>
        <button type="button" className="button-send-feedback">send feedback</button>
      </div>
    )
    const ReactPopUp = () => (
        <div>
          <Popup
            modal
            trigger={
               
   <button className="add-button"><GrAdd className="icon3"/></button> 
   
            }
          >
            {close => (
              <>
                <div  className="popup-container">
                  <input type="text" onChange={changeInput} className="input2" value={input}/>
                  <br/>
                  <div>
               
                <button onClick={addContact} className="trigger-button">
                    add
                </button>
                <button
                  type="button"
                  className="trigger-button2"
                  onClick={() => close()}
                >
                  Close
                </button>
                </div>
                </div>
              </>
            )}
          </Popup>
        </div>
    )
      
    return(<div className="main-div">
      {isOptionClicked&&optionBar()}
      {HomePage()}
    </div>
     
    )
    
      }}

    </ReactContext.Consumer>
    )
}
export default Home