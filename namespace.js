var SON00020 = {
    
  init: function() {
   var div = document.createElement("div");
      div.className = "box";
      div.textContent = "SON00020";
      document.getElementById("boxes").appendChild(div);
      
      div.addEventListener("click",clickNow);
      div.addEventListener("mouseover", hoverMouse);
      div.addEventListener("mouseout", hoverMouse);
      
      function clickNow(ev) {
          ev.currentTarget.backgroundColor = "red";
          ev.currentTarget.borderColor = "yellow";
             
      }
       
     function hoverMouse(ev)  {
         ev.classList.toggle("highlight");
         
     }
      
  }
    
}