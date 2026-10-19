const scores = [95, 84, 77, 68, 91, 72];
let totalScore = 0;
let highestScore = scores[0];
let lowestScore = scores[0];
let passedCount = 0;
let failedCount = 0;

console.log("--- STUDENT SCORES ---");


for (let i = 0; i < scores.length; i++) {
  let score = scores[i];
  let status = "";
  let interpretation = "";

  if (score >= 90) {
    status = "Passed";
    interpretation = "Excellent";
  } else if (score >= 80) {
    status = "Passed";
    interpretation = "Very Good";
  } else if (score >= 75) {
    status = "Passed";
    interpretation = "Good";
  } else {
    status = "Failed";
    interpretation = "Failed";
  }


  if (status === "Passed") {
    passedCount++;
  } else {
    failedCount++;
  }


  if (score > highestScore) highestScore = score;
  if (score < lowestScore) lowestScore = score;


  totalScore += score;


  console.log(`Student ${i + 1}: Score = ${score} | Status = ${status} | Grade = ${interpretation}`);
}


let averageScore = totalScore / scores.length;


console.log("\n--- CLASS SUMMARY ---");
console.log("Total Score   : " + totalScore);
console.log("Average Score : " + averageScore.toFixed(2));
console.log("Highest Score : " + highestScore);
console.log("Lowest Score  : " + lowestScore);
console.log("Total Passed  : " + passedCount);
console.log("Total Failed  : " + failedCount);