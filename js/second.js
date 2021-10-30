/*
- A `js/second.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként kap egy tetszőleges 
típusú elemeket tartalmazó tömböt és egy tetszőleges primitív értéket!
- A függvény neve `checker` legyen!
- A függvény __visszatérési értéke__ egy objektum, amely a következő 
property-ket tartalmazza:
- `exists`: Értéke true/false attól függően, hogy a második paraméterként 
megadott érték megtalálható-e a tömbben
- `index`: Értéke egy szám; ha a második paraméterként megadott érték 
megtalálható a tömbben, akkor a tömbben lévő indexe, 
ha nem, akkor -1 legyen az értéke
- `allElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömb minden eleme number típusú-e vagy sem
- `someElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömbben van-e number típusú elem vagy sem
*/

const sampleArray = [5, "spagetti", 20, "John", 4];
let a = 20;

function checker(array, primitive) {

    let bool1 = array.includes(primitive);
    let numeric1 = array.indexOf(primitive)
    
    
    let bool2 = array.every(Number);
    let bool3 = array.some(Number);
    return returnObject = {exists: bool1, index: numeric1, allElementsAreNumbers: bool2, someElementsAreNumbers: bool3 }
}

checker (sampleArray, a)
console.log(returnObject)