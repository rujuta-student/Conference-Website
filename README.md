NovaSphere — Immersive Web Programming Conference Platform



1. Project Overview

NovaSphere is a high-performance React-based Single Page Application (SPA) engineered to redefine the digital conference experience. Originally conceptualized for the Chennai Trade Centre, the platform leverages a modular full-stack architecture to decouple real-time state from representational UI.
It bridges the gap between administrative organization and social interaction by combining a real-time, 2D "Metaverse" style virtual exhibition hall with a sophisticated, logic-driven schedule engine. 
The platform utilizes a cohesive "Neon-Noir" / "Dark Tech" aesthetic, featuring hardware-accelerated CSS glow effects to provide an immersive digital layer for attendees.

2.Core Objectives:

* Real-Time Interaction: Architecture of a multiplayer virtual exhibition hall featuring synchronized coordinate-based movement and collision detection via WebSockets.
* Automated Scheduling: Facilitation of personalized schedule creation through a multi-parameter intersection algorithm and O(1) conflict detection.
* Interactive Exhibitions: Provision of digital exhibition stalls equipped with embedded multimedia, including interactive 3D models and live video streams.
* High-Fidelity UI: Implementation of a consistent visual language using custom CSS properties and responsive viewports for seamless exploration.

3. Technology Stack

Layer	Technology	Purpose / Notes
Frontend	React (v18+)	Component-based UI architecture utilizing functional components and hooks.
Backend Runtime	Node.js	Real-time event relay server hosted on Port 5000.
Real-time Layer	Socket.io	Bi-directional communication for avatar synchronization and stall-specific chat events.
Styling	CSS3 / Custom Props	Custom "Neon-Noir" theme with hardware-accelerated glow effects and absolute positioning.
Logic	JavaScript ES6+	Implementation of intersection algorithms, Set-based deduplication, and coordinate tracking.

4. Project Structure & Architecture

The platform follows a modular architecture designed to maintain high performance during real-time state updates:

* App.js: Root router and global navigation hub featuring a custom orange-glow (#FF8C00) navigation bar.
* server/index.js: The entry point for the Node.js server; initializes Socket.io and manages player connection states.
* src/VirtualExhibition.jsx: The core engine for the 2D metaverse; handles movement logic and viewport management.
* src/ScheduleGenerator.jsx: The primary logic engine for interest-based filtering and session selection.
* src/ScheduleVisualizer.js: A UI component dedicated to rendering the processed schedule in a color-coded grid layout.
* src/utils/logic.js: Helper functions for generating composite keys and performing high-efficiency deduplication.
* src/components/StallOverlay.jsx: A dynamic modal system for rendering YouTube, Tinkercad, and other iframe-embedded content.

Architecture Notes: To optimize performance during high-frequency movement updates, NovaSphere utilizes the useRef hook for viewport and hall map scrolling, effectively bypassing expensive React re-render cycles. Conversely, useState is used for remote avatar coordinates to ensure reactivity when data is received via WebSockets. Additionally, the schedule engine employs a conditional rendering pattern to switch between the selection interface and the visualizer grid without losing state.

5. Key Feature: Virtual Exhibition (2D Metaverse)

The exhibition hall operates on a top-down coordinate system (1536x1024) where user movement is tracked via precise pixel-based coordinates.

* Engine Mechanics:
  * Movement is constrained by an isWalkable function referencing three specific WALKABLE_RECTS (central corridor, vertical halls, and main floor).
  * Navigation utilizes a clamp function for viewport scrolling to keep the avatar centered.
  * Physical Constants: PLAYER_SIZE = 22 and STEP = 12.
* Multiplayer Synchronization: The system emits move events with a payload of { x, y, id } to the Node.js relay, which broadcasts data to all clients for real-time presence.
* Interactive Stalls: Entering a defined collision zone triggers a joinStall event and an interactive overlay.

Stall Name	Monitor	Coordinates (x, y)	Multimedia Content
INFO DESK	Sarah	643, 387	OpenStreetMap Hub
AUDITORIUM	Alex	618, 50	YouTube (fHj-L8JN6zk)
STALL B	Jason	1050, 150	CodePen Showcase
STALL D	Elena	1100, 450	Tinkercad 3D (g6N9WJ1ZJ3M)
NETWORKING LOUNGE	Chris	1000, 750	LinkedIn Professional Hub
CHAT AREA	Maya	235, 750	Discord Widget
STALL C	David	150, 450	PDF Technical Support
LOUNGE AREA	Sofia	180, 150	Vimeo Networking Video (76979871)

6. Key Feature: Personalized Schedule Generator

The scheduling system processes a complex 5-day dataset using a data-driven intersection algorithm.

* Logic Engine: The algorithm iterates over selectedFields and uses .some() and .includes() to check if event.title, event.speaker, or event.type matches the user's filters.
* Deduplication Logic: To prevent conflicts, a unique composite key is generated using the template literal: `${e.day}-${e.room}-${e.time}`. This key is checked against a JavaScript Set to ensure O(1) complexity during insertion.
* Filtering Categories:
  * Interests: AI, ML, Robotics, Cybersecurity, Quantum Tech, IoT, Blockchain, UI/UX.
  * Past Projects: Data Science, Frontend, Backend, Automation, AR/VR.
  * Companies: Google, Microsoft, Tesla, Infosys, TCS.
  * People: Sara, Ravi, Neha, Jay, Maya.
* Visualizer Grid: Results are mapped to a CSS grid with type-specific color coding:
  * Conference: #ff5e00 | Workshop: #00aaff | Contest: #00ff88
  * Exhibition: #aa00ff | Research: #ffaa00 | Pitch: #ffd700

7. Conference Information Portal

* Components: Includes a Home page with a Chennai Trade Centre location map, an About page with speaker slideshows, and a Sponsorship Hub.
* Global Partners: Google, Microsoft, Amazon, Meta, OpenAI, IBM, NVIDIA, Intel, Adobe, Oracle, Salesforce, and Spotify.
* Tiered Registration:

Tier	Cost (Rs)	Benefits Included
Student	5000	Meals, Tutorial workshops, Networking access.
Professor	7000	Meals, Advanced workshops, Speaker sessions.
Professional	8000	Company networking, Business meetups, Expo access.



8.Socket.io Event 

Event	Direction	Payload / Purpose
connection	Server -> Client	Handshake and session initialization.
move	Client -> Server	{ x, y, id }; tracks current player position.
avatars	Server -> Client	Broadcast of all active user positions and IDs.
joinStall	Client -> Server	Room assignment for stall-specific messaging.
chatMessage	Server -> Client	Broadcast of stall messages.

Automated MONITOR Logic: Upon receiving a joinStall event, the system checks if an automated welcome message already exists for that stall room (e.g., "Hello! I'm Sarah. How can I help?"). If no previous message is found, the MONITOR payload is broadcast to avoid duplicate welcome prompts.

 Setup & Installation

Prerequisites: Node.js (LTS), npm.

1. Frontend Setup (Port 3000):
  * cd my-schedule-app
  * npm install
  * npm start
2. Backend Socket Server (Port 5000):
  * cd server
  * node server.js


Evaluation Mapping:

* Technical Proficiency: High-frequency useRef optimization and real-time state synchronization.
* Innovation: Hybrid integration of a social 2D Metaverse within a traditional conference SPA.
* Design: Consistent implementation of the NovaSphere brand using hardware-accelerated neon effects.

 Future Enhancements

* WebRTC Integration: Peer-to-peer video/audio calling within stalls.
* Persistent User Profiles: Database migration to save personalized itineraries.
* Procedural Hall Generation: GUI tools for dynamic map and stall coordinate definition.
* AI-Driven Itineraries: NLP-based session recommendations.
* Firebase Cloud Messaging: Push notifications for upcoming sessions.
