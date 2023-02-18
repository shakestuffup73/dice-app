import './App.css';
// import RollDice from './RollDice/RollDice';
// import Icon from './ Icon/Icon';
// import LottoBall from './LottoBall/LottoBall'
import Lottery from './Lottery/Lottery'

function App() {
  return (
    <>
      {/* <div className="App">
        <RollDice />
      </div> */}
      {/* <div>
        <Icon />
      </div> */}
      <div>
        <Lottery />
        <Lottery title='Mini Daily' maxNum={10} maxBalls={4}/>
      </div>
    </>
  );
}

export default App;
