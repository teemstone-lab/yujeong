// 콜백 //

function printImmediately(print) {
    print();
}

// 비동기 콜백 //

function printWithDelay(print, timeout) {
setTimeout(print, timeout);
}

console.log('1');
setTimeout(function(){
    console.log('2');
}, 1000);
console.log('3');

printImmediately(()=> console.log('hello'));

printWithDelay(()=> console.log('async callback'), 2000);



// 콜백 지옥 example

// 1. 사용자 데이터 받아오는 클래스 구축
// 2. 로그인 유저로부터 id, pw 받아오고 로그인
class UserStorage {
loginUser(id, password, onSuccess, onError) {
    setTimeout(()=> {
        if (
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder && password === 'academy') {
            onSuccess(id);
        } else {
            onError(new Error('not found'));
        }
    }, 2000);

}
getRoles(user, onSuccess, onError) {
    setTimeout(() => {
        if (user === 'ellie') {
            onSuccess({ name: 'ellie', role: 'admin'});
        } else {
            onError(new Error('no access'));
        }
    }, 1000);
}
}

// 실습

const userStorage = new UserStorage();
const id = prompt ('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
id,
password,
user => {
userStorage.getRoles(
    user, 
    userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
    }, error => {
        console.log(error);
    }
    );
}
error => {
console.log(error);
}
);





