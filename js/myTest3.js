var database = firebase.database();
google.charts.load('current', {'packages':['corechart']});

//JSON tree
// var studentList = {
// 	aeidjalwsn10238a92da29: {
// 		reponse1: "responsea", 
// 		response2: "responseb", 
// 		response3: "responsec", 
// 	},
// 	afjaeijaeif: {
// 		reponse1: "responsea", 
// 		response2: "responseb", 
// 		response3: "responsec", 
// 	}
// }



$(".alert").hide();
google.load("visualization", "1", {packages:["corechart"]});

var questionArray1 = [
	"Consider the following method:",
	"Consider the following partial class declaration.",
	"Consider the following partial class declaration.",
	"Consider the following code segment.",
	"Consider the following method.",
	"Consider the following code segment.",
	"A teacher put three bonus questions on a test and awarded 5 extra points to anyone who answered all three correctly and no extra points otherwise. Assume that the boolean variables bonusOne, bonusTwo, and bonusThree indicate whether a student has answered the particular question correctly. Each variable was assigned true if the answer was correct and false if it was incorrect.\n\nWhich of the following code segments will properly update the variable grade based on a student's performance on the bonus questions?",
	"Assume that an array of integer values has been declared as follows and has been initialized.",
];
var codeArray1 = [
"public static int mystery(int[] arr)\n{\nint x = 0;\n\nfor (int k = 0; k< arr.length; k = k + 2)\n&emsp;x = x + arr[k]\n\n  return x;\n}",
"public class SomeClass\n{\nprivate int myA;\nprivate int myB\nprivate int myC\n\n//Constructor(s) not shown\n\npublic int getA()\n{ return myA; }\n\npublic void setB(int value)\n{ myB = value;}\n}",
"public class SomeClass\n{\nprivate int myA;\nprivate int myB\nprivate int myC\n\n//Constructor(s) not shown\n\npublic int getA()\n{ return myA; }\n\npublic void setB(int value)\n{ myB = value;}\n}",
"int x =7;\n int y = 3;\n\nif ((x < 10) && (y < 0))\n&emsp;System.out.println('Value is : ' + x * y);\nelse\n&emsp;System.out.println('Value is : ' + x/7);",
"public ArrayList<Integer> mystery(int n)\n{\n&emsp;ArrayList<Integer> seq = new ArrayList<Integer>();\n\nfor (int k = 1; k <=n; k++)\n&emsp;&emsp;seq.add(new Integer(k * k + 3));\n\n&emsp;return seq;\n}",
"int value = 15;\nwhile (value < 28)\n{\n&emsp;System.out.println(value);\n&emsp;value++;\n}",
"I.  if(bonusOne && bonusTwo && bonusThree)\n&emsp;&emsp;&emsp;grade+=5;\n\nII. if (bonusOne||bonusTwo||bonusThree)\n&emsp;&emsp;&emsp;grade+=5;\n\nIII.  if (bonusOne)\n&emsp;&emsp;&emsp;grade+=5;\n&emsp;&emsp;if (bonusTwo)\n&emsp;&emsp;&emsp;grade+=5;\n&emsp;&emsp;if (bonusThree)\n&emsp;&emsp;&emsp;grade+=5;",
"int[] arr = new int[10];",



];
var followUpArray1 = [
"Assume that the array nums has been declared and initialized as below. What value will be returned as a result of the call mystery(nums)?",
"The below declaration appears in another class. Which of the following code segments will compile without error?",
"Which of the following changes to SomeClass will allow other classes to access but not modify the value of myC?",
"What is printed as a result of executing the code segment?",
"Which of the following is printed as a result of executing the following statement?",
"What are the first and last numbers output by the code segment? (First, Last)",
"blank",
"Which of the following code segments correctly interchanges the value of arr[0] and arr[5]?",

];
var codeArray2 = [
"int[] nums = {3, 6, 1, 0, 1, 4, 2};",
"SomeClass obj = new SomeClass()",
"blank",
"blank",
"System.out.println(mystery(6))",
"blank",
"blank",
"blank",
];
var answerArray = [
	["5", "6", "7", "10", "17"],
	["int x = obj.getA();", "int x;\nobj.getA(x)", "int x = obj.myA", "int x = SomeClass.getA()", "int x = getA(obj)"],
	["Make myC public.", "Include the method:\npublic int getC()\n{ return myC; }", "Include the method:\nprivate int getC()\n{ x = myC; }", "Include the method:\npublic void getC(int x)\n{ x = myC; }", "Include the method:\nprivate void getC(int x)\n{ x = myC; }"],
	[ "Value is: 21", "Value is: 2.333333", "Value is: 2", "Value is: 0", "Value is: 1"],
	["[3, 4, 7, 12, 19, 28]", "[3, 4, 7, 12, 19, 28, 39]", "[4, 7, 12, 19, 28, 39]", "[39, 28, 19, 12, 7, 4]", "[39, 28, 19, 12, 7, 4, 3]"],
	["15, 27", "15, 28", "16, 27", "16, 28", "16, 29"],
	["I only", "II only", "III only", "I and III", "II and III"],
	["arr[0] = 5;\n&emsp;&emsp;arr[5] = 0", "arr[0] = arr[5];\n&emsp;&emsp;arr[5] = arr[0];", "int k = arr[5];\n&emsp;&emsp;arr[0] = arr[5];\n&emsp;&emsp;arr[5] = k;", "int k = arr[0];\n&emsp;&emsp;arr[0] = arr[5];\n&emsp;&emsp;arr[5] = k;", "int k = arr[5];\n&emsp;&emsp;arr[5] = arr[0];\n&emsp;&emsp;arr[0] = arr[5];"],




];
var correctAnswers = [
	"2", "0", "1", "4", "2", "0", "0", "3"
]
var selectedAnswers = [];
var questionCounter = 0;
var correctCounter = 0;

$( document ).ready(function() {

	displayQuestion();
	displayAnswers();
	displayQuestionNumber();
	$("#scoreReport").hide();

});

var displayQuestion = function() {
	document.getElementById("questionText").innerHTML = questionArray1[questionCounter];
	if (codeArray1[questionCounter] != "blank") {
		var str = codeArray1[questionCounter];
		str = str.replace(/(\r\n|\n|\r)/gm, "<br>");
		document.getElementById("codeSegment1").innerHTML = str;
	} else {
		document.getElementById("codeSegment1").innerHTML = "";

	}
	if (followUpArray1[questionCounter] != "blank") {
		var str = followUpArray1[questionCounter];
		str = str.replace(/(\r\n|\n|\r)/gm, "<br>");
		document.getElementById("followUp").innerHTML = str;
	} else {
		document.getElementById("followUp").innerHTML = "";

	}
	if (codeArray2[questionCounter] != "blank") {
		var str = codeArray2[questionCounter];
		str = str.replace(/(\r\n|\n|\r)/gm, "<br>");
		document.getElementById("codeSegment2").innerHTML = str;
	} else {
		document.getElementById("codeSegment2").innerHTML = "";

	}
}

var displayAnswers = function() {
	$("input").removeAttr("checked");
	var answers = answerArray[questionCounter];
	for (var i = 0; i < answers.length; i++) {
		var answerText = answers[i];
		var choiceName = "choice" + (i+1);
		document.getElementById(choiceName).innerHTML = answerText;

	}

}

var displayQuestionNumber = function() {
	document.getElementById("questionIndicator").innerHTML = "Question " + (questionCounter +1) + " / " + questionArray1.length;
}

var buttonClicked = function() {
	$(".alert").hide();
	var radioButtons = document.getElementsByClassName("radioButton");
	var checkedFlag = false;
	for (var i = 0; i < radioButtons.length; i++) {
		var currentButton = radioButtons[i];
		if (currentButton.checked == true) {
			checkedFlag = true;
			var choiceName = "choice" + (i+1);
			var selection = document.getElementById(choiceName).innerHTML;
			selectedAnswers.push(selection);
			if (answerArray[questionCounter].indexOf(selection) == correctAnswers[questionCounter]) {
				correctCounter++;
				//do other stuff if correct
			}
			break;
		}
	}

	if (checkedFlag == false) {
		//display an alert
		$(".alert").show();
		return;
	}

	console.log(correctCounter);
	//next question please
	questionCounter++;
	if (questionCounter >= questionArray1.length) {
		//test is over
		collectData();
	}
	displayQuestion();
	displayAnswers();
	displayQuestionNumber();

}

var collectData = function() {
	//loop through selected answer
	//determine if each is correct
	//generate an output: 1 = correct; 0 otherwise
	var outputObject = {};
	for (var i =0; i< selectedAnswers.length; i++) {
		var outputValue = 0;
		if (answerArray[i].indexOf(selectedAnswers[i]) == correctAnswers[i]) {
			//question is correct
			outputValue = 1;
		}
		var outputKey = "question" + i;
		outputObject[outputKey] = outputValue;
	}
	sendData(outputObject);
}

var sendData = function(opobj) {	
	// Get a key for a new Post.
  	var newPostKey = firebase.database().ref().child('responses').push().key;
 	// Write the new response's data simultaneously to the database.
  	var updates = {};
  	updates['/responses/' + newPostKey] = opobj;
  	firebase.database().ref().update(updates);
  	readData();
}

var readData = function() {
	firebase.database().ref('/responses/').once('value').then(function(snapshot) {
  		// ...
  		console.log(snapshot.val());
  		//first calculate student score
  		var studentScore = 100*correctCounter / questionArray1.length;
  		var classAverage = 0;
  		var classScore = 0;
  		var keys = Object.keys(snapshot.val());
  		var outputArray = [
  			['Grade', 'Number'],
  			['F', 0],
  			['D', 0],
  			['C', 0],
  			['B', 0],
  			['A', 0]
  		];
  		for (var i = 0; i< keys.length; i++) {
  			var key = keys[i];
  			var response = snapshot.val()[key];
  			var responseKeys = Object.keys(response);
  			var responseScore = 0;
  			for (var x = 0; x<responseKeys.length; x++) {
  				var responseKey = responseKeys[x];
  				responseScore+=response[responseKey];
  			}
  			var responsePercent = 100*responseScore / questionArray1.length;
  			if (responsePercent >= 90) {
  				outputArray[5][1] += 1;
  			} else if (responsePercent >= 80) {
  				outputArray[4][1] += 1;
  			} else if (responsePercent >= 70) {
  				outputArray[3][1] += 1;
  			} else if (responsePercent >= 60) {
  				outputArray[2][1] += 1;
  			} else {
  				outputArray[1][1] += 1;
  			}
  			classScore+=responseScore;
  		}
  		classAverage = 100*classScore / (keys.length * questionArray1.length);
  		classAverage = classAverage.toFixed(2);
  		$("#main").hide();
  		$("#scoreReport").show();
  		$("#totalScoreDiv").html("Your score: " + studentScore + "<br>Class Average: " + classAverage);
  		drawChart(outputArray);
	});
}

var drawChart = function(withData) {
        var data = google.visualization.arrayToDataTable(withData);

        var options = {
          title: 'Test Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('bellChartDiv'));
        chart.draw(data, options);

}



