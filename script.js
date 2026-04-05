function selectPackage(type) {
  document.getElementById("selectedPackage").value = type;
}
// floating animation for cards
document.querySelectorAll(".hover-card").forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.boxShadow = "0 0 20px orange";
  });

  card.addEventListener("mouseout", () => {
    card.style.boxShadow = "none";
  });
});
/* existing validation */
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pkg = document.getElementById("selectedPackage").value;

  if (pkg === "") {
    alert("Please select a package");
    return false;
  }

  if (name.length < 3) {
    alert("Name too short");
    return false;
  }

  if (!email.includes("@")) {
    alert("Invalid email");
    return false;
  }

  alert("Registration Successful!");
  return true;
}
/* SCHEDULE DATA */
const schedules = {
  1: `
    <div class="card">
      <h3>Room 1</h3>
      <p>10-11 AM: AI Keynote</p>
      <p>11-12 PM: ML Workshop</p>
    </div>
    <div class="card">
      <h3>Room 2</h3>
      <p>10-11 AM: Robotics</p>
      <p>11-12 PM: IoT</p>
    </div>
  `,
  2: `
    <div class="card">
      <h3>Room 1</h3>
      <p>10-11 AM: Quantum Computing</p>
      <p>11-12 PM: Cybersecurity</p>
    </div>
    <div class="card">
      <h3>Room 2</h3>
      <p>10-11 AM: Data Science</p>
      <p>11-12 PM: Blockchain</p>
    </div>
  `
};

function showDay(day) {
  document.getElementById("schedule").innerHTML = schedules[day];
}