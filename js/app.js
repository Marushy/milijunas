//Quiz strat
let questionNumber = 0;


//Audio files
let audioOK = document.createElement("audio");
        audioOK.src="./img/correct_answer.mp3";
        audioOK.volume=0.30;
        audioOK.autoPlay=false;
        audioOK.preLoad=true; 
		
let audioWrong = document.createElement("audio");
        audioWrong.src="./img/wrong_answer.mp3";
        audioWrong.volume=0.30;
        audioWrong.autoPlay=false;
        audioWrong.preLoad=true; 

let audioMain = document.createElement("audio");
        audioMain.src="./img/load.mp3";
        audioMain.volume=0.30;
        audioMain.autoPlay=false;
        audioMain.preLoad=true; 

let audioWinning = document.createElement("audio");
        audioWinning.src="./img/audioWinning.mp3";
        audioWinning.volume=0.30;
        audioWinning.autoPlay=false;
        audioWinning.preLoad=true; 		

//Questions-answers array 
let questionList = [
	{
		id: 1,
		question: "Tko se izlaze opasnosti za drugoga, taj vadi kestene iz..",
		answerA: "vatre",
		answerB: "sume",
		answerC: "nabujale rijeke",
		answerD: "vode",
		answerRight: "a",
	},
	{
		id: 2,
		question: "Koja je najbrza zivotinja na svijetu?",
		answerA: "gepard",
		answerB: "slon",
		answerC: "konj",
		answerD: "noj",
		answerRight: "a",
	},
	{
		id: 3,
		question: "Koji je najvisi vrh na svijetu?",
		answerA: "Mont Blanc",
		answerB: "Mount Everest",
		answerC: "Andi",
		answerD: "Kilimandžaro",
		answerRight: "b",
	},
	
	{
		id: 4,
		question: "Novac na bankomatu nećete moći podignuti ako ste zaboravili...",
		answerA: "pen",
		answerB: "pak",
		answerC: "tan",
		answerD: "pin",
		answerRight: "d",
	},
	{
		id: 5,
		question: "Koji je glavni grad Irske?",
		answerA: "London",
		answerB: "Edinburg",
		answerC: "Dablin",
		answerD: "Liverpul",
		answerRight: "c",
	},
	{
		id: 6,
		question: "Tko je napadom na Pearl Harbour uvukao SAD u 2. svjetski rat?",
		answerA: "Njemci",
		answerB: "Kinezi",
		answerC: "Japanci",
		answerD: "Vijetnamovci",
		answerRight: "c",
	},
	{
		id: 7,
		question: "Koje se bjelogorično drvo uvuklo među crnogorično drveće?",
		answerA: "Kesten",
		answerB: "Tisa",
		answerC: "Jela",
		answerD: "Smreka",
		answerRight: "a",
	},
	{
		id: 8,
		question: "Najpoznatija slika Edvarda Muncha, simbol duhovne tjeskobe modernog čovjeka, jest:",
		answerA: "Grc",
		answerB: "San",
		answerC: "Krik",
		answerD: "Uzdah",
		answerRight: "c",
	},
	{
		id: 9,
		question: "CNN je TV mreža koja 24 sata na dan emitira:",
		answerA: "Sport",
		answerB: "Filmove",
		answerC: "Humoristicke serije",
		answerD: "Vijesti",
		answerRight: "d",
	},
	{
		id: 10,
		question: "Što sačinjava dobre 3/4 čistoga zraka?",
		answerA: "kisik",
		answerB: "dusik",
		answerC: "vodik",
		answerD: "helij",
		answerRight: "b",
	},
	{
		id: 11,
		question: "Koja je ptica od navedenih najmanja?",
		answerA: "kolibr",
		answerB: "noj",
		answerC: "slavuj",
		answerD: "albatros",
		answerRight: "a",
	},
	{
		id: 12,
		question: "Svojevrstan uvod za Američki građanski rat bio je tzv. bostonska:",
		answerA: "pijanka",
		answerB: "kajdankae",
		answerC: "uspavanka",
		answerD: "cajanka",
		answerRight: "d",
	},
	{
		id: 13,
		question: "Kako se zove prvi stupanj u komparaciji pridjeva?",
		answerA: "pozitiv",
		answerB: "negativ",
		answerC: "ablativ",
		answerD: "komparativ",
		answerRight: "d",
	},
	{
		id: 14,
		question: "Koga je u naslovu svoga romana Meša Selimović suočio sa smrću?",
		answerA: "imama",
		answerB: "mujezina",
		answerC: "dervisa",
		answerD: "hodzu",
		answerRight: "c",
	},
	{
		id: 15,
		question: "Što je kod Czeslava Milosza zarobljeno, a kod Imanuela Kanta čisto i praktično?",
		answerA: "um",
		answerB: "sila",
		answerC: "energija",
		answerD: "znanje",
		answerRight: "a",
	}
	
]

//First question
$(".question-id").text(questionList[0].id);
$(".text-question").text(questionList[0].question);

$("#answerA").text(questionList[0].answerA);
$("#answerB").text(questionList[0].answerB);
$("#answerC").text(questionList[0].answerC);
$("#answerD").text(questionList[0].answerD);


//Answer button background
$("label.btn.answer").click(function() {
	if($(this).hasClass("active")) {
		$(this).css("background-image", "url(./img/step_activ.png)");
	} else {
		$("label.btn.answer").css("background-image", "url(./img/quest.png)");
	}
});

//Help audience
$("#helpAudience").click(function() {
	$('#audienceModal').modal({
					keyboard: false
				});
	$("#helpAudience img").attr("src", "./img/help1gone.png");
	$(this).attr('disabled', true);	
});

//Help call
$("#helpCall").click(function() {
	$('#callModal').modal({
					keyboard: false
				});
	$("#helpCall img").attr("src", "./img/help2gone.png");
	$(this).attr('disabled', true);	
});

//Help fifty
$("#helpFifty").click(function() {
	switch (questionNumber) {
	  case 0:
			 $('.text-id:eq(1)').hide();
			 $('.text-answer:eq(1)').hide();
			 $('.text-id:eq(2)').hide();
			 $('.text-answer:eq(2)').hide();
			break;
	  case 1:
			$('.text-id:eq(1)').hide();
			 $('.text-answer:eq(1)').hide();
			 $('.text-id:eq(3)').hide();
			 $('.text-answer:eq(3)').hide();
			break;
	  case 2:
			$('.text-id:eq(0)').hide();
			 $('.text-answer:eq(0)').hide();
			 $('.text-id:eq(2)').hide();
			 $('.text-answer:eq(2)').hide();
			break;
	  case 3:
				$('.text-id:eq(0)').hide();
			 $('.text-answer:eq(0)').hide();
			 $('.text-id:eq(3)').hide();
			 $('.text-answer:eq(3)').hide();
				break;
	  case 4:
				$('.text-id:eq(1)').hide();
			 $('.text-answer:eq(1)').hide();
			 $('.text-id:eq(3)').hide();
			 $('.text-answer:eq(3)').hide();
				break;
	  case 5:
				$('.text-id:eq(0)').hide();
			 $('.text-answer:eq(0)').hide();
			 $('.text-id:eq(3)').hide();
			 $('.text-answer:eq(3)').hide();
				break;
		case 6:
				$('.text-id:eq(1)').hide();
			 $('.text-answer:eq(1)').hide();
			 $('.text-id:eq(2)').hide();
			 $('.text-answer:eq(2)').hide();
				break;
		case 7:
				$('.text-id:eq(0)').hide();
			 $('.text-answer:eq(0)').hide();
			 $('.text-id:eq(3)').hide();
			 $('.text-answer:eq(3)').hide();
				break;
		case 8:
				$('.text-id:eq(1)').hide();
			 $('.text-answer:eq(1)').hide();
			 $('.text-id:eq(2)').hide();
			 $('.text-answer:eq(2)').hide();
				break;
		case 9:
				$('.text-id:eq(0)').hide();
			 $('.text-answer:eq(0)').hide();
			 $('.text-id:eq(2)').hide();
			 $('.text-answer:eq(2)').hide();
				break;
		case 10:
				$('.text-id:eq(1)').hide();
			 $('.text-answer:eq(1)').hide();
			 $('.text-id:eq(2)').hide();
			 $('.text-answer:eq(2)').hide();
				break;
		case 11:
				$('.text-id:eq(0)').hide();
			 $('.text-answer:eq(0)').hide();
			 $('.text-id:eq(2)').hide();
			 $('.text-answer:eq(2)').hide();
				break;
		case 12:
				$('.text-id:eq(1)').hide();
			 $('.text-answer:eq(1)').hide();
			 $('.text-id:eq(2)').hide();
			 $('.text-answer:eq(2)').hide();
				break;
		case 13:
				$('.text-id:eq(0)').hide();
			 $('.text-answer:eq(0)').hide();
			 $('.text-id:eq(3)').hide();
			 $('.text-answer:eq(3)').hide();
				break;
		case 14:
			$('.text-id:eq(1)').hide();
			 $('.text-answer:eq(1)').hide();
			 $('.text-id:eq(2)').hide();
			 $('.text-answer:eq(2)').hide();
			break;		
		default:
			console.log("Something went wrong!!!");
	}
	
	$("#helpFifty img").attr("src", "./img/help3gone.png");
	$(this).attr('disabled', true);	
});



//Get answer
let answers = document.getElementsByName('options');

$("#completed").click(function() {
	let falseNumber = 0;
	answers.forEach((answer) => {
		
		if($("#helpFifty").is(":disabled")) {
			$('.text-id').show();
			$('.text-answer').show();
		} 
		
			
		if(answer.checked && answer.value!== questionList[questionNumber].answerRight && falseNumber==0) {
				
				//Game over modal
				$('#wrongModal').modal({
					keyboard: false
				});
				audioWrong.play();
				
				//Reset to first queston
				$(".question-id").text(questionList[0].id);
				$(".text-question").text(questionList[0].question);
				$("#answerA").text(questionList[0].answerA);
				$("#answerB").text(questionList[0].answerB);
				$("#answerC").text(questionList[0].answerC);
				$("#answerD").text(questionList[0].answerD);
				questionNumber = 0;	
				falseNumber ++;	
				$("button.help").attr('disabled', false);
				$("#helpAudience img").attr("src", "./img/help1.png");	
				$("#helpCall img").attr("src", "./img/help2.webp");
				$("#helpFifty img").attr("src", "./img/help3.webp");			
		} 
			
		if(answer.checked && answer.value===questionList[questionNumber].answerRight && questionNumber< 14 && falseNumber==0) {
				//Game goes on
				$('#playingModal').modal({
					keyboard: false
				});
								
				audioOK.play();
				
				questionNumber++;
				
				
				//Next question	
				$(".question-id").text(questionList[questionNumber].id);
				$(".text-question").text(questionList[questionNumber].question);
				$("#answerA").text(questionList[questionNumber].answerA);
				$("#answerB").text(questionList[questionNumber].answerB);
				$("#answerC").text(questionList[questionNumber].answerC);
				$("#answerD").text(questionList[questionNumber].answerD);
		} 
			
		//Wining question						
		if(answer.checked && answer.value==questionList[questionNumber].answerRight && questionNumber==14){
			//Modal 1 000 0000
					$('#winningModal').modal({
						keyboard: false
					});
					
					audioWinning.play();
					
			//Start quiz again		
					$(".question-id").text(questionList[0].id);
					$(".text-question").text(questionList[0].question);
					$("#answerA").text(questionList[0].answerA);
					$("#answerB").text(questionList[0].answerB);
					$("#answerC").text(questionList[0].answerC);
					$("#answerD").text(questionList[0].answerD);
					$("button.help").attr('disabled', false);
					$("#helpAudience img").attr("src", "./img/help1.png");	
					$("#helpCall img").attr("src", "./img/help2.webp");
					$("#helpFifty img").attr("src", "./img/help3.webp");	
					questionNumber = 0;
		}	
		
		//Show earned money
		moneyLevel();
		$("label.answer").css("background-image", "url(./img/quest.png)");
		$("label.answer").css("border", "none)");		
		
		
		
	})
	//Ensure that user pick ABCD answer before press final answer
	//need to complete
	/* if(!($("input:radio[name='options']").is(":checked"))) {
		console.log("test");
		$('#wrongModal p').html("Trebate odabrati jedan od odgovora A, B , C ili D pa tek onda tipku - Konacan odgovor");
			$('#wrongModal').modal({
					keyboard: false
				});
	} */
});


//Opening modal
$('#openingModal').modal({
	keyboard: false
});

//Opening music
$('#playQuiz').click(function() {
	audioMain.play();
});

//Styling money grid
let moneyGrid = document.querySelectorAll('.grid-item');

function moneyLevel() {
	moneyGrid.forEach((item) => {
		if (item.classList.contains('money-level')) {
			item.classList.remove('money-level');
		}
		if(item.id == questionNumber) {
			item.classList.add('money-level');
		}
	}); 
}





