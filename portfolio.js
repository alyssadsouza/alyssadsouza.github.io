document.addEventListener("DOMContentLoaded", function() {

    openNavAnimation();

    // var currentPos = document.documentElement.scrollTop;
    // var about = true;
    // var projects = true;
    // var aboutScroll = document.getElementById("about").scrollHeight - document.documentElement.scrollHeight*0.15;
    // var projectScroll = document.getElementById("projects").scrollHeight - document.documentElement.scrollHeight*0.1;

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

            closeMenu(link.id);
    
        })
    })

    // setInterval(() => {

    //     if (document.documentElement.scrollTop >= aboutScroll && about) {
    //         about = false;
    //         setTimeout(() => {

    //             openMenu(true);

    //             setTimeout(() => {
    //                 closeMenu("middle");
    //                 window.scrollTo(0, aboutScroll + document.documentElement.scrollHeight*0.08);
    //             }, 2000);

    //         }, 100);
            
    //     }

    // }, 100)

    // setInterval(() => {

    //     if (document.documentElement.scrollTop >= projectScroll && projects) {
    //         projects = false;
    //         setTimeout(() => {

    //             openMenu(true);

    //             setTimeout(() => {
    //                 closeMenu("middle");
    //                 window.scrollTo(0, projectScroll + document.documentElement.scrollHeight*0.15);
    //             }, 2000);

    //         }, 100);
            
    //     }

    // }, 100)



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

    if (id != null) {
        var clickedSection = document.getElementById(document.getElementById(id).firstElementChild.dataset.section);
        clickedSection.classList.add("hide");
    }

    // Animation for link to slide in to top position and move link contents

        if (id == "middle") {
        middle("middle");
    } else if (id == "bottom") {
        bottom("bottom");
    } else {
        topLink();
    }

    // Re-add section content

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("hidden");
    })

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

        if (id != null) {
            slideIn(clickedSection);
        }

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