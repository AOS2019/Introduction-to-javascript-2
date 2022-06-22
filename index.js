let f_num = window.prompt("Enter Your first number here!")
let s_num = window.prompt("Enter Your second number")
let operate = window.prompt("Enter a valid operator +, -, *, /")

if (isNaN(f_num)) {
    alert("Your first number is not a valid number");
}
else if (isNaN(s_num)) {
    alert("Your Second number is not a valid number");
}
else if (operate == '+') {
    alert(parseInt(f_num) + parseInt(s_num));
}
else if (operate == '-') {
    alert(f_num - s_num);
}
else if (operate == '*') {
    alert(f_num * s_num);
}
else if (operate == '/') {
    alert(f_num / s_num);
}
else {
    alert("Please enter a valid operation!")
}