# Components

이 폴더에는 컴포넌트를 저장합니다.

common 폴더를 제외하고, 컴포넌트의 폴더구조는, pages에 있는 _app.js와 api/를 제외한 파일과 일대일 대응이 되도록 합니다.
또한 크기가 큰 컴포넌트가 있다면 그 컴포넌트를 구성하는 작은 컴포넌트를 포함하여 큰 컴포넌트의 이름을 가지는 폴더로 묶습니다.

예시

|- pages/

|-- _app.tsx

|-- index.tsx <- 컴포넌트 이름 Home

|-- restaurant/

|--- index.tsx <- 컴포넌트 이름 Restaurants

|--- [id].tsx <- 컴포넌트 이름 Restaurant

|

|- components/

|-- home/

|--- navigation/ <- 큰 컴포넌트

|---- index.tsx <- 작은 컴포넌트들을 모은 navigation 컴포넌트

|---- avatar.tsx

|---- flat-button.tsx

|---- ....

|--- hero.tsx

|--- ...

|--- restaurants/

|---- index.tsx

|---- ...

|---- restaurant/

|----- index.tsx

|----- ...
