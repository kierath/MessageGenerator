document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.getElementById('moodDropdown');
  const display = document.getElementById('selectedMood');
  const message = document.getElementById('affirmation');
  const button = document.getElementById('generateMessage');
  const moodImage = document.getElementById('moodImage');

  const messages = {
  Bored: [
    "Boredom is a spark - it's the start of creativity. Let's try something new today!",
    "Ever dull moment is a chance to dream big. What's something you've always wanted to explore?",
    "Let's make this moment meaningful — a new book, a new hobby, or just a walk with music.",
    "Sometimes boredom is your mind's way of asking for a challenge. What can you learn today?",
    "The most brilliant ideas often come from moments of stillness. What can you create right now?",
  ],

  Happy: [
    "Your happiness is a treasure. Cherish it and let it inspire others!",
    "Every smile is a step towards a brighter day. Keep shining!",
    "Your joy is contagious. Spread it like sunshine!",
    "Happiness is a strength. Carry it with pride and share it freely.",
    "Celebrate the little things today. They are the big things in disguise!",
  ],

  Negative: [
    "This moment doesn't define you. It's just a chapter in your story.",
    "Your feelings are valid, but they don't have to control you. You are stronger than you think.",
    "Negative thoughts are like storms - they pass, and the sun will shine again.",
    "You are more than your thoughts. Choose kindness for yourself today.",
    "One step at a time. You're doing better than you think."
  ],

  Stressed: [
    "Breathe in strength, breathe out tension. You've got this.",
    "Pause. You deserve calm. One thing at a time.",
    "Even mountains take millions of years to rise. Don't rush your growth.",
    "Your mind needs rest to thrive - give yourself permission to relax.",
    "Stress is a sign you care. Now let's channel that care inward."
  ],

  Tired: [
    "Rest isn't weakness - it's fuel for your brilliance.",
    "Take a break. You've earned it.",
    "Sleep, silence, stillness - the recipe for your next comeback.",
    "Listen to your body. It's asking for kindness.",
    "You don't need to do everything today. One deep breath at a time."
  ]
};



  const moodImages = {
    Bored: "resources/bored.png",
    Negative: "resources/negative.png",
    Stressed: "resources/stressed.png",
    Tired: "resources/tired.png",
    Happy: "resources/happy.png",
  };

  dropdown.addEventListener('change', function () {
    const selectedValue = this.value;
    display.textContent = `You are: ${selectedValue}`;
  });

  button.addEventListener('click', function () {
    const mood = dropdown.value;

    if (!mood) {
      message.textContent = 'Please select a mood first.';
      moodImage.src = "resources/content.png";
      return;
    }

    const moodMessages = messages[mood];
    const randomIndex = Math.floor(Math.random() * moodMessages.length);
    const randomMessage = moodMessages[randomIndex];

    message.textContent = randomMessage;

    moodImage.src = moodImages[mood];
  });
});  