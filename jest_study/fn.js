const fn = {
  add: (a, b) => a + b,
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  getName: (callback) => {
    const name = "Mike"
    setTimeout(() => {
      callback(name)
    }, 3000)
  },
  getAge: (age) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(age)
      }, 3000)
    })
  },
  createUser: (name) => {
    console.log('실제로 사용자가 생성되었습니다.')
    return {
      name
    }
  }
}

module.exports = fn
