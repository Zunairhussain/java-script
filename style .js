var students = [];

function addUser() {
    students.push( document.getElementById("userName").value)
    printStudents()
}


function findUser() {
    var searchValue = document.getElementById("searchInput").value;
    var result = "not found";
    for (let index = 0; index < students.length; index++) {
        const student = students[index];
        if (student == searchValue) {
            result = `user found on index ${index}`
            break;
        }
    }
    document.getElementById("searchResult").innerHTML = result
}

function printStudents() {
    console.log('====================================');
    console.log(students);
    console.log('====================================');
}


var studentsNames =["Umair","Ahmad","Abdullah"]
studentsNames.push=["Naveed"]


























// var number =[10,20,30,40]

// var newNumber = number. slice(1,3)

// console.log('=========================================');
// console.log("newNumber",newNumber);
// console.log('=========================================');


// User grade 

// var grade = "A"

// switch (grade) {
//     case "A":
//         console.log('=========================================');
//         console.log("Grade is A"); 
//         console.log('=========================================');

//         break;
//     case "B"
//         console.log('=========================================');
//     console.log("Grade is B"); 
//     console.log('=========================================');

//         break;
//     case "C":
//         console.log('=========================================');
//         console.log("Grade is C"); 
//         console.log('=========================================');


//     default:
//         console.log('=========================================');
//         console.log("Grade is default"); 
//         console.log('=========================================');

//         break;
// }

// var day = "Tuesday"

// console.log(performance.now());

// switch (day) {
//     case "Sunday":
//         console.log('=========================================');
//         console.log("Grade is A"); 
//         console.log('=========================================');

//         break;
//     case "Monday" :
//         console.log('=========================================');
//     console.log("Grade is B"); 
//     console.log('=========================================');

//         break;
//     case "Tuesday":
//         console.log('=========================================');
//         console.log("Grade is C"); 
//         console.log('=========================================');


//     default:
//         console.log('=========================================');
//         console.log("Grade is default"); 
//         console.log('=========================================');

//         console.log(performance.now());

//         break;


//     }


// loop process 

// for (let i = 1; i < 10.;i++){
//     console.log("for loop")
// }


// var index = 1;
// while (index > 10) {
//     console.log("while loop", index )
// index++
// }

// var anyVar =1;

// do {
//     console.log("do while",anyVar);
// // if (anyVar == 7) {
// //     break ;

//   anyVar++; 
// }while (anyVar < 10)


var userNumber = ["a","b","c","d","e"]


