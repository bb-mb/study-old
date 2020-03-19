## graphQL + apollo

### graphQL로 해결할 수 있는 문제
- over-fetching
  - 내가 사용할 영역의 정보보다 많은 정보를 서버에서 받는 것.
  - 예를들어 사용자 이름만 필요한 상황에서 RESTAPI의 get으로 user정보를 불러온다면 사용자 이름 외에도 프로필 사진과 같은 현재 사용하지 않을 데이터까지 통째로 가져오게 됨.
- under-fetching
  - 하나의 기능을 위해 여러번의 REST API를 요청하는 것.


### 요청 방식
- graphQL에서는 REST API와 다르게 url이 없다. 하나의 엔드포인트만 존재한다.
- graphQL은 쿼리를 전송하고 쿼리에 해당하는 정보만을 리턴해 준다.
```js
query {
    feed {
        comments
        likeNumber
    }
    user {
        username
        profilePic
    }
}
// 이렇게 쿼리를 보내면 아래와 같이 이에 해당하는 정보를 보내준다.
{
    feed: [
        {
            comments: 1,
            likeNumber: 20
        }
    ],
    user: [
        {
            userName: 'kim',
            profile: 'http:'
        }
    ]
}
```