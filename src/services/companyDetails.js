
// company-details.js
import BASE_URL from "./constants/constants.js";

const urlParams = new URLSearchParams(window.location.search);
const companyId = urlParams.get("id");

async function fetchCompanyDetails() {
  try {
    const response = await axios.get(`${BASE_URL}/companies/${companyId}`);
    const company = response.data;
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
  document.getElementById("company-website").addEventListener("click", function () {
    history.back()
  })

  const reviewsList = document.getElementById("reviews-list");
  company.reviews.forEach((review) => {
    const li = document.createElement("li");
    li.classList.add("p-4", "bg-gray-100", "rounded-md", "shadow");

    li.innerHTML = `
      <p class="text-sm text-gray-600 mb-2"><strong>User ID:</strong> ${review.userId}</p>
      <p class="text-sm text-gray-800 italic mb-2">"${review.comment}"</p>
      <p class="text-sm text-yellow-500 font-bold">
        Rating: ${"⭐".repeat(review.rating)}
      </p>
    `;
    reviewsList.appendChild(li);
  });
}

fetchCompanyDetails();

