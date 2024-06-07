const heightInput = document.querySelector("#height"),
  weightInput = document.querySelector("#weight"),
  btn = document.querySelector(".btn"),
  form = document.querySelector("form");
(result = document.querySelector(".result")),
  (reset = document.querySelector(".reset"));

btn.addEventListener("click", validateGame);

function validateGame(event) {
  event.preventDefault();

  let height = heightInput.value;
  let weight = weightInput.value;

  reset.style.display = "block";
  result.style.display = "block";

  if (height === "") {
    return (result.textContent = "please enter valid height");
  } else if (weight === "") {
    return (result.textContent = "plase enter valid weight");
  } else {
    result.innerHTML = `<div class="loader-div"> <img class="spinner" src="../images/Spinner-loader.gif" alt="LOADING..."> </div> `;

    setTimeout(() => {
      calculateBMI(weight, height);
    }, 1000);
  }
}

function calculateBMI(weight, height) {
  height = height / 100;
  let bmi = (weight / Math.pow(height, 2)).toFixed(1);
  // console.log(bmi);

  // specialze each input

  if (bmi < 18.5) {
    showResult(`Underweight: ${bmi}`, "orange");
  } else if (bmi >= 18.5 && bmi < 24.9) {
    showResult(`Normalweight: ${bmi}`, "green");
  } else if (bmi >= 25.0 && bmi < 29.9) {
    showResult(`Overweight: ${bmi}`, "purple");
  } else {
    showResult(`obese: ${bmi}`, "red");
  }
}

function showResult(val, color) {
  result.style.backgroundColor = color;
  result.innerHTML = val;
}

reset.addEventListener("click", () => {
  form.reset();
  result.style.display = "none";
  reset.style.display = "none";
});
