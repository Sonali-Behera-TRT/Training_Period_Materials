let grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'];

grid = grid.map(item => {
    return item
    .split('')
    .sort((a, b) => {
        return (a > b) ? 1 : -1;
    })
    .join('');
});

let ans = true;
for(let i = 1; i < grid.length; i++){
   for(let j = 0; j < grid.length; j++){
        if(grid[i - 1][j] > grid[i][j]){
            ans = false;
            break;
        }
   }
   if(!ans)
        break;
}

console.log(ans);