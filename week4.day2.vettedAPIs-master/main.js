let url = 'https://pokeapi.co/api/v2/pokemon/ditto';
let myJson;

fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data) {
    myJson = data;
    
    var d = document.createElement('div');
    d.className = 'main';
    document.body.appendChild(d);
    
    //name
    var name = data.name;
    var n1 = document.createElement('p');
    n1.innerHTML = name;
    d.appendChild(n1);


    //abilities
    var ability_div = document.createElement('div');
    ability_div.className = 'ability';
    d.appendChild(ability_div);

    for(var i = 0; i < data.abilities.length; i++){
        var ability = data.abilities[i].ability.name;
        var ab  = document.createElement('p');
        ab.innerHTML = ability;

        ability_div.appendChild(ab);

    }


    // pokemon num id
    var id = data.id;
    var p2 = document.createElement('h2');
    p2.innerHTML = id;
    d.appendChild(p2);

    

        

    var url1 = 'https://zenquotes.io/api/random';

    fetch(url1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        //
        var quote = data[0].q;
        var p3 = document.createElement('p');
        p3.innerHTML = 'Ditto says: ' +  quote;
        document.body.appendChild(p3);
    });
        
});

    
var url1 = 'https://zenquotes.io/api/random';

fetch(url1)
.then(function(response){
    return response.json();
})
.then(function(data){
    //
    var quote = data[0].q;
    var p3= document.createElement('p');
    p3.innerHTML = quote;
    document.body.appendChild(p3);
});