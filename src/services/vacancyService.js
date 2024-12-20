import BASE_URL from "./constants/constants.js";
import endpoints from "./endpoints/endpoints.js";

let allVacancies = [];

function fetchData() {
    const vacanciesContainer = document.querySelector(".vacanciesContainer");

    axios.get(BASE_URL + endpoints.vacancies)
        .then(response => {
            allVacancies = response.data;
            displayVacancies(allVacancies);
        })
        .catch(error => {
            console.error(error.message);

            vacanciesContainer.innerHTML = `
                <p style="color: red;">Vacancies could not be loaded. Please try again later.</p>
            `;
        });
}

function displayVacancies(vacancies) {
    const vacanciesContainer = document.querySelector(".vacanciesContainer");
    vacanciesContainer.innerHTML = "";

    vacancies.forEach(vacancy => {
        const vacancyItem = document.createElement("div");
        vacancyItem.className = "vacancy-item";
        vacancyItem.innerHTML = `
            <div class="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow mt-3">
                <div class="flex items-center gap-4">
                    <img src="https://via.placeholder.com/50" alt="Job"
                        class="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <h3 class="text-lg font-semibold">${vacancy.title}</h3>
                        <p class="text-sm text-gray-600">${vacancy.description} | ${vacancy.employmentType}</p>
                        <p class="text-xs text-gray-500">${vacancy.postedAt}</p>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <button class="${vacancy.isActive ? "bg-green-500 text-white" : "bg-yellow-500 text-black"} px-3 py-1 rounded-md shadow text-sm">
                        ${vacancy.isActive ? "Active" : "Pending"}
                    </button>
                    <button class="bg-gray-200 px-3 py-1 rounded-md shadow text-sm hover:bg-gray-300 button-etrafli">
                        Ətraflı
                    </button>
                </div>
            </div>
        `;
        vacanciesContainer.appendChild(vacancyItem);
    });

    const detailButtons = document.querySelectorAll(".button-etrafli");
    detailButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            window.location.href = `http://127.0.0.1:5500/src/pages/detailsVacancies.html?id=${vacancies[index].id}`;
        });
    });
}

function search() {
    const searchInput = document.querySelector(".searchInp");
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredVacancies = allVacancies.filter(vacancy => {
        return vacancy.title.toLowerCase().includes(searchTerm);
    });

    displayVacancies(filteredVacancies);
}

function filterType() {
    const typeSelect = document.getElementById("typeSelect");
    const selectedType = typeSelect.value;

    if (selectedType === "seçilməyib") {
        displayVacancies(allVacancies);
    } else {
        const filteredVacancies = allVacancies.filter(vacancy => vacancy.employmentType === selectedType);
        displayVacancies(filteredVacancies);
    }
}

function filterBySalary() {
    const maxSalary = parseInt(document.getElementById("maxSalary").value);
    const minSalary = parseInt(document.getElementById("minSalary").value);

    const filteredVacancies = allVacancies.filter(vacancy => {
        const salary = parseInt(vacancy.salary); 
        return (isNaN(minSalary) || salary >= minSalary) && (isNaN(maxSalary) || salary <= maxSalary);
    });

    displayVacancies(filteredVacancies);
}

document.addEventListener("DOMContentLoaded", () => {
    fetchData();

    document.querySelector('.searchInp').addEventListener('keyup', (event) => {
        search();
    });
    const typeSelect = document.getElementById("typeSelect");
    typeSelect.addEventListener("change", filterType);

    document.getElementById("filterButton").addEventListener("click", filterBySalary);

});
