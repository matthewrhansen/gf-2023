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

$(".section.is-light").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top center",
    end: "",
    markers: true
    onEnter: () => {
      $(".navbar_wrap").addClass("sm0.1");
    },
    onEnterBack: () => {
      $(".navbar_wrap").addClass("sm0.1");
    }
  });
});

$(".section_full.is-dark,.section.is-dark").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 5%",
    end: "bottom 5%",
    markers: true
    onEnter: () => {
      $(".navbar_wrap").removeClass("sm0.1");
    },
    onEnterBack: () => {
      $(".navbar_wrap").removeClass("sm0.1");
    }
  });
});
