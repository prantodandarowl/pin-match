// getting random pin number


function getPin(){

    const ranNum=Math.floor(Math.random() * 10000);
    const pinString = ranNum + '';
    if (pinString.length == 4){
        return ranNum;
    }
    else{
        getPin;
    }
    
}

// *******************************************************************************************
// implimenting genarate numner 

function pinMatch() {

    const geneBtn=document.getElementById("genBtn");

geneBtn.addEventListener("click",function() {

    const pin=getPin();
    document.getElementById("genInput").value=pin;
    
})
    
}

let screenValue='';

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    
    if(number=="C"){
        document.getElementById("subinpu").value='';
    }
    else{
        const previousNumber = document.getElementById('subinpu').value;
        const newNumber = previousNumber + number;
        document.getElementById('subinpu').value = newNumber;

    }
    
})




const subBrn=document.getElementById("subBrn");
pinMatch()
subBrn.addEventListener("click",function(){
    const genPinNumb=document.getElementById("genInput").value;
    const SubPIn= document.getElementById("subinpu").value;
    if(document.getElementById("genInput").value==document.getElementById("subinpu").value){
        const right=document.getElementById("not2");
        right.style.display = "block";
        document.getElementById("not1").style.display = "none"
    }
    else{
        const left=document.getElementById("not1");
        left.style.display = "block";
        document.getElementById("not2").style.display = "none"
    }
    
})