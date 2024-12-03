document.addEventListener("DOMContentLoaded", function () {
    checkUserLoginStatus();
});

function checkUserLoginStatus() {
    const user = localStorage.getItem("users-username");
    const userRole = localStorage.getItem("usersRole");
    console.log(user);
    console.log(userRole);

    const vacancyPanel = document.getElementById("vacancy-panel");
    const logOut = document.getElementById("çıxış");
    const logo = document.getElementById("logo");
    const logoImg = document.getElementById("logo-img");

    logOut.addEventListener("click", function () {
        localStorage.removeItem("usersRole");
        location.reload()
    });

    async function fetchCompanies() {
        try {
            const response = await axios.get("https://wooded-trusted-trawler.glitch.me/companies");
            const companies = response.data;
            
            if (userRole === "companie" && companies.length > 0) {
                const company = companies[companies.length - 1];
                console.log(company);

                const companyImage = company.companyImage || "default-image.jpg";
                logoImg.setAttribute("src", companyImage);
            }
        } catch (error) {
            console.error("Error fetching companies:", error);
        }
    }

    fetchCompanies();

    if (userRole === "companie") {
        logOut.classList.remove("hidden");
        logo.setAttribute("href", "#");
        vacancyPanel.style.display = "block";
    } else if (user) {
        logo.setAttribute("href", "#");
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
