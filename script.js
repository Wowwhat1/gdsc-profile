var username = document.getElementById("username")
var password = document.getElementById("password")
var button = document.getElementsByClassName("sign-in-button")

var defaultAccount = {
    username: "chienhuynh",
    password: "12345",
}

function login() {
    if (!checkEmpty(username.value, password.value)) {
        if (!authenticate(username.value, password.value)) {
            alert("Password or Username is not exist in system!")
        } else {
            alert("Login is successfully")
        }
    }
}

function checkEmpty(username, password) {
    if (username === "" || username === undefined) {
        alert("Username is empty!")
        return true
    }
    if (password === "" || password === undefined) {
        alert("Password is empty!")
        return true
    }
    return false
}

function authenticate(username, password) {
    if (username !== defaultAccount.username || password !== defaultAccount.password) {
        return false
    }
    return true
}