$(document).ready(readyNow);

let totalYearlySalary = 0;

  function readyNow(){
    console.log('JQ');
    $('#submitButton').on('click', addEmployeeData);
}

function addEmployeeData(){

  let first = $('#firstName').val();
  let last = $('#lastName').val();
  let empId = $('#empId').val();
  let title = $('#title').val();
  let salary = $('#salary').val();


  console.log('salary:', salary);
  $('#employees').append('<p>' + first + last + empId + title + salary +'<p>');
  totalYearlySalary += parseInt(salary);
  let monthlyCost = (totalYearlySalary /12).toFixed(2);
  console.log('total monthly', (monthlyCost));

  $('#monthlyCost').text(monthlyCost);
}
