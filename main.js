function exhibit1(){
    const targetDivDirectionsFirstItem = document.getElementById("directionsItem1"); 
    const btnFirstItemDirections = document.getElementById("toggleDirectionsItem1");
    
    btnFirstItemDirections.onclick = function () {
      if (targetDivDirectionsFirstItem.style.display !== "none") {
        targetDivDirectionsFirstItem.style.display = "none";
      } else {
        targetDivDirectionsFirstItem.style.display = "block";
      }
    };
}


function exhibit2(){
    const targetDivDirectionsSecondItem = document.getElementById("directionsItem2"); 
    const btnSecondItemDirections = document.getElementById("toggleDirectionsItem2");
    
    btnSecondItemDirections.onclick = function () {
      if (targetDivDirectionsSecondItem.style.display !== "none") {
        targetDivDirectionsSecondItem.style.display = "none";
      } else {
        targetDivDirectionsSecondItem.style.display = "block";
      }
    };
}


function exhibit3(){
    const targetDivDirectionsThirdItem = document.getElementById("directionsItem3"); 
    const btnThirdItemDirections = document.getElementById("toggleDirectionsItem3");
    
    btnThirdItemDirections.onclick = function () {
      if (targetDivDirectionsThirdItem.style.display !== "none") {
        targetDivDirectionsThirdItem.style.display = "none";
      } else {
        targetDivDirectionsThirdItem.style.display = "block";
      }
    };
}


function createThreeButtons(){
    const targetDivFirstItem = document.getElementById("firstItem");
    const targetDivThirdItem = document.getElementById("thirdItem");
    const targetDivSecondItem = document.getElementById("secondItem");
    
    
    const btnFirstItem = document.getElementById("toggleFirstItem");
    const btnSecondItem = document.getElementById("toggleSecondItem");
    const btnThirdItem = document.getElementById("toggleThirdItem");
    
    btnFirstItem.onclick = function () {
      if (targetDivFirstItem.style.display !== "none") {
        targetDivFirstItem.style.display = "none";
    
    
      } else {
        targetDivFirstItem.style.display = "block";
        targetDivSecondItem.style.display = "none";
        targetDivThirdItem.style.display = "none";
      }
    };
    
    btnSecondItem.onclick = function () {
      if (targetDivSecondItem.style.display !== "none") {
        targetDivSecondItem.style.display = "none";
    
    
      } else {
        targetDivSecondItem.style.display = "block";
        targetDivFirstItem.style.display = "none";
        targetDivThirdItem.style.display = "none";
    
      }
    };        
    
    btnThirdItem.onclick = function () {
      if (targetDivThirdItem.style.display !== "none") {
        targetDivThirdItem.style.display = "none";
    
    
    
      } else {
        targetDivThirdItem.style.display = "block";
        targetDivFirstItem.style.display = "none";
        targetDivSecondItem.style.display = "none";
      }
    };
}
