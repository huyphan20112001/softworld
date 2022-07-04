const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerBtn = $(".header-menu__icon");
const overplay = $(".overlay");
const headerMobile = $(".header-mobile");
const closeBtn = $(".header-mobile__close");

const app = {
  handleEvents: function () {
    headerBtn.onclick = function () {
      overplay.classList.add("enable");
      headerMobile.classList.add("enable");

      overplay.classList.remove("disable");
      headerMobile.classList.remove("disable");
      // console.log(overplay.classList);
    };
    closeBtn.onclick = function () {
      overplay.classList.add("disable");
      headerMobile.classList.add("disable");

      overplay.classList.remove("enable");
      headerMobile.classList.remove("enable");
    };

    overplay.onclick = function () {
      overplay.classList.add("disable");
      headerMobile.classList.add("disable");

      overplay.classList.remove("enable");
      headerMobile.classList.remove("enable");
    };
  },
  start: function () {
    this.handleEvents();
  },
};
app.start();
