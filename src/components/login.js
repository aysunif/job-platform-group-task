

const loginEmail = document.querySelector("#login-email")
console.log(loginEmail);
const loginPassword = document.querySelector("#login-password")
console.log(loginPassword);
const loginSignIn = document.querySelector("#login-sign-in")
console.log(loginSignIn);
const allForm = document.querySelectorAll(".login-forms");
for (let i = 0; i < allForm.length; i++) {
  const form = allForm[i];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

loginSignIn.addEventListener("click", ()=>{
  console.log("click");
  
  console.log(loginEmail.value);
  console.log(loginPassword.value);
  
  
    if (loginEmail.value.trim()==="" || loginPassword.value.trim()==="") {
      console.log("salam");
      
        Swal.fire({
            title: "Input boshdur!",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    } else {
      
            // let storedUsername = localStorage.getItem("usersMail");
            // let storedPass = localStorage.getItem("usersPassword");

            // console.log(storedUsername);
            // console.log(storedPass);
            
             const emaillog = loginEmail.value;
             const password = loginPassword.value;
             let BASE_URL = "https://quilted-tangy-part.glitch.me/";
             if (localStorage.getItem("usersRole") === "users") {
              url = `${BASE_URL}users`;
            } else {
              url += `${BASE_URL}companies`;
            }
            fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    const existUserWithEmail = users.find((user) => user.email === emaillog);
    if (existUserWithEmail) {
      if (existUserWithEmail.password === password) {
        console.log("success");
        window.location = "viewVacations.html";
      } else {
        console.log("fail");
      }
    } else {
      console.log("Bu emailde user yoxdu");
    }
  })
          
            
        }
        
    }
)