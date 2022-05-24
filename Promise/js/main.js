function human(name,surname){
    this.FullName = name+' '+surname
}


let humans = [
    new human('Hikmet','Abbasov'),
    new human('Abbas','Hikmetov'),
    new human('Nermin','Abbasova'),
    new human('Bextiyar','Atakisiyev'),
    new human('Ibrahim','Aliyev'),
]



function createListItems(){
    setTimeout(()=>{
        let ul = document.querySelector('ul');
        humans.forEach(el=>{
            let li = document.createElement('li');
            li.innerText = el.FullName;
    
            ul.appendChild(li)
        })
    },1000)
}

function addHuman(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(humans.length<6){
                let item = new human('new','new');
                humans.push(item);
                resolve();
            }
            else
                reject('Arrayin dolub!')

        },2000)
    })
}




document.querySelector('button').addEventListener('click',function(e){
    addHuman().then(x=>{
        createListItems();
    })
    .catch(x=>alert(x))
})
