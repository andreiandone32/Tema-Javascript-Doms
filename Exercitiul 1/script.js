const dropDownMenu = document.querySelector(".show-dropdown ul");
const dropdownButton = document.querySelector(".menu-icon");

dropdownButton.addEventListener("click", function(){
    console.log("I was clicked");


    const dropdownMenuStyles = getComputedStyle(dropDownMenu);
   
    const display = dropdownMenuStyles.getPropertyValue("display");
    
    if(display === "none"){
        dropDownMenu.style.display = "block";
    }else{
        dropDownMenu.style.display = "none";
    };

});

// Nu se vede cel mai genial dar macar functioneaza :))))