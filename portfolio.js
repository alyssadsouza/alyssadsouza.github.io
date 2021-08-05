document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("middle").addEventListener("click", () => {

        document.getElementById("top").classList.add("disappear");
        document.getElementById("middle").classList.add("middle");
        document.getElementById("bottom").classList.add("disappear");

        setTimeout(function() {
            var html = document.querySelector("#top").innerHTML;
            moveContent("#middle", "#top");
            moveContent("#bottom", "#middle");
            document.querySelector("#bottom").innerHTML = html;

            document.getElementById("top").classList.remove("disappear");
            document.getElementById("middle").classList.remove("middle");
            document.getElementById("bottom").classList.remove("disappear");

            document.getElementById("middle").classList.add("hidden");
            document.getElementById("bottom").classList.add("hidden");
        }, 750); 
        
    })

    document.getElementById("bottom").addEventListener("click", () => {

        document.getElementById("top").classList.add("disappear");
        document.getElementById("middle").classList.add("disappear");
        document.getElementById("bottom").classList.add("bottom");
        
    })
    

})

function moveContent(elem1, elem2) {
    document.querySelector(elem2).innerHTML = document.querySelector(elem1).innerHTML;
}