let skills = document.getElementsByClassName("skill");
let originalSkillBorderRadius = skills[0].style.borderRadius;
for (let i = 0; i < skills.length; i++) {
    let filter = skills[i].children[0];
    filter.onclick = () => {
        let arrow = filter.children[1];
        if (arrow.getAttribute("opened") == "true") {
            arrow.setAttribute("opened", "false");
            skills[i].setAttribute("expanded", "false");
        }
        else {
            arrow.setAttribute("opened", "true");
            skills[i].setAttribute("expanded", "true");
        }
    }

    requestAnimationFrame(setExpandedHeight);

    function setExpandedHeight() {
        let height = skills[i].offsetHeight;
        let skillChildren = skills[i].children;
        for (let i = 1; i < skillChildren.length; i += 2) {
            height += skillChildren[i].offsetHeight;
        }
        skills[i].style.setProperty("--expanded-height", height.toString() + "px");
    }
}
