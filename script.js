(function () {
  var nav = document.querySelector(".site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var form = document.getElementById("feedback-form");
  var year = document.getElementById("year");
  var chips = document.querySelectorAll(".chip");
  var sections = document.querySelectorAll(".menu-section");

  if (year) year.textContent = String(new Date().getFullYear());

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var target = chip.getAttribute("data-filter");
      chips.forEach(function (c) {
        c.classList.toggle("is-active", c === chip);
      });
      sections.forEach(function (section) {
        var show = target === "all" || section.getAttribute("data-category") === target;
        section.hidden = !show;
      });
    });
  });

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = (form.elements.namedItem("name") || {}).value || "";
      var email = (form.elements.namedItem("email") || {}).value || "";
      var message = (form.elements.namedItem("message") || {}).value || "";
      var subject = "Feedback for Kesar Biryani from " + name.trim();
      var body =
        "Name: " +
        name.trim() +
        "\nEmail: " +
        email.trim() +
        "\n\n" +
        message.trim();
      window.location.href =
        "mailto:kesarbiryani.ktm@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
    });
  }

  var waForm = document.getElementById("feedback-whatsapp");
  if (waForm && form) {
    waForm.addEventListener("click", function () {
      var name = (form.elements.namedItem("name") || {}).value || "";
      var message = (form.elements.namedItem("message") || {}).value || "";
      var text =
        "Hello Kesar Biryani, this is " +
        (name.trim() || "a guest") +
        "." +
        (message.trim() ? " " + message.trim() : " I would like to share feedback.");
      window.open("https://wa.me/9779762179487?text=" + encodeURIComponent(text), "_blank", "noopener");
    });
  }
})();
