import BASE_URL from "./constants/constants.js";
import endpoints from "./constants/constants.js"
const companiesContainer = document.querySelector(".grid");
const searchInput = document.getElementById("searchInput");
const filterLocation = document.getElementById("filterLocation");
const filterIndustry = document.getElementById("filterIndustry");
const sortOptions = document.getElementById("sortOptions");

async function fetchCompanies() {
  try {
    const response = await axios.get(`${BASE_URL}/companies`);
    return response.data;

  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
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
            <strong>Created At:</strong> ${new Date(
              company.createdAt
            ).toLocaleDateString()}
          </p>
          <div class="flex items-center space-x-4 justify-between">
            <a href="${company.website}" target="_blank" class="text-blue-500 hover:underline text-sm">
              Visit Website
            </a>
            <button 
              onclick="confirmDelete(${company.id})"
              style="color: white; background-color: rgb(204, 17, 17); padding: 9px 14px; border-radius: 10px;"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
            <a href="./companieDetails.html?id=${company.id}" class="text-blue-500 hover:underline text-sm">
              View Details
            </a>
          </div>
        </div>
      </div>
    `;
    companiesContainer.innerHTML += cardHTML;
  });
}

function searchCompanies(companies, searchTerm) {
  return companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm) ||
      company.location.toLowerCase().includes(searchTerm) ||
      company.industry.toLowerCase().includes(searchTerm)
  );
}

function filterCompanies(companies, selectedLocation, selectedIndustry) {
  return companies.filter((company) => {
    const matchesLocation =
      selectedLocation === "" || company.location === selectedLocation;
    const matchesIndustry =
      selectedIndustry === "" || company.industry === selectedIndustry;
    return matchesLocation && matchesIndustry;
  });
}

function sortCompanies(companies, sortOption) {
  const sortedCompanies = [...companies];
  if (sortOption === "nameAsc") {
    sortedCompanies.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "nameDesc") {
    sortedCompanies.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortOption === "dateAsc") {
    sortedCompanies.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  } else if (sortOption === "dateDesc") {
    sortedCompanies.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }
  return sortedCompanies;
}

async function loadAllCompanies() {
  const companies = await fetchCompanies();

  const searchTerm = searchInput.value.toLowerCase();
  const selectedLocation = filterLocation.value;
  const selectedIndustry = filterIndustry.value;
  const sortOption = sortOptions.value;

  let filteredCompanies = searchCompanies(companies, searchTerm);
  filteredCompanies = filterCompanies(
    filteredCompanies,
    selectedLocation,
    selectedIndustry
  );
  filteredCompanies = sortCompanies(filteredCompanies, sortOption);

  renderCompanies(filteredCompanies);
}

async function confirmDelete(companyId) {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  });

  if (result.isConfirmed) {
    try {
      await axios.delete(`${BASE_URL}/companies/${companyId}`);
      
      Swal.fire(
        'Deleted!',
        'The company has been deleted.',
        'success'
      );

      loadAllCompanies();
    } catch (error) {
      Swal.fire(
        'Error!',
        'There was a problem deleting the company.',
        'error'
      );
    }
  }
}

searchInput.addEventListener("input", loadAllCompanies);
filterLocation.addEventListener("change", loadAllCompanies);
filterIndustry.addEventListener("change", loadAllCompanies);
sortOptions.addEventListener("change", loadAllCompanies);

loadAllCompanies();
