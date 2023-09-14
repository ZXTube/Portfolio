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
const projectImagesHolder = document.getElementsByClassName("project-images-holder");

for (i = 0; i < projectImagesHolder.length; i++) {
    const images = projectImagesHolder[i].getElementsByTagName("div")[0].querySelectorAll("img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.setAttribute("visible", "true");
            } else {
                img.setAttribute("visible", "false");
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    const nextBtn = projectImagesHolder[i].getElementsByClassName("next-btn")[0];
    const prevBtn = projectImagesHolder[i].getElementsByClassName("prev-btn")[0];
    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);

    showImage(currentIndex);
    const curProject = projectImagesHolder[i];
    setTimeout(() => setInterval(() => { if (!curProject.matches(":hover")) nextImage() }, 3000), Math.floor(Math.random() * 2500));
}