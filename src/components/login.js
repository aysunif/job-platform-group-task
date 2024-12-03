const loginEmail = document.querySelector("#login-email")
console.log(loginEmail);
const loginPassword = document.querySelector("#login-password")
console.log(loginPassword);
const loginSignIn = document.querySelector("#login-sign-in")
console.log(loginSignIn);


loginSignIn.addEventListener("click", ()=>{
    if (loginEmail.value.trim()==="") {
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
        if (loginPassword.value.trim()==="") {
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
            let storedMail = localStorage.getItem("email");
            let storedPass = localStorage.getItem("password");
            if (loginEmail.value === storedMail && loginPassword.value === storedPass ) {
                console.log("ish axtaran");
                
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
})