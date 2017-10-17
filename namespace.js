var SON00020 = {

    init: function () {
        var div = document.createElement("div");
        div.className = "box";
        div.textContent = "SON00020";
        document.getElementById("boxes").appendChild(div);

        div.addEventListener("click", click_Me);
        div.addEventListener("mouseover", hMouse);
        div.addEventListener("mouseout", hMouse);

        function click_Me(ev) {
            this.backgroundColor = "red";
            this.borderColor = "yellow";

        }

        function hMouse(ev) {
            ev.currentTarget.classList.toggle("highlight");
        }

    }

}