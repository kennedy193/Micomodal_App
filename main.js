// Load the timezone data
moment.tz.load({
    zones: [
      'Africa/Kigali|LMT CAT|-1.3 -2|01|-2ldXH|38e5'
    ],
    links: [],
    version: '2023a'
  });
  
  // Initialize MicroModal
  MicroModal.init();
  
  // Function to update current time
  function updateTime(timezone) {
    const currentTym = moment().tz(timezone).format('HH:mm:ss');
    const currentDate = moment().format('DD / MM/ YY');
  
    // Update DOM elements
    document.getElementById('current-time').textContent = currentTym;
  }
  
  // Setting default timezone
  const defaultTimezone = 'Africa/Kigali';
  updateTime(defaultTimezone);
  
  // Change timezone button
  document.getElementById('button').addEventListener('click', () => {
    MicroModal.show('timezone-modal');
  });
  
  // Apply selected timezone
  document.getElementById('submit-timezone').addEventListener('click', () => {
    const selectedTimezone = document.getElementById('timezone-select').value;
    updateTime(selectedTimezone);
    MicroModal.close('timezone-modal');
  });
  