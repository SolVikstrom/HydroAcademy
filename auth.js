(function () {
  var KEY = "hydroAcademyLoggedIn";
  var NAME_KEY = "hydroAcademyUser";

  function isLoggedIn() {
    return localStorage.getItem(KEY) === "1";
  }

  function applyAuthState() {
    var loggedIn = isLoggedIn();
    document.body.classList.toggle("is-logged-in", loggedIn);

    var label = document.querySelector("[data-auth-label]");
    if (label) {
      if (loggedIn) {
        var name = localStorage.getItem(NAME_KEY) || "TEAM Conjet";
        label.textContent = "Inloggad: " + name;
      } else {
        label.textContent = "Ej inloggad";
      }
    }
  }

  function login(name) {
    localStorage.setItem(KEY, "1");
    localStorage.setItem(NAME_KEY, name || "Distributör (demo)");
    applyAuthState();
    closeModal();
  }

  function logout() {
    localStorage.removeItem(KEY);
    localStorage.removeItem(NAME_KEY);
    applyAuthState();
  }

  function openModal() {
    var modal = document.getElementById("login-modal");
    if (modal) modal.classList.add("is-open");
  }

  function closeModal() {
    var modal = document.getElementById("login-modal");
    if (modal) modal.classList.remove("is-open");
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyAuthState();

    document.querySelectorAll("[data-login]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        openModal();
      });
    });

    document.querySelectorAll("[data-logout]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        logout();
      });
    });

    document.querySelectorAll("[data-close-modal]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        closeModal();
      });
    });

    var form = document.getElementById("login-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var input = document.getElementById("login-name");
        login(input && input.value ? input.value.trim() : "Distributör (demo)");
      });
    }

    var backdrop = document.getElementById("login-modal");
    if (backdrop) {
      backdrop.addEventListener("click", function (e) {
        if (e.target === backdrop) closeModal();
      });
    }
  });
})();
