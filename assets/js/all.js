"use strict";

//tooltip for everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
}); //點擊 nav 切換頁籤時滾到 tab 區塊效果 by 助教

function heightToTop(ele) {
  var bridge = ele;
  var root = document.body;
  var height = 0;

  do {
    height += bridge.offsetTop;
    bridge = bridge.offsetParent;
  } while (bridge !== root);

  return height;
}

function goForm() {
  window.scrollTo({
    top: heightToTop(form) - 170,
    behavior: "smooth"
  });
}

var bottomBtn = document.getElementById("bottomBtn");
bottomBtn.style.display = "none";

window.onscroll = function () {
  var t = document.documentElement.scrollTop || document.body.scrollTop;

  if (bottomBtn !== null) {
    if (t > heightToTop(document.getElementsByClassName("tab-content")[0]) - 100 && t < heightToTop(form)) {
      bottomBtn.style.display = "block";
    } else {
      bottomBtn.style.display = "none";
    }
  }
}; // form validation  by 助教


(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    }, false);
  });
})();
//# sourceMappingURL=all.js.map
