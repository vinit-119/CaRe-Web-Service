document.getElementById('journalForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way
  
  // Get the values from the form
  const date = document.getElementById('date').value;
  const mood = document.getElementById('mood').value;
  const entry = document.getElementById('entry').value;
  const tags = document.getElementById('tags').value;

  // Get the journal summary container where the entries will be displayed
  const journalSummary = document.getElementById('journalSummary');

  // Create a new journal entry element
  const newEntry = document.createElement('div');
  newEntry.classList.add('journal-entry'); // Adding a class for styling if needed

  // Add the content for the new entry
  newEntry.innerHTML = `
    <h3>${date} - Mood: ${getMoodText(mood)}</h3>
    <p><strong>Journal:</strong> ${entry}</p>
    <p><strong>Tags:</strong> ${tags ? tags : 'No tags'}</p>
    <hr>
  `;

  // Append the new entry to the journal summary
  journalSummary.appendChild(newEntry);

  // Clear the form after submission
  document.getElementById('journalForm').reset();
});

// A function to convert the mood value to text with emojis
function getMoodText(mood) {
  switch (mood) {
    case '1':
      return '😔 Sad';
    case '2':
      return '🙁 Unhappy';
    case '3':
      return '😐 Neutral';
    case '4':
      return '🙂 Happy';
    case '5':
      return '😁 Excited';
    default:
      return 'Unknown Mood';
  }
}
