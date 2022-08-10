let url1 = 'https://zenquotes.io/api/random';

fetch(url1)
.then(function(response){
    return response.json();
})
.then(function(data){
    
    var quote = data[0].q;
    var p3 = document.createElement('p');
    p3.innerHTML = 'Ditto says: ' +  quote;
    document.body.appendChild(p3);
});