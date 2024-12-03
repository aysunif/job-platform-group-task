const usernameSearch = document.querySelector("#username-search")
console.log(usernameSearch);
const passwordSearch = document.querySelector("#password-search")
console.log(passwordSearch);
const confirmPasswordSearch = document.querySelector("#confirmPassword-search")
console.log(confirmPasswordSearch);
const btnRegSearch = document.querySelector("#btn-reg-search")
const emailSearch = document.querySelector("#email-search")
console.log(emailSearch);
const usernameTake = document.querySelector("#username-take")
console.log(usernameTake);
const emailTake = document.querySelector("#email-take");
console.log(emailTake);
const passwordTake = document.querySelector("#password-take");
const confirmPasswordTake = document.querySelector("#confirmPassword-take");
const takeReg = document.querySelector("#take-reg")
console.log(takeReg);
const sigRegSearch = document.querySelector("#sign-reg-search")
sigRegSearch.addEventListener("click", ()=>{
  window.location = "login.html"
})

const allForms = document.querySelectorAll("form");
for (let i = 0; i < allForms.length; i++) {
  const form = allForms[i];

  form.addEventListener("submit", (e) => {    
    e.preventDefault();
  });
}


btnRegSearch.addEventListener("click", () => {

    if (usernameSearch.value.trim() === "" || passwordSearch.value.trim() === "" || confirmPasswordSearch.value.trim() === "") {
        Swal.fire({
            title: "Input boshdur   ",
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
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        function validateEmail(email) {
          if (emailRegex.test(email)) {
             let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        function validatePassword(password) {
            if (passwordRegex.test(password)) {
              
        if (passwordSearch.value !== confirmPasswordSearch.value) {
            Swal.fire({
                title: "Password eyni deil!",
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
            let username = usernameSearch.value;
            let email = emailSearch.value;
            let password = passwordSearch.value
            console.log("eynidir"); 
            localStorage.setItem("ishaxtaran-username", username);
            localStorage.setItem("ishaxtaran-email", email);
            localStorage.setItem("ishaxtaran-password", password);
        }
            } else {
                Swal.fire({
                    title: "Şifrə uyğun deyil!",
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
            validatePassword(passwordSearch.value)
          } else {
            Swal.fire({
                title: "Mail formati duzgun deil",
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
        validateEmail(emailSearch.value)
      
  
    
    
    }
})



takeReg.addEventListener("click", () => {

  if (usernameTake.value.trim() === "" || passwordTake.value.trim() === "" || confirmPasswordTake.value.trim() === "") {
      Swal.fire({
          title: "Input boshdur   ",
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
      let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      function validateEmail(email) {
        if (emailRegex.test(email)) {
           let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      function validatePassword(password) {
          if (passwordRegex.test(password)) {
            
      if (passwordTake.value !== confirmPasswordTake.value) {
          Swal.fire({
              title: "Password eyni deil!",
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
          let username = usernameTake.value;
          let email = emailTake.value;
          let password = passwordTake.value
          console.log("eynidir"); 
          localStorage.setItem("ishgoturen-username", username);
          localStorage.setItem("ishgoturen-email", email);
          localStorage.setItem("ishgoturen-password", password);
      }
          } else {
              Swal.fire({
                  title: "Şifrə uyğun deyil!",
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
          validatePassword(passwordTake.value)
        } else {
          Swal.fire({
              title: "Mail formati duzgun deil",
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
      validateEmail(emailTake.value)
    

  
  
  }
})













