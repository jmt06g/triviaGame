





//lets create the js for the sports trivia game
//we also need to create the jquery
// we need a 60 second timer
//need the user to click/chose one choice per question
//need correct answers
//need incorrect answers
//need allQuestions not answered


$(document).ready(function() {



var allQuestions = [{
  question: "What year is it?",
  choices: ["1992","2018","2028","2030"],
  answer: 1
},
{
  question: "What time is it?",
  choices: ["930", "1200", "100", "200"],
  answer: 0
},
{
  question: "When is Christmas?",
  choices: ["Dec 24th", "Dec 25th", "Dec 26th", "Dec 27th"],
  answer: 1
},
{
  question: "Who is the President of the United States?",
  choices: ["Barrack Obama", "Donald Trump", "George Washington", "Paul Rynan"],
  answer: 0
},
{
  question: "What is the capital of the United States?",
  choices: ["Washington DC", "New York", "Miami", "San Francisco"],
  answer : 0
}];

var time = 60;
var incorrectAnswers = 0;
var correctAnswer = 0;
var timeRemaining = 0;
var button;
var remainingQuestions;
var currentQuestion = 0;
var quizOver = false;
var answers;
var correctAnswers =0;

$(document).ready(function() {
//allQuestions done
console.log(allQuestions);

//here we are trying to display the Current Question

displayCurrentQuestion();
$(this).find(".quizMessage").hide();

//next button click?
 
//this will find class next button and on click
$(this).find(".nextButton").on("click", function () {
  //if quiz is not over
  if (!quizOver) {
    //var value Jquery for input type of button, in this case radiobutton
    value = $("input[type='radio']:checked").val();
    //if value comes back undefinded than find in the document the class quizMessage and show text "please..."
    if (value == undefined) {
      $(document).find(".quizMessage").text("Please select an answer");
      $(document).find(".quizMessage").show();
  } else {
      // TODO: Remove any message -> not sure if this is efficient to call this each time....
      //honestly i dont even know what it does

      $(document).find(".quizMessage").hide();

      //if value of this call is equal execute a block of code that add 1 to correctAnswers
      if (value == allQuestions[currentQuestion].correctAnswer) {
          correctAnswers++;
      }

      









//*
//$("#start").on("click", function() {
  //console.log("game start");

//user clicks start
//
//timer starts as allQuestions are displayed
//displays allQuestions

//$("#allQuestions").html(allQuestions[0].question);

//for(var i = 0; i < allQuestions.length; i++) {}





//var answerButton = $("<button>")




//I need to create a start button with js
//*
