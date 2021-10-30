/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/
const sampleArray = ['kő', 'papír', 'olló' , 'flex'];
let list =""

function generateList (arrayString) {
     
     for (i=0; i < arrayString.length; i++) {
       
       console.log(i);
       list = list + "<li>" + arrayString[i] + "</li>";
      }
      return htmlText="<ul>" + list + "</ul>"
    }      


generateList(sampleArray)
console.log(sampleArray)
console.log(list)
console.log(htmlText)



