document.addEventListener("DOMContentLoaded", function() {

    openNavAnimation();

    document.getElementById("menu-btn").addEventListener("click", () => {

        if (document.querySelector(".rotate-menu") == null) {

            openMenu();

        }

    })

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            closeMenu(link.id);
    
        })
    })

    document.querySelector(".projects-btn").addEventListener("click", () => {

        openMenu();
        setTimeout(() => {
            closeMenu("bottom")
        }, 2000);
    
    })


})

function moveContent(elem1, elem2) {
    document.querySelector(elem2).innerHTML = document.querySelector(elem1).innerHTML;
}

function openMenu() {

    // Hide sections

    document.querySelectorAll(".section").forEach(section => {
        section.classList.add("disappear");
    })

    setTimeout(() => {
        document.querySelectorAll(".section").forEach(section => {
            section.classList.add("hidden");
        })

        // Rotate menu btn

        document.getElementById("menu-btn").classList.add("rotate-menu");
    
        setTimeout(function() {

            document.getElementById("main-nav").classList.remove("hidden");
            openNavAnimation();
            document.querySelectorAll(".section").forEach(section => {
                section.classList.remove("disappear");
            })

        },750)

    }, 500)
}

function closeMenu(id) {

    // Hide clicked section for animation

    var clickedSection = document.getElementById(document.getElementById(id).firstElementChild.dataset.section);
    clickedSection.classList.add("hide");

    // Animation for link to slide in to top position and move link contents

        if (id == "middle") {
        middle("middle");
    } else if (id == "bottom") {
        bottom("bottom");
    } else {
        topLink();
    }

    // Re-add section content

    clickedSection.classList.remove("hidden");

    // Rotate menu btn
    
    document.getElementById("menu-btn").classList.remove("rotate-menu");
    document.getElementById("menu-btn").classList.add("rerotate-menu");

    // Hide nav

    setTimeout(function() {
        document.getElementById("main-nav").classList.add("disappear");
        document.getElementById("main-nav").classList.add("hidden");
        document.getElementById("main-nav").classList.remove("disappear");
        document.getElementById("menu-btn").classList.remove("rerotate-menu");

        // Animation for section content to slide in

        slideIn(clickedSection);
        

    }, 1750)
}

// ----------------------------------------------------------------

// Nav animations:

function slideIn(clickedSection) {
    setTimeout(() => {
        clickedSection.classList.add("slide-in");
        
        setTimeout(() => {
            clickedSection.classList.remove("slide-in");
            clickedSection.classList.remove("hide");
            clickedSection.firstElementChild.firstElementChild.classList.add("type");

            setTimeout(() => {
                clickedSection.firstElementChild.firstElementChild.classList.remove("type");
            }, 3000)

        }, 1000)

    }, 750)
}

function openNavAnimation() {

    document.getElementById("main-nav").classList.add("openNav");

    setTimeout(() => {
        document.getElementById("main-nav").classList.remove("openNav");
    }, 1000)

}

function closeNavAnimation() {

    document.getElementById("top").classList.add("disappear");
    setTimeout(function() {
        document.getElementById("main-nav").classList.add("hidden");
        document.getElementById("middle").classList.remove("hidden");
        document.getElementById("bottom").classList.remove("hidden");
        document.getElementById("contact-links").classList.remove("hidden");
        document.getElementById("top").classList.remove("disappear");
    }, 750)
}

function topLink() {

    // Position top link and fade out other two

    document.getElementById("middle").classList.add("disappear");
    document.getElementById("bottom").classList.add("disappear");
    document.getElementById("contact-links").classList.add("disappear");

    setTimeout(function() {
        
        document.getElementById("middle").classList.add("hide");
        document.getElementById("bottom").classList.add("hide");
        document.getElementById("contact-links").classList.add("hide");

        document.getElementById("middle").classList.remove("disappear");
        document.getElementById("bottom").classList.remove("disappear");
        document.getElementById("contact-links").classList.remove("disappear");

        setTimeout(() => {

            document.getElementById("middle").classList.remove("hide");
            document.getElementById("bottom").classList.remove("hide");
            document.getElementById("contact-links").classList.remove("hide");

            document.getElementById("middle").classList.add("hidden");
            document.getElementById("bottom").classList.add("hidden");
            document.getElementById("contact-links").classList.add("hidden");

            // Animation to close nav
            
            closeNavAnimation();

        }, 750)

    }, 500); 
}

function middle(animation) {

    // Position middle link and fade out other two

    document.getElementById("top").classList.add("disappear");
    document.getElementById("bottom").classList.add("disappear");
    document.getElementById("contact-links").classList.add("disappear");

    setTimeout(function() {
        
        document.getElementById("top").classList.add("hide");
        document.getElementById("middle").classList.add(animation);
        document.getElementById("bottom").classList.add("hide");
        document.getElementById("contact-links").classList.add("hide");

        document.getElementById("top").classList.remove("disappear");
        document.getElementById("bottom").classList.remove("disappear");
        document.getElementById("contact-links").classList.remove("disappear");

        setTimeout(() => {

            document.getElementById("top").classList.remove("hide");
            document.getElementById("bottom").classList.remove("hide");
            document.getElementById("contact-links").classList.remove("hide");

            // Replace inner links

            var html = document.querySelector("#top").innerHTML;
            moveContent("#middle", "#top");
            moveContent("#bottom", "#middle");
            document.querySelector("#bottom").innerHTML = html;

            // Remove animation classes

            document.getElementById("middle").classList.remove(animation);

            document.getElementById("middle").classList.add("hidden");
            document.getElementById("bottom").classList.add("hidden");
            document.getElementById("contact-links").classList.add("hidden");

            // Animation to close nav
            
            closeNavAnimation();

        }, 750)

    }, 500); 
}

function bottom(animation) {
    
    
    // Position bottom link and fade out other two

    document.getElementById("top").classList.add("disappear");
    document.getElementById("middle").classList.add("disappear");
    document.getElementById("contact-links").classList.add("disappear");

    setTimeout(() => {

        document.getElementById("top").classList.add("hide");
        document.getElementById("middle").classList.add("hide");
        document.getElementById("bottom").classList.add(animation);
        document.getElementById("contact-links").classList.add("hide");

        document.getElementById("top").classList.remove("disappear");
        document.getElementById("middle").classList.remove("disappear");
        document.getElementById("contact-links").classList.remove("disappear");

        setTimeout(function() {

            document.getElementById("middle").classList.remove("hide");
            document.getElementById("top").classList.remove("hide");
            document.getElementById("contact-links").classList.remove("hide");

            // Replace inner links
    
            var html = document.querySelector("#top").innerHTML;
            moveContent("#bottom", "#top");
            moveContent("#middle", "#bottom");
            document.querySelector("#middle").innerHTML = html;
    
            // Remove animation classes
    
            document.getElementById("bottom").classList.remove(animation);
    
            document.getElementById("middle").classList.add("hidden");
            document.getElementById("bottom").classList.add("hidden");
            document.getElementById("contact-links").classList.add("hidden");
            
            // Animation to close nav
    
            closeNavAnimation();
    
        }, 750);

    },500)
}