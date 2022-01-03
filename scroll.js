document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");

    var controller = new ScrollMagic.Controller();

    var welcome = new ScrollMagic.Scene({
        triggerElement: "#welcome",
        reverse:false
    })
    .setClassToggle("#welcome", "slide-in")
    .addTo(controller);

    var welcome = new ScrollMagic.Scene({
        triggerElement: "#welcome-header",
        reverse:false
    })
    .setClassToggle("#welcome-header", "typewriter")
    .addTo(controller);

    var about = new ScrollMagic.Scene({
        triggerElement: "#about-skills",
        reverse:false
    })
    .setClassToggle("#about-skills", "slide-in")
    .addTo(controller);

    var aboutheader = new ScrollMagic.Scene({
        triggerElement: "#goals",
        reverse:false
    })
    .setClassToggle("#about-header", "typewriter")
    .addTo(controller);

    var online = new ScrollMagic.Scene({
        triggerElement: "#education",
        reverse:false
    })
    .setClassToggle("#education", "slide-in")
    .addTo(controller);

    var education = new ScrollMagic.Scene({
        triggerElement: "#program",
        reverse:false
    })
    .setClassToggle("#program", "slide-in")
    .addTo(controller);

    var projects = new ScrollMagic.Scene({
        triggerElement: "#projects",
        reverse:false
    })
    .setClassToggle("#projects", "slide-in")
    .addTo(controller);
    
    var projectheader = new ScrollMagic.Scene({
        triggerElement: "#projects-header",
        reverse:false
    })
    .setClassToggle("#projects-header", "typewriter")
    .addTo(controller);

})