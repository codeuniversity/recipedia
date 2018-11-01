let imgToggle = 0;
let wrapingImg = document.getElementById("wraping");

wrapingImg.addEventListener("click", function() {
    if (imgToggle == 0) {
        wrapingImg.style.maxWidth = "1000px";
        imgToggle = 1;
    } else {
        wrapingImg.style.maxWidth = "500px";
        imgToggle = 0;
    }
});

let listItems = document.getElementsByClassName("steps");

for(let i = 0; i < listItems.length; i++){
    item = listItems[i];
    item.addEventListener("click", function() {
        item.style.textDecoration = "line-through";
    });
};
