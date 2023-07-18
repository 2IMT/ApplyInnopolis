const xRay = document.querySelector("#x-ray");
const logout = document.querySelector("#log_out");
const nameId = document.querySelector("#name_id");
const exitRed = document.querySelector("#button_exit_red");
const exitGreen = document.querySelector("#button_exit_green");
const exitIcon = document.querySelector("#exit_button");

exitIcon.addEventListener('mouseover', function () {
    logout.style.opacity = "1";
    nameId.style.opacity = "0";
    exitRed.style.opacity = "1";
    exitGreen.style.opacity = "0";
    if (window.innerWidth < 1024) {
        xRay.style.right = "12px"
    } else {
        xRay.style.right = "15px"
    }
    xRay.style.color = "#E64622";
});

exitIcon.addEventListener('mouseout', function () {
    logout.style.opacity = "0";
    nameId.style.opacity = "1";
    exitRed.style.opacity = "0";
    exitGreen.style.opacity = "1";
    if (window.innerWidth < 1024) {
        xRay.style.right = "65px"
    } else {
        xRay.style.right = "80px"
    }
    xRay.style.color = "#40BA21";
});
