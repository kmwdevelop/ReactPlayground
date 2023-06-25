import './App.css';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';

function App() {


  let name = "신기해 커밋테스트";

  const func = () => {
    return 'func';
  };

  return (
    <div className="App">
      <MyHeader/>
      <h2>안녕 리액트 {name} {func()} </h2>
      <b id="bold_text">React.js</b>
      <MyFooter/>
    </div>
  );
}

export default App;
