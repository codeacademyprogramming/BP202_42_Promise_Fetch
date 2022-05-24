
let userId=1;
loadUsersPosts(userId)

document.querySelector('button').addEventListener('click',function(e){
   userId++;    
    loadUsersPosts(userId)
})


fetch('https://api.aladhan.com/v1/calendar?latitude=40.40935&longitude=49.8671&method=2&month=5&year=2022')
.then(response=>response.json())
.then(obj=>{
    let day = new Date().getDate();

    let timings = obj.data[day-1].timings;
    let li = document.createElement('li');
    li.innerText ='Asr - '+ timings.Asr;

    document.querySelector('ul').appendChild(li)
})

function loadUsersPosts(userId){
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response=>response.json())
    .then(data=>{
    
        data.forEach(element => {
            let card = `<div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.body}</p>
                        <a href="#" class="card-link">Card link ${element.userId}</a>
                        <a href="#" class="card-link">Another link</a>
                        </div>
                        </div> 
                        </div>`
    
            document.querySelector('.row').innerHTML+=card
        });
        
    })
}
