# Classed Components

이 라이브러리는 [styled-components](https://styled-components.com/)에 큰 영감을 얻어 만들어졌습니다.

## API Reference

### classed

styled-components의 `styled`처럼 뒤에 HTML 태그 이름을 붙여 사용한다. 다만 본 라이브러리는 tailwindcss를 타겟으로 만들어진 라이브러리인 만큼 template literal을 사용하지는 않는다.

예시 : 
```tsx
import React from "react";
import classed from "classed-components";
import clsx, { tw } from "clsx";

const CarList = classed.div(`flex flex-col flex-1 overflow-scroll`)
const AnotherCarList = classed.div`flex flex-col flex-1 overflow-scroll`
const CarItem = classed.div<{ selected?: boolean }>(({selected}) =>
  clsx([
    tw`border-2 flex p-3 m-2 items-center`,
    selected ? tw`border-black` : tw`border-white`,
  ])
);

const App: React.FC = () => (
  <CarList>
    <CarItem selected={true}>
      <img src="https://via.placeholder.com/100" />
      <span>차량1</span>
    </CarItem>
    <CarItem>
      <img src="https://via.placeholder.com/100" />
      <span>차량2</span>
    </CarItem>
  </CarList>
);

export default App;
```

위의 예시는 아래의 코드와 그 기능은 동일하다

```tsx
import React from "react";
import clsx from "clsx";

const CarList: React.FC = ({children}) => (
    <div className="flex flex-col flex-1 overflow-scroll">{chlidren}</div>
)
const CarItem: React.FC<{ selected?: boolean }> = ({children, selected}) => (
    <div className={
        clsx([
            "border-2 flex p-3 m-2 items-center",
            selected ? "border-black" : "border-white",
        ])
    }>{chlidren}</div>
)

const App: React.FC = () => (
  <CarList>
    <CarItem selected={true}>
      <img src="https://via.placeholder.com/100" />
      <span>차량1</span>
    </CarItem>
    <CarItem>
      <img src="https://via.placeholder.com/100" />
      <span>차량2</span>
    </CarItem>
  </CarList>
);

export default App;
```
