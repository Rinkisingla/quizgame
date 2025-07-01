
const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Saturn", "Mars", "Venus"],
    answer: "Mars"
  },
  {
    question: "What color is a banana?",
    options: ["Red", "Yellow", "Green", "Blue"],
    answer: "Yellow"
  },
  {
    question: "Which is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"],
    answer: "William Shakespeare"
  },
  {
    question: "Which continent is Egypt in?",
    options: ["Asia", "Africa", "Europe", "Australia"],
    answer: "Africa"
  },
  {
    question: "What is H2O commonly known as?",
    options: ["Oxygen", "Hydrogen", "Salt", "Water"],
    answer: "Water"
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Lion", "Tiger", "Elephant", "Bear"],
    answer: "Lion"
  },
  {
    question: "How many days are there in a leap year?",
    options: ["365", "366", "364", "367"],
    answer: "366"
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    answer: "Carbon Dioxide"
  }
];

 
   var count=0;
   let currentindex=0;
    const que = document.getElementById('question');
    const opt = document.getElementById('options');
    const btn = document.getElementById('nextbtn');
    const score = document.getElementById('scorep');
    function showques(index){
        que.innerHTML = "";
        opt.innerHTML = "";
        const ques = questions[index];
        const span = document.createElement('span');
        span.textContent = ques.question;
        que.appendChild(span);
        opt.appendChild(document.createElement("br"));

     ques.options.forEach(option=>{
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "options";
        radio.value =  option;
        const label = document.createElement("label");
        label.textContent = option;
        label.style.marginRight = "10px";
        label.style.paddingBottom = "20px";
        label.insertBefore(radio, label.firstChild);
        
        opt.appendChild(label);
        opt.appendChild(document.createElement("br"));
     })
      
        
    }
    btn.addEventListener("click",()=>{
            const radios = document.getElementsByName("options");
            let selectedValue = null;
            for (const radio of radios) {
                if (radio.checked) {
                selectedValue = radio.value;
                break;
                }
            }
            if(selectedValue==="" || selectedValue == null){
                alert("Please select any option");
            }
            if(selectedValue=== questions[currentindex].answer){
                count++;
            }
            currentindex++;
           if(currentindex< questions.length){
            showques(currentindex)
           }
           else{
             que.innerHTML = "";
            opt.innerHTML = "";
            btn.style.display="none";
             score.innerText ="You have scored "+count+" out of " + questions.length;           

           }
        })
     showques(currentindex);
