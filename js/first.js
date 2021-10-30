/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/

const integerArray1 = new Uint32Array(5);
integerArray1[0] = 15;
integerArray1[1] = 20;
integerArray1[2] = 120;




function brutto (integerArray1) {


    const bruttoArray = integerArray1.map(item => item * 1.27);
    console.log(bruttoArray)
    const sumOfArray = bruttoArray.reduce((previousValue, currentValue) => previousValue + currentValue);
    console.log(sumOfArray);
    return bruttoPrice = Math.round(sumOfArray);
    

}

brutto( [30, 50, 100])
console.log(bruttoPrice)
    
    


