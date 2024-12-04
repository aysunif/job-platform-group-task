

const BASE_URL = "https://wooded-trusted-trawler.glitch.me";
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");

async function fetchUsersDetails() {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    const user = response.data;
    renderUserDetails(user);
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
}

function renderUserDetails(user) {
  console.log(user);

  document.getElementById("user-image").src = user.profileImage;
  document.getElementById("user-name").textContent = user.name;
  document.getElementById("user-email").innerHTML = `<strong>Email:</strong> ${user.email}`;
  document.getElementById("user-created").innerHTML = `<strong>Created At:</strong> ${new Date(user.createdAt).toLocaleDateString()}`;
  document.getElementById("user-bio").innerHTML = `<strong>Bio:</strong> ${user.bio}`;
  document.getElementById("user-skills").innerHTML = `<strong>Skills:</strong> ${user.skills}`;
  document.getElementById("user-website").addEventListener("click" , function(){
    history.back()
  })
}

fetchUsersDetails();

