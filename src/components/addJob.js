document.getElementById('jobForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const salary = document.getElementById('salary').value;
    const employmentType = document.getElementById('employmentType').value;

    
    const data = {
        title: title,
        description: description,
        salary: salary,
        employmentType: employmentType
    };

    fetch('https://quilted-tangy-part.glitch.me/vacancies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'  
        },
        body: JSON.stringify(data)  
    })
    .then(response => response.json()) 
    .then(responseData => {
        
        console.log('Job submitted:', responseData);
        
    })
    .catch(error => {
        console.error('Xəta baş verdi:', error);  
        alert('Xəta baş verdi. Zəhmət olmasa sonra yenidən cəhd edin.');
    });
});
