const usernameSearch = document.querySelector("#username-search")
console.log(usernameSearch);
const passwordSearch = document.querySelector("#password-search")
console.log(passwordSearch);
const confirmPasswordSearch = document.querySelector("#confirmPassword-search")
console.log(confirmPasswordSearch);
const btnRegSearch = document.querySelector("#btn-reg-search")
const emailSearch = document.querySelector("#email-search")
console.log(emailSearch);


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


