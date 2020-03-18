## react hooks 정리

### useState
```javascript
const [count, setCount] = useState(0)
```
- 클래스 방식의 state값과 this.setState 역할을 한다.
- setCount(count + 1)으로 count 변수 값에 1을 더해서 업데이트 하는 식으로 state를 변경하고 리렌더링한다.
- 해보니깐 배열이나 객체값도 잘 동작한다.

### useEffect
- 클래스 방식의 componentDidMount와 componentDidUpdate에 해당하는 함수.
- 렌더링이 되고 난 후 실행되는 함수이다.
- 함수의 두번째 인자로 state 변수 이름을 넘기면 해당 변수가 업데이트 될 때만 실행된다. (배열형태로 줘야함. [count]이렇게) 
- 컴포넌트가 마운트되고 단 한번만 실행되는 작업은 두번째 인자로 빈 배열을 넣으면 된다. ex) fetchData
- 언마운트 되기 직전이나 업데이트 되기 직전에 어떤 동작이 필요하다면 함수를 리턴하면 된다. clean up함수라고 불린다.

### useContext
- context는 상위 컴포넌트에서 하위 컴포넌트로 값을 전달 할 때 편하게 사용 할 수 있다.
- props의 경우 A -> B -> C 의 컴포넌트 계층에서 A에서 C로 보내려면 A의 값들을 B의 props로 전달하고 B에서 그 값을 C로 다시 전달한다.
- 이건 불필요한 코드가 너무 많이 생긴다. 
- context를 사용하면 A에서 context에 등록한 값들을 C에서 바로 꺼내 쓸 수 있다.
- context는 이미 있는 기능이고 useContext는 이를 더 편하게 쓰도록 하는 방법임. (context.Consumer 대신 사용)

### useRef
- 돔에 직접적인 접근
- input 요소에 ref를 달면 ref.current.value로 input 요소의 값을 참조할 수 있음.

### useReducer
- 리덕스 라이브러리를 쓰지 않고 hooks만으로 리덕스 기능을 사용할 수 있음.
- 리듀서를 정의하고 디스패치를 context에 넘겨줘서 useContext로 디스패치를 불러와 사용하면된다.

### 커스텀 hook
- 외부함수를 만들어 useEffect(callback, [])으로 작업을 수행하고 컴포넌트에서 해당 함수를 실행.

### hook 사용규칙 2가지
- 최상위(at the top level)에서만 Hook을 호출해야 합니다. 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행하지 마세요.
- React 함수 컴포넌트 내에서만 Hook을 호출해야 합니다. 일반 JavaScript 함수에서는 Hook을 호출해서는 안 됩니다.