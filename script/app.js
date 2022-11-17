var body = document.getElementsByTagName("body");
var heroImg = document.querySelector(".hero-right-part img");
var footerImg = document.querySelectorAll(".footer-img-container img");

// for (var i = 0; i < footerImg.length; i++) {
//     console.log(footerImg[i].src)
//     footerImg[i].addEventListener("click", () => {
//         // i = Number(i);
//         // changeImg(i);
//         console.log(footerImg[i].src)
//     });
// }
footerImg.forEach((e) => {
    // console.log(e.src)
    e.addEventListener("click", (i) => {
        console.log(footerImg.indexOf(e))
        // console.log(footerImg.index(this))
        console.log(i)
    })
})
// footerImg[0].addEventListener("click", () => {
//     // i = Number(i);
//     heroImg.src = "./images/pepsi002.png";
//     // changeImg(i);
// });              


function getIndex() {
    
}

function changeImg(num) {
    console.log(num)
    switch (num) {
        case 0:
            heroImg.src = "./images/pepsi001.png";
            break;
        case 1:
            heroImg.src = "./images/pepsi002.png";
            break;
        case 2:
            heroImg.src = "./images/pepsi003.png";
            break;
        default:
            console.log("img not found");
    }
}
