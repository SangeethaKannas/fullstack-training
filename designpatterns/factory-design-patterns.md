## Factory Design Pattern



Factory Design Pattern
<!DOCTYPE html>
<html>
 <head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <title>Factory Design Pattern</title>
 </head>
 <body>
 
 <label>Slt Employee Type</label>
 <select onchange="showEmployee(this.value)">
 <option value="FullTime">FullTime</option>
 <option value="PartTime">PartTime</option>
 <option value="Temporary">Temporary</option>
 <option value="Contractor">Contractor</option>
 </select>
 <div id="show"></div>
 
 <script>
 class FullTime {
 constructor() {
 this.salary = 150;
 }
 }
 class PartTime {
 constructor() {
 this.salary = 100;
 }
 }
 class Temporary {
 constructor() {
 this.salary = 80;
 }
 }
 class Contractor {
 constructor() {
 this.salary = 120;
 }
 }
 class FactoryEmployee {
 constructor(type) {
 this.type = type;
 this.empDet;
 }
 createEmployee(option) {
 let emp;
 this.type = option;
 switch(option) {
 case "FullTime":
 emp = new FullTime();
 this.empDet = emp;
 break;
 case "PartTime":
 emp = new PartTime();
 this.empDet = emp;
 break;
 case "Temporary":
 emp = new Temporary();
 this.empDet = emp;
 break;
 case "Contractor":
 emp = new Contractor();
 this.empDet = emp;
 break;
 default: 
 emp = new FullTime();
 this.empDet = emp;
 }
 return emp; 
 }
 show() {
 return this.type + ' Employee Salary : $' + this.empDet.salar
y;
 }
 
 }
 function showEmployee(option) {
 let empFactory = new FactoryEmployee();
 empFactory.createEmployee(option);
 console.log(empFactory.show());
 document.getElementById('show').innerText = empFactory.show();
 }
 </script>
 </body>
</html>
Advantages: 
Factory pattern centralizes our object creation logic. 
• If any bug arise then we only need to fix it in the factory and it would reflect in all our code. 
• If any new employee type come in future then it will be implemented inside factory. In Outside, 
only need to pass the option/employee type. No need to bother about factory inside 
functionality.
Thus increasing our code maintainability.

Reference Urls: 
https://blog.sessionstack.com/how-javascript-works-the-factory-design-pattern-4-use-cases7b9f0d22151d
https://www.dofactory.com/javascript/design-patterns/factory-method
https://www.youtube.com/watch?v=LqlhjsYSSRw
https://www.educative.io/collection/page/5429798910296064/5725579815944192/607859415030169
6