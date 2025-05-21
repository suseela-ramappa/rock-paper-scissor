let countdown;
let timeLeft = 5;
let userPlayed = false;

function startGame() {
  document.getElementById("winner").innerText = "Result: -";
  document.getElementById("user-choice").innerText = "You chose: -";
  document.getElementById("computer-choice").innerText = "Computer chose: -";
  document.querySelector('.reset').style.display = "none";

  timeLeft = 5;
  userPlayed = false;
  document.getElementById("countdown").innerText = timeLeft;

  countdown = setInterval(() => {
    timeLeft--;
    document.getElementById("countdown").innerText = timeLeft;

    if (timeLeft === 0 && !userPlayed) {
      clearInterval(countdown);
      document.getElementById("winner").innerText = "⏱️ Time's up! You didn’t choose.";
      document.querySelector('.reset').style.display = "inline-block";
    }
  }, 1000);
}

function play(userChoice) {
  if (userPlayed) return;

  userPlayed = true;
  clearInterval(countdown);

  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").innerText = `You chose: ${emoji(userChoice)} ${capitalize(userChoice)}`;
  document.getElementById("computer-choice").innerText = `Computer chose: ${emoji(computerChoice)} ${capitalize(computerChoice)}`;

  let result = "";

  if (userChoice === computerChoice) {
    result = "🤝 It's a draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "🎉 You win!";
  } else {
    result = "💻 Computer wins!";
  }

  document.getElementById("winner").innerText = `Result: ${result}`;
  document.querySelector('.reset').style.display = "inline-block";
}

function emoji(choice) {
  return choice === "rock" ? "🪨" : choice === "paper" ? "📄" : "✂️";
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

window.onload = startGame;

