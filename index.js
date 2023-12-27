gsap.registerPlugin(ScrollTrigger);

const animations = () => {
  const heroPage = () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content2",
        start: "top bottom",
        end: "+=50",
        scrub: true,
      },
    });

    const text1 = document.querySelectorAll(".text1");
    console.log(window.scrollY);

    tl.to(text1, {
      opacity: 1,
      y: 0,
      stagger: 0.5,
    });

    gsap.to(".textRotate", {
      rotate: 360,
      scrollTrigger: {
        trigger: ".content2",
        start: "top 94%",
        end: "+=100",
        scrub: true,
      },
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".content2",
        start: "top 65%",
        end: "+=250",
        scrub: true,
      },
    });
    const textArray = Array.from(text1);

    // Reverse the array
    const reversedArray = textArray.reverse();

    tl2.to(reversedArray, {
      y: -500,
      opacity: 0,
      stagger: 0.5,
    });

    gsap.to(".rocketImg", {
      x: 480,
      scrollTrigger: {
        trigger: ".content2",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  };
  heroPage();

  const tribecaPage = () => {
    gsap.to(".compass", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".content2",
        start: "top 65%",
        end: "+=450",
        scrub: true,
      },
    });

    gsap.to(".compassImage", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".cloud2",
        start: "bottom 80%",
        end: "+=450",
        scrub: true,
      },
    });

    const text2 = document.querySelectorAll(".text2");
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".content2",
        start: "top 35%",
        end: "+=250",
        scrub: true,
      },
    });

    tl3.to(text2, {
      y: 0,
      opacity: 1,
      stagger: 0.5,
    });

    gsap.to(text2, {
      y: -500,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".cloud2",
        start: "bottom 80%",
        end: "+=150",
        scrub: true,
      },
    });
  };
  tribecaPage();

  const sticky = () => {
    window.onscroll = function () {
      if (window.scrollY > 58) {
        document.querySelector(".hide-text1").classList.add("sticky20");
        document.querySelector(".hide-text2").classList.add("sticky24");
        document.querySelector(".hide-text3").classList.add("sticky28");
        document.querySelector(".compassImage").classList.add("sticky35");
      }
      if (window.scrollY > 160) {
        document.querySelector(".textRotate").style.padding = "0px";
        document.querySelector(".textRotate").style.transition = "padding 1s";
      } else {
        document.querySelector(".textRotate").style.padding = "0 1rem";
      }
      if (window.scrollY > 760) {
        document.querySelector(".textTribeca").classList.add("sticky10");
      }
    };
  };
  sticky();
};
animations();
