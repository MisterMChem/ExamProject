

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
	document.getElementById("questionIndicator").innerHTML = "Question " + (questionCounter +1) + " / 5";
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
			if (selection == correctAnswers[questionCounter]) {
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
		//end the test here
		//display the score report, send scores to data base, etc.
		submitForm();
		readGoogleData();
		return;
	}
	displayQuestion();
	displayAnswers();
	displayQuestionNumber();

}

var submitForm = function() {

	var urlbase = "https://docs.google.com/a/2d004bf00471fa8d2c2b77458c601df4b556dd64.googledrive.com/forms/d/1bktRwfbQoaG2hNrJJktiL_NWp8lGmLAJ_kqQ8RvUQsc/formResponse";
	$.ajax({
		url: urlbase,
		data: {"entry.457530453": selectedAnswers[0], "entry.732628430": selectedAnswers[1], "entry.177082988": selectedAnswers[2], "entry.1709629846" : selectedAnswers[3], "entry.570606861" : selectedAnswers[4]},
		type: "POST",
		dataType: "xml",
		success: function(data) {
		}
	});
}

var readGoogleData = function(){

	var sheeturl = "https://spreadsheets.google.com/feeds/list/1CAXbKh9WWK7apLPn49SsutGQsG1KnBuEJY1M1T4qY74/1/public/basic?alt=json";
	$.ajax({
		url: sheeturl,
		success: function(data){
			console.log(data.feed.entry);
			var entries = data.feed.entry;
			//grade counters
			var fGrade = 0;
			var dGrade = 0;
			var cGrade = 0;
			var bGrade = 0;
			var aGrade = 0;

			for (var i = 0; i< entries.length; i++) {
				var currentObject = entries[i];
				var content = currentObject.content.$t;
				content = content.split(",");
				console.log(content);
				var itemToRead = "";

				var rowGrade = 0; 
				for (var k = 0; k<content.length; k++) {
					var index = content[k].search(":");
					itemToRead = content[k].substring(index+2, content[k].length);
					if (itemToRead == correctAnswers[k]) {
						rowGrade++;
					}
				}

				rowGrade = rowGrade / correctAnswers.length;
				$("#totalScoreDiv").html("Your score: " + (rowGrade * 100) + "%");
				if (rowGrade >= 0 && rowGrade <= 0.20) {
					fGrade++;
				} else if (rowGrade > 0.20 && rowGrade <=0.40 ) {
					dGrade++;
				}  else if (rowGrade >0.40 && rowGrade <=0.60 ) {
					cGrade++;
				} else if (rowGrade > 0.60 && rowGrade <=0.80) {
					bGrade++;
				} else if (rowGrade > 0.80 && rowGrade <=1.00) {
					aGrade++;
				}
				var dataTable = google.visualization.arrayToDataTable([
					['Grade', 'Students'],
					['F', fGrade],
					['D', dGrade],
					['C', cGrade],
					['B', bGrade],
					['A', aGrade],
					]);
				drawChart(dataTable);
			}

		}
	});
}

var drawChart = function(dataTable) {
	$("#main").hide();
	$("#scoreReport").show();
	var options = {
	  title: 'Class Performance',
	  hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
	  vAxis: {minValue: 0}
	};

	var chart = new google.visualization.AreaChart(document.getElementById('bellChartDiv'));
	chart.draw(dataTable, options);
}




