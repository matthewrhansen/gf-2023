//nav link hover

$(".nav_link--tt2").on("mouseenter", function () {
  gsap.fromTo($(this).find(".nav_link_line"), { 
    x: "-110%"
  }, {
    x: "0%",
    duration: 0.5
  });
});

$(".nav_link--tt2").on("mouseleave", function () {
  gsap.to($(this).find(".nav_link_line"), {
    x: "110%",
    duration: 0.5
  });
});

//change menu color on scroll

$(".section_full.is-dark,.section.is-dark").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    markers: true
    onEnter: () => {
      $(".navbar_wrap").addClass("sm0.2");
    },
    onEnterBack: () => {
      $(".navbar_wrap").addClass("sm0.2");
    }
  });
});

$(".section.is-light").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    markers: true
    onEnter: () => {
      $(".navbar_wrap").removeClass("sm0.2");
    },
    onEnterBack: () => {
      $(".navbar_wrap").removeClass("sm0.2");
    }
  });
});
