import "./App.css";
import Container from "./Containter";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";
import Counter from "./counter";

function App() {
  let name = "신기해 커밋테스트";

  const func = () => {
    return "func";
  };

  return (
    <div className="App">
      <Container>
        <MyHeader />
        <h2>
          안녕 리액트 {name} {func()}{" "}
        </h2>
        <b id="bold_text">React.js</b>
        <MyFooter />
        <Counter initialValue={{ a: 2 }} />
      </Container>
    </div>
  );
}

export default App;
