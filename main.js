let otherLink = document.querySelector(".js-other-link");
const navDiv = document.querySelector(".js-nav-div");
const backTop = document.querySelector(".top");

document.querySelector(".js-other-link a").addEventListener("click", (e) => {
  e.preventDefault();
});

backTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
});

otherLink.addEventListener("click", () => {
  navDiv.style.cssText =
    "display: flex; animation: navDsiplay var(--MAIN-TRANSITION) ease 0.1s forwards;";
});

navDiv.onmouseleave = () => {
  navDiv.style.display = "none";
};

window.onscroll = () => {
  if (window.scrollY >= 500) {
    backTop.style.cssText = "opacity: 1; pointer-events: auto;";
  } else {
    backTop.style.cssText = "opacity: 0; pointer-events: none;";
  }

  scrollerBar();
  skillBarIncreas();
};
/////////////
function scrollerBar() {
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scroller = document.querySelector(".js-scroller");
  const scrollTop = document.documentElement.scrollTop;

  scroller.style.width = `${(scrollTop / height) * 100}%`;
}
/////////////////
const statSection = document.querySelector(".article__stats");
const statIncrease = document.querySelectorAll(".stats__num");

function increaseNumStat(statNum) {
  let goal = statNum.dataset.goal;
  let identifier;

  if (statNum.innerHTML < goal) {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= statSection.offsetTop) {
        if (identifier) {
          clearInterval(identifier);
        }

        identifier = setInterval(() => {
          if (+statNum.innerHTML < goal) {
            statNum.innerHTML = +statNum.innerHTML + 1;
          }
        }, 2000 / goal);
      }
    });
  }
}
statIncrease.forEach((num) => increaseNumStat(num));
////////////////////////////////
function skillBarIncreas() {
  const skillSection = document.querySelector(".article__skills");
  const skillBar = document.querySelectorAll(".bar");

  if (window.scrollY >= skillSection.offsetTop) {
    skillBar.forEach((bar) => {
      bar.style.width = "100%";
    });
  }
}
