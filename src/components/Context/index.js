import React from "react"
const ReactContext=React.createContext({
    chatData:[],
    addNewContact:()=>{},
    clickedChatId:"",
    setChatId:()=>{},
    deletedChat:()=>{},
    isOptionClicked:false,
    menuOption:()=>{},
    isDarkTheme:"light",
    darkTheme:()=>{},
    strangersDeleted:()=>{}
})
export default ReactContext