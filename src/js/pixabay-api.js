import axios from "axios";
// import iziToast from "izitoast";
export { getPictures, addPages, resetPage };

let page = 1;
const perPage = 15;


const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "47437973-d70be85f5be71cfd9f8f29695";


async function getPictures(query) {
    try {
            const response = await axios(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                page,
                per_page: perPage,
            },
            });
        console.log(response.data);
        return response.data;  
    } catch (error) {
        console.error("Error fetching pictures:", error.message);
        throw new Error('Failed to fetch pictures');
     }
 
   
}

 async function addPages() {
    page += 1;
}

 async function resetPage() {
    page = 1;
}
