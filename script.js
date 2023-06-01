let btn = document.querySelector(".daily-btn");
let secondBtn = document.querySelector(".weekly-btn");
let thirdBtn = document.querySelector(".monthly-btn");
// work section variables
let hours = document.querySelector(".hours");
let previous = document.querySelector(".previous");
let weeklyHours = document.querySelector(".weekly-hours");
let weeklyPrevious = document.querySelector(".weekly-previous");
let monthlyHours = document.querySelector(".monthly-hours");
let monthlyPrevious = document.querySelector(".monthly-previous");
// play section variables
let playHours = document.querySelector(".play-hours");
let playPrevious = document.querySelector(".play-previous");
let weeklyPlayHours = document.querySelector(".play-hours-weekly");
let weeklyPlayPrevious = document.querySelector(".play-previous-weekly");
let monthlyStudyHours = document.querySelector(".play-hours-monthly");
let monthlyStudyPrevious = document.querySelector(".play-previous-monthly");
// study section variables
let studyHours = document.querySelector(".study-hours");
let studyPrevious = document.querySelector(".study-previous");
let weeklyStudyHours = document.querySelector(".study-hours-weekly");
let weeklyStudyPrevious = document.querySelector(".study-previous-weekly");
let monthlyPlayHours = document.querySelector(".study-hours-monthly");
let monthlyPlayPrevious = document.querySelector(".study-previous-monthly");
// exercise section javascript
let exerciseHours = document.querySelector(".exercise-hours");
let exercisePrevious = document.querySelector(".exercise-previous");
let weeklyExerciseHours = document.querySelector(".exercise-hours-weekly");
let weeklyExercisePrevious = document.querySelector(".exercise-previous-weekly");
let monthlyExerciseHours = document.querySelector(".exercise-hours-monthly");
let monthlyExercisePrevious = document.querySelector(".exercise-previous-monthly");
// social section javascript
let socialHours = document.querySelector(".social-hours");
let socialPrevious = document.querySelector(".social-previous");
let weeklySocialHours = document.querySelector(".social-hours-weekly");
let weeklySocialPrevious = document.querySelector(".social-previous-weekly");
let monthlySocialHours = document.querySelector(".social-hours-monthly");
let monthlySocialPrevious = document.querySelector(".social-previous-monthly");
// selfCare section javascript
let selfCareHours = document.querySelector(".self-care-hours");
let selfCarePrevious = document.querySelector(".self-care-previous");
let weeklySelfCareHours = document.querySelector(".self-care-hours-weekly");
let weeklySelfCarePrevious = document.querySelector(".self-care-previous-weekly");
let monthlySelfCareHours = document.querySelector(".self-care-hours-monthly");
let monthlySelfCarePrevious = document.querySelector(".self-care-previous-monthly");
btn.addEventListener("click", function(){
    // work section javascript
    hours.style.display = "block";
    previous.style.display = "block";
    weeklyHours.classList.add("active");
    weeklyPrevious.classList.add("active");
    monthlyHours.classList.add("active");
    monthlyPrevious.classList.add("active");
    // play section javascript
    playHours.style.display = "block";
    playPrevious.style.display = "block";
    weeklyPlayHours.classList.add("active");
    weeklyPlayPrevious.classList.add("active");
    monthlyPlayHours.classList.add("active");
    monthlyPlayPrevious.classList.add("active");
    // study section javascript
    studyHours.style.display = "block";
    studyPrevious.style.display = "block";
    weeklyStudyHours.classList.add("active");
    weeklyStudyPrevious.classList.add("active");
    monthlyStudyHours.classList.add("active");
    monthlyStudyPrevious.classList.add("active");
    // exercise section javascript
    exerciseHours.style.display = "block";
    exercisePrevious.style.display = "block";
    weeklyExerciseHours.classList.add("active");
    weeklyExercisePrevious.classList.add("active");
    monthlyExerciseHours.classList.add("active");
    monthlyExercisePrevious.classList.add("active");
    // social section javascript
    socialHours.style.display = "block";
    socialPrevious.style.display = "block";
    weeklySocialHours.classList.add("active");
    weeklySocialPrevious.classList.add("active");
    monthlySocialHours.classList.add("active");
    monthlySocialPrevious.classList.add("active");
    // selfCare section javascript
    selfCareHours.style.display = "block";
    selfCarePrevious.style.display = "block";
    weeklySelfCareHours.classList.add("active");
    weeklySelfCarePrevious.classList.add("active");
    monthlySelfCareHours.classList.add("active");
    monthlySelfCarePrevious.classList.add("active");
    btn.style.color = "hsl(195, 74%, 62%)";
});

secondBtn.addEventListener("click", function(){
    // work section javascript
    hours.style.display = "none";
    previous.style.display = "none";
    weeklyHours.classList.remove("active")
    weeklyPrevious.classList.remove("active");
    monthlyHours.classList.add("active");
    monthlyPrevious.classList.add("active");
    // play section javascript
    playHours.style.display = "none";
    playPrevious.style.display = "none";
    weeklyPlayHours.classList.remove("active")
    weeklyPlayPrevious.classList.remove("active");
    monthlyPlayHours.classList.add("active");
    monthlyPlayPrevious.classList.add("active");
     // study section javascript
     studyHours.style.display = "none";
     studyPrevious.style.display = "none";
     weeklyStudyHours.classList.remove("active");
     weeklyStudyPrevious.classList.remove("active");
     monthlyStudyHours.classList.add("active");
     monthlyStudyPrevious.classList.add("active");
     // exercise section javascript
    exerciseHours.style.display = "none";
    exercisePrevious.style.display = "none";
    weeklyExerciseHours.classList.remove("active");
    weeklyExercisePrevious.classList.remove("active");
    monthlyExerciseHours.classList.add("active");
    monthlyExercisePrevious.classList.add("active");
    // social section javascript
    socialHours.style.display = "none";
    socialPrevious.style.display = "none";
    weeklySocialHours.classList.remove("active");
    weeklySocialPrevious.classList.remove("active");
    monthlySocialHours.classList.add("active");
    monthlySocialPrevious.classList.add("active");
    // selfCare section javascript
    selfCareHours.style.display = "none";
    selfCarePrevious.style.display = "none";
    weeklySelfCareHours.classList.remove("active");
    weeklySelfCarePrevious.classList.remove("active");
    monthlySelfCareHours.classList.add("active");
    monthlySelfCarePrevious.classList.add("active");
    secondBtn.style.color = "hsl(195, 74%, 62%)";
});

thirdBtn.addEventListener("click", function(){
    // work section javascript
    hours.style.display = "none";
    previous.style.display = "none";
    weeklyHours.classList.add("active");
    weeklyPrevious.classList.add("active");
    monthlyHours.classList.remove("active");
    monthlyPrevious.classList.remove("active");
    // play section javascript
    playHours.style.display = "none";
    playPrevious.style.display = "none";
    weeklyPlayHours.classList.add("active")
    weeklyPlayPrevious.classList.add("active");
    monthlyPlayHours.classList.remove("active");
    monthlyPlayPrevious.classList.remove("active");
    // study section javascript
    studyHours.style.display = "none";
    studyPrevious.style.display = "none";
    weeklyStudyHours.classList.add("active");
    weeklyStudyPrevious.classList.add("active");
    monthlyStudyHours.classList.remove("active");
    monthlyStudyPrevious.classList.remove("active");
    // exercise section javascript
    exerciseHours.style.display = "none";
    exercisePrevious.style.display = "none";
    weeklyExerciseHours.classList.add("active");
    weeklyExercisePrevious.classList.add("active");
    monthlyExerciseHours.classList.remove("active");
    monthlyExercisePrevious.classList.remove("active");
    // social section javascript
    socialHours.style.display = "none";
    socialPrevious.style.display = "none";
    weeklySocialHours.classList.add("active");
    weeklySocialPrevious.classList.add("active");
    monthlySocialHours.classList.remove("active");
    monthlySocialPrevious.classList.remove("active");
    // selfCare section javascript
    selfCareHours.style.display = "none";
    selfCarePrevious.style.display = "none";
    weeklySelfCareHours.classList.add("active");
    weeklySelfCarePrevious.classList.add("active");
    monthlySelfCareHours.classList.remove("active");
    monthlySelfCarePrevious.classList.remove("active");
    thirdBtn.style.color = "hsl(195, 74%, 62%)";
});