var body = document.querySelector("body");
var heroImg = document.querySelector(".hero-right-part img");
var footerImg = document.querySelectorAll(".footer-img-container img");

footerImg.forEach((e) => {
    e.addEventListener("click", (i) => {
        var indexImg = getIndex(e);
        changeImg(indexImg);
    });
});

function getIndex(j) {
    for (var k = 0; k < footerImg.length; k++) {
        var indexNum = footerImg[k] == j ? k : null;
        if (indexNum) {
            break;
        }
    }
    k = k == 3 ? 0 : k;
    return k;
}

function changeImg(num) {
    switch (num) {
        case 0:
            heroImg.src = "./images/pepsi001.png";
            body.style.backgroundColor = "#0260BF";
            break;
        case 1:
            heroImg.src = "./images/pepsi002.png";
            body.style.backgroundColor = "#E9422F";
            break;
        case 2:
            heroImg.src = "./images/pepsi003.png";
            body.style.backgroundColor = "#1E1E1E";
            break;
        default:
            console.log("img not found");
    }
}
