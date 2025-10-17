const fortunes = [
  "An unexpected event will soon bring you fortune ⋆˙⟡⋆˙⟡",
  "A smile you share will come back to you ⋆˚✿˖°",
  "Adventure awaits — say yes to something new ⊹ ࣪ ˖⊹ ࣪ ˖",
  "Someone special will brighten your day ♡₊˚⊹ ᰔ",
  "Your creativity will open new doors ⊹ . ݁ ⟡ ݁ .",
  "Patience will reward you in ways you don’t expect ⋆.𐙚 ̊",
  "You are about to discover a hidden talent °❀⋆.ೃ࿔*:･",
  "A pleasant surprise is waiting around the corner ⋆𖦹°‧˚｡⋆"
];

const cookie = document.getElementById("cookie");
const fortuneText = document.querySelector(".fortune");
const sound = document.getElementById("crack-sound");

cookie.addEventListener("click", () => {
  // Play crack sound
  sound.currentTime = 0;
  sound.play();

  // Animate cookie
  cookie.style.transform = "scale(0.9)";
  setTimeout(() => (cookie.style.transform = "scale(1)"), 200);

  // Show a random fortune
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  fortuneText.textContent = randomFortune;

  // Make the text fade in
  fortuneText.classList.remove("show");
  setTimeout(() => fortuneText.classList.add("show"), 100);
});
