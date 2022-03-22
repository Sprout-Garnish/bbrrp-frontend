# API Client for BBRRP Server

본 패키지는 서버와의 통신을 위한 여러 Fetcher와 훅을 제공합니다.

## useDevLogin

사용법 : 프로젝트 Root Directory에 private 폴더를 만들고 그 아래에 credentials.js폴더를 만든 뒤 다음을 붙여 넣어줍니다.

```js
module.exports = {
  email: "<your email>",
  password: "<your password>",
};
```

위에 노션에 올라와있는 어드민 이메일과 비밀번호를 기입하시면 됩니다.

위와 같이 기입하셨다면 로그인이 필요한 곳에서 이 훅을 갖다 쓰시면 됩니다.

```tsx

const SomeComponentThatDoesLogin = () => {
    const { loggedIn } = useContext(BBRRPClientContext);
    const { login, logout } = useDevLogin();
    const toggleLogin = () => {
        if (loggedIn) {
            logout();
        } else {
            login();
        }
    }
    return (
        <button onClick={toggleLogin}>{loggedIn ? "로그아웃" : "로그인"}</button>
    )
}
