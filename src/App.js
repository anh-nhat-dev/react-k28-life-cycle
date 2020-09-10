import React from "react";
import "./App.css";

function App() {
  const [yourNum, setYourNum] = React.useState(null);
  const [comNum, setComNum] = React.useState(null);
  const [isRun, setIsRun] = React.useState(false);
  console.log("App -> isRun", isRun);

  function clickStart() {
    setIsRun(true);
  }

  function clickStop() {
    setComNum(null);
    setYourNum(null);
    setIsRun(false);
  }

  function onChangeNumber(e) {
    const value = parseInt(e.target.value);
    if (e.charCode === 13) {
      setYourNum(value);
    }
  }

  React.useEffect(() => {
    if (isRun) {
      const num = Math.round(Math.random() * 10);
      setComNum(num);
    }
  }, [yourNum]);

  return (
    <div className="App">
      <div>
        <div>Số bạn chọn: {yourNum}</div>
        <div>Số máy chọn: {comNum}</div>
        <div>
          Result:
          {isRun && yourNum && comNum && (yourNum === comNum ? "Đúng" : "Sai")}
        </div>
      </div>
      <div>
        {isRun ? <input onKeyPress={onChangeNumber} type="number" /> : ""}
      </div>
      <div>
        {!isRun ? (
          <button onClick={clickStart}>Start</button>
        ) : (
          <button onClick={clickStop}>Stop</button>
        )}
      </div>
    </div>
  );
}

export default App;
