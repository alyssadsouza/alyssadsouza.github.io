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

    // document.querySelector(".projects-btn").addEventListener("click", () => {

    //     openMenu();
    //     setTimeout(() => {
    //         closeMenu("bottom")
    //     }, 2000);
    
    // })

    // setInterval(() => {
    //     slideshow();
    // }, 5000)

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

var img = 1;

function slideshow() {

    document.getElementById(`discord-${img}`).classList.add("disappear");

    setTimeout(() => {
        document.getElementById(`discord-${img}`).classList.add("hidden");
        document.getElementById(`discord-${img}`).classList.remove("disappear");

        img++;
    
        if (img > 3) {
            img = 1;
        }

        document.getElementById(`discord-${img}`).classList.add("appear");


        setTimeout(() => {
            document.getElementById(`discord-${img}`).classList.remove("hidden");
            document.getElementById(`discord-${img}`).classList.remove("appear");    

        }, 500)
        
        
    }, 500)

}

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
            document.getElementById("middle").classList.remove("hidden");
            document.getElementById("bottom").classList.remove("hidden");
            document.getElementById("main-nav").classList.remove("hidden");
            document.querySelector(".desc.visible").classList.add("disappear");
            document.querySelector(".desc.visible").classList.add("hide");
            document.querySelector(".desc.visible").classList.remove("disappear");
            document.querySelector(".desc.visible").classList.add("hidden");
            document.querySelector(".desc.visible").classList.remove("hide");
            document.querySelector(".desc.visible").classList.remove("visible");
            
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
        middle("middle", clickedSection);
    } else if (id == "bottom") {
        bottom("bottom", clickedSection);
    } else {
        topLink(clickedSection);
    }

    // Re-add section content

    clickedSection.classList.remove("hidden");

    // Rotate menu btn
    
    document.getElementById("menu-btn").classList.remove("rotate-menu");
    document.getElementById("menu-btn").classList.add("rerotate-menu");

    // Hide nav

    setTimeout(function() {
        // document.getElementById("main-nav").classList.add("disappear");
        // document.getElementById("main-nav").classList.add("hidden");
        // document.getElementById("main-nav").classList.remove("disappear");
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
            document.querySelectorAll(".first-header").forEach((div) => {
                console.log(div);
                div.firstChild.classList.add("type");
            });

            setTimeout(() => {
                document.querySelectorAll(".first-header").forEach((div) => {
                    div.firstChild.classList.remove("type");
                });
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

function closeNavAnimation(clickedSection) {

    //document.getElementById("top").classList.add("disappear");
    setTimeout(function() {
        // document.getElementById("main-nav").classList.add("hidden");
        // document.getElementById("middle").classList.remove("hidden");
        // document.getElementById("bottom").classList.remove("hidden");
        // document.getElementById("contact-links").classList.remove("hidden");
        // document.getElementById("top").classList.remove("disappear");

        // change descriptions

        console.log(clickedSection.id);

        // show next one

        document.querySelector(`#${clickedSection.id}-desc`).classList.add("hide");
        document.querySelector(`#${clickedSection.id}-desc`).classList.remove("hidden");
        document.querySelector(`#${clickedSection.id}-desc`).classList.add("appear");
        document.querySelector(`#${clickedSection.id}-desc`).classList.remove("hide");
        document.querySelector(`#${clickedSection.id}-desc`).classList.add("visible");
        document.querySelector(`#${clickedSection.id}-desc`).classList.remove("appear");
    }, 750)
}

function topLink(clickedSection) {

    // Position top link and fade out other two

    document.getElementById("middle").classList.add("disappear");
    document.getElementById("bottom").classList.add("disappear");
    //document.getElementById("contact-links").classList.add("disappear");

    setTimeout(function() {
        
        document.getElementById("middle").classList.add("hide");
        document.getElementById("bottom").classList.add("hide");
        //document.getElementById("contact-links").classList.add("hide");

        document.getElementById("middle").classList.remove("disappear");
        document.getElementById("bottom").classList.remove("disappear");
        //document.getElementById("contact-links").classList.remove("disappear");

        setTimeout(() => {

            document.getElementById("middle").classList.remove("hide");
            document.getElementById("bottom").classList.remove("hide");
            //document.getElementById("contact-links").classList.remove("hide");

            document.getElementById("middle").classList.add("hidden");
            document.getElementById("bottom").classList.add("hidden");
            //document.getElementById("contact-links").classList.add("hidden");

            // Animation to close nav
            
            closeNavAnimation(clickedSection);

        }, 750)

    }, 500); 
}

function middle(animation, clickedSection) {

    // Position middle link and fade out other two

    document.getElementById("top").classList.add("disappear");
    document.getElementById("bottom").classList.add("disappear");
    //document.getElementById("contact-links").classList.add("disappear");

    setTimeout(function() {
        
        document.getElementById("top").classList.add("hide");
        document.getElementById("middle").classList.add(animation);
        document.getElementById("bottom").classList.add("hide");
        //document.getElementById("contact-links").classList.add("hide");

        document.getElementById("top").classList.remove("disappear");
        document.getElementById("bottom").classList.remove("disappear");
        //document.getElementById("contact-links").classList.remove("disappear");

        setTimeout(() => {

            document.getElementById("top").classList.remove("hide");
            document.getElementById("bottom").classList.remove("hide");
            //document.getElementById("contact-links").classList.remove("hide");

            // Replace inner links

            var html = document.querySelector("#top").innerHTML;
            moveContent("#middle", "#top");
            moveContent("#bottom", "#middle");
            document.querySelector("#bottom").innerHTML = html;

            // Remove animation classes

            document.getElementById("middle").classList.remove(animation);

            document.getElementById("middle").classList.add("hidden");
            document.getElementById("bottom").classList.add("hidden");
            //document.getElementById("contact-links").classList.add("hidden");

            // Animation to close nav
            
            closeNavAnimation(clickedSection);

        }, 750)

    }, 500); 
}

function bottom(animation, clickedSection) {
    
    
    // Position bottom link and fade out other two

    document.getElementById("top").classList.add("disappear");
    document.getElementById("middle").classList.add("disappear");
    //document.getElementById("contact-links").classList.add("disappear");

    setTimeout(() => {

        document.getElementById("top").classList.add("hide");
        document.getElementById("middle").classList.add("hide");
        document.getElementById("bottom").classList.add(animation);
        //document.getElementById("contact-links").classList.add("hide");

        document.getElementById("top").classList.remove("disappear");
        document.getElementById("middle").classList.remove("disappear");
        //document.getElementById("contact-links").classList.remove("disappear");

        setTimeout(function() {

            document.getElementById("middle").classList.remove("hide");
            document.getElementById("top").classList.remove("hide");
            //document.getElementById("contact-links").classList.remove("hide");

            // Replace inner links
    
            var html = document.querySelector("#top").innerHTML;
            moveContent("#bottom", "#top");
            moveContent("#middle", "#bottom");
            document.querySelector("#middle").innerHTML = html;
    
            // Remove animation classes
    
            document.getElementById("bottom").classList.remove(animation);
    
            document.getElementById("middle").classList.add("hidden");
            document.getElementById("bottom").classList.add("hidden");
            //document.getElementById("contact-links").classList.add("hidden");
            
            // Animation to close nav
    
            closeNavAnimation(clickedSection);
    
        }, 750);

    },500)
}