// ühine js fail kõikidele lehtedele
var correct_choice;
var total_guesses = 0;
var score = 0;

// teksti küsimus
async function random_text_question() {
    // loeme sisse json faili (küsimused / vastused)
    var response = await fetch("questions.json");
    var all_questions = await response.json();
    all_questions = JSON.stringify(all_questions);
    all_questions = JSON.parse(all_questions);
    // valime suvalise küsimuse
    let chosen_index = Math.floor(Math.random()*all_questions.text_questions.length);
    document.getElementById("question").innerHTML = all_questions.text_questions[chosen_index].question;
    document.getElementById("option1").innerHTML = all_questions.text_questions[chosen_index].options[0];
    document.getElementById("option2").innerHTML = all_questions.text_questions[chosen_index].options[1];
    document.getElementById("option3").innerHTML = all_questions.text_questions[chosen_index].options[2];
    document.getElementById("option4").innerHTML = all_questions.text_questions[chosen_index].options[3];
    correct_choice = all_questions.text_questions[chosen_index].correct;
}

// pildi küsimus
async function random_image_question() {
    // loeme sisse json faili (küsimused / vastused)
    var response = await fetch("questions.json");
    var all_questions = await response.json();
    all_questions = JSON.stringify(all_questions);
    all_questions = JSON.parse(all_questions);
    // valime suvalise küsimuse
    let chosen_index = Math.floor(Math.random()*all_questions.image_questions.length);
    document.getElementById("question").innerHTML = all_questions.image_questions[chosen_index].question;
    document.getElementById("option1").innerHTML = all_questions.image_questions[chosen_index].options[0];
    document.getElementById("option2").innerHTML = all_questions.image_questions[chosen_index].options[1];
    document.getElementById("option3").innerHTML = all_questions.image_questions[chosen_index].options[2];
    document.getElementById("option4").innerHTML = all_questions.image_questions[chosen_index].options[3];
    document.getElementById("source").innerHTML = all_questions.image_questions[chosen_index].source;
    document.getElementById("image").src = 'media/trivia_images/'+all_questions.image_questions[chosen_index].image+'';
    correct_choice = all_questions.image_questions[chosen_index].correct;
}
// video küsimused
async function random_video_question() {
    var response = await fetch("questions.json");
    var all_questions = await response.json();
    all_questions = JSON.stringify(all_questions);
    all_questions = JSON.parse(all_questions);
    let chosen_index = Math.floor(Math.random()*all_questions.video_questions.length);
    document.getElementById("question").innerHTML = all_questions.video_questions[chosen_index].question;
    document.getElementById("option1").innerHTML = all_questions.video_questions[chosen_index].options[0];
    document.getElementById("option2").innerHTML = all_questions.video_questions[chosen_index].options[1];
    document.getElementById("option3").innerHTML = all_questions.video_questions[chosen_index].options[2];
    document.getElementById("option4").innerHTML = all_questions.video_questions[chosen_index].options[3];
    document.getElementById("source").innerHTML = all_questions.video_questions[chosen_index].source;
    document.getElementById("video").src = 'media/trivia_videos/'+all_questions.video_questions[chosen_index].video+'';
    correct_choice = all_questions.video_questions[chosen_index].correct;
}

// kontrollime vastust
async function check_answer(choice) {
    // kas vastus oli õige
    if (choice == correct_choice) {
        score = score + 1;
    }
    // näitame vastatud kordi
    total_guesses = total_guesses + 1;
    document.getElementById("score_display").innerHTML = score + "/" + total_guesses;
    // uuendame vastavat küsimust
    var current_trivia = window.location.pathname;
    if (current_trivia == "/text_trivia.html") {
        random_text_question();
    }
    if (current_trivia == "/image_trivia.html") {
        random_image_question();
    }
    if (current_trivia == "/video_trivia.html") {
    random_video_question();
    }
}
