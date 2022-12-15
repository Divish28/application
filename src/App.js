import logo from './logo.svg';
import './App.css';

const NAme="Divish Kumar"
function add(values){
  return(values.a+values.b)
}
const values={a:20,b:30}
function App(){   //Embedding varible  and Expression into jsx
  return(
    <html>
      <head>
        <link style={{}}></link>
      </head>
      <body>
        <h1>Hi, {NAme} Welcome</h1>    
        <h2>Addition of two numbers is {add(values)} , This is embedding of expression into jsx</h2>          
        <div>
          <header>
            <div>
              <nav>
                <ul>
                  <li><a href='#Home'>Home</a></li>
                  <li><a href='#Kids'>Kids</a></li>
                  <li><a href='#Womens'>Womens</a></li>
                  <li><a href='#Mens'>Mens</a></li>
                  <li><a href='#Login'>Login</a></li>
                </ul>
              </nav>
            </div>
          </header>
            <div>
              <form>
                <h1 className='login-headding'>Login Form</h1>
                <label className='Login-username-label'>Name:</label>
                <input className='Login-username' type={"email"} placeholder={"User Name"}></input><br></br>
                <label className='Login-password-label'>Password:</label>
                <input className='Login-Password' type={"password"} placeholder={"Password"} minLength="8"></input><br></br>
                <h1 className='Error-Message' hidden></h1>
                <button id='Submit'>Submit</button>
              </form>
            </div>
        </div>
      </body>
    </html>
  )
}

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
