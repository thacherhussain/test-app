import logo from "./logo.svg";
import "./App.css";

const totalCards = 50;

function Greeting(totalCards) {
  if (totalCards < 10) {
    return <span>you should open more packs</span>;
  } else {
    return <span>you have a lot of cards! trade them for more!</span>;
  }
}

const input = "Crawford";

function UserName(input) {
  return <span>`My Name is {input}`</span>;
}

const CardNumber = () => {
  return (
    <>
      <div>I have {totalCards} cards</div>
      <div>
        I have {totalCards} cards {Greeting()}
      </div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      {/* <UserName /> */}
      <CardNumber />
    </div>
  );
}

export default App;
