# VIT Vellore – Campus Assistance Hub (SPA)

> **Course:** BCSE203E – Web Programming  
> **Assignment:** Assignment – 7 (10 Marks)  
> **Faculty:** Prof. Nihaal Ahmed.K  
> **Slot:** L31 + L32 + L51 + L52  
> **Student Name:** Ajay Berlin  
> **Register Number:** 24BCE0449  
> **Institution:** Vellore Institute of Technology (VIT), Vellore Campus  

---

## GitHub Repository
**Public GitHub Repository:**  
[https://github.com/ajayberlin0608/Campus-Assistance-Hub](https://github.com/ajayberlin0608/Campus-Assistance-Hub)

---

## Project Overview

The **Campus Assistance Hub** is a responsive, interactive **Single Page Application (SPA)** built with **ReactJS** for **VIT Vellore**. The platform provides centralized student assistance across critical university facilities including Academic Advising (FFCS), Periyar EVR Central Library, Campus Shuttles, Residential Wardens, 24/7 Health Care, CTS IT Support, Security & Lost and Found, and Student Welfare.

The entire application operates within a single React interface without navigating between separate HTML pages. It strictly fulfills the curriculum objectives of **Module 6 (ReactJS)**, demonstrating:
- React Environment Setup (Vite + React 18)
- JSX Syntax & Structure
- Meaningful and Reusable Components
- React Component API (`setState`, `forceUpdate`, props)
- ES6 Constructor State Initialization
- React Component Lifecycle Methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`)
- Live LifeCycle & Component API Event Monitor
- Higher-Order Thinking Skills (HOTS) Design Scalability Analysis
- Responsive University Interface with VIT Institutional Branding

---

## Key Features

1. **VIT Vellore Institutional Context & Branding:**
   - Official university colors (University Navy `#002855`, Gold `#f59e0b`, Sapphire Blue).
   - Authentic campus locations: Technology Tower (TT), Periyar EVR Central Library, Transport Control Office, COMM Building, Chief Warden Office, and Health Centre.
   - Real-time campus announcement ticker and synchronized digital clock.

2. **Unified Single Page Architecture (SPA):**
   - Zero full-page reloads.
   - Dynamic inspection panel (`ServiceDetails`) updates immediately upon card selection.

3. **8 Comprehensive Campus Services:**
   - **Academic Support & FFCS Cell:** FFCS timetable modifications, grade counseling, proctor consultation.
   - **Periyar EVR Central Library:** 6-tier book stacks, RFID self-checkout, digital research subscriptions.
   - **Campus Transportation & Shuttles:** Electric buggies, intra-campus shuttles, Katpadi station transit.
   - **Hostel Services & Chief Warden Office:** Biometric outpass clearance, mess management, room maintenance.
   - **VIT Health Centre & Emergency Care:** 24/7 inpatient beds, emergency ambulances, subsidized pharmacy.
   - **Centre for Technical Support (CTS):** VTOP logins, FortiClient VPN, Wi-Fi MAC binding, student licenses.
   - **Campus Security & Lost and Found:** CCTV surveillance, gate passes, vehicle permits, property depot.
   - **Office of Student Welfare & Clubs:** 120+ technical chapters, cultural fests (Riviera & graVITas), scholarships.

4. **Module 6 Component API & Lifecycle Event Monitor:**
   - Genuine React ES6 Class Component (`LifeCycleMonitor.jsx`).
   - Uses `constructor(props)` to initialize state and bind handlers.
   - Demonstrates `componentDidMount()` on initial mount.
   - Demonstrates `componentDidUpdate(prevProps, prevState)` reacting in real time to service selection changes.
   - Features interactive buttons to trigger `this.setState()` and `this.forceUpdate()`, displaying real-time event logs in a dark telemetry screen.

5. **24/7 Priority Emergency Directory Modal:**
   - Direct dialing simulation for university ambulances, gate security, wardens, and anti-ragging helplines.

6. **Interactive HOTS Scalability Analysis Modal:**
   - Architectural evaluation of scaling from 5 to 50 services.

---

## Project Structure

```
campus-assistance-hub/
├── public/
│   ├── vit-logo.svg              # Scalable vector university emblem
│   └── vit-logo.png              # High-resolution VIT emblem
├── src/
│   ├── components/
│   │   ├── Header.jsx            # Top navbar, clock, ticker, modal triggers
│   │   ├── Hero.jsx              # University banner, stats, live search & category filters
│   │   ├── ServiceCard.jsx       # Reusable service card component
│   │   ├── ServiceGrid.jsx       # Responsive grid rendering service cards
│   │   ├── ServiceDetails.jsx    # Dynamic SPA detail inspection panel
│   │   ├── LifeCycleMonitor.jsx  # React Class Component (Constructor & Lifecycle)
│   │   ├── EmergencyModal.jsx    # 24/7 campus priority helpline directory
│   │   ├── HotsModal.jsx         # Module 6 HOTS scalability justification modal
│   │   ├── Footer.jsx            # Institutional footer with student credentials
│   │   └── Icons.jsx             # Accessible inline SVG icon library
│   ├── data/
│   │   └── services.js           # Decoupled campus services data model
│   ├── App.jsx                   # Central application state orchestrator
│   ├── App.css                   # Custom responsive styling and theme variables
│   ├── index.css                 # Base resets and typography tokens
│   └── main.jsx                  # React 18 createRoot bootstrap
├── index.html                    # Single HTML entry point with metadata
├── package.json                  # Dependencies and build scripts
├── vite.config.js                # Vite bundler configuration
└── README.md                     # Documentation and setup instructions
```

---

## Component Hierarchy

```
App (SPA State Hub: services, selectedService, category, search, modals)
│
├── Header
│   ├── Brand (VIT Emblem + Title)
│   ├── Live Clock
│   ├── Announcement Ticker
│   ├── HOTS Modal Trigger Button
│   └── Emergency 24/7 Trigger Button
│
├── Hero
│   ├── Campus Location Pill
│   ├── Title & Subtitle
│   ├── Live Search Input
│   ├── Metrics Grid (4 Stat Cards)
│   └── Category Filter Chips (Dynamic Counts)
│
├── ServiceGrid
│   └── ServiceCard (Reusable: mapped over filtered data)
│       ├── Icon & Badges (Rating, Status)
│       ├── Department Title & Overview
│       ├── Location & Schedule
│       ├── Quick Phone Dial Action
│       └── Explore Details Trigger
│
├── ServiceDetails (Dynamic SPA In-Depth Panel)
│   ├── Overview & Scope
│   ├── Key Facilities Checklist
│   ├── FAQs Section
│   ├── Logistics & Officer In Charge
│   └── Action Triggers (Book Request / Copy Info)
│
├── LifeCycleMonitor (Class Component - Module 6)
│   ├── ES6 Constructor State Initialization
│   ├── componentDidMount Hook
│   ├── componentDidUpdate Hook (Triggers on Service Selection Change)
│   ├── Component API Action Controls (setState, forceUpdate)
│   └── Real-time Telemetry Screen
│
├── EmergencyModal (24/7 University Helplines)
├── HotsModal (Scalability Analysis from 5 to 50 Services)
└── Footer (Institutional Info, Portal Links & Student Credentials)
```

---

## Higher-Order Thinking Skills (HOTS) / Design Justification

### Prompt
> *"Suppose the Campus Assistance Hub is expanded from 5 services to 50 services. Analyze how your component design would affect code reusability, duplication, and maintainability. Identify one important component-design decision made in your application and justify why it would remain useful as the application grows."*

### 1. Code Reusability & Zero Code Duplication
In our architecture, service cards are **never statically duplicated**. Whether the application displays 5 services or 50 services:
- Exactly **one reusable `<ServiceCard />`** component exists in the codebase.
- Exactly **one dynamic `<ServiceDetails />`** component handles in-depth presentation.
- Rendering 50 services is performed via high-order array mapping over a normalized data schema (`services.map(s => <ServiceCard key={s.id} service={s} />)`).
- Zero additional lines of JSX or markup are needed to support 45 additional services.

### 2. Decoupled Data-Driven Architecture & Maintainability
Content is completely separated from UI rendering in `src/data/services.js`. Adding, updating, or retiring campus departments requires modifying only data objects (or connecting to a remote REST/GraphQL API). Any style adjustment, accessibility tag, or responsive layout fix applied inside `ServiceCard.jsx` instantly propagates across all 50 cards, reducing maintenance overhead to $O(1)$.

### 3. Key Design Decision: Presentational/Container State Separation
The most critical architectural decision was **centralizing filtering and state orchestration in the top-level `App` container while keeping `ServiceCard` purely presentational (stateless)**:
- **Global Consistency:** When a user filters by category or types in the live search bar, the subset is computed once in `App.jsx`. Both the count badges in `Hero` and the rendered cards in `ServiceGrid` remain strictly synchronized.
- **Effortless Virtualization:** Scaling to 50+ services can introduce DOM overhead. Because `ServiceGrid` receives clean arrays and delegates rendering to `ServiceCard`, a virtualization windowing library (such as `react-window` or pagination) can be inserted into `ServiceGrid` without changing a single line in `ServiceCard`.

### Summary Comparison Table

| Metric | 5 Services (Baseline) | 50 Services (Scaled) | Architectural Advantage |
|---|---|---|---|
| **Component Instances** | 1 Reusable Card Definition | 1 Reusable Card Definition (Unchanged) | 100% Code Reusability |
| **Maintenance Overhead** | Minimal | $O(1)$ – Only data array expands | Zero JSX duplication |
| **Search/Filter Logic** | Client-side filter | Memoized client filter / Paginated slice | Predictable sub-millisecond response |
| **API Readiness** | Static array in `services.js` | Direct plug-and-play REST/GraphQL JSON | Production-ready enterprise architecture |

---

## Installation & Running Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Steps to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ajayberlin0608/Campus-Assistance-Hub.git
   cd Campus-Assistance-Hub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

4. **Build production bundle:**
   ```bash
   npm run build
   ```

---

## Verification & Compliance Checklist

- [x] **Single Page Application (SPA):** 100% dynamic client-side rendering with zero separate HTML files.
- [x] **VIT Vellore Context & Branding:** Official campus names, locations (TT, Library, CTS, Hostels, Health Centre), and emblems.
- [x] **Minimum 5 Services:** Includes 8 full campus services with comprehensive contact and operating data.
- [x] **JSX Syntax:** Modern, semantic JSX syntax throughout all components.
- [x] **Reusable Components:** Dedicated `ServiceCard`, `Icon`, `Header`, `Hero`, `ServiceGrid`, `ServiceDetails`, and `Footer`.
- [x] **Constructor State Initialization:** Demonstrated in `LifeCycleMonitor.jsx` class component.
- [x] **Lifecycle Methods:** `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` actively logged.
- [x] **Component API:** Explicit usage of `this.setState()`, `this.forceUpdate()`, and `props`.
- [x] **Dynamic Interaction:** Instant search filtering, category tabs, and dynamic single-page details panel.
- [x] **React Developer Tools Compatibility:** Inspectable component tree with distinct component naming.
- [x] **Responsive University UI:** Mobile, tablet, and desktop responsive layout with custom design system.
- [x] **HOTS Scalability Justification:** Documented in modal and README.
- [x] **Public GitHub Repository:** Configured and pushed to `https://github.com/ajayberlin0608/Campus-Assistance-Hub`.
