//object distructure
const person = {name : 'Tom', age: 20, phone: '01728456788', job: 'Student', friends: ['habib', 'sdik', 'emaa']};
const {phone, job, friends} = person;
console.log(phone, job, friends)



//array distructure
const friendList = ['kabir', 'jabir', 'sabir', 'dabir', 'rahim'];
const [firstFriend, ...restFriends] = friendList;
console.log(firstFriend, restFriends)
