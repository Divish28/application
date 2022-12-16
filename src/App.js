import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import Sample from './Components/Sample';
import Add from './Components/Add';
import Welcome from './Components/Props';

const NAme="Divish Kumar"
function App(){   //Embedding varible  and Expression into jsx
  return(
    <html>
      <head>
        <link style={{}}></link>
      </head>
      <body>          
        <div>
          <header>
            <div>
              <nav className='Login-nav'>
                <ul>
                  <a href='#Home'>Home</a>
                  <a href='#Kids'>Kids</a>
                  <a href='#Womens'>Womens</a>
                  <a href='#Mens'>Mens</a>
                  <a href='#Login'>Login</a>
                </ul>
              </nav>
            </div>
          </header>
          <h1>Hi, {NAme} Welcome</h1>   
          <h2>Addition of two numbers is, This is embedding of expression into jsx</h2>
            <div>
              <Sample/>
              <Welcome/>
              <Add/>
              <form>
                <h1 className='login-headding'>Login Form</h1>
                <label className='Login-username-label'>Name:</label>
                <input className='Login-username' type={"email"} placeholder={"User Name"}></input><br></br>
                <label className='Login-password-label'>Password:</label>
                <input className='Login-Password' type={"password"} placeholder={"Password"} minLength="8"></input><br></br>
                <h1 className='Error-Message'></h1>
                <button id='Submit'>Submit</button>
              </form>
            </div>
        </div>
      </body>
    </html>
  )
}

const ErrorMessage=document.getElementById('#Error-Message')
function errorMessage(){
  ErrorMessage.textContent("Enter 9 numbers")

};





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
