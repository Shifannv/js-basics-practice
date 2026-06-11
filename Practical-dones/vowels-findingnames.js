const vowels = ['a', 'e', 'i', 'o', 'u'];
const name = 'ziyahul haq';
let count = 0
for (let i = 0; i < name.length; i++) {

  const same = name[i].toLowerCase();

  if (vowels.includes(same)) {
    console.log(same);
    count ++ ;
  } 
}
console.log(count);



