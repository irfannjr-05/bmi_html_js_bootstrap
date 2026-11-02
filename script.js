
const calculateOnClick = () => {
    try {
let weightVal = document.getElementById('weightInput').value;
        let heightVal = document.getElementById('heightInput').value;
        let weight = Number(weightVal);
        let height = Number(heightVal);
        if (weightVal === "" || heightVal === "" || weight <= 0 || height <= 0) {
            alert("Please enter valid weight and height");
            return;
        }
        let calculatedBMI = weight / (height * height);
        document.getElementById('bmiResult').innerText =
            calculatedBMI.toFixed(2);
        let category = document.getElementById('bmiCategory');
        if (calculatedBMI < 18.5) {
 category.innerText = "Underweight";
 category.className = "text-info";
 } else if (calculatedBMI < 25) {
category.innerText = "Healthy Weight";
            category.className = "text-success";
        } else if (calculatedBMI < 30) {
            category.innerText = "Overweight";
            category.className = "text-warning";
        } else {
  category.innerText = "Obesity";
category.className = "text-danger";
  }
let obj = {
            weightVal,
            heightVal,
            calculatedBMI
        };
        let jsonObj = JSON.stringify(obj);
        localStorage.setItem("data", jsonObj);
        console.log("Stored Data:", jsonObj);
    } catch (error) {
        console.log(error);
        alert("An error occurred!");
    }
};
const deleteOnClick = () => {
    try {
        localStorage.removeItem('data');
        document.getElementById('weightInput').value = "";
        document.getElementById('heightInput').value = "";
        document.getElementById('bmiResult').innerText = "--";
        document.getElementById('bmiCategory').innerText =
            "Waiting for calculation";
        document.getElementById('bmiCategory').className =
            "text-secondary";
        alert("Successfully Deleted");
    } catch (error) {
        console.log(error);

    }

};