var n1 = localStorage.getItem("name1");
document.getElementById("name1").innerHTML=n1;
var n2 = localStorage.getItem("name2");
document.getElementById("name2").innerHTML=n2;
document.getElementById("questionturn").innerHTML=n1;
document.getElementById("answerturn").innerHTML=n2;
var score1 = 0;
document.getElementById("name1score").innerHTML="  :  " + score1;
var score2 = 0;
document.getElementById("name2score").innerHTML="  :  " + score2 ;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check<button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}