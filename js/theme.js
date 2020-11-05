let count = 0;
temp = document.cookie;
cook = decodeURIComponent(temp);
cook = cook.split(";");
x = cook[1][cook.length + 1];
x = parseInt(x, 10);
console.log(x);
if (x == 1) {
    document.getElementById("themeSwitcher").href = "css/theme1.css";
}
else if (x == 2) {
    document.getElementById("themeSwitcher").href = "css/theme2.css";
}
else if (x == 3) {
    document.getElementById("themeSwitcher").href = "css/theme3.css";
}
else if (x == 0) {
    document.getElementById("themeSwitcher").href = "css/temp.css";
}
if (isNaN(x)) {
    console.log("Cookie Empty")
}
else {
    count = x;
}
function theme() {
    if (count == 0) {
        document.getElementById("themeSwitcher").href = "css/theme1.css";
        count = 1;
    }
    else if (count == 1) {
        document.getElementById("themeSwitcher").href = "css/theme2.css";
        count = 2;
    }
    else if (count == 2) {
        document.getElementById("themeSwitcher").href = "css/theme3.css";
        count = 3;
    }
    else if (count == 3) {
        document.getElementById("themeSwitcher").href = "css/temp.css";
        count = 0;
    }
    document.cookie = "x = " + count + ";";
    console.log(document.cookie);
}