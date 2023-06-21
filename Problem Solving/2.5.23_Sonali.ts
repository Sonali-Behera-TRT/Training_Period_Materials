const player = ['BOB', 'ANDY'];
const arr: number[] = [5, 2, 6, 3, 4];

function findMax(arr: number[]): number {
  let max = 0;
  for(let i = 1; i < arr.length; i++)
    max = (arr[i] > arr[max]) ? i : max;

  return max;
}

let count: number = 0;
while(arr.length) {
  count++;
  const idx = findMax(arr);
  arr.splice(idx);
}

if(count % 2 === 0)
  console.log(`Winner is ${player[1]}`)
else
console.log(`Winner is ${player[0]}`)