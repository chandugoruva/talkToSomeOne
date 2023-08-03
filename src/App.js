import './App.css';
import Home from "./components/Home"
import {Routes,Route,BrowserRouter} from "react-router-dom"
import ChatDetails from "./components/ChatDetails"
import {useState} from "react"
import {v4} from "uuid"
import ReactContext from "./components/Context"
import Login from "./components/Login"

const initialData=[{
  name:"Jon snow",
  id:v4()
},{
  name:"Eric",
  id:v4()
},{name:"chandu",id:v4()},{name:"rajKumar",id:v4()}]

const App=()=>{
  const [chatData,setData]=useState(initialData)
  const[clickedChatId,setId]=useState()
  const[isOptionClicked,setOption]=useState(false)
  const [isDarkTheme,setDarkTheme]=useState("light")
  const  addNewData=(data)=>{
    setData(prevState=>[...prevState,data])
  }
  const setChatId=(id)=>{
    setId(id)
  }
  const darkTheme=(theme)=>{
    setDarkTheme(theme)
  }
  const menuOption=()=>{
    setOption(prevState=>!prevState)
  }
  const deletedChat=(ids)=>{
    const filteredChat=chatData.filter(each=>each.id!==ids)
    setData(filteredChat)
  }
  const strangersDeleted=()=>{
    setData("")
  }
  return(
  <ReactContext.Provider value={{
    chatData,
    addNewData,
    clickedChatId,
    setChatId,
    deletedChat,
    isOptionClicked,
    menuOption,
    isDarkTheme,
    darkTheme,
    strangersDeleted
  }}>
  <BrowserRouter>
  <Routes>
  <Route exact path="/home" element={<Home/>}/>
  <Route exact path="/" element={<Login/>}/>
  <Route exact path="/chat/:id" element={<ChatDetails/>}/>
  </Routes>
  </BrowserRouter>
  </ReactContext.Provider>
  )
}
export default App;
