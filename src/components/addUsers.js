
const apiUrl = "https://quilted-tangy-part.glitch.me/users";

const userCardsContainer = document.getElementById("userCards");

async function fetchUsers() {
    try {
        const response = await axios.get(apiUrl); 
        console.log(response.data)
        const users = response.data;  

        renderUserCards(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        userCardsContainer.innerHTML = `
            <p class="text-red-500 text-center">Unable to load user data. Please try again later.</p>
        `;
    }
}

function renderUserCards(users) {
    users.forEach(user => {
        const userCard = `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                <div class="p-4 text-center">
                    <div class="w-24 h-24 mx-auto mb-4">
                        <img class="object-cover rounded-full border-2 border-blue-500" src="${user.profileImage}" alt="${user.name}'s Avatar">
                    </div>
                    <h3 class="text-xl font-bold text-gray-800">${user.name}</h3>
                    <p class="text-gray-600">${user.bio}</p>
                    <p class="text-sm text-gray-500 mt-2">Experience: ${user.experienceYear} years</p>
                </div>
                <div class="px-4 py-2 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
                    <a href="${user.linkedinUrl}" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full" target="_blank">
                        LinkedIn
                    </a>
                    <button onclick="viewProfile(${user.id})" class="text-blue-500 font-medium hover:underline">View Profile</button>
                </div>
            </div>
        `;
        userCardsContainer.innerHTML += userCard;
    });
}

function viewProfile(userId) {
    alert(`You clicked on Profile ID: ${userId}`);
}

fetchUsers();
