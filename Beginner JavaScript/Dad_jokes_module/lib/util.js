// named export

export function getRandomItemFromArray(arr, not) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    
    if(item === not){
      console.log('repeated');
      return getRandomItemFromArray(arr, not);
    }
  
    return item;
}