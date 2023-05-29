var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
let terminal = [".com", ".net", ".es"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let h = 0; h < noun.length; h++) {
      for (let u = 0; u < terminal.length; u++) {
        console.log(pronoun[i] + adj[j] + noun[h] + terminal[u]);
      }
    }
  }
}
