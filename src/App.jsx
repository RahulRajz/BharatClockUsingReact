import ClockHeading from "./components/clockHeading";
import ClockMoto from "./components/clockMoto";
import CurrentTime from "./components/currentTime";
import './App.css';


function App(){
  return <div className="container">
    <ClockHeading></ClockHeading>
    <ClockMoto></ClockMoto>
    <CurrentTime></CurrentTime>
  </div>
}
export default App;