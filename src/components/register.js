// const { create } = require("core-js/core/object");

import BASE_URL from "../services/constants/constants";
import endpoints from "../services/endpoints/endpoints";

const usernameSearch = document.querySelector("#username-search")
console.log(usernameSearch);
const locationCompany = document.querySelector("#location-search")
const industrySearch = document.querySelector("#industry-search")
const urlCompany = document.querySelector("#url-search")
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
const imgTake = document.querySelector("#img-take");
const yearTake = document.querySelector("#year-take")
const bioTake = document.querySelector("#bio-take")
const skillsTake = document.querySelector("#Skills-take");
console.log(skillsTake);

const passwordTake = document.querySelector("#password-take");
const confirmPasswordTake = document.querySelector("#confirmPassword-take");
const takeReg = document.querySelector("#take-reg")
console.log(takeReg);
const sigRegSearch = document.querySelector("#sign-reg-search");
const createAt = new Date().toLocaleDateString('tr-TR').replace(/\//g, ',');

// sigRegSearch.addEventListener("click", ()=>{
//   window.location = "login.html"
// })

const allForms = document.querySelectorAll("form");
for (let i = 0; i < allForms.length; i++) {
  const form = allForms[i];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}


btnRegSearch.addEventListener("click", () => {

  if (usernameSearch.value.trim() === "" || passwordSearch.value.trim() === "" || confirmPasswordSearch.value.trim() === "" || locationCompany.value.trim() === "" || industrySearch.value.trim() === "" || urlCompany.value.trim() === "") {
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
    const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=%]*)?$/;
    function validateUrl(url) {
      if (urlRegex.test(url)) {
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
              let password = passwordSearch.value;
              let location = locationCompany.value;
              let createAts =  createAt;
              let website = urlCompany.value;
              let  industry =   industrySearch.value



              console.log("company-alindi");
              localStorage.setItem("company-username", username);
              localStorage.setItem("company-password", password);
              localStorage.setItem("userRole", "company");
              const data = {
               name: username,
               location : location,
               industry : industry,
               createdAt : createAts,
               website : website,
               password : password,
               employeesIds : [],
               reviews : [],
        
              }
              function resetForm() {
                document.getElementById('form').reset();
            }
              fetch(`${BASE_URL}${endpoints.companies}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(responseData => {
        
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    resetForm()
                })
                .catch(error => {
                    console.error('Xəta baş verdi:', error);
                    alert('Xəta baş verdi. Zəhmət olmasa sonra yenidən cəhd edin.');
                });
        
            };
            
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
          title: "Url formati duzgun deil",
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
    validateUrl(urlCompany.value)




  }
})



takeReg.addEventListener("click", () => {

  if (usernameTake.value.trim() === "" || passwordTake.value.trim() === "" || confirmPasswordTake.value.trim() === "" || emailTake.value.trim() === "" || imgTake.value.trim() === "" || yearTake.value.trim() === "" || bioTake.value.trim() === "" ) {
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
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    function validateEmail(mail) {
      if (emailRegex.test(mail)) {
        const imageUrlRegex = /^https?:\/\/.*\.(?:jpg|jpeg|png|gif|bmp|webp|svg)$/;
        function validateImgUrl(img) {
          if (imageUrlRegex.test(img)) {  
            const passwordRegexs = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
            function validatePasswordUsers(password) {
              if (passwordRegexs.test(password)) {
                // console.log("okey");
                // local
                let usersUsername = usernameTake.value;
                let usersPassword = passwordTake.value;
                let usersMail = emailTake.value;
                let profileImages = imgTake.value;
             let userPassword = passwordTake.value;
             let experienceYears = yearTake.value;
             let bio = bioTake.value;
             let skill = skillsTake.value;


                const createAt = new Date().toLocaleDateString('tr-TR').replace(/\//g, ',');


            
                console.log("users-alindi");
                localStorage.setItem("users-username", usersUsername);
                localStorage.setItem("users-password", usersPassword);
                localStorage.setItem("usersEmail" , usersMail );
                localStorage.setItem("usersRole" , "users" );
                const data = {
                  name: usersUsername,
                  email : usersMail,
                  createdAt : createAt,
                  profileImage : profileImages,
                  password : userPassword,
                  experienceYear : experienceYears,
                  bio : bio,
                skills: skill.split(" "),
           
                 }
                 function resetForm() {
                   document.getElementById('form').reset();
               }
                 fetch(`${BASE_URL}${endpoints.users}`, {
                   method: 'POST',
                   headers: {
                       'Content-Type': 'application/json'
                   },
                   body: JSON.stringify(data)
               })
                   .then(response => response.json())
                   .then(responseData => {
           
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Your work has been saved",
                      showConfirmButton: false,
                      timer: 1500
                  });
                       resetForm()
                   })
                   .catch(error => {
                       console.error('Xəta baş verdi:', error);
                       alert('Xəta baş verdi. Zəhmət olmasa sonra yenidən cəhd edin.');
                   });



              } else {
                Swal.fire({
                  title: "Password duzgun yazilmiyib",
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
            validatePasswordUsers(passwordTake.value)

          } else {
            Swal.fire({
              title: "Img duzgun yazilmiyib",
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
        validateImgUrl(imgTake.value)

      } else {
        console.log("mail duz deil");
        
        Swal.fire({
          title: "Email duz deil!",
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













