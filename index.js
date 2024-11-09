gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".right",
  { opacity: 0, duration: 10, rotation: 0 },
  { opacity: 0.5, duration: 10, rotation: -30 }
);

gsap.fromTo(
  ".left",
  { opacity: 0, duration: 10, x: 0 },
  { opacity: 0.5, duration: 10, x: -30 }
);

gsap.fromTo(
  ".left2",
  { opacity: 0, duration: 10, rotation: 0 },
  {
    opacity: 0.5,
    duration: 10,
    rotation: 30,
    scrollTrigger: {
      trigger: ".left2",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: true,
    },
  }
);

gsap.fromTo(
  ".left3",
  { opacity: 0, duration: 10, rotation: 30 },
  {
    opacity: 0.9,
    duration: 10,
    rotation: -3600,
    scrollTrigger: {
      trigger: ".left2",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: true,
    },
  }
);
