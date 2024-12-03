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
    if (loginEmail.value.trim()==="" || loginPassword.value.trim()==="") {
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
            let storedUsername = localStorage.getItem("usersMail");
            let storedPass = localStorage.getItem("usersPassword");
            if (loginEmail.value === storedUsername && loginPassword.value === storedPass ) {
                console.log("daxil oldunuz");
                
            //   window.location = "viewVacations.html" 
            //   burani yoxlaa  
            } else {
                Swal.fire({
                    title: "Istifadeci ve ya shifre  yanlishdir",
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
                
            }
            
        }
        
    }
)