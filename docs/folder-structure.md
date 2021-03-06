# Folder structure

현 프로젝트의 폴더 구조는 다음과 같습니다

## src
이 폴더 안에 우리가 실질적으로 건드려야하는 모든 코드가 들어갑니다

## src/*

src 아래에는 다음과 같은 폴더들이 있으며, 각 폴더에 관한 설명은 각 폴더에 포함되어 있는 README.md를 참조해주세요

- src/components : 이 폴더에는 컴포넌트를 저장합니다. common 폴더를 제외하고, 컴포넌트의 폴더구조는, pages에 있는 _app.js와 api/를 제외한 파일과 일대일 대응이 되도록 합니다. 또한 크기가 큰 컴포넌트가 있다면 그 컴포넌트를 구성하는 작은 컴포넌트를 포함하여 큰 컴포넌트의 이름을 가지는 폴더로 묶습니다.
- src/components/common : 이 폴더에는 프로젝트 도처에 활용되는 컴포넌트를 저장합니다.
- src/context : 이 폴더에는 React.Context를 저장합니다.
- src/hooks 이 폴더에는 훅과 훅과관련된 타입 정의를 저장합니다. 훅은 예외적으로 파일 이름을 kebab-case가 아닌 camelCase로 저장합니다. 비슷한 종류의 기능을 하는 훅은 이를 일반적으로 지칭하는 이름을 폴더로 만들어 저장합니다.
- src/modules: 이 폴더에는 src내 utilities, modules를 제외한 폴더에 포함 시킬 수 없는 코드로, utilities에 포함하기에는 그 코드의 길이가 길어 별도의 모듈로 관리가 필요한 코드들을 저장하는 곳입니다. 저장해야할 코드를 그와 관련된 이름으로 폴더를 만들어 저장합니다.
- src/pages : Next.js 프레임워크의 pages폴더와 동일합니다
- src/styles : 이 폴더에는 css파일들을 저장합니다.
- src/utilities : 이 폴더에는 폴더이름 그대로 utility 들을 저장합니다.
또한 src 내 utilities, modules를 제외한 폴더에 지금 작성하고자 하는 코드를 포함시킬 수 없는 경우에도 utilities폴더에 저장합니다. utilities폴더에 포함하고자 하는 코드가 많아질 경우에는 modules폴더에 코드와 관련된 새 폴더를 만들어 코드를 모듈화해 관리합니다.

# 그 외 파일들

궁금하면 직접 찾아보거나 현규한테 물어보세용
