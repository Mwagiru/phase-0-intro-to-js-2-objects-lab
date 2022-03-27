// Write your solution in this file!
const employee = {
    name: "Tracy Mwagiru",
    streetAddress: "200 Kibera Station Road",
};
function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = {...obj};
    newEmployee[key] = value;
    return newEmployee;
}
const newEmployee = updateEmployeeWithKeyAndValue(employee,
    "name",
    "Joy Nyakinyua");
console.log(employee.name);
//
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    employee[key] = value;
    return employee;
}
const lastEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress","119 Jospeh Kang'ethe");
console.log(employee.streetAddress)
function deleteFromEmployeeByKey(obj, key){
    const delEmployee = { ...obj };
    delEmployee[key];
    return delEmployee;
}
const delEmployee = deleteFromEmployeeByKey(delete employee.name);
console.log(employee);
//
function destructivelyDeleteFromEmployee(obj, key){
    employee[key];
    return employee;
}
const starEmployee = destructivelyDeleteFromEmployee(delete employee.streetAddress);
console.log(employee);
