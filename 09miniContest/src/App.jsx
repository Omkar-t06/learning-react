import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContestProvider from './contest/UserContextProvider'

function App() {
  return (
    <UserContestProvider>
      {/* <h1>Hello</h1> */}
      <Login/>
      <Profile/>
    </UserContestProvider>
  )
}

export default App
