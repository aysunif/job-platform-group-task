// company-details.js
import BASE_URL from "./constants/constants.js";
const urlParams = new URLSearchParams(window.location.search);
const companyId = urlParams.get("id");

async function fetchCompanyDetails() {
  try {
    const response = await axios.get(`${BASE_URL}/companies/${companyId}`);
    const company = response.data;
    console.log(company);
    renderCompanyDetails(company);
  } catch (error) {
    console.error("Error fetching company details:", error);
  }
}

function renderCompanyDetails(company) {
  document.getElementById("company-image").src = company.companyImage;
  document.getElementById("company-name").textContent = company.name;
  document.getElementById("company-location").innerHTML = `<strong>Location:</strong> ${company.location}`;
  document.getElementById("company-industry").innerHTML = `<strong>Industry:</strong> ${company.industry}`;
  document.getElementById("company-created").innerHTML = `<strong>Created At:</strong> ${new Date(company.createdAt).toLocaleDateString()}`;
  document.getElementById("company-website").href = company.website;
}

fetchCompanyDetails();
