// Age Calculator
document.getElementById('age-form').onsubmit = function(e) {
  e.preventDefault();
  const dob = new Date(document.getElementById('dob').value);
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  const m = now.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) age--;
  document.getElementById('age-result').innerText = `Your age is: ${age} years`;
};

// BMI Calculator
document.getElementById('bmi-form').onsubmit = function(e) {
  e.preventDefault();
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to m
  if (weight > 0 && height > 0) {
    const bmi = (weight / (height * height)).toFixed(2);
    let msg = `Your BMI is: ${bmi}`;
    if (bmi < 18.5) msg += " (Underweight)";
    else if (bmi < 24.9) msg += " (Normal weight)";
    else if (bmi < 29.9) msg += " (Overweight)";
    else msg += " (Obese)";
    document.getElementById('bmi-result').innerText = msg;
  }
};

// Simple Body Fat Calculator (US Navy Method for men)
document.getElementById('fat-form').onsubmit = function(e) {
  e.preventDefault();
  const waist = parseFloat(document.getElementById('waist').value);
  const neck = parseFloat(document.getElementById('neck').value);
  const height = parseFloat(document.getElementById('height-fat').value);

  if (waist > 0 && neck > 0 && height > 0) {
    // US Navy Body Fat formula for men (for demo, not clinical use)
    const bodyFat = (86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76).toFixed(2);
    document.getElementById('fat-result').innerText = `Estimated Body Fat Percentage: ${bodyFat}%`;
  }
};