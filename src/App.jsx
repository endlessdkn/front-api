import React, { useState } from 'react';
import Login from './Content/Login.jsx';
import SignUp from './Content/SignUp.jsx';
import Main from './Content/Main.jsx';


function App() {
  const [token, setToken] = useState(null);
  const [showComponent, setShowComponent] = useState("login");

  const handleLogin = token => {
    window.localStorage.setItem('token', JSON.stringify(token));
    setToken(token);
    setShowComponent("main");
  };

  const handleSignUp = token => {
    window.localStorage.setItem('token', JSON.stringify(token));
    setToken(token);
    setShowComponent("main");
  };

  const handleLogout = () => {
    window.localStorage.removeItem('token');
    setToken(null);
    setShowComponent("login");
  };

  return (
    <div>
  {!token && (
    <>
    <br />
      
      <p><button onClick={() => setShowComponent("login")} disabled={showComponent === "login"}>
        Identificate
      </button> | <button onClick={() => setShowComponent("signup")} disabled={showComponent === "signup"}>
        Registrarse
      </button></p>
      
      <br />
    </>
  )}
  {showComponent === "signup" && <SignUp onSignUp={handleSignUp} />}
  {showComponent === "login" && <Login onLogin={handleLogin} />}
  {showComponent === "main" && <Main token={token} onLogout={handleLogout} />}
</div>
  );
}

export default App;