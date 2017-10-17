var SON00020 = {

    init: function () {
        var div = document.createElement("div");
        div.className = "box";
        div.textContent = "SON00020";
        document.getElementById("boxes").appendChild(div);

        div.addEventListener("click", clickNow);
        div.addEventListener("mouseover", hoverMouse);
        div.addEventListener("mouseout", hoverMouse);

        function clickNow(ev) {
            this.backgroundColor = "red";
            this.borderColor = "yellow";

        }

        function hoverMouse(ev) {
            ev.currentTarget.classList.toggle("highlight");
        }

    }

}