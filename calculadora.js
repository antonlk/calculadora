// agregamos eventos de click a todos los botones

$(function () {
	
    var res;
    
    $('[name="numeros"]').click(function(){
    	document.getElementById("screen").value = $("#screen").val() + $(this).val();
    	  if (res){
        	$("#screen").val("");
        	res="";
        }
       
    });

    $("#mas").click(function () {
        document.getElementById("screen").value = $("#screen").val() +" "+$("#mas").val() +" ";

      
    });

    $("#menos").click(function () {
        document.getElementById("screen").value = $("#screen").val() + " " +$("#menos").val()+" ";
    });

    $("#borrar").click(function () {
        document.getElementById("screen").value = "";
    });

    $("#igual").click(function () {
        res = eval(document.getElementById("screen").value.toString());
        $("#screen").val(res);
    });
});
