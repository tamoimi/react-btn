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
