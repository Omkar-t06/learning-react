import React, {useState, useContext} from 'react'
import UserContext from '../contest/UserContest'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        placeholder="Username" 
        onChange={(e) => setUsername(e.target.value)}
        />
        {" "}
        <input 
        type="password" 
        value={password}
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login