const sliderTitles = Array.from(
    document.getElementById("slider-titles").children
  ),
  sliderTaps = Array.from(document.getElementById("slider").children);

// Move Slider Taps
sliderTitles.forEach((title, index) => {
  title.addEventListener("click", () => {
    // remove active titles
    sliderTitles.forEach((t) => {
      t.classList.remove("active");
    });
    // add active title for clicked one
    title.classList.add("active");
    // Move Red-Bar On lg-screens
    title.parentElement.style.cssText = `--bar-left: ${(100 / 3) * index}%;`;
    // Change Showen Slider
    // remove active titles
    sliderTaps.forEach((tap) => {
      tap.classList.remove("active");
    });
    // add active title for clicked one
    sliderTaps[index].classList.add("active");
  });
});
