const BASE_URL = "https://wooded-trusted-trawler.glitch.me";
const userCardsContainer = document.getElementById("userCards");
const searchInput = document.querySelector(".search-data");
const searchButton = document.querySelector(".search-btn");
const showAllButton = document.querySelector(".show-btn");
const experienceSortSelect = document.getElementById("experience-sort");

let users = [];

async function fetchUsers() {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        users = response.data; 
        renderUserCards(users);  
    } catch (error) {
        console.error("Error fetching users:", error);
        userCardsContainer.innerHTML = `
            <p class="text-red-500 text-center">Unable to load user data. Please try again later.</p>
        `;
    }
}

function sortUsersByExperience(users, sortOrder) {
    if (sortOrder === "low-to-high") {
        return users.sort((a, b) => a.experienceYear - b.experienceYear);
    } else if (sortOrder === "high-to-low") {
        return users.sort((a, b) => b.experienceYear - a.experienceYear);
    }
    return users;
}

function renderUserCards(usersList) {
    userCardsContainer.innerHTML = ''; 

    const fragment = document.createDocumentFragment();  

    usersList.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("bg-white", "shadow-lg", "rounded-lg", "overflow-hidden", "border", "border-gray-200");

        userCard.innerHTML = `
            <div class="text-center">
                <div class="mx-auto mb-4">
                    <img class="object-cover w-full border-2" src="${user.profileImage}" alt="${user.name}'s Avatar">
                </div>
                <h3 class="text-xl font-bold text-gray-800">${user.name}</h3>
                <p class="text-gray-600">${user.bio}</p>
                <p class="text-sm text-gray-500 mt-2">Experience: ${user.experienceYear} years</p>
            </div>
            <div class="px-4 py-2 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
                <a href="https://www.linkedin.com/ ${user.linkedinUrl}" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full" target="_blank">
                    LinkedIn
                </a>
                <a href="./userDetails.html?id=${user.id}" class="text-blue-500 text-sm">
                    View Details
                </a>
            </div>
        `;

        fragment.appendChild(userCard); 
    });

    userCardsContainer.appendChild(fragment); 
}

function filterUsers() {
    const searchQuery = searchInput.value.toLowerCase();
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchQuery));
    renderUserCards(filteredUsers);
}

function showAllUsers() {
    renderUserCards(users);
}

searchButton.addEventListener("click", filterUsers);
showAllButton.addEventListener("click", showAllUsers);

experienceSortSelect.addEventListener("change", async () => {
    const sortOrder = experienceSortSelect.value; 
    const response = await axios.get(`${BASE_URL}/users`);
    const users = response.data;
    const sortedUsers = sortUsersByExperience(users, sortOrder);
    renderUserCards(sortedUsers);
});

fetchUsers();
