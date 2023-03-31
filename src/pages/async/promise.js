// 프로미스는 자바스크립트 내부에 저장된 오브젝트.
// 프로듀서와 컨슈머의 차이

// 프로미스의 State:
// 우리가 지시한 operation 을 수행중 : pending
// operation 완료 : fulfilled
// file을 찾을 수 없거나 네트워크에 문제가 있는 상태 : rejected

// 우리가 원하는 기능을 수행해서 해당하는 기능을 만들어 내는 오브젝트 : Producer
// 우리가 원하는 데이터를 소비하는 : Consumer

// 1. producer
// 내가 원하는 기능을 비동기적으로 실행하는 promise 만들기
// 새로운 프로미스가 만들어질 때는, 우리가 전달한 executor 라는 콜백 함수가 바로 자동 실행됨.

const promise = new Promise((resolve, reject) => {
	// doing some heavy work (netwrok, read files)
	console.log('doing something...');
	setTimeout(() => {
		//resolve('ellie');
        reject(new Error('no network'));
	}, 2000);
});

// 2. consumers : then, catch, finally
promise //
.then(value => {
	console.log(value);
});

.catch(error => {
    console.log(error);
});

.finally(()=> {
    console.log('finally');
});

//3. promise chanining

const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(num -1), 1000);
    });
})
.then(num=> console.log(num));


//4. Error Handling

const getHen =() =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
});

const getEgg = hen =>
new Promise((resolve, reject) => {
    setTimeout(()=> resolve(`${hen}=>달걀`), 1000);
});

const cook = egg =>
    new Promise((resolve, reject)=> {
        setTimeout(()=> resolve(`${egg}=> 프라이팬`), 1000);
        // setTimeout(()=> reject(new Error)(`error! ${hen}=> 달걀`)), 1000);
    });

getHen()
.then(hen=> getEgg(hen)) // =.then(getEgg) 와 동일
.catch(error => {
    return '빵'
})
.then(egg => cook(egg)) // =.then(cook) 와 동일
.then(meal => console.log(meal)); //// =.then(console.log) 와 동일
.catch(consol.elog);


