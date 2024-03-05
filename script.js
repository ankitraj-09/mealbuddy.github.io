// Html elements //
const loginSection = document.querySelector(".login-section");
const signupSection = document.querySelector(".signup-section");
const deleteSection = document.querySelector(".delete-section");
const homeSection = document.querySelector(".home-section");

const resetBillBtn = document.getElementById("reset-bill");

const userText = document.getElementById("user");
const billText = document.getElementById("bill");
const mealText = document.getElementById("meal");

// Some variables //
let meal = 0;
let cost = 0;
let extra = 0;

const user = {
    username: "", password: "", bill: 0, meal: 0
}

// Navigation UI //
function navLogin() {
    signupSection.style.display = "none";

    loginSection.style.display = "block";
}
function navSignup() {
    loginSection.style.display = "none";

    signupSection.style.display = "block";
}
function navDelete() {
    loginSection.style.display = "none";
    homeSection.style.display = "none";

    deleteSection.style.display = "block";
}

// Function to login //
function login() {

    const name = document.getElementById("login-user").value;
    const pass = document.getElementById("login-pass").value;

    const account = JSON.parse(localStorage.getItem(name));

    const user = account.username;


    // Auth validation //
    if (name !== "" && pass !== "") {

        if (name == account.username && pass == account.password) {
            loginSection.style.display = "none";

            homeSection.style.display = "block";

            userText.textContent = account.username;
            billText.textContent = account.bill;
            mealText.textContent = account.meal;

            alert("You are login!");

        }

    } else {
        alert("Error! Please check your details.");
    }

    // Get different button //
    document.getElementById("add-extra").addEventListener("click", addextra);
    document.getElementById("add-meal").addEventListener("click", addmeal);
    document.getElementById("delete-meal").addEventListener("click", deletecost);

    resetBillBtn.addEventListener("click", resetBill);

    // Extra cost to bill //
    function addextra() {

        extra = parseInt(document.getElementById("extra").value);

        account.bill = extra + parseInt(account.bill);

        localStorage.setItem(name, JSON.stringify(account));

        const acc = JSON.parse(localStorage.getItem(name));
        billText.textContent = acc.bill;

        alert(`Bill is updated by Rs +${extra}`);

        extra = 0;
    }

    // adding meal to the bill //
    function addmeal() {

        cost += 38;
        meal += 1;

        account.bill = cost + parseInt(account.bill);
        account.meal = meal + parseInt(account.meal);

        localStorage.setItem(name, JSON.stringify(account));

        const acc = JSON.parse(localStorage.getItem(name));
        billText.textContent = acc.bill;
        mealText.textContent = acc.meal;

        cost = 0;
        meal = 0;

        alert(`One meal is added!`);
    }

    // Deleting meal from the user bill //
    function deletecost() {

        if (parseInt(account.bill) >= 0) {
            cost -= 38;
            meal -= 1;

            account.bill = cost + parseInt(account.bill);
            account.meal = meal + parseInt(account.meal);

            localStorage.setItem(name, JSON.stringify(account));

            const acc = JSON.parse(localStorage.getItem(name));
            billText.textContent = acc.bill;
            mealText.textContent = acc.meal;

            cost = 0;
            meal = 0;

            alert(`One meal is deleted!`);
        }
    }

    // Reset the bill of user //
    function resetBill() {
        account.bill = 0;
        account.meal = 0;

        localStorage.setItem(name, JSON.stringify(account));

        const acc = JSON.parse(localStorage.getItem(name));
        billText.textContent = acc.bill;
        mealText.textContent = acc.meal;

        alert(`Your bill is reset!`);
    }

}

// Function to signup //
function signup() {
    const name = document.getElementById("signup-user").value;
    const pass = document.getElementById("signup-pass").value;

    if (name !== "" && pass !== "") {
        signupSection.style.display = "none";

        loginSection.style.display = "block";

        user.username = name;
        user.password = pass;

        localStorage.setItem(name, JSON.stringify(user));

        alert("You account is created!");
    }
}

// Function to remove or delete user account user //
function deleteUser() {
    const name = document.getElementById("delete-user").value;
    const pass = document.getElementById("delete-pass").value;

    if (name !== "" && pass !== "") {
        deleteSection.style.display = "none";

        loginSection.style.display = "block";

        user.username = name;
        user.password = pass;

        localStorage.removeItem(name, JSON.stringify(user));

        alert("You account is deleted!");
    }
}