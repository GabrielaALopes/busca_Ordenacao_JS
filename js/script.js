window.addEventListener('load',() =>{
    doMap();
    doFilter();
    doForEach();
    doReduce();
    doFind();
    doSome();
    doEvery();
    doSort();
});

function doMap(){
    const nameEmailArray = people.results.map(person => {
        return {
            name: person.name,
            email: person.name
        };
    });
    console.log(nameEmailArray);
    return nameEmailArray;
}

function doFilter(){
    const olderThan18 = people.results.filter(person =>{
        return person.dob.age >50;
    })
    console.log(olderThan18);
}

function doForEach(){
    const mappedPeople = doMap();

    mappedPeople.forEach(person => {
        person.nameSize = 
        person.name.title.length
         + person.name.first.length 
         + person.name.last.length;
    });

    console.log(mappedPeople);
}


function doReduce(){
    const totalAges = people.results.reduce((accumulator, current) => {
        return accumulator + current.dob.age;
    }, 0);
    console.log(totalAges);

   // let sumAges = 0;

   // for (let i = 0; i< people.results.length; i++){
   //   var current = people.results[i];
   //   sumAges += current;  
   // }

   // console.log(sumAges);
}

function doFind(){
    const found = people.results.find(person => {
        return person.location.state === 'Minas Gerais';
    });
    console.log(found);
}

function doSome(){
    const found = people.results.some(person =>{
        return person.location.state === 'Amazonas';
    })
    console.log(found)
}

function doEvery(){
    const every = people.results.every(person =>{
        return person.nat === 'BR';
    });

    console.log(every);
}

//ordenação entre nomes com mais para menos caracteres ...
function doSort(){

    const mappedNames = people.results
    .map(person => {
        return {
           name: person.name.first
        }
    })
    .filter(person => person.name.startsWith('A'))
   .sort((a,b) =>{
       return b.name.length - a.name.length;
       //return a.name.length - b.name.length;

    });
    console.log(mappedNames);
}