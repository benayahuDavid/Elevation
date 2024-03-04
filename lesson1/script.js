// var num = 5;
// const num2 = 5;
// let num3 = 5;

// const arr = [1, 2, 3];

// console.log(arr[length - 1]);
// console.log(arr[0]);
// arr.push(4); /* הוספת ערך לרשימה */
// arr.pop(); /* מוריד את האחרון*/
// var a = arr.pop(); /* מוריד את האחרון וקולט אותו לתוך משתנה */
// arr.shift(); /*הוצאת הראשון  */
// arr.splice(0, 1); /* הורדה אינדקס וכמות משם */

// for (const n of arr) {
//   console.log(n);
// }
const counter = {};

function click2(element) {
  console.log(element);
  element.style.color = "red";
  element.style.background = "black";
  //   alert("you");
  //   const element = document.getElementById(id);
  if (element.id in counter) {
    counter[element.id]++;
  } else {
    counter[element.id] = 1;
  }
  element.innerHTML = counter[element.id];
}
