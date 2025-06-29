document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.getElementById('moodDropdown');
    const display = document.getElementById('selectedMood');
    const message = document.getElementById('affirmation');
    const button = document.getElementById('generateMessage');
    const moodImage = document.getElementById('moodImage'); 
  
    const messages = {
      Bored: [
        "Let's find something fun to do! How about a new hobby or a game?",
        "Feeling bored? Let's explore some interesting activities together!",
        "How about we dive into a new book or movie?"
      ],
      Negative: [
        "It's okay to feel down sometimes. Let's talk about it.",
        "Remember, it's just a phase. Things will get better.",
        "Let's try to find some positivity in the little things."
      ],
      Stressed: [
        "Take a deep breath. Let's find a way to relax.",
        "Feeling stressed? How about some mindfulness exercises?",
        "Let's take a moment to unwind and clear our mind."
      ],
      Tired: [
        "Rest is important. How about taking a short break?",
        "Feeling tired? A quick nap or some relaxation might help.",
        "Let's take it easy and recharge our energy."
      ]
    };

    const moodImages = {
      Bored: "resources/bored.png",
      Negative: "resources/negative.png",
      Stressed: "resources/stressed.png",
      Tired: "resources/tired.png"
    };
  
    dropdown.addEventListener('change', function () {
      const selectedValue = this.value;
      display.textContent = `You are: ${selectedValue}`;
    });
  
    button.addEventListener('click', function () {
      const mood = dropdown.value;
  
      if (!mood) {
        message.textContent = 'Please select a mood first.';
        moodImage.src = "";
        return;
      }
  
      const moodMessages = messages[mood];
      const randomIndex = Math.floor(Math.random() * moodMessages.length);
      const randomMessage = moodMessages[randomIndex];
  
      message.textContent = randomMessage;

      moodImage.src = moodImages[mood];
    });
  });  