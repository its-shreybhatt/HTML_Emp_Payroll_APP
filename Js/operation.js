
// EventListner
const salary= document.querySelector('#salary');
const output= document.querySelector('.salary-output');
    salary.addEventListener('input', function(){
    output.textContent=salary.value;
});


class EmployeePayrollData {
    name;
    gender;
    department;
    salary;
    startDate;

    // constructor(name, gender, department, salary, startDate) {
    //     this.name = name;
    //     this.gender =gender;
    //     this.department = department;
    //     this.salary = salary;
    //     this.startDate = startDate;    
    // }

    // get name(){
    //     return this.name;
    // }

    // set name(name){
    //     this.name = name;
    // }

    // get gender(){
    //     return this.gender;
    // }

    // set gender(gender){
    //     this.gender = gender;
    // }

    // get department(){
    //     return this.department;
    // }

    // set department(department){
    //     this.department = department;
    // }

    // get salary(){
    //     return this.salary;
    // }

    // set salary(salary){
    //     this.salary = salary;
    // }

    // get startDate(){
    //     return this.startDate;
    // }

    // set startDate(startDate){
    //     this.startDate = startDate;
    // }
   
    toString() {             
        return "name=" +this.name + ", gender=" +this.gender + ", department=" +this.department  
            +", salary=" +this.salary +", day=" +this.day +", month=" +this.month +", year=" +this.year ;
    }

}


function save(){
    // let objectArray = [];
    let printObject = new EmployeePayrollData();

    printObject.name=document.querySelector('#name').value;
    printObject.gender=document.querySelectorAll('#gender');
    printObject.department=document.querySelectorAll('#department');
    printObject.salary=document.querySelector('#salary').value;
    printObject.day=document.querySelector('#day').value;
    printObject.month=document.querySelector('#month').value;
    printObject.year=document.querySelector('#year').value;
    // objectArray.push(printObject);
    alert(printObject.toString());  
}
