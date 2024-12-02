import BASE_URL from "./constants/constants.js";
import endpoints from "./endpoints/endpoints.js";

function displayVacancies() {
    const vacanciesContainer = document.querySelector(".vacanciesContainer");

    axios.get(BASE_URL + endpoints.vacancies)
        .then(response => {
            const vacancies = response.data;
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
                            <button class="${vacancy.isActive ? "bg-green-500 text-white" : "bg-yellow-500 text-black"
                    } px-3 py-1 rounded-md shadow text-sm">
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
        })
        .catch(error => {
            console.error(error.message);

            vacanciesContainer.innerHTML = `
                <p style="color: red;">Vacancies could not be loaded. Please try again later.</p>
            `;
        });
}

document.addEventListener("DOMContentLoaded", () => {
    displayVacancies();
});
