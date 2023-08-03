import "./index.css"
import {Link} from "react-router-dom"
import {useState} from "react"
const Login=()=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
   const onChangeName = event => {
        setUsername(event.target.value)
      }
    
    const  onChangePassword = event => {
       setPassword(event.target.value)
      }
   return(<div className="login-div">
        <div className="login-subDiv">
          <img
            src="https://image.winudf.com/v2/image1/bmV0LnRhbGt0b3NvbWVvbmVfaWNvbl8xNTY2OTk2MTYwXzAxMw/icon.png?w=&fakeurl=1"
            alt="website logo"
            className="logo"
          />
          <form>
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <br />
            <input
              type="text"
              id="username"
              className="input"
              placeholder="Username"
              onChange={onChangeName}
            />

            <br />
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <br />
            <input
              type="password"
              id="password"
              className="input"
              placeholder="Password"
              onChange={onChangePassword}
            />
            <br />
            {username.length!==0&&password.length!==0?(<Link to="/home">
            <button type="submit" className="button">
              Login
            </button>
            </Link>):""}
            {/* {showSubmitError && <p className="error-message">{error}</p>} */}
          </form>
        </div>
      </div>
   )
}
export default Login