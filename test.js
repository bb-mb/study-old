function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const func = async () => {
  console.log(3)
  await timeout(1000)
  console.log(4)
}

console.log(1)
func()
console.log(2)