const process = require('process'); 
const inputs = process.argv.slice(2); 
const times = inputs.map(x => Number(x) * 1000);

for (let i = 0; i < times.length; i++){
  num = times[i];
  if(isNaN(num) || num <= 1){
    continue;
  }
  setTimeout(() => {
    console.log(`The ${inputs[i]} second timer is done!`);
  }, num);
}
