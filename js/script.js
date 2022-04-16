const ratingButtons = Array.from(document.querySelectorAll(".rating-btn"));

ratingButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (e.target.matches("div")) {
      ratingButtons.forEach((btn) => {
        btn.className = "rating-btn dark-circle orange-hover";
      });
      e.target.className = "rating-btn dark-circle grey-circle";
    }
  })
);
