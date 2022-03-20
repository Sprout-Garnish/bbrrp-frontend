# Hooks

이 폴더에는 훅과 훅과관련된 타입 정의를 저장합니다.

훅은 예외적으로 파일 이름을 kebab-case가 아닌 camelCase로 저장합니다.
비슷한 종류의 기능을 하는 훅은 이를 일반적으로 지칭하는 이름을 폴더로 만들어 저장합니다.
이때 이 폴더 이름은 kebab-case로 합니다.

예시 : 블루투스 관련 훅 모음을 저장할 때

|- hooks/

|-- bluetooth/

|--- useDevices.ts

|--- useCharacteristics.ts

|-- useInit.ts

|-- ...

훅 예시 : useInputTextStyle.ts

```typescript
import {ColorPalette} from '@src/themes/colors';
import {switchHandler} from '@src/tools/handlers';
import {useState} from 'react';
import {Platform, TextStyle, ViewStyle} from 'react-native';

interface IUseInputTextStyle {
  inputTextStyle: TextStyle & ViewStyle;
  onFocus: () => void;
  onBlur: () => void;
}

export const useInputTextStyle = (): IUseInputTextStyle => {
  const [focus, setFocus] = useState<boolean>(false);
  const inputTextStyle: TextStyle = {
    color: switchHandler(
      Platform.OS === 'ios',
      ColorPalette.whitesmoke,
      switchHandler(focus, ColorPalette.black, ColorPalette.whitesmoke),
    ),
  };
  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);
  return {
    inputTextStyle,
    onFocus,
    onBlur,
  };
};
```