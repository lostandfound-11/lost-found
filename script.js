
// =========================================
// GET ELEMENTS
// =========================================

const leftPanel = document.querySelector(".left");
const rightPanel = document.querySelector(".right");
const panels = document.querySelectorAll(".panel");
const titles = document.querySelectorAll("h1");
// =========================================
// TYPEWRITER ANIMATION
// =========================================

if (titles.length >= 2) {

    function typeWriter(element, text, speed = 70, callback = null){

        let index = 0;

        element.innerHTML = "";

        const cursor = document.createElement("span");
        cursor.className = "cursor";
        cursor.textContent = "_";

        function type(){

            if(index < text.length){

                if(text[index] === "\n"){
                    element.appendChild(document.createElement("br"));
                }else{
                    element.append(text[index]);
                }

                element.appendChild(cursor);

                index++;

                setTimeout(type,speed);

            }else{

                element.appendChild(cursor);

                if(callback) callback();

            }

        }

        type();

    }

    const leftText = titles[0].innerHTML.replace(/<br\s*\/?>/gi,"\n");
    const rightText = titles[1].innerHTML.replace(/<br\s*\/?>/gi,"\n");

    titles[0].innerHTML = "";
    titles[1].innerHTML = "";

    typeWriter(titles[0], leftText, 70, () => {

        setTimeout(() => {

            typeWriter(titles[1], rightText, 70);

        },300);

    });

}

// =========================================
// PANEL HOVER SCALE
// =========================================

panels.forEach(panel => {

    panel.addEventListener("mouseenter", () => {

        panel.style.transition = "0.5s";
        panel.style.transform += " scale(1.02)";

    });

    panel.addEventListener("mouseleave", () => {

        panel.style.transform = "";

    });

});

// =========================================
// PAGE SLIDE TRANSITION
// =========================================

leftPanel.addEventListener("click", function(e){

    e.preventDefault();

    gsap.to(".container",{

        x:"100vw",
        duration:0.8,
        ease:"power4.inOut",

        onComplete:()=>{

            window.location.href="theatre.html";

        }

    });

});

if(leftPanel && rightPanel){

    leftPanel.addEventListener("click",function(e){

        e.preventDefault();

        gsap.to(".container",{

            x:"100vw",
            duration:0.8,
            ease:"power4.inOut",

            onComplete(){

                window.location.href="theatre.html";

            }

        });

    });

    rightPanel.addEventListener("click",function(e){

        e.preventDefault();

        gsap.to(".container",{

            x:"-100vw",
            duration:0.8,
            ease:"power4.inOut",

            onComplete(){

                window.location.href="film.html";

            }

        });

    });

}


rightPanel.addEventListener("click", function(e){

    e.preventDefault();

    gsap.to(".container",{

        x:"-100vw",
        duration:0.8,
        ease:"power4.inOut",

        onComplete:()=>{

            window.location.href="film.html";

        }

    });

});

const leftPanel = document.querySelector(".left");
const rightPanel = document.querySelector(".right");

if (leftPanel && rightPanel) {

    // Home page only code here

}

const titles = document.querySelectorAll("h1");

if (titles.length >= 2) {

    // Typewriter code here

}

panels.forEach(panel => {

    panel.addEventListener("mouseenter", () => {

        panel.style.transform = "scale(1.02)";

    });

    panel.addEventListener("mouseleave", () => {

        panel.style.transform = "";

    });

});

const theatre = document.getElementById("theatre-link");
const film = document.getElementById("film-link");

theatre.addEventListener("click", function(e){

    e.preventDefault();

    document.body.classList.add("page-exit");
    document.querySelector(".container").classList.add("slide-right");

    setTimeout(()=>{
        window.location.href=this.href;
    },900);

});

film.addEventListener("click", function(e){

    e.preventDefault();

    document.body.classList.add("page-exit");
    document.querySelector(".container").classList.add("slide-left");

    setTimeout(()=>{
        window.location.href=this.href;
    },900);

});

const videos = document.querySelectorAll(".film-video");

videos.forEach(video => {
    video.addEventListener("click", () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
document.querySelectorAll(".video-wrapper").forEach(wrapper => {

    const video = wrapper.querySelector("video");
    const btn = wrapper.querySelector(".play-btn");

    btn.addEventListener("click", () => {
        video.play();
        btn.style.display = "none";
    });

    video.addEventListener("pause", () => {
        btn.style.display = "block";
    });

    video.addEventListener("ended", () => {
        btn.style.display = "block";
    });

});

function openVideo(src){

    const modal=document.getElementById("videoModal");
    const video=document.getElementById("myVideo");
    const source=document.getElementById("videoSource");

    source.src=src;

    video.load();

    modal.style.display="flex";

}

function closeVideo(){

    document.getElementById("myVideo").pause();

    document.getElementById("videoModal").style.display="none";

}

document.getElementById("videoModal").onclick=function(e){

    if(e.target===this){

        closeVideo();

    }

}