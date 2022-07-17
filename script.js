var plusBtn = document.getElementsByClassName("plus-btn");
for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function () {
    plusBtn[i].previousElementSibling.value++;
  });
}
var minusBtn = document.getElementsByClassName("minus-btn");
console.log(minusBtn);
for (let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].addEventListener("click", function () {
    minusBtn[i].nextElementSibling.value--;
if ( i < 0){
    i = 0 ;
}
})

   

}
