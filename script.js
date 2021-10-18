function askGrid(){
    let grid = prompt('how many grid you want')
    let gridNumber=grid*grid
    if(grid>100||grid<1){
        alert('not valid number!')
    }else{
        creategrid(gridNumber)
        document.getElementById('container').style.gridTemplateColumns=(`repeat(${grid}, 1fr)`)
        console.log('selected')
    }
}

function creategrid(gridNumber){
    for (i=0;i<gridNumber;i++){
        var div = document.createElement('div');
        var contain = document.getElementById('container');
        div.classList.add('div2')
        div.setAttribute('id',i)
        contain.appendChild(div);
        let backgroundColor='red'
        console.log(backgroundColor)
        div.addEventListener('mouseover',event=>{event.target.style.backgroundColor=`${backgroundColor}`})
    }
}

const resetButton=document.getElementById('reset').addEventListener("click",resetContainer,false)
const redButton=document.getElementById('red').addEventListener("click",null,false)

function resetContainer(){
    const contain = document.getElementById('container');
    const divs = document.getElementsByClassName('div2');
    while(divs.length){
        for (i=0;i<divs.length;i++){
            contain.removeChild(divs[i])
        }
    }
    console.log('reset!',divs)
    askGrid()
}

askGrid();

