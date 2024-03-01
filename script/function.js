
const categories = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json();
    const category = document.getElementById("category-container");
    data.data.news_category.forEach((item) =>{
        const div = document.createElement('div');
        div.innerHTML= `<button class="btn-ghost p-2 rounded-lg">${item.category_name}</button>`;
        category.appendChild(div)
        // const allCategory = item.category_name;
        // category.innerText = allCategory;
    })
}
categories()