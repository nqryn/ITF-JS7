/**
 * FOR - structura repetitiva, care ne permite sa repetam o bucata de cod
 * de cate ori ii zicem noi
 * 
 * for (initialization; condition; afterthought) { statements }
 * initialization = de la cat pornesc
 * condition = cand ma opresc
 * afterthought => aici de obicei zicem cu ce pas sa mergem
 */

for ( let i = 5; i < 20; i+=3 ) {
    console.log(i);
}

const arr = [1, true, "apple", 5, 6, false, "Banana", "pineapple"];
// Pornim de la 0, mergem pana la lungimea array-ului (length), si de fiecare data
// incrementam indexul i; astfel putem obtine toate elementele din array
for (let i = 0; i < arr.length; i++ ) {
    console.log(`La indexul ${i} am elementul ${arr[i]}`);
}