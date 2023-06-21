const API_ID = process.env.get(API_ID)
const API_KEY = process.env.get(API_KEY)
const baseEndpoint = process.env.get(BASE_ENDPOINT)
const proxy = process.env.get(PROXY)

async function getRecipe(item) {
    const response = await fetch(`${proxy}${baseEndpoint}?q=${item}`);
    
    console.log(response);
    const data =  await response.json();
    console.log(data);
}

getRecipe('pizza');