const closeRules=document.querySelector(".closeRules");
const rulesBtn=document.querySelector(".rules-btn");
const rulesPage=document.querySelector(".rules-page")
const closerls=document.querySelector(".closerules-2");
// close btn 
closeRules.addEventListener("click",()=>{
   rulesPage.classList.add("hidden") ;
});
closerls.addEventListener("click",()=>{
    rulesPage.classList.add("hidden") ;
 });

rulesBtn.addEventListener("click",()=>{
    rulesPage.classList.remove("hidden");
});
