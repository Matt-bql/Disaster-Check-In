// * this shows how to use private variables,
// * using closures, understanding scope, and currying
function parent() {
  const prefix = "I am a ";

  return function (noun) {
    return prefix + noun;
  };
}
const getSentence = parent();
console.log(getSentence);

const job = getSentence("dev");
console.log(job);
