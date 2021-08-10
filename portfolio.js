document.addEventListener("DOMContentLoaded", function() {

    var currentPos = document.documentElement.scrollTop;

    document.getElementById("menu-btn").addEventListener("click", () => {

        if (document.querySelector(".rotate-menu") != null) {

            closeMenu();
            window.scrollTo(0, currentPos);

        } else {

            currentPos = document.documentElement.scrollTop;
            openMenu();

        }

    })

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            if (link.classList.contains("welcome-link")) {

                closeWelcomeNav(link.id);
                
            } else {

                closeMenu();

            }
    
        })
    })

    // Nav animations:

    document.getElementById("middle").addEventListener("click", () => {

        // Slide up middle link and fade out other two
        document.getElementById("top").classList.add("disappear");
        document.getElementById("middle").classList.add("middle");
        document.getElementById("bottom").classList.add("disappear");

        setTimeout(function() {
            // Replace inner links
            var html = document.querySelector("#top").innerHTML;
            moveContent("#middle", "#top");
            moveContent("#bottom", "#middle");
            document.querySelector("#bottom").innerHTML = html;

            document.getElementById("top").classList.remove("disappear");
            document.getElementById("middle").classList.remove("middle");
            document.getElementById("bottom").classList.remove("disappear");

            document.getElementById("middle").classList.add("hidden");
            document.getElementById("bottom").classList.add("hidden");

            document.getElementById("top").classList.add("slide-up");
            setTimeout(function() {
                document.getElementById("main-nav").classList.add("hidden");
                document.getElementById("middle").classList.remove("hidden");
                document.getElementById("bottom").classList.remove("hidden");
                document.getElementById("top").classList.remove("slide-up");
            }, 750)

        }, 750); 
        
    })

    document.getElementById("bottom").addEventListener("click", () => {

        document.getElementById("top").classList.add("disappear");
        document.getElementById("middle").classList.add("disappear");
        document.getElementById("bottom").classList.add("bottom");


        setTimeout(function() {
            var html = document.querySelector("#top").innerHTML;
            moveContent("#bottom", "#top");
            moveContent("#middle", "#bottom");
            document.querySelector("#middle").innerHTML = html;

            document.getElementById("top").classList.remove("disappear");
            document.getElementById("middle").classList.remove("disappear");
            document.getElementById("bottom").classList.remove("bottom");

            document.getElementById("middle").classList.add("hidden");
            document.getElementById("bottom").classList.add("hidden");

            document.getElementById("top").classList.add("slide-up");
            setTimeout(function() {
                document.getElementById("main-nav").classList.add("hidden");
                document.getElementById("middle").classList.remove("hidden");
                document.getElementById("bottom").classList.remove("hidden");
                document.getElementById("top").classList.remove("slide-up");
            }, 750)
        }, 750); 
        
    })

})

function moveContent(elem1, elem2) {
    document.querySelector(elem2).innerHTML = document.querySelector(elem1).innerHTML;
}

function openMenu() {

    document.querySelectorAll(".section").forEach(section => {
        section.classList.add("disappear");
    })

    setTimeout(() => {
        document.querySelectorAll(".section").forEach(section => {
            section.classList.add("hidden");
        })
        document.querySelectorAll(".section").forEach(section => {
            section.classList.add("disappear");
        })

        document.getElementById("menu-btn").classList.add("rotate-menu");
    
        setTimeout(function() {

            document.getElementById("main-nav").classList.remove("hidden");
            document.querySelectorAll(".section").forEach(section => {
                section.classList.remove("disappear");
            })

        },1000)

    }, 750)
}

function closeMenu() {
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("hidden");
    })

    document.getElementById("menu-btn").classList.remove("rotate-menu");
    document.getElementById("menu-btn").classList.add("rerotate-menu");

    setTimeout(function() {
        document.getElementById("main-nav").classList.add("hidden");
        document.getElementById("menu-btn").classList.remove("rerotate-menu");

    }, 500)
}

function closeWelcomeNav(id) {
    
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("welcome-link");
    })

    // (animations)

    document.querySelector("#main-nav").classList.remove("welcome-nav");
    document.querySelector("#menu-btn").classList.remove("hidden");
    
}