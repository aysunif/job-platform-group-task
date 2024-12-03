import BASE_URL from "./constants/constants.js";
import endpoints from "./constants/constants.js"
const companiesContainer = document.querySelector(".grid");

async function fetchCompanies() {
  try {
    const response = await axios.get("https://wooded-trusted-trawler.glitch.me/companies");
    const companies = response.data;
    renderCompanies(companies);
  } catch (error) {
    console.error("Error fetching companies:", error);
  }
}

function renderCompanies(companies) {
  companiesContainer.innerHTML = "";
  companies.forEach((company) => {
    const cardHTML = `
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="${company?.companyImage}"
          alt="Company Image"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="text-xl font-bold text-gray-800 mb-2">${company.name}</h2>
          <p class="text-sm text-gray-600 mb-2">
            <strong>Location:</strong> ${company.location}
          </p>
          <p class="text-sm text-gray-600 mb-2">
            <strong>Industry:</strong> ${company.industry}
          </p>
          <p class="text-sm text-gray-600 mb-2">
            <strong>Created At:</strong> ${new Date(company.createdAt).toLocaleDateString()}
          </p>
          <div class="flex items-center space-x-4 justify-between">
                        <a href="${company.website}" target="_blank" class="text-blue-500 hover:underline text-sm">
                            Visit Website
                        </a>
                        <a href="./companieDetails.html?id=${company.id}" class="text-blue-500 hover:underline text-sm ">
                            View Details
                        </a>

                    </div>
        </div>
      </div>
    `;
    companiesContainer.innerHTML += cardHTML;
  });
}

fetchCompanies();
