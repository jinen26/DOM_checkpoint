// likes btn


var likes = document.getElementsByClassName("like")
for (let i =0 ; i<likes.length ; i++){
    likes[i].addEventListener("click", function(){
        if (likes[i].style.color == "red"){
            likes[i].style.color = "black"
        }
        else{likes[i].style.color = "red"}
    })
}

// delete item 

var del = document.getElementsByClassName("delete")

for(let i = 0 ; i<del.length ; i++){
    let delOne = del[i]
    delOne.addEventListener("click", function(){
        delOne.parentElement.remove()
        totalPrice()
    })
}


// increamation 
var plus  = document.getElementsByClassName("plus-btn")

for(let i =0 ; i<plus.length ; i++){
    
    plus[i].addEventListener("click", function(){
       
        let count = plus[i].previousElementSibling.value++
       
        let somme=0
        if(i===0){
         somme = (count + 1) * pricePhone;
         document.getElementsByClassName("price")[i].innerHTML=somme;
        }
        if(i===1){
            somme = (count + 1) * priceShoes;
            document.getElementsByClassName("price")[i].innerHTML=somme;
    
        }
        if(i===2){
            somme=(count+1) * priceWatch;
            document.getElementsByClassName("price")[i].innerHTML=somme;
        }
        totalPrice()
    })
    

    }

// decrementation
var min = document.getElementsByClassName("minus-btn")

for(let i=0 ; i<min.length ; i++){
   
    min[i].addEventListener("click", function (){
        if(min[i].nextElementSibling.value>1){
           
            let count = min[i].nextElementSibling.value--
           
            
            let somme=0
            if(i===0){
             somme = (count - 1) * pricePhone;
             document.getElementsByClassName("price")[i].innerHTML=somme;
            }
            if(i===1){
                somme = (count - 1) * priceShoes;
                document.getElementsByClassName("price")[i].innerHTML=somme;
        
            }
            if(i===2){
                somme=(count-1) * priceWatch;
                document.getElementsByClassName("price")[i].innerHTML=somme;
            
            }
            totalPrice()
    }
})

}
//declaration
var pricePhone= parseInt(document.getElementById("p1").innerHTML)
var priceShoes=parseInt(document.getElementById("p2").innerHTML)
var priceWatch=parseInt(document.getElementById("p3").innerHTML)
//Total
var el = document.getElementsByClassName("Item");
var final = document.getElementById("finalPrice");
function totalPrice() {
  let s = 0;
  for (let i = 0; i < el.length; i++) {

    s = s + parseInt (el[i].querySelector(".price").innerText);
    console.log(s)
  }
  return (final.value = s);
}
