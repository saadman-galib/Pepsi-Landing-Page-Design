const body = document.querySelector("body");
const heroImg = document.querySelector(".hero-right-part img");
const footerImg = document.querySelectorAll(".footer-img-container img");
const navIcon = document.querySelector(".nav-icon");
const navbarItems = document.querySelector(".navbar-right-part");
const socialIcons = document.querySelectorAll(".social-icons i");
const navList = document.querySelectorAll(".navbar-right-part ul li");

footerImg.forEach((img) => {
    img.addEventListener("click", (e) => {
        heroImg.src = e.target.src;
        body.style.backgroundColor = e.target.dataset.bg;
        changeSocialIconsBG(e.target.dataset.bg);
        changeNavLists(e.target.dataset.bg);
    });
});

navIcon.addEventListener("click", () => {
    navIcon.classList.toggle("fa-bars");
    const closeAdded = navIcon.classList.toggle("fa-xmark");

    if (closeAdded) {
        navbarItems.style.left = "0";
    } else {
        navbarItems.style.left = "-165%";
    }
});

function changeSocialIconsBG(iconColor) {
    // document.querySelector(".social-icons i span").style.backgroundColor =
    //     iconColor;

    // socialIcons.forEach((a) => {
    //     a.style.backgroundColor = iconColor;
    //     // console.log(a)
    // });

    // socialIcons.forEach((a) => {
    // socialIcons[0].addEventListener("mouseenter", () => {
    //     a.style.backgroundColor = "#fff";
    // });
    // socialIcons[0].addEventListener("mouseout", () => {
    //     a.style.backgroundColor = iconColor;
    // });
    // a.style.backgroundColor = iconColor;
    // });
    socialIcons.item(0).style.backgroundColor = iconColor;
    socialIcons.item(1).style.backgroundColor = iconColor;
    socialIcons.item(2).children.item(0).style.backgroundColor = iconColor;

    socialIcons.item(0).addEventListener("mouseenter", () => {
        socialIcons.item(0).style.backgroundColor = "#fff";
    });
    socialIcons.item(0).addEventListener("mouseout", (e) => {
        e.target.style.backgroundColor = iconColor;
    });

    socialIcons.item(1).addEventListener("mouseenter", () => {
        socialIcons.item(1).style.backgroundColor = "#fff";
    });
    socialIcons.item(1).addEventListener("mouseout", () => {
        socialIcons.item(1).style.backgroundColor = iconColor;
    });

    socialIcons.item(2).addEventListener("mouseenter", () => {
        document.querySelector(".social-icons i span").style.backgroundColor =
            iconColor = "#fff";
    });
    socialIcons.item(2).addEventListener("mouseout", () => {
        document.querySelector(".social-icons i span").style.backgroundColor =
            iconColor;
    });
}

function changeNavLists(listColor) {
    navList.forEach((b) => {
        b.style.backgroundColor = listColor;
    });
}
try {
    socialIcons.item(2).children.item(0).style.backgroundColor = "#0260BF";
} catch (err) {
    console.log(err);
} finally {
    console.log(socialIcons.item(2).children.item(0));
}

changeSocialIconsBG("0260BF");
