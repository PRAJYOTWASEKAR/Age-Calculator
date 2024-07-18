const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday");
    } else {
        const ageDetails = getAgeDetails(birthdayValue);
        resultEl.innerText = `Your age is ${ageDetails.years} ${ageDetails.years > 1 ? "years" : "year"}, ${ageDetails.months} ${ageDetails.months > 1 ? "months" : "month"}, and ${ageDetails.days} ${ageDetails.days > 1 ? "days" : "day"} old`;
    }
}

function getAgeDetails(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    
    let years = currentDate.getFullYear() - birthdayDate.getFullYear();
    let months = currentDate.getMonth() - birthdayDate.getMonth();
    let days = currentDate.getDate() - birthdayDate.getDate();
    
    if (days < 0) {
        months -= 1;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    
    if (months < 0) {
        years -= 1;
        months += 12;
    }
    
    return { years, months, days };
}

btnEl.addEventListener("click", calculateAge);
