document.addEventListener("DOMContentLoaded", () => {



    // NAV



    // ABOUT

    // tech skills

    document.querySelector("#next").addEventListener("click", () => {

        document.getElementById("front").classList.add("front-next");
        document.getElementById("left").classList.add("left-next");
        document.getElementById("right").classList.add("right-next");

        setTimeout(function() {
            var html = document.querySelector("#right").innerHTML;
            moveContent("#left", "#right");
            moveContent("#front", "#left");
            document.querySelector("#front").innerHTML = html;

            document.getElementById("front").classList.remove("front-next");
            document.getElementById("left").classList.remove("left-next");
            document.getElementById("right").classList.remove("right-next");
    
        }, 1000)
    })

    document.querySelectorAll(".skill-btn").forEach((btn) => {
        btn.addEventListener("click",  function(id) {
            console.log("here");
            // hide current project
            var current = document.querySelector(".goal.visible");
            current.classList.remove("visible");
            current.classList.add("hidden");
            // display next project
            var divNum = Number(id.target.dataset.id);
            console.log(divNum);
            var skills = document.querySelectorAll("#mobile-goals .goal");
            var next = skills[divNum];
            console.log(next);
            next.classList.remove("hidden");
            next.classList.add("visible");
        })
    })

    // PROJECTS

    document.querySelectorAll(".project-btn").forEach((btn) => {
        btn.addEventListener("click",  function(id) {
            console.log("here");
            // hide current project
            var current = document.querySelector(".project.flex.visible");
            current.classList.remove("visible");
            current.classList.add("hidden");
            // display next project
            var divNum = Number(id.target.dataset.id);
            console.log(divNum);
            var projects = document.querySelectorAll(".project");
            var next = projects[divNum];
            console.log(next);
            next.classList.remove("hidden");
            next.classList.add("visible");
        })
    })
})

function moveContent(div1, div2) {
    document.querySelector(div2).innerHTML = document.querySelector(div1).innerHTML;
}