document.getElementById('sleepForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const startTime = document.getElementById('start').value;
    const endTime = document.getElementById('end').value;
    const quality = document.getElementById('quality').value;
    const notes = document.getElementById('notes').value;
  
    const sleepDuration = calculateSleepHours(startTime, endTime);
  
    document.getElementById('hoursSlept').textContent = `Total Sleep: ${sleepDuration} hours`;
    document.getElementById('sleepQuality').textContent = `Sleep Quality: ${quality}`;
    document.getElementById('sleepNotes').textContent = `Notes: ${notes || "No notes"}`;
  
    document.getElementById('sleepSummary').classList.remove('hidden');
  });
  
  function calculateSleepHours(start, end) {
    const startHour = parseInt(start.split(":")[0]);
    const endHour = parseInt(end.split(":")[0]);
    let duration = endHour - startHour;
    if (duration < 0) duration += 24;
    return duration;
  }
  