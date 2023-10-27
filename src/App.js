import "./App.css";
function App() {
  return (
    <>
      <div id="main-div">
        <h1>BMI Calculator</h1>
        <p>Height in centimetres:</p> <input id="id-height" />
        <hr />
        <p>Weight in kg's:</p> <input id="id-weight" />
        <hr />
        <p id="demo">BMI</p>
        <button
          id="btn"
          onClick={() => {
            const factor = 10000;
            let height = document.getElementById("id-height").value;
            let weight = document.getElementById("id-weight").value;
            document.getElementById("demo").innerHTML = `<Fragment>
          <h1>BMI : ${(weight / height / height) * factor}</h1>
          <hr />
          </Fragment>`;
          }}
        >
          click
        </button>
      </div>
      <img src="bmi-chart.PNG" alt="chart" width="300" height="250" />
    </>
  );
}

export default App;
