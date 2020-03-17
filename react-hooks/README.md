## react hooks 정리

# useState
```javascript
const [count, setCount] = useState(0)
```
- 클래스 방식의 state값과 this.setState 역할을 한다.
- setCount(count + 1)으로 count 변수 값에 1을 더해서 업데이트 하는 식으로 state를 변경하고 리렌더링한다.
- 해보니깐 배열이나 객체값도 잘 동작한다.