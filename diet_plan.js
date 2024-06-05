document.addEventListener("DOMContentLoaded", function () {
    // Fetch user's name and BMI value from localStorage
    const name = localStorage.getItem("name");
    const bmi = localStorage.getItem("bmi");
    if (!name || !bmi) {
        // If name or BMI is not available, redirect back to the BMI calculator
        window.location.href = "index.html";
    }
    // Display the user's name and diet plan based on BMI
    const userGreetingElement = document.getElementById("userGreeting");
    const dietPlanElement = document.getElementById("dietPlan");
    userGreetingElement.textContent = `Hello, ${name}!`;
    let dietPlan = "";
    if (bmi < 18.5) {
        dietPlan = "Your BMI indicates that you are underweight. Here's a diet plan for you:\n\n";
        dietPlan += "1. Consume balanced meals with carbohydrates, proteins, and healthy fats.\n";
        dietPlan += "2. Include more protein-rich foods like lean meats, fish, eggs, and dairy.\n";
        dietPlan += "3. Incorporate fruits, vegetables, and whole grains in your diet.\n";
        dietPlan += "4. Snack on nuts, seeds, and yogurt for extra calories and nutrients.\n";
        dietPlan += "5. Consult a dietitian for a personalized meal plan.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        dietPlan = "Your BMI indicates that you have a healthy weight. Maintain your current diet and exercise routine to stay healthy.";
    } else if (bmi >= 25 && bmi < 29.9) {
        dietPlan = "Your BMI indicates that you are overweight. Here's a diet plan for you:\n\n";
        dietPlan += "1. Reduce calorie intake by limiting sugary and high-fat foods.\n";
        dietPlan += "2. Increase fiber intake with fruits, vegetables, and whole grains.\n";
        dietPlan += "3. Incorporate regular exercise into your routine.\n";
        dietPlan += "4. Consult a dietitian for a personalized meal plan.";
    } else {
        dietPlan = "Your BMI indicates that you are obese. It's important to consult a healthcare professional or dietitian for a personalized diet and weight management plan.";
    }
    dietPlanElement.textContent = dietPlan;
});
