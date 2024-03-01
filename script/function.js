
const categories = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json();
    const category = document.getElementById("category-container");
    data.data.news_category.forEach((item) => {
        const div = document.createElement('div');
        div.innerHTML = `<button class="btn-ghost p-2 rounded-lg">${item.category_name}</button>`;
        category.appendChild(div)
    })
}




const loadNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/category/01");
    const data = await res.json();
    const cardNews = document.getElementById("card-container");
    data.data.forEach((item) => {
        const div = document.createElement("div");
        div.innerHTML = `<div class="lg:hero bg-base-300 rounded-lg">
        <div class="hero-content flex-col lg:flex-row">
            <img src="${item.image_url}"
                class="lg:max-w-sm rounded-lg shadow-2xl" />
            <div>
                <div class="space-y-4">
                    <h2 class="text-2xl">${item.title}</h2>
                    <p>${item.details.slice(0,250)}</p>
                    <!-- small some text rating here -->
                    <div class=" flex lg:flex-row gap-5 lg:gap-40 items-center">
                        <div class="flex gap-2">
                            <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component"
                                        src="${item.thumbnail_url}" />
                                </div>
                            </div>
                            <div>
                                <p>${item.author.name}</p>
                                <p>Jan 10, 2022 </p>
                            </div>
                        </div>
                        <div class=" flex  items-center">
                            <img src="resource/eye-solid.svg" alt="">
                            <p>1.5M</p>
                        </div>
                        <div class="flex gap-1 ml-8 lg:ml-0">
                            <img src="resource/star-half-stroke-solid.svg" alt="">
                            <img src="resource/star-regular.svg" alt="">
                            <img src="resource/star-regular.svg" alt="">
                            <img src="resource/star-regular.svg" alt="">
                            <img src="resource/star-regular.svg" alt="">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>`;
    cardNews.appendChild(div)
    })
}





loadNews()

categories()