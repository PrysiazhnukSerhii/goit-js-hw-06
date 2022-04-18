
const categoriesList = document.querySelector("#categories");


const categoriesQuantityItem = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesQuantityItem.length}`);



categoriesQuantityItem.forEach(element => {

    const categoryTitleEL = element.querySelector("h2").textContent;

    const quantityLi = element.querySelectorAll("li").length;

    console.log(`Category: ${categoryTitleEL}`);

    console.log(`Elements: ${quantityLi}`);

 

})