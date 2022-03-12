# Utilities

이 폴더에는 폴더이름 그대로 utility 들을 저장합니다.
또한 src 내 utilities, modules를 제외한 폴더에 지금 작성하고자 하는 코드를 포함시킬 수 없는 경우에도 utilities폴더에 저장합니다.

utilities폴더에 포함하고자 하는 코드가 많아질 경우에는 modules폴더에 코드와 관련된 새 폴더를 만들어 코드를 모듈화해 관리합니다.

예시 : async.ts <- 비동기와 관련한 헬퍼 함수들의 모음

```typescript
export function asAsync<T = any>(func: () => T): Promise<T> {
  return new Promise((resolve, reject) => {
    try {
      resolve(func());
    } catch (e) {
      reject(e);
    }
  });
}

export const wait = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));
```
