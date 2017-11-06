const app = "I don't do much."

function kittens() {
  return ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name) {
  kittens.shift("Ralph")
  return kittens
}
