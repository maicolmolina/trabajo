//const URL = "http://localhost:8000/";
const URL = "https://architecturerestserver.herokuapp.com/";
const app = document.querySelector('#app');
axios.get('http://localhost:5000/api/products/all/').then((resp) => {
    app.innerHTML = JSON.stringify(resp.data);
});

