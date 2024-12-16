document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".calendar__date");
  let counter = 7;

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("calendar__date--active");

      if (this.classList.contains("calendar__date--active")) {
        this.setAttribute("data-before", counter);
        this.classList.toggle("even", counter % 2 === 0);
        this.classList.toggle("odd", counter % 2 !== 0);

        counter++;
      } else {
        this.removeAttribute("data-before");
        this.classList.remove("even", "odd");

        counter--;
      }
    });
  });
});
