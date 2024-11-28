function getBackend() {
    const url = 'http://10.1.0.4:5000/'; // Replace with your backend endpoint
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            document.getElementById("frontend").innerHTML = JSON.stringify(json);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
