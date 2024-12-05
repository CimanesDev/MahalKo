// Function to calculate the next monthsary (1st of the next month)
function getNextMonthsary() {
    var now = new Date();

    // Get the current month and year
    var currentMonth = now.getMonth();  // 0 = January, 1 = February, etc.
    var currentYear = now.getFullYear();

    // If today is the first of the month, use the current month for monthsary
    if (now.getDate() === 1) {
        return now; // Today is the monthsary!
    }

    // Set the next monthsary to the first of the next month
    var nextMonthsary = new Date(currentYear, currentMonth + 1, 1);

    return nextMonthsary;
}

// Function to set a specific anniversary date
function getAnniversaryDate() {
    // Set your relationship anniversary date (change this to your actual anniversary)
    var anniversary = new Date("Sept 1, 2025 00:00:00");

    return anniversary;
}

// Function to set her birthday date
function getBirthdayDate() {
    // Set her birthday (April 8)
    var birthday = new Date("April 8, 2025 00:00:00");

    return birthday;
}

// Update the countdown every 1 second
var x = setInterval(function() {
    // Get the next monthsary date
    var nextMonthsary = getNextMonthsary();

    // Get the anniversary date
    var anniversaryDate = getAnniversaryDate();

    // Get her birthday date
    var birthdayDate = getBirthdayDate();

    // Get the current date and time
    var now = new Date().getTime();

    // Find the distance between now and the next monthsary
    var monthsaryDistance = nextMonthsary.getTime() - now;

    // Find the distance between now and the anniversary
    var anniversaryDistance = anniversaryDate.getTime() - now;

    // Find the distance between now and her birthday
    var birthdayDistance = birthdayDate.getTime() - now;

    // Time calculations for days, hours, minutes, and seconds for all timers
    var monthsaryDays = Math.floor(monthsaryDistance / (1000 * 60 * 60 * 24));
    var monthsaryHours = Math.floor((monthsaryDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var monthsaryMinutes = Math.floor((monthsaryDistance % (1000 * 60 * 60)) / (1000 * 60));
    var monthsarySeconds = Math.floor((monthsaryDistance % (1000 * 60)) / 1000);

    var anniversaryDays = Math.floor(anniversaryDistance / (1000 * 60 * 60 * 24));
    var anniversaryHours = Math.floor((anniversaryDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var anniversaryMinutes = Math.floor((anniversaryDistance % (1000 * 60 * 60)) / (1000 * 60));
    var anniversarySeconds = Math.floor((anniversaryDistance % (1000 * 60)) / 1000);

    var birthdayDays = Math.floor(birthdayDistance / (1000 * 60 * 60 * 24));
    var birthdayHours = Math.floor((birthdayDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var birthdayMinutes = Math.floor((birthdayDistance % (1000 * 60 * 60)) / (1000 * 60));
    var birthdaySeconds = Math.floor((birthdayDistance % (1000 * 60)) / 1000);

    // Display the countdown for the monthsary
    document.getElementById("monthsary-timer").innerHTML = monthsaryDays + "d " + monthsaryHours + "h "
    + monthsaryMinutes + "m " + monthsarySeconds + "s ";

    // Display the countdown for the anniversary
    document.getElementById("anniversary-timer").innerHTML = anniversaryDays + "d " + anniversaryHours + "h "
    + anniversaryMinutes + "m " + anniversarySeconds + "s ";

    // Display the countdown for her birthday
    document.getElementById("birthday-timer").innerHTML = birthdayDays + "d " + birthdayHours + "h "
    + birthdayMinutes + "m " + birthdaySeconds + "s ";

    // If today is the first of the month, display "Happy Monthsary!"
    if (monthsaryDistance < 0) {
        document.getElementById("monthsary-timer").innerHTML = "Happy Monthsary, my love! 💖";
        document.querySelector(".special-message").innerHTML = "You're the best thing that ever happened to me! 💕";
    }

    // If today is the anniversary, display "Happy Anniversary!"
    if (anniversaryDistance < 0) {
        document.getElementById("anniversary-timer").innerHTML = "Happy Anniversary, my love! 💍";
        document.querySelector(".special-message").innerHTML = "Thank you for being my everything! 💖";
    }

    // If today is her birthday, display "Happy Birthday!"
    if (birthdayDistance < 0) {
        document.getElementById("birthday-timer").innerHTML = "Happy Birthday, my love! 🎉";
        document.querySelector(".special-message").innerHTML = "Wishing you the happiest day filled with love! 💖";
    }

}, 1000);
