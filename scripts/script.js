
// creating  selecting elements
// .elements for input

const billInputEl=document.getElementById('bill-input');
const personInputEl=document.getElementById('person-input');
const tipPercentEl=document.querySelectorAll('.tip-percent');
const customInputEl=document.getElementById('custom-tip');
const resetEl=document.getElementById('btn-reset');

// elements for output

const tipAmountEl=document.getElementById('tip-amount');
const totalAmountEl=document.getElementById('total-amount')
const errorEl=document.getElementById('error-message');


// global variables
let bill,person,tipPercent;


// init function
function init(){
    bill=0;
person=0;
tipPercent=0;



tipAmountEl.innerText='0.00';
totalAmountEl.innerText='0.00';
personInputEl.value=null;
billInputEl.value=null;
customInputEl.value=null;
}


// addevent listners
// function
function callTip(tipPercent){
    bill=Number(billInputEl.value);
        person=Number(personInputEl.value);
        if(person===0 || person<0){
            errorEl.style.display='block';
            personInputEl.style.border="2px solid orangered"
            



        }else{

            const totalTip=bill*tipPercent;
        const totalBill=bill+totalTip;
        const tipPerson=totalTip/person;
        const totalPerson=totalBill/person;

        tipAmountEl.innerText=`$`+tipPerson.toFixed(2);
        totalAmountEl.innerText=`$`+totalPerson.toFixed(2);
        personInputEl.value=null;
        billInputEl.value=null;
        }

        



}

for(let i=0;i<tipPercentEl.length;i++){
    tipPercentEl[i].addEventListener('click',function(){
        
        tipPercent=Number(this.value)/100;
        // calling function
        callTip(tipPercent); 
      
    })

}
customInputEl.addEventListener('change',function(){
     tipPercent=Number(this.value)/100;
    //  calling function
     callTip(tipPercent);
     this.value=null;
})
resetEl.addEventListener('click',function(){
    init();
    personInputEl.style.border="none";
    billInputEl.style.border="none";
    errorEl.style.display='none';


});

billInputEl.addEventListener('click', function(){
    this.style.border="2px solid #26c0ab"
})
personInputEl.addEventListener('click', function(){
    this.style.border="2px solid #26c0ab";
    errorEl.style.display='none';

})



// initial settings
init();




