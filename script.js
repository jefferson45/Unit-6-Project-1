$(".work").click(function(){
var name=$("#name").val();
var age=$("#age").val();
var grade=$("#grade").val();
age = parseInt(age);
grade = parseInt(grade);

var ageInFuture = (2023 - 2019) + age;
var gradeInFuture = (2023 - 2019)+ grade;

$(".results").append ("<p> in the year 2023..." + name  + "'s "+ "age is "+ageInFuture + " and will be in grade "+ gradeInFuture);
});
