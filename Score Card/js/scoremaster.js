$(document).ready(function(){

//Plus Ten event handlers
 $("#row1plustenbutton").click(function(){
	plusTen("#row1ptsH");
 });
 
 $("#row2plustenbutton").click(function(){
	plusTen("#row2ptsH");
 });
 
 $("#row3plustenbutton").click(function(){
	plusTen("#row3ptsH");
 });
 
 $("#row4plustenbutton").click(function(){
	plusTen("#row4ptsH");
 });
 
 $("#row5plustenbutton").click(function(){
	plusTen("#row5ptsH");
 });
 
 $("#row6plustenbutton").click(function(){
	plusTen("#row6ptsH");
 });
 
 //Plus Five event handlers
 $("#row1plusfivebutton").click(function(){
	plusFive("#row1ptsH");
 });
 
 $("#row2plusfivebutton").click(function(){
	plusFive("#row2ptsH");
 });
 
 $("#row3plusfivebutton").click(function(){
	plusFive("#row3ptsH");
 });
 
 $("#row4plusfivebutton").click(function(){
	plusFive("#row4ptsH");
 });
 
 $("#row5plusfivebutton").click(function(){
	plusFive("#row5ptsH");
 });
 
 $("#row6plusfivebutton").click(function(){
	plusFive("#row6ptsH");
 });
 
 //Plus One event Handlers
 $("#row1plusonebutton").click(function(){
	plusOne("#row1ptsH");
 });
 
 $("#row2plusonebutton").click(function(){
	plusOne("#row2ptsH");
 });
 
 $("#row3plusonebutton").click(function(){
	plusOne("#row3ptsH");
 });
 
 $("#row4plusonebutton").click(function(){
	plusOne("#row4ptsH");
 });
 
 $("#row5plusonebutton").click(function(){
	plusOne("#row5ptsH");
 });
 
 $("#row6plusonebutton").click(function(){
	plusOne("#row6ptsH");
 });

 //Minus Ten event handlers
 $("#row1minustenbutton").click(function(){
	minusTen("#row1ptsH");
 });
 
 $("#row2minustenbutton").click(function(){
	minusTen("#row2ptsH");
 });
 
 $("#row3minustenbutton").click(function(){
	minusTen("#row3ptsH");
 });
 
 $("#row4minustenbutton").click(function(){
	minusTen("#row4ptsH");
 });
 
 $("#row5minustenbutton").click(function(){
	minusTen("#row5ptsH");
 });
 
 $("#row6minustenbutton").click(function(){
	minusTen("#row6ptsH");
 });
 
 //Minus Five event handlers
 $("#row1minusfivebutton").click(function(){
	minusFive("#row1ptsH");
 });
 
 $("#row2minusfivebutton").click(function(){
	minusFive("#row2ptsH");
 });
 
 $("#row3minustenbutton").click(function(){
	minusFive("#row3ptsH");
 });
 
 $("#row4minusfivebutton").click(function(){
	minusFive("#row4ptsH");
 });
 
 $("#row5minusfivebutton").click(function(){
	minusFive("#row5ptsH");
 });
 
 $("#row6minusfivebutton").click(function(){
	minusFive("#row6ptsH");
 });
 
 //Minus One event handlers
 $("#row1minusonebutton").click(function(){
	minusOne("#row1ptsH");
 });
 
 $("#row2minusonebutton").click(function(){
	minusOne("#row2ptsH");
 });
 
 $("#row3minusonebutton").click(function(){
	minusOne("#row3ptsH");
 });
 
 $("#row4minusonebutton").click(function(){
	minusOne("#row4ptsH");
 });
 
 $("#row5minusonebutton").click(function(){
	minusOne("#row5ptsH");
 });
 
 $("#row6minusonebutton").click(function(){
	minusOne("#row6ptsH");
 });
 
 //Hide button event handler
 $("#hideScoreButton").click(function(){
	if($("#hideScoreButton").val() == "hide"){
	$(".plusten").css("display","none");
	$(".plusfive").css("display","none");
	$(".plusone").css("display","none");
	$(".minusten").css("display","none");
	$(".minusfive").css("display","none");
	$(".minusone").css("display","none");
	$("#hideScoreButton").val("Show");
	}
	else{
	$(".plusten").css("display","table-cell");
	$(".plusfive").css("display","table-cell");
	$(".plusone").css("display","table-cell");
	$(".minusten").css("display","table-cell");
	$(".minusfive").css("display","table-cell");
	$(".minusone").css("display","table-cell");
	$("#hideScoreButton").val("hide");
	}
 });
 
 $("#hideotherbuttons").click(function(){
	if($("#hideotherbuttons").val() == "done"){
	$("#namesarea").hide();
	$("#hideotherbuttons").val("Modify");
	}
	else{
	$("#namesarea").show();
	$("#hideotherbuttons").val("done");
	}
	
 });
 
 $("#quiznamebutton").click(function(){
	$("#quizName").text($("#quiznametext").val());
	$("#team1").text($("#team1text").val());
	$("#team2").text($("#team2text").val());
	$("#team3").text($("#team3text").val());
	$("#team4").text($("#team4text").val());
	$("#team5").text($("#team5text").val());
	$("#team6").text($("#team6text").val());
 });
 
 
 //Plus ten functionality
 function plusTen(ptsPlace){
	var oldPts = $(ptsPlace).text();
	var newPts = parseInt(oldPts) + 10;
	$(ptsPlace).text(newPts);
 }
 
 //Plus Five functionality
 function plusFive(ptsPlace){
	var oldPts = $(ptsPlace).text();
	var newPts = parseInt(oldPts) + 5;
	$(ptsPlace).text(newPts);
 }
 
 //Plus One functionality
 function plusOne(ptsPlace){
	var oldPts = $(ptsPlace).text();
	var newPts = parseInt(oldPts) + 1;
	$(ptsPlace).text(newPts);
 }
 
 //Minus Ten functionality
 function minusTen(ptsPlace){
	var oldPts = $(ptsPlace).text();
	var newPts = parseInt(oldPts) - 10;
	$(ptsPlace).text(newPts);
 }
 
 //Minus Five functionality
 function minusFive(ptsPlace){
	var oldPts = $(ptsPlace).text();
	var newPts = parseInt(oldPts) - 5;
	$(ptsPlace).text(newPts);
 }
 
 //Minus One functionality
 function minusOne(ptsPlace){
	var oldPts = $(ptsPlace).text();
	var newPts = parseInt(oldPts) - 1;
	$(ptsPlace).text(newPts);
 }
 
  });
