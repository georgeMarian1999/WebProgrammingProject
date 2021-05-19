function openMenu(){
  document.getElementById("navigation").style.width="250px";
  document.getElementsByTagName("main")[0].style.opacity="0.2";
}
function closeMenu(){
  document.getElementById("navigation").style.width="0px";
  document.getElementsByTagName("main")[0].style.opacity="1";
}

$(document).ready(function() {
	$('#addRecipe').on('click', function() {
		var name = $('#recipename').val();
		var cooktime = $('#cooktime').val();
		var category = $('#category').val();
		var link = $('#link').val();
		if(name!="" && cooktime!="" && category!="" && link!=""){
			$.post("saverecipe.php",
            {
            name: name,
            cooktime: cooktime,
            category: category,
            link: link
          },
          function(data, status){
            if(status==="success"){
              alert("Added!");
              window.location='home.php';
            }
            else {
              alert("Data: " + data + "\nStatus: " + status);
            }
        });
		}
		else{
			alert('Please fill all the fields !');
		}
	});
});