const filterProjectNav = document.querySelector(".items");
const filterProjectCard = document.querySelectorAll(".projects .card");

filterProjectNav.onclick = (selectedItem) => {
  if (selectedItem.target.classList.contains("item")) {
    filterProjectNav.querySelector(".active").classList.remove("active");
    selectedItem.target.classList.add("active");
    let filterName = selectedItem.target.getAttribute("data-name");

    filterProjectCard.forEach((card) => {
      let filterCard = card.getAttribute("data-name");
      if (filterCard == filterName || filterName == "all") {
        card.classList.remove("hide");
        card.classList.add("show");
      } else {
        card.classList.add("hide");
        card.classList.remove("show");
      }
    });
  }
};
// console.log("good evening");
