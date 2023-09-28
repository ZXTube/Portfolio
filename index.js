let skills = document.getElementsByClassName("skill");
let originalSkillBorderRadius = skills[0].style.borderRadius;
for (let i = 0; i < skills.length; i++) {
    const filter = skills[i].children[0];
    filter.onclick = () => {
        const arrow = filter.children[1];
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
        const skillChildren = skills[i].children;
        let height = skills[i].offsetHeight;
        for (let i = 1; i < skillChildren.length; i += 2) {
            height += skillChildren[i].offsetHeight;
        }
        skills[i].style.setProperty("--expanded-height", height.toString() + "px");
    }
}
const projectImagesHolders = document.getElementsByClassName("project-images-holder");

for (i = 0; i < projectImagesHolders.length; i++) {
    const project = projectImagesHolders[i].parentNode
    project.addEventListener('click', () => {
        const selectedProjectHolder = document.getElementById('selected-project-holder');
        selectedProjectHolder.setAttribute('visible', 'true');

        const children = project.children;
        for (let i = 0; i < children.length; i++) {
            selectedProjectHolder.appendChild(children[i]);
        }
        const [_prevBtn, _nextBtn] = Array.from(selectedProjectHolder.getElementsByTagName('div')[0].children).slice(-2);
        _prevBtn.style.left = '4.7vw';
        _nextBtn.style.right = '4.7vw';
    });

    const images = projectImagesHolders[i].getElementsByTagName("div")[0].querySelectorAll("img");
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

    const nextBtn = projectImagesHolders[i].getElementsByClassName("next-btn")[0];
    const prevBtn = projectImagesHolders[i].getElementsByClassName("prev-btn")[0];
    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);

    showImage(currentIndex);
    const curProject = projectImagesHolders[i];
    setTimeout(() => setInterval(() => { if (!curProject.matches(":hover")) nextImage() }, 3000), Math.floor(Math.random() * 2500));
}