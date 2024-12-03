import BASE_URL from "../services/constants/constants";
import endpoints from "../services/endpoints/endpoints";

document.getElementById('jobForm').addEventListener('submit', function (event) {
    event.preventDefault();


    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const salary = document.getElementById('salary').value;
    const employmentType = document.getElementById('employmentType').value;
    const postedAt = new Date().toLocaleDateString('tr-TR').replace(/\//g, ',');


    const data = {
        title: title,
        description: description,
        salary: salary,
        employmentType: employmentType,
        postedAt: postedAt

    };
    function resetForm() {
        document.getElementById('jobForm').reset();
    }

    fetch(`${BASE_URL}${endpoints.vacancies}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(responseData => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
            resetForm()
        })
        .catch(error => {
            console.error('Xəta baş verdi:', error);
            alert('Xəta baş verdi. Zəhmət olmasa sonra yenidən cəhd edin.');
        });
});
