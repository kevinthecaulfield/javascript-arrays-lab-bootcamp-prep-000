const app = "I don't do much."

function kittens() {
  return ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.slice(-2)
   return kittens
}
