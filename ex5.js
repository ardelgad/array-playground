// filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'away', 'silent', 'generate', 'stunning', 'complete'];

// Usa el método filter para filtrar las palabras que empiezan por la letra 'e'

console.log(words.filter(word => word.startsWith("e"))); // TODO [ 'elite', 'exuberant']

// Usa el método filter para filtrar las palabras que empiezan por vocal

console.log(words.filter((word) => {
    const regexp = new RegExp('^[aeiou].*', 'i');
    return regexp.test(word);
})); // TODO [ 'elite', 'exuberant', 'away']
