document.getElementById('jobForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const salary = document.getElementById('salary').value;
    const employmentType = document.getElementById('employmentType').value;

    
    const output = `
        <h3>Göstərilən Məlumatlar:</h3>
        <p><strong>Başlıq:</strong> ${title}</p>
        <p><strong>Təsvir:</strong> ${description}</p>
        <p><strong>Maaş:</strong> ${salary}</p>
        <p><strong>İş Növü:</strong> ${employmentType}</p>
    `;
    
    document.getElementById('output').innerHTML = output;
});
