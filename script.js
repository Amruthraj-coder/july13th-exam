/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(element){
    if(element.marks>50){
      console.log(element);
    }
  })


}
// PrintStudentswithMap()

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(element){
    if(element>50){
      console.log(element);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newstudent={
    id:4,name:"susan",age:"20",marks:45
  }
  arr.push(newstudent)
  console.log(arr)
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr=arr.filter(function(student){
    return student.marks>50;

  })
  console.log(arr);
}
// removeFailedStudent();

function concatenateArray() {
  const newArray = [
    { id: 4, name: "jane", age: "21", marks: 75 },
    { id: 5, name: "bob", age: "19", marks: 60 },
    { id: 6, name: "lisa", age: "22", marks: 90 }
  ];
  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);


  //Write your code here, just console.log
}
