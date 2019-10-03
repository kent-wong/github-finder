const person = {
  name: 'wong',
  age: 42,
  gender: 'male'
}

const person2 = {
  age: 6,
  gender: 'female'
}

const personEx = {
  ...person,
  ...person2,
  age: 24,
}

//console.log(personEx);

function fn({name, age}) {
  console.log(name);
  console.log(age);
}

fn(person);
