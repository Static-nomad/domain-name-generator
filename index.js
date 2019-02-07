var pronoun = ['The','Your'];
var adj = ['little', 'crazy' ];
var noun = ['donkey','house'];

   
let generateDomain = () => {   
var combos = [] ;

for(var i = 0; i < pronoun.length; i++){
    for(var j = 0; j < adj.length; j++){
        for(var k = 0; k < noun.length; k++){
            combos.push(pronoun[i] + adj[j] + noun[k] + ".com");
        }
     }
}

document.getElementById("domain").innerHTML = "<p>" + combos.join("</p><p>") + "</p>";

};
console.log(generateDomain(document.getElementById("domain").innerHTML));
