// agregamos eventos de click a todos los botones

$(function () {
    $("#1").click(function () {
        document.getElementById("screen").value = document.getElementById("screen").value + document.getElementById("1").value;
    });
    $("#2").click(function () {
        document.getElementById("screen").value = document.getElementById("screen").value + document.getElementById("2").value;
    });
    $("#3").click(function () {
        document.getElementById("screen").value = document.getElementById("screen").value + document.getElementById("3").value;
    });
    $("#4").click(function () {
        document.getElementById("screen").value = document.getElementById("screen").value + document.getElementById("4").value;
    });
    $("#5").click(function () {
        document.getElementById("screen").value = document.getElementById("screen").value + document.getElementById("5").value;
    });
    $("#6").click(function () {
        document.getElementById("screen").value = document.getElementById("screen").value + document.getElementById("6").value;
    });
    $("#7").click(function () {
        document.getElementById("screen").value = document.getElementById("screen").value + document.getElementById("7").value;
    });
    $("#8").click(function () {
        document.getElementById("screen").value = document.getElementById("screen").value + document.getElementById("8").value;
    });
    $("#9").click(function () {
        document.getElementById("screen").value = document.getElementById("screen").value + document.getElementById("9").value;
    });
    $("#0").click(function () {
        document.getElementById("screen").value = document.getElementById("screen").value + document.getElementById("0").value;
    });
    $("#mas").click(function () {
        document.getElementById("screen").value = document.getElementById("screen").value + document.getElementById("mas").value;
    });
    $("#menos").click(function () {
        document.getElementById("screen").value = document.getElementById("screen").value + document.getElementById("menos").value;
    });
    $("#borrar").click(function () {
        document.getElementById("screen").value = "";
    });
    $("#igual").click(function () {
        document.getElementById("screen").value = eval(document.getElementById("screen").value.toString());
    });
});
