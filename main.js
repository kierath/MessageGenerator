document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.getElementById('moodDropdown');
    const display = document.getElementById('selectedMood');

dropdown.addEventListener('change', function () {
    const selectedValue = this.value;
    //const capitaliseValue = selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1);
    display.textContent = `You are: ${selectedValue}`;
  });
});