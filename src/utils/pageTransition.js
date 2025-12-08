export const slideInOutTransition = () => {
  // OLD VIEW slides out LEFT
  document.documentElement.animate(
    [{ transform: "translateX(0)" }, { transform: "translateX(-35%)" }],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    },
  );

  // NEW VIEW slides in from RIGHT
  document.documentElement.animate(
    [{ transform: "translateX(100%)" }, { transform: "translateX(0%)" }],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    },
  );
};
