// typeof를 쓰는 경우
function someFunc(val: string | number) {
  if (typeof val === "number") {
    val.toFixed(2)
    isNaN(val)
  } else {
    val.split(" ")
    val.toUpperCase()
    val.length
  }
}

// in을 쓰는 경우. in을 쓰려면 val이 any타입이어야한다.
function someFunc2(val: any) {
  if ("toFixed" in val) {
    val.toFixed(2)
    isNaN(val)
  } else if ("split" in val) {
    val.split(" ")
    val.toUpperCase()
    val.length
  }
}

// instanceof 연산자를 사용하는 경우
class Cat {
  meow() {}
}
class Dog {
  woof() {}
}
function sounds(ani: Cat | Dog) {
  if (ani instanceof Cat) {
    ani.meow()
  } else {
    ani.woof()
  }
}
