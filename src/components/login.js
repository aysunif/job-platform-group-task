const loginEmail = document.querySelector("#login-email");
console.log(loginEmail);
const loginPassword = document.querySelector("#login-password");
console.log(loginPassword);
const loginSignIn = document.querySelector("#login-sign-in");
console.log(loginSignIn);
const allForm = document.querySelectorAll(".login-forms");

for (let i = 0; i < allForm.length; i++) {
  const form = allForm[i];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

loginSignIn.addEventListener("click", () => {
  if (loginEmail.value.trim() === "" || loginPassword.value.trim() === "") {
    Swal.fire({
      title: "Input boş!",
      showClass: {
        popup: `animate__animated animate__fadeInUp animate__faster`,
      },
      hideClass: {
        popup: `animate__animated animate__fadeOutDown animate__faster`,
      },
    });
  } else {
    const emaillog = loginEmail.value;
    const password = loginPassword.value;
    let BASE_URL = "https://wooded-trusted-trawler.glitch.me/";
    let url = BASE_URL;

    if (localStorage.getItem("usersRole") === "users") {
      url = `${BASE_URL}users`;

      fetch(url)
        .then((response) => response.json())
        .then((users) => {
          const existUserWithEmail = users.find((user) => user.email === emaillog);
          if (existUserWithEmail) {
            if (existUserWithEmail.password === password) {
              window.location = "http://localhost:5173/src/pages/viewVacations.html";
            } else {
              Swal.fire("Şifre yanlış");
            }
          } else {
            Swal.fire("Bu e-posta ile qeydiyyatda bir istifadəçi tapılmadı.");
          }
        });
    } else if (localStorage.getItem("usersRole") === "company") {
      const storedCompanyUsername = localStorage.getItem("company-username");
      const storedCompanyPassword = localStorage.getItem("company-password");

      if (storedCompanyUsername && storedCompanyPassword) {
        if (emaillog === storedCompanyUsername && password === storedCompanyPassword) {
          window.location = "http://localhost:5173/src/pages/viewVacations.html";
        } else {
          Swal.fire("Şifre veya kullanıcı adı yanlış");
        }
      } else {
        Swal.fire("Şirket bilgileri bulunamadı.");
      }
    } else {
      Swal.fire("Geçersiz rol. Lütfen tekrar giriş yapın.");
    }
  }
});
