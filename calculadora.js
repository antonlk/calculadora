// agregamos eventos de click a todos los botones
//esto es rama mult-div

$(function () {
    var res;
    
    $('[name="numeros"]').click(function(){
    	  if (res){
        	$("#screen").val("");
        	res="";
        }
       document.getElementById("screen").value = $("#screen").val() + $(this).val();
    });

    $("#mas").click(function () {
        document.getElementById("screen").value = $("#screen").val() +" "+$("#mas").val() +" ";
    });

    $("#menos").click(function () {
        document.getElementById("screen").value = $("#screen").val() + " " +$("#menos").val()+" ";
    });
	$("#mult").click(function () {
        document.getElementById("screen").value = $("#screen").val() + " " +$("#mult").val()+" ";
    });
	$("#div").click(function () {
        document.getElementById("screen").value = $("#screen").val() + " " +$("#div").val()+" ";
    });
    $("#borrar").click(function () {
        document.getElementById("screen").value = "";
    });

    $("#igual").click(function () {
        res = eval(document.getElementById("screen").value.toString());
        $("#screen").val(res);
    });
});
