import './App.css';
// import RollDice from './RollDice/RollDice';
// import Icon from './ Icon/Icon';
// import LottoBall from './LottoBall/LottoBall'
// import Lottery from './Lottery/Lottery'
// import CoinDisplay from './CoinDisplay/CoinDisplay'
import BoxDisplay from './BoxDisplay/BoxDisplay';

function App() {
  return (
    <>
      {/* <div className="App">
        <RollDice />
      </div> */}
      {/* <div>
        <Icon />
      </div> */}
      {/* <div>
        <Lottery />
        <Lottery title='Mini Daily' maxNum={10} maxBalls={4}/>
      </div> */}
      {/* <CoinDisplay /> */}
      <BoxDisplay numBoxes={15}/>
    </>
  );
}

export default App;
