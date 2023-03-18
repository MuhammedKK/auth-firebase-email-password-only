import React, {useState} from 'react'
import './App.css';
import { auth } from './firebase-config';
import { createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const App = () => {

  const [registerEmail, setRegisterEmail] = useState(""); // user register email state
  const [registerPassword, setRegisterPassword] = useState("");// user register Password state
  const [loginEmail, setLoginEmail] = useState(""); // user Login email state
  const [loginPassword, setLoginPassword] = useState(""); // user Login Password state
  const [user, setUser] = useState(""); // state to get the current user loggedin

  // on The State Of The Authentication Changed Do =>
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser); // if the auth state for any reason make the user that loggedin the current user
  })


  const register = async (e) => {
    // prevent all deafault button actions
    e.preventDefault();
    // try if the creating success or not
    try{
      const user = await createUserWithEmailAndPassword( // this function takes 3 Params 
      // 1- the authentecation config between my app and firebase
      // 2- the verified email that match my email expects
      // 3- the password of the email (MUST BE string go to the DOCS)
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch(err) { // if Creating Fails Gonna be ERORR
      console.log(err.message);
    }

  }
  // Login Behavior Is The Same But With SignInWithEmailAndPassword Method
  const login = async (e) => {
    e.preventDefault();
    try {
      const login = await signInWithEmailAndPassword(auth, loginEmail,loginPassword);
      console.log(login);
    } catch(err) {
      console.log(err.message)
    }
  }
  const signout = async () => { //sign out by firebase including method it's Obvious
    await signOut(auth);
  }



  return (
    <div className="App">
      <form>
        <h2>Register</h2>
        <label htmlFor='email'>
          Email:
        </label>
        <input id="email" type="text" placeholder="Email" autoComplete='off' autoFocus="on" onChange={(e) => setRegisterEmail(e.target.value) }/><br/>
        <button onClick={register}>Register</button>
        <label htmlFor='password'>
          Password:
        </label>
        <input id="password" type="text" placeholder="Password" autoComplete='off' onChange={(e) => setRegisterPassword(e.target.value) } />
        <h2>Login</h2>
        <label htmlFor='loginemail'>
          Email:
        </label>
        <input id="loginemail" type="text" placeholder="Email" autoComplete='off' autoFocus="on" onChange={(e) => setLoginEmail(e.target.value) }/><br/>
        <label htmlFor='loginpassword'>
          Password:
        </label>
        <input id="loginpassword" type="text" placeholder="Password" autoComplete='off' onChange={(e) => setLoginPassword(e.target.value) }/><br/>
        <button onClick={login}>Login</button>
        {user?.email}
        <button onClick={signout}>Sign Out</button>
      </form>
    </div>
  );
}

export default App;
