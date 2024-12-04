document.addEventListener("DOMContentLoaded", function () {
    checkUserLoginStatus();
});

function checkUserLoginStatus() {
    const user = localStorage.getItem("usersRole", "users");
    console.log(user);
    const userRole = localStorage.getItem("usersRole");
    console.log(user);
    console.log(userRole);

    const vacancyPanel = document.getElementById("vacancy-panel");
    const logOut = document.getElementById("çıxış");
    const logo = document.getElementById("logo");
    const logoImg = document.getElementById("logo-img");
    const logN = document.querySelector(".logo-n");


    logOut.addEventListener("click", function () {
        localStorage.removeItem("usersRole");
        location.reload()
    });

    async function fetchCompanies() {
        try {
            const response = await axios.get("https://wooded-trusted-trawler.glitch.me/users");
            const users = response.data;

            if (userRole === "users" && users.length > 0) {
                const company = users[users.length - 1];
                console.log(company);

                const companyImage = company.companyImage || "default-image.jpg";
                logoImg.setAttribute("src", companyImage);
            }
        } catch (error) {
            console.error(error);
        }
    }

    fetchCompanies();

    if (userRole === "company") {
        logOut.classList.remove("hidden");
        logo.setAttribute("href", "#");
        logN.setAttribute("href", "#")
        vacancyPanel.style.display = "block";
    } else if (user) {
        logo.setAttribute("href", "#");
        logN.setAttribute("href", "#")
        logOut.classList.remove("hidden");
        vacancyPanel.style.display = "none";
    } else {
        vacancyPanel.style.display = "none";
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });
});
