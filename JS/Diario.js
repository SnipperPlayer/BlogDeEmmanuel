const center = document.querySelector(".center");
center.addEventListener('click', function(){
  center.style.width = '912px';
  document.getElementById('sidebar').style.display = "block";
})

function showText(id) {
    document.querySelectorAll("p").forEach(function(element) {
      element.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
}
