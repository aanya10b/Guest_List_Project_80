function submit()
{



var name_of_the_student_array = [];
var display_student_array = [];
for (var j = 1; j <= 4; j++)
{
    var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
    
name_of_the_student_array.push(name_of_the_student);
console.log(name_of_the_student_array);
}
var length_of_name_of_students_array = name_of_the_student_array.length;
console.log(length_of_name_of_students_array);
}