let dropdownArrows = Array.prototype.slice.call(document.getElementsByClassName("dropdown-arrow-holder"), 0);
dropdownArrows = dropdownArrows.concat(Array.prototype.slice.call(document.getElementsByClassName("sub-dropdown-arrow-holder"), 0));
for (let i = 0; i < dropdownArrows.length; i++) {
    dropdownArrows[i].onclick = () => {
        let arrow = dropdownArrows[i].children[0];
        if (arrow.getAttribute("opened") == "true") {
            arrow.style = "transform: rotate(0deg); transition: transform 0.5s";
            arrow.setAttribute("opened", "false");
            document.getElementsByClassName("sub-holder")[0].setAttribute("lolz", "false");
        }
        else {
            arrow.setAttribute("opened", "true");
            arrow.style = "transform: rotate(90deg); transition: transform 0.5s";
            document.getElementsByClassName("sub-holder")[0].setAttribute("lolz", "true");
        }
    }
}

let lolz = document.getElementsByClassName("sub-holder")[0].children;
let bwah = 0;
for (let i = 1; i < lolz.length; i += 2) {
    bwah += lolz[i].offsetHeight;
}
document.getElementsByClassName("sub-holder")[0].style.setProperty("--expanded-height", bwah.toString() + "px");
