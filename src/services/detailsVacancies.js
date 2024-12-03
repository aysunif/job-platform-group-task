    import BASE_URL from "./constants/constants.js";
import endpoints from "./endpoints/endpoints.js";

function getVacancyDetails() {
    const vacancyId = new URLSearchParams(window.location.search).get("id");

    if (!vacancyId) {
        alert("Vacancy ID not found.");
        return;
    }

    const detailsContainer = document.querySelector(".container");

    axios.get(`${BASE_URL}${endpoints.vacancies}/${vacancyId}`) 
        .then(response => {
            const vacancy = response.data;

            document.getElementById("vacancyTitle").innerText = vacancy.title;
            document.getElementById("vacancyDescription").innerText = vacancy.description;
            document.getElementById("vacancyPostedAt").innerText = `Posted on: ${vacancy.postedAt}`;

            const jobDescription = document.getElementById("vacancyDetails");
            jobDescription.innerHTML = `
                <p><strong>Description:</strong> ${vacancy.jobDescription || "No description available."}</p>
                <p><strong>Salary:</strong> ${vacancy.salary || "Not specified"}</p>
                <p><strong>Employment Type:</strong> ${vacancy.employmentType}</p>
                <p><strong>Status:</strong> ${vacancy.isActive ? "Active" : "Inactive"}</p>
            `;

            const statusButton = document.getElementById("vacancyStatus");
            const statusClass = vacancy.isActive ? "bg-green-500 text-white" : "bg-yellow-500 text-black";
            const statusText = vacancy.isActive ? "Active" : "Pending";
            statusButton.innerHTML = `
                <button class="${statusClass} px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:opacity-90 transition duration-300">
                    ${statusText}
                </button>
            `;
        })
        .catch(error => {
            console.error(error.message);
            detailsContainer.innerHTML = `
                <p class="text-red-600 text-center">Vacancy details could not be loaded. Please try again later.</p>
            `;
        });
}

document.addEventListener("DOMContentLoaded", () => {
    getVacancyDetails();
});

document.querySelector("#go-backBtn").addEventListener("click", function(){
    history.back()
})