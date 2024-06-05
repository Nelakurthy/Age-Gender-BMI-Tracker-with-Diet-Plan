document.getElementById("bmiForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const age = parseFloat(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    if (!name || !age || !weight || !height) {
        alert("Please fill in all fields.");
        return;
    }
    const heightMeters = height / 100;
    const bmi = weight / (heightMeters * heightMeters);
    const resultElement = document.getElementById("result");
    let message = `Hello, ${name}!<br>`;
    message += `Your BMI is: ${bmi.toFixed(2)}<br>`;
    let dietRecommendation = "";
    if (bmi < 18.5) {
        dietRecommendation = "You are underweight. Consider a balanced diet with adequate calories.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        dietRecommendation = "You have a healthy weight. Keep up the good work!";
    } else if (bmi >= 25 && bmi < 29.9) {
        dietRecommendation = "You are overweight. Consider a calorie-controlled diet and exercise.";
    } else {
        dietRecommendation = "You are obese. Please consult a healthcare professional for guidance.";
    }
    message += `<br>${dietRecommendation}`;
    resultElement.innerHTML = message;
    // Store BMI value in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("bmi", bmi);
});
