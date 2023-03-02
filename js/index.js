function loadData(limit) {
    const link = `${limit}`
    console.log(link);
    fetch(link)
        .then((response) => response.json())
        .then((data) => showAllData(data));
}
function showAllData(data) {
    // remove spinner 
    const spinner = document.getElementById('spinner');
    spinner.classList.add('d-none');
    // find container 
    const container = document.getElementById('container');
    
    // data.slice(0,15);
    data.forEach(element => {
        console.log(element);
        const div = document.createElement('div');
        div.innerHTML = `<div class="col">
    <div class="card h-100">
      <img src="${element.squareImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.personName}</h5>
        <p class="card-text">${element.abouts[1]? element.abouts[1] : 'no about found'}</p>
      </div>
    </div>
  </div>`
        container.appendChild(div);

    });
    // vissible show all btn 
    // const showAll = document.getElementById('show-all');
    // showAll.classList.remove('d-none')

}
document.getElementById('all-billionaires').addEventListener('click', function () {
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('d-none');
    loadData('https://forbes400.onrender.com/api/forbes400/getAllBillionaires');
})
// click show all btn 

// document.getElementById('show-all').addEventListener('click', function () {
//     const spinner = document.getElementById('spinner');
//     spinner.classList.remove('d-none')
//     loadData('https://forbes400.onrender.com/api/forbes400/');
// })
