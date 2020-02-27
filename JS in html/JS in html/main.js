// var someText = "this is the legacy";
// console.log(someText);

// function printInformation() {
//     console.log(window.navigator.platform);
//     console.log(window.navigator.userAgent);
//     console.log(window.navigator.appName);


// }
// printInformation();

// function isOnline() {
//     if (window.navigator.onLine) {
//         console.log("online");

//     } else {
//         console.log("offline");

//     }

// }
// isOnline();


// function checkDimension() {
//     console.log(window.screen.availHeight);
//     console.log(window.screen.availWidth);
//     console.log(window.screen.height);


// }
// checkDimension();


// function websiteAddress() {
//     console.log(window.location.href);
//     console.log(window.location.hostname);
//     console.log(window.location.protocol);
//     console.log(window.location.search);
// }
// websiteAddress();

// function redirectsWeb() {
//     location.href = "https://www.bgit.rs/en/";
// }

// function locStor() {
//     localStorage.setItem("name", "Mica Ubica");
// }
// locStor();

// function storData() {
//     if (localStorage.getItem("name")) {
//         console.log(localStorage.getItem("name"))
//     } else {
//         console.log("There is no name")
//     }
// }
// storData();

// function remItem() {
//     localStorage.removeItem("name");
// }
// remItem();

// function locStor() {
//     sessionStorage.setItem("name", "Mica Ubica");
// }
// locStor();

// function storData() {
//     if (sessionStorage.getItem("name")) {
//         console.log(sessionStorage.getItem("name"))
//     } else {
//         console.log("There is no name")
//     }
// }
// storData();

// function remItem() {
//     sessionStorage.removeItem("name");
// }
// remItem();



function showMessage() {
    alert("Greetings")
    var a = prompt("Question?")

    if (a) {
        confirm("Your answer is " + a)
    }
}
showMessage();

