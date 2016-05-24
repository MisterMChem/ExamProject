
var currentQuestionNumber = 0;
var currentScore = 0;
var storedAnswers = [];
var correctAnswers = ["2", "At least 1000", "Tons", "3", "Absolutely Yes"];

function buttonPressed(buttonTitle) {

console.log(buttonTitle);
if (currentQuestionNumber===1 && buttonTitle==="2") {
	currentScore++;
	//Handle other user correctness events here
	//Animation
	//Change color of something
	console.log("You were right!");
} else if (currentQuestionNumber === 2 && buttonTitle > 1000) {
	currentScore++;
	console.log("You were right!");
} else if (currentQuestionNumber === 3 && buttonTitle === "Tons") {
	currentScore++;
} else if (currentQuestionNumber === 4 && buttonTitle === 3) {
	currentScore++;
} else if (currentQuestionNumber === 5 && buttonTitle === "Absolutely Yes") {
	currentScore++;
}
else {
	//They're wrong
	console.log("You were wrong");
}
if (currentQuestionNumber!= 0) {
	storedAnswers.push(buttonTitle);
};
currentQuestionNumber++;

if (currentQuestionNumber === 6) {
	//Handle End of Test
	 var main = document.getElementById("mainDiv");
	 main.innerHTML = "";
	
	// var scoreNode = document.createTextNode("You scored " + currentScore + " out of 5");
	// main.appendChild(scoreNode);
	// var theTable = document.createElement("table");
	// theTable.className = "theTable";
	// for (var i = 0; i < storedAnswers.length; i++) {
	// 	var newRow = document.createElement("tr");
	// 	var col1 = document.createElement("td");
	// 	col1.innerHTML = storedAnswers[i];
	// 	var col2 = document.createElement("td");
	// 	col2.innerHTML = correctAnswers[i];
	// 	newRow.appendChild(col1);
	// 	newRow.appendChild(col2);
	// 	theTable.appendChild(newRow);
	// }

	// main.appendChild(theTable);
	var newImage = document.createElement("img");
	newImage.src = "face.png";
	newImage.setAttribute("class", "infoIcon");
	main.appendChild(newImage);

	var canvas = document.createElement("canvas");
	canvas.setAttribute("id", "mainCanvas");
	var context = canvas.getContext("2d");
	
	//Outer Rectangle
	context.beginPath();
	context.rect( 5.0, 5.0, 200.0, 30.0);
	context.fillStyle = "#E4FFE0";
	context.fill();
	context.lineWidth = 2.0;
	context.strokeStyle = "black";
	context.stroke();
	context.closePath();

	//Inner Rectangle
	context.beginPath();
	context.rect(5.0, 6.0, currentScore * 200.0/5, 28.0);
	context.fillStyle = "#507F4A";
	context.fill();
	context.closePath();

	//Correct Number Text
	context.beginPath();
	context.font = "16px Georgia";
	context.fillStyle = "white";
	context.fillText(currentScore, 10.0, 25.0);
	context.closePath();

	main.appendChild(canvas);




} else {
	document.getElementById("numberText").innerHTML = "Question " + currentQuestionNumber + "/5";
	document.getElementById("statusText").innerHTML = getCurrentTaunt();
	getQuestion();

}


};

function getCurrentTaunt(){
	if (currentQuestionNumber === 1) {		
		return "This screen has more pixels than you have brain cells!";

	} else if (currentQuestionNumber === 2) {
		return "You look great today!";
	} else if (currentQuestionNumber === 3) {
		return "Just kidding you look bad today. :(";
	} else if (currentQuestionNumber === 4) {
		return "You should probably not have stayed up so late.";
	} else if (currentQuestionNumber === 5) {
		return "You should definitely not have stayed up so late.";
	}


	
}

function getQuestion(){
	var main = document.getElementById("mainDiv");
	main.innerHTML = "";
	if (currentQuestionNumber === 1) {	
		var p = document.createTextNode("How many people used Netflix for their projects in Quarter 1.\nAKA: How many people watch too much Netflix in this class?");	
		
		var inputNode = document.createElement("input");
		inputNode.type = "text";
		inputNode.placeholder = "Answer Goes Here";

		var submitButton = document.createElement("button");
		submitButton.type = "button";
		submitButton.onclick = function () {
			buttonPressed(inputNode.value);
		}
		submitButton.innerHTML = "Submit";

		main.appendChild(p);
		main.appendChild(document.createElement("br"));
		main.appendChild(document.createElement("br"));
		main.appendChild(inputNode);
		main.appendChild(submitButton);

	} else if (currentQuestionNumber === 2) {

		var p = document.createTextNode("Just how many viruses did Ben's program download onto Mr. Meyers' computer?");

		var inputNode = document.createElement("input");
		inputNode.type = "number";
		inputNode.placeholder = "Number of Viruses";


		var submitButton = document.createElement("button");
		submitButton.type = "button";
		submitButton.onclick = function () {
			buttonPressed(inputNode.value);
		}
		submitButton.innerHTML = "Submit";

		main.appendChild(p);
		main.appendChild(document.createElement("br"));
		main.appendChild(document.createElement("br"));
		main.appendChild(inputNode);
		main.appendChild(submitButton);

	} else if (currentQuestionNumber === 3) {
		var p = document.createTextNode("How much illustration work will Emma get thanks to her awesome portfolio?");

		var choiceA = document.createElement("button");
		choiceA.type = "button";
		choiceA.onclick = function () {
			buttonPressed("Probably None");
		}
		choiceA.innerHTML = "Probably None";

		var choiceB = document.createElement("button");
		choiceB.type = "button";
		choiceB.onclick = function () {
			buttonPressed("Tons");
		}
		choiceB.innerHTML = "Tons";

		main.appendChild(p);
		main.appendChild(document.createElement("br"));
		main.appendChild(document.createElement("br"));
		main.appendChild(choiceA);
		main.appendChild(choiceB);


	} else if (currentQuestionNumber === 4) {
		var p = document.createTextNode("How many websites were made about car companies?");

		var inputNode = document.createElement("input");
		inputNode.type = "number";
		inputNode.placeholder = "Number of websites";

		var submitButton = document.createElement("button");
		submitButton.type = "button";
		submitButton.onclick = function () {
			buttonPressed(inputNode.value);
		}
		submitButton.innerHTML = "Submit";

		main.appendChild(p);
		main.appendChild(document.createElement("br"));
		main.appendChild(document.createElement("br"));
		main.appendChild(inputNode);
		main.appendChild(submitButton);

	} else if (currentQuestionNumber === 5) {
		var p = document.createTextNode("Did you enjoy working on this project in quarter one?");

		var choiceA = document.createElement("button");
		choiceA.type = "button";
		choiceA.onclick = function () {
			buttonPressed("Definitely Not");
		}
		choiceA.innerHTML = "Definitely Not";

		var choiceB = document.createElement("button");
		choiceB.type = "button";
		choiceB.onclick = function () {
			buttonPressed("Absolutely Yes");
		}
		choiceB.innerHTML = "Absolutely Yes";

		main.appendChild(p);
		main.appendChild(document.createElement("br"));
		main.appendChild(document.createElement("br"));
		main.appendChild(choiceA);
		main.appendChild(choiceB);

	}

}
//https://docs.google.com/spreadsheets/d/1mgVQPax7MyQ6wLBVRrdfkzvgymXuSQT5qfnQVupfjTM/pubhtml

function readGoogleData(){
	var url = "https://spreadsheets.google.com/feeds/list/1mgVQPax7MyQ6wLBVRrdfkzvgymXuSQT5qfnQVupfjTM/od6/public/basic?hl=en_US&alt=json";
	$.getJSON(url, function(data) {
  		//first row "title" column
  		var entryArray = data.feed.entry;
  		console.log(entryArray)
  		for (var i = 0; i < entryArray.length; i++){
  			var currentObject = entryArray[i];
  			var currentContent = currentObject.content;
  			var currentRow = currentContent.$t;

  			var passwordIndex = currentRow.search("password") + "password".length + 2;
  			var commaIndex = currentRow.search(",");
  			var password = currentRow.substring(passwordIndex, commaIndex);
  			console.log(password);


  		};
	});


}

  $('#input-form').one('submit',function(){
  	var baseURL = "https://docs.google.com/a/greenwich.k12.ct.us/forms/d/1O1O0ge1kViJVroWoUXWVPJ8xwkVEFgb50W521252iy8/formResponse?entry.1001681076=";
	var submitRef = '&submit=Submit';
	var inputName = encodeURIComponent($('#input-name').val());
	var inputPassed = encodeURIComponent($('#input-password').val());
	var submitURL = (baseURL + inputName + "&entry_2101133030=" + inputPassed + submitRef);
    console.log(submitURL);
    $(this)[0].action=submitURL;
    //$('#input-name').addClass('active').val('Thank You!');
});


readGoogleData();


