import logo from './logo.svg';
import './App.css';

import UserData from "./Components/UserData";


function App() {
  const resultHandler=(result)=>{
     console.log("Result:::",result);
  }
  return (
    <div className="App">
      <UserData  onChange={resultHandler}/>
    </div>
  );
}

export default App;
