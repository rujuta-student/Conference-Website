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
/* ABOUT PAGE SPEAKERS */
const speakers = [
  {
    img: "anshul.jpg",
    name: "Anshul Khurana",
    role: "Founder, Entitled",
    desc: "Anshul is the visionary founder of Entitled, dedicating his expertise to building fintech ecosystems focused on financial inclusion and empowering low-income workers across India."
  },
  {
    img: "arav.jpg",
    name: "Aravind Srinivas",
    role: "CEO, Perplexity AI",
    desc: "Aravind is the CEO and Co-Founder of Perplexity AI, a revolutionary conversational AI-powered search engine that provides direct, cited answers and is reshaping how people find information online."
  },
  {
    img: "bhat.jpg",
    name: "Shrihari Bhat",
    role: "CEO, Orient Technologies",
    desc: "Shrihari is the CEO of Orient Technologies, leading the veteran IT services and solutions provider in empowering enterprises through cutting-edge cloud, security, and digital transformations."
  },
  {
    img: "ghosh.jpg",
    name: "Debjani Ghosh",
    role: "President, NASSCOM",
    desc: "Debjani is the President of NASSCOM. A strategic leader, she champions the growth of India’s IT-BPM industry and advocates for innovation, diversity, and digital inclusion across the technology ecosystem."
  },
  {
    img: "girish.jpg",
    name: "Girish Mathrubootham",
    role: "Founder & CEO, Freshworks",
    desc: "Girish founded Freshworks, building user-friendly business software. He successfully led the company to become the first Indian SaaS company to list on NASDAQ, inspiring aspiring entrepreneurs globally."
  },
  {
    img: "karth.jpg",
    name: "Karthik Reddy",
    role: "Co-Founder, Blume Ventures",
    desc: "Karthik is the Co-Founder and Managing Partner at Blume Ventures. He has heavily influenced the Indian startup scene, investing in and mentoring some of the nation's most successful tech companies."
  },
  {
    img: "malh.jpg",
    name: "Roshni Nadar Malhotra",
    role: "Chairperson, HCL Technologies",
    desc: "Roshni is the Chairperson of HCL Technologies, making history as the first woman to lead a listed Indian IT company. She is also a passionate philanthropist and a key figure in global tech leadership."
  },
  {
    img: "neha.jpg",
    name: "Neha Narkhede",
    role: "Co-Creator, Apache Kafka",
    desc: "Neha is a pioneering engineer who co-created Apache Kafka and co-founded Confluent. Her work on scalable, real-time data streaming has revolutionized how modern tech giants process massive volumes of data."
  },
  {
    img: "prash.jpg",
    name: "Prashant Warier",
    role: "CEO & Founder, Qure.ai",
    desc: "Prashant is the CEO of Qure.ai, leveraging cutting-edge deep learning to interpret medical images. His work significantly accelerates disease diagnosis, making healthcare more accessible and automated."
  },
  {
    img: "ritesh.jpg",
    name: "Ritesh Agarwal",
    role: "Founder & CEO, OYO",
    desc: "Ritesh founded OYO Rooms, revolutionizing the hospitality industry in India and beyond. Starting at a very young age, he built one of the world's leading networks of hotels, homes, and spaces."
  },
  {
    img: "sharad.jpg",
    name: "Sharad Sharma",
    role: "Co-Founder, iSPIRT Foundation",
    desc: "Sharad is an influential tech evangelist and Co-Founder of iSPIRT, the think tank behind India's digital public infrastructure (India Stack). He champions building software products in India for the world."
  },
  {
    img: "Vembu.jpg",
    name: "Sridhar Vembu",
    role: "CEO, Zoho Corporation",
    desc: "Sridhar is the visionary CEO of Zoho Corporation, celebrated for his focus on building a robust, bootstrapped enterprise and pioneering the software-product hub model from rural India."
  }
];
let currentSpeaker = 0;
function changeSpeaker(dir) {
  currentSpeaker += dir;
  if (currentSpeaker < 0) currentSpeaker = speakers.length - 1;
  if (currentSpeaker >= speakers.length) currentSpeaker = 0;
  document.getElementById("speakerImg").src = speakers[currentSpeaker].img;
  document.getElementById("speakerImg").alt = speakers[currentSpeaker].name;
  document.getElementById("speakerName").innerText = speakers[currentSpeaker].name;
  document.getElementById("speakerRole").innerText = speakers[currentSpeaker].role;
}
function showSpeakerDetails() {
  const speaker = speakers[currentSpeaker];
  alert(speaker.name + " - " + speaker.role + "\n\n" + speaker.desc);
}
document.addEventListener("DOMContentLoaded", () => {
  let el = document.getElementById("speakerImg");
  if (el) {
    changeSpeaker(0);
  }
});
