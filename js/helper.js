let googleAppsMenu;
let googleUserMenu;

/**
 * @param {string} selectorToShow - Elements to show after click.
 */
const toggleMenu = ({ selectorToShow, selectorToHide }) => {
  document.querySelector(selectorToShow).classList.toggle("menu-open");
  document.querySelector(selectorToHide).classList.remove("menu-open");
};

window.addEventListener("DOMContentLoaded", () => {
  let appMenuModelTrigger = document.querySelector(".appMenuModelTrigger");
  let userMenuModelTrigger = document.querySelector(".userMenuModelTrigger");

  appMenuModelTrigger.onclick = function (e) {
    e.stopPropagation();
    toggleMenu({
      selectorToShow: "#google-apps-menu",
      selectorToHide: "#google-user-menu",
    });
  };
  userMenuModelTrigger.onclick = function (e) {
    e.stopPropagation();
    toggleMenu({
      selectorToShow: "#google-user-menu",
      selectorToHide: "#google-apps-menu",
    });
  };

  document.querySelector("#main-div").onclick = () => {
    if (!document.querySelector(".menu-open")) return;

    document.querySelectorAll(".modal").forEach((modal) => {
      modal.classList.remove("menu-open");
    });
  };
});
