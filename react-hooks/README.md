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
- 컴포넌트가 마운트되고 단 한번만 실행되는 작업은 두번째 인자로 빈 배열을 넣으면 된다.
- 언마운트 되기 직전이나 업데이트 되기 직전에 어떤 동작이 필요하다면 함수를 리턴하면 된다. clean up함수라고 불린다.

### hook 사용규칙 2가지
- 최상위(at the top level)에서만 Hook을 호출해야 합니다. 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행하지 마세요.
- React 함수 컴포넌트 내에서만 Hook을 호출해야 합니다. 일반 JavaScript 함수에서는 Hook을 호출해서는 안 됩니다.