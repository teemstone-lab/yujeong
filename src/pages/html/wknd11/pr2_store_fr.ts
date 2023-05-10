// 스토어 api 1개 : 바로 여깁니다
// 단일 과일은 객체 : Fruit = {name, id, emoji}
// 과일 객체를 하나의 배열에 담기 : Products = Fruit[]
// 화면에 보여줄 과일가게는 4개; shop1 ~ shop4
// 과일가게들을 하나의 배열에 담기; fruitShop = Shop[]
// 각각의 과일가게들은 add 버튼과 delete 버튼을 가짐.
// 단일 과일가게는 add() 와, delete() 를 가져야 함
//add(과일객체) => {
//     store.update((prev: 과일배열) => {
//      return [...prev, 과일객체] })  }         ]]]]]]더하고
//delete(과일id) => {
//     store.update((prev: 과일배열)=>{
//      다음값 = prev.filter((과일객체) => id !== 과일객체.id); ]]]]]]뺌
//      return 다음값})
//
//* app 에는 add와 delete 메서드를 실행하는 클릭이벤트 함수가 있어야 함
//* select 박스가 있어야 함
//* select 박스에서 선택한 과일을 저장하는 변수가 있어야함. 드래그 과일과 이름 달라야함 e.currentTarget.value
//* select 박스에서 과일을 선택하면 getEmoji 함수가 실행됨.
//* getEmoji(fruitName)=>{
//* let selectValue = fruitName
//* switch 문 사용  selectValue === Fruit.name , emoji 어쩌구
//  }

// 드래그 이벤트 함수 dragStart(), drop() 있어야 함
//dragStart()=>{
// currentSelectItem = 드래그 한 과일
// selectShopIndex = 드래그 시작된 위치
// }
//drop()=>{
// 드래그 시작된 위치 정의
// 드랍된 위치 정의
// 드래그 시작된 위치에서  currentSelectItem 찾기 = find
// 드래그 시작된 위치에서 currentSelectItem 삭제 = splice
// 드랍할 과일 = 삭제한 과일
// 드랍된 위치에서  드랍할 과일 추가 = push
// }

//* app에서 fruitShop 가져오기
//* each 반복문 돌면서  단일 과일가게 출력, 출력중인 과일가게 index도 있어야 함
//* 단일 과일가게 컴포넌트 안에  selectShopIndex: 드래그 시작된 위치, endShopIndex: 드랍된 위치, currentSelectItem: 현재선택된아이템을 기억하는 변수 있어야 함.
//* 가게마다 상황 공유되어야 하니까 전역에서 선언 후 props로 받아오고 바인딩 해줘야 함.
//* <ul = 과일가게> 에 drop, dragover 이벤트 할당
//* <li = 과일> 에 draggable, dragstart 이벤트 할당
