/*
program: gradesheet
date: 23/may/2022
author: NB
*/

function getgrade(score,displaygrade){
	console.log(score);
	var grade="";
	if(score>=70){
		grade="A";
	}else if( score>=60){
		grade ="B";
	}else if(score >=50){
		grade="C";
	}else if( score>= 40){
		grade="D";
	}else{
		grade="F";
	}
	document.getElementById(displaygrade).value= grade;
}
function getResult(){
	var eng1=document.getElementById('englishscore').value;
				var math1=document.getElementById('mathematicsScore').value;
			var chem1=document.getElementById('chemistryScore').value;
		
			var bio1=document.getElementById('biologyScore').value;
			var french1=document.getElementById('frenchScore').value;
		var total = number(englishScore) +number(mathematicsScore) + number(chemistryScore) 
		+ number(biologyScore) +number(frenchScore);

		var average = total / 5;
	document.getElementById('totalpara').innerHTML="Total ="+ total;
	document.getElementById('averagepara').innerHTML="average ="+average;
	//call getRemarks function
	getRemark(avarage);

}
function getRemark(average){
	if(average>=50){
		remark = "ypu passed";
		remark="<img/>"
	}else{
		remark= "you failed";
		 remark="<img/>"
	}
	document.getElementById('remarkspara').value= remark;
}

