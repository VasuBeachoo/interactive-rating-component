// Handle rating button click
const ratingButtons = Array.from(document.querySelectorAll(".rating-btn"));
let selectedNum = "";

ratingButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (e.target.matches("div")) {
      ratingButtons.forEach((btn) => {
        btn.className = "rating-btn dark-circle orange-hover";
      });
      e.target.className = "rating-btn dark-circle grey-circle";
      selectedNum = e.target.innerText;
    }
  })
);

// Handle submit button click
const component = document.querySelector(".component");
const submitBtn = document.querySelector(".submit-btn");

function submitComponent() {
  // Clear component on submit
  while (component.firstChild) {
    component.removeChild(component.firstChild);
  }

  // Display thank you screen
  const thankYouImg = document.createElement("img");
  thankYouImg.className = "thank-you-img";
  thankYouImg.src = "./images/illustration-thank-you.svg";
  thankYouImg.alt = "illustration-thank-you";

  const ratingSelection = document.createElement("p");
  ratingSelection.className = "rating-selection orange-text regular-text";
  ratingSelection.innerText = "You selected " + selectedNum + " out of 5";

  const thankYouHeading = document.createElement("h2");
  thankYouHeading.className = "thank-you-heading white-text bold-text";
  thankYouHeading.innerText = "Thank you!";

  const thankYouParagraph = document.createElement("p");
  thankYouParagraph.className = "thank-you-paragraph grey-text regular-text";
  thankYouParagraph.innerText =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

  component.append(
    thankYouImg,
    ratingSelection,
    thankYouHeading,
    thankYouParagraph
  );
}

submitBtn.addEventListener("click", (e) => {
  if (selectedNum !== "") submitComponent();
});
