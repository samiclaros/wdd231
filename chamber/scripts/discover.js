const calendarGrid = document.getElementById('calendarGrid');
const monthYear = document.getElementById('monthYear');
const prevMonth = document.getElementById('prevMonth');
const nextMonth = document.getElementById('nextMonth');

let currentDate = new Date();
const eventDates = ['2024-12-15', '2024-12-20', '2024-12-25', '2024-12-29'];

function renderCalendar(date, events) {
  // Clear existing calendar
  calendarGrid.innerHTML = `
    <div class="day-name">Sun</div>
    <div class="day-name">Mon</div>
    <div class="day-name">Tue</div>
    <div class="day-name">Wed</div>
    <div class="day-name">Thu</div>
    <div class="day-name">Fri</div>
    <div class="day-name">Sat</div>
  `;

  // Get current month details
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

  // Add empty spaces for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    calendarGrid.appendChild(emptyCell);
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.textContent = i;
    day.classList.add('day');

    // The current day has an event?
    const currentDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    if (events.includes(currentDateStr)) {
      day.classList.add('circled');
    }

    day.addEventListener('click', () => {
      // Clear previously selected
      document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
      day.classList.add('selected');
    });
    calendarGrid.appendChild(day);
  }
}

// Event listeners for navigation
prevMonth.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate, eventDates);
});

nextMonth.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate, eventDates);
});

// Initial render
renderCalendar(currentDate, eventDates);

// CALENDAR

// Attractions cards

import { attractions } from '../data/attractions.mjs';
function renderAttractions() {
  const attractionsContainer = document.getElementById('attractionsContainer');
  attractionsContainer.innerHTML = '';
  attractions.forEach(attraction => {
    const card = document.createElement('div');
    const img = document.createElement('img');
    const caption = document.createElement('p');

    card.classList.add('attraction-card');
    img.setAttribute('src', attraction.image_url);
    img.setAttribute('alt', attraction.name);
    img.setAttribute('loading', 'lazy');
    caption.classList.add('caption');
    caption.textContent = attraction.name;

    card.appendChild(img);
    card.appendChild(caption);
    attractionsContainer.appendChild(card);
  })
}

renderAttractions();

// Attraction cards

// VISITS or LocalStorage