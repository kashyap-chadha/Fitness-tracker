// Tab functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    tabContents.forEach((content) => content.classList.add('hidden'));

    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.remove('hidden');
  });
});

// Fitness Tracker Logic
const activityForm = document.getElementById('activityForm');
const activityList = document.getElementById('activityList');
let activities = [];

function renderActivities() {
  activityList.innerHTML = '';
  activities.forEach((activity, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${activity.name}</strong> - ${activity.duration} min - ${activity.date}
      <button onclick="deleteActivity(${index})">Delete</button>
    `;
    activityList.appendChild(li);
  });
}

activityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('activity').value;
  const duration = document.getElementById('activityDuration').value;
  const date = document.getElementById('activityDate').value;

  activities.push({ name, duration, date });
  renderActivities();
  activityForm.reset();
});

function deleteActivity(index) {
  activities.splice(index, 1);
  renderActivities();
}

// Workout Suggestion Logic
const workoutForm = document.getElementById('workoutForm');
const workoutDisplay = document.getElementById('workoutDisplay');

const workouts = {
  cardio: [
    "30 minutes of jogging",
    "20 minutes of cycling",
    "15 minutes of jump rope",
    "HIIT for 25 minutes"
  ],
  strength: [
    "Full-body weightlifting routine",
    "Push-ups, pull-ups, and squats",
    "Deadlifts and bench press circuit",
    "Dumbbell workout for 30 minutes"
  ],
  flexibility: [
    "30 minutes of yoga",
    "15 minutes of stretching",
    "Pilates for 20 minutes",
    "Cool-down stretches for 10 minutes"
  ]
};

workoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const type = document.getElementById('workoutType').value;
  const duration = document.getElementById('workoutDurationInput').value;

  const selectedWorkouts = workouts[type];
  const randomWorkout =
    selectedWorkouts[Math.floor(Math.random() * selectedWorkouts.length)];

  workoutDisplay.textContent = `${randomWorkout} (Suggested Duration: ${duration} min)`;
});
