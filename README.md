# 오늘의 공부

- React button event (counter)
- React component (modal)

*React Material - UI (MUI)

→ npm install @mui/material @emotion/react @emotion/styled (설치)

- MUI활용

*체크박스가 선택됬을때 버튼을 누르면 선택된 값을 알림창으로 띄우기 

*공부해야 할 부분 

```jsx
const [checkedItems, setCheckedItems] = useState([]);
  const onHandleChecked = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setCheckedItems((prev) => [...prev, e.target.value]);
    } else {
      setCheckedItems((prev) =>
        prev.filter((value) => value !== e.target.value)
      );
    }
  };
```

*Javascript 전개구문에 대해 공부하기

- **React-button**

```jsx
const handleClick = (e) => {
    console.log(e.target.checked);
    if (checkedItems.length > 0) {
      setAlertOpen(!alertOpen);
    } else {
      alert("한가지 이상 체크하세요.");
    }
  };

// 배열을 풀어서 콤마를 찍어주는 함수
// 배열의 내용이 한개만 있을땐 콤마를 안찍고
// 배열을 돌다가 제일 마지막 요소는 콤마를 안찍고
  const makeCommas = () => {
    const result = checkedItems.join(",");
    console.log("result", result);
    return result;
  };
```

*데이터의 값(체크 된 값)이 0보다 크다면 결과 값 출력 else → 체크하라는 alert 

*checkedItems 출력 값에 .join 으로 “,”를 같이 출력함 

(join함수에 위 주석 단것들이 다 포함 되어있다)

- **join() 메서드**

→join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.

```jsx
const arr = ['바람', '비', '물'];

console.log(arr.join());
// 바람,비,물

console.log(arr.join(''));
// 바람비물

console.log(arr.join('-'));
// 바람-비-물
```
