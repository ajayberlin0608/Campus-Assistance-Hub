// generate_pdf_report.cjs
const fs = require('fs');
const path = require('path');

function getBase64Image(filePath) {
  if (!fs.existsSync(filePath)) return '';
  const ext = path.extname(filePath).replace('.', '');
  const data = fs.readFileSync(filePath).toString('base64');
  return `data:image/${ext === 'svg' ? 'svg+xml' : ext};base64,${data}`;
}

const vitLogoBase64 = getBase64Image(path.join(__dirname, 'public', 'vit-logo.png'));
const sc1 = getBase64Image(path.join(__dirname, 'screenshots', 'screenshot_1_hero_header.png'));
const sc2 = getBase64Image(path.join(__dirname, 'screenshots', 'screenshot_2_service_cards.png'));
const sc3 = getBase64Image(path.join(__dirname, 'screenshots', 'screenshot_3_service_details.png'));
const sc4 = getBase64Image(path.join(__dirname, 'screenshots', 'screenshot_4_lifecycle_monitor.png'));
const sc5 = getBase64Image(path.join(__dirname, 'screenshots', 'screenshot_5_hots_scalability.png'));
const sc6 = getBase64Image(path.join(__dirname, 'screenshots', 'screenshot_6_emergency_directory.png'));
const sc7 = getBase64Image(path.join(__dirname, 'screenshots', 'screenshot_7_devtools_tree.png'));
const sc8 = getBase64Image(path.join(__dirname, 'screenshots', 'screenshot_8_github_repo.png'));

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function readSource(relPath) {
  const p = path.join(__dirname, relPath);
  if (!fs.existsSync(p)) return '';
  return escapeHtml(fs.readFileSync(p, 'utf-8'));
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>BCSE203E Assignment 7 - AJAY BERLIN (24BCE0449)</title>
  <style>
    @page {
      size: A4;
      margin: 10mm 12mm 10mm 12mm;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 9.8pt;
      line-height: 1.5;
      color: #1a202c;
      background: #ffffff;
    }

    .page {
      page-break-after: always;
      position: relative;
      padding-bottom: 2mm;
    }

    .page:last-child {
      page-break-after: auto;
    }

    /* Cover Page - Strict 1 Page Fit */
    .cover-page {
      height: 270mm;
      max-height: 270mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 3px double #002855;
      padding: 10mm 14mm 8mm;
      background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
      page-break-after: always;
      overflow: hidden;
    }

    .cover-header {
      text-align: center;
      border-bottom: 2px solid #002855;
      padding-bottom: 5mm;
    }

    .cover-logo {
      height: 65px;
      margin-bottom: 6px;
    }

    .inst-name {
      font-size: 19pt;
      font-weight: 800;
      color: #002855;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      margin-bottom: 2px;
    }

    .inst-sub {
      font-size: 10.5pt;
      font-weight: 700;
      color: #b45309;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .school-name {
      font-size: 10pt;
      color: #4b5563;
      margin-top: 3px;
      font-weight: 600;
    }

    .cover-title-box {
      text-align: center;
      background: #002855;
      color: #ffffff;
      padding: 10mm 8mm;
      border-radius: 8px;
      margin: 4mm 0;
      box-shadow: 0 4px 15px rgba(0, 40, 85, 0.15);
      border-left: 6px solid #f59e0b;
    }

    .course-badge {
      display: inline-block;
      background: #f59e0b;
      color: #001f3f;
      font-size: 9.5pt;
      font-weight: 800;
      padding: 3px 12px;
      border-radius: 20px;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .assignment-title {
      font-size: 17pt;
      font-weight: 800;
      line-height: 1.25;
      margin-bottom: 4px;
    }

    .assignment-subtitle {
      font-size: 10.5pt;
      font-weight: 400;
      color: #e2e8f0;
    }

    .cover-details-table {
      width: 100%;
      border-collapse: collapse;
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      overflow: hidden;
      margin-top: 2mm;
    }

    .cover-details-table td {
      padding: 6.5px 12px;
      border-bottom: 1px solid #e2e8f0;
      font-size: 9.8pt;
    }

    .cover-details-table td:first-child {
      width: 36%;
      font-weight: 700;
      color: #002855;
      background: #f1f5f9;
    }

    .cover-details-table td:last-child {
      color: #0f172a;
      font-weight: 600;
    }

    .cover-details-table tr:last-child td {
      border-bottom: none;
    }

    .student-highlight {
      color: #b45309 !important;
      font-size: 11.5pt;
      font-weight: 800 !important;
    }

    .reg-highlight {
      font-family: Consolas, Monaco, monospace;
      color: #002855 !important;
      font-size: 11.5pt;
      font-weight: 800 !important;
    }

    .cover-footer {
      text-align: center;
      border-top: 1px solid #cbd5e1;
      padding-top: 4mm;
      font-size: 8.5pt;
      color: #64748b;
    }

    /* Headers & Footers */
    .header-bar {
      display: flex;
      justify-content: space-between;
      border-bottom: 1.5px solid #002855;
      padding-bottom: 3px;
      margin-bottom: 4mm;
      font-size: 8.5pt;
      color: #002855;
      font-weight: 600;
    }

    .footer-bar {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #cbd5e1;
      padding-top: 3px;
      margin-top: 4mm;
      font-size: 8.5pt;
      color: #64748b;
    }

    h1 {
      font-size: 14pt;
      color: #002855;
      border-bottom: 2px solid #002855;
      padding-bottom: 3px;
      margin-top: 3mm;
      margin-bottom: 3.5mm;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    h2 {
      font-size: 11.5pt;
      color: #0a3871;
      margin-top: 3mm;
      margin-bottom: 2.5mm;
      border-left: 4px solid #f59e0b;
      padding-left: 6px;
    }

    h3 {
      font-size: 10.5pt;
      color: #1e293b;
      margin-top: 2.5mm;
      margin-bottom: 1.5mm;
    }

    p {
      margin-bottom: 2.5mm;
      text-align: justify;
    }

    ul, ol {
      margin-left: 5mm;
      margin-bottom: 2.5mm;
    }

    li {
      margin-bottom: 1mm;
    }

    .box-info {
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-left: 4px solid #002855;
      padding: 8px 12px;
      margin-bottom: 3mm;
      border-radius: 0 6px 6px 0;
      font-size: 9.2pt;
    }

    .box-quote {
      background: #eff6ff;
      border-left: 4px solid #2563eb;
      padding: 8px 12px;
      margin-bottom: 3mm;
      font-size: 9pt;
      color: #1e3a8a;
      line-height: 1.45;
    }

    table.data-table {
      width: 100%;
      border-collapse: collapse;
      margin: 3mm 0;
      font-size: 8.8pt;
    }

    table.data-table th {
      background: #002855;
      color: #ffffff;
      text-align: left;
      padding: 5px 8px;
      font-weight: 700;
      border: 1px solid #002855;
    }

    table.data-table td {
      padding: 5px 8px;
      border: 1px solid #cbd5e1;
    }

    table.data-table tr:nth-child(even) {
      background: #f8fafc;
    }

    .screenshot-card {
      margin: 3.5mm 0;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
      page-break-inside: avoid;
    }

    .screenshot-card img {
      width: 100%;
      max-height: 98mm;
      object-fit: contain;
      background: #f8fafc;
      display: block;
      border-bottom: 1px solid #e2e8f0;
    }

    .screenshot-caption {
      padding: 6px 10px;
      background: #f8fafc;
      font-size: 8.8pt;
      color: #334155;
      line-height: 1.35;
    }

    .screenshot-caption strong {
      color: #002855;
    }

    pre.code-block {
      background: #0f172a;
      color: #e2e8f0;
      font-family: Consolas, Monaco, "Courier New", monospace;
      font-size: 8pt;
      line-height: 1.35;
      padding: 8px 10px;
      border-radius: 6px;
      overflow-x: auto;
      margin: 2mm 0 3mm;
      page-break-inside: avoid;
      border-left: 3px solid #f59e0b;
    }

    .code-title {
      font-family: Consolas, Monaco, monospace;
      font-size: 8.5pt;
      font-weight: 700;
      color: #002855;
      background: #e2e8f0;
      padding: 3px 8px;
      border-radius: 4px 4px 0 0;
      display: inline-block;
      margin-bottom: -1px;
    }

    .badge-pill {
      display: inline-block;
      background: #e2e8f0;
      color: #0f172a;
      font-size: 7.5pt;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 10px;
      margin-right: 4px;
    }

    .badge-pill.m6 {
      background: #fef3c7;
      color: #b45309;
      border: 1px solid #fde68a;
    }
  </style>
</head>
<body>

  <!-- PAGE 1: COVER PAGE -->
  <div class="cover-page">
    <div class="cover-header">
      ${vitLogoBase64 ? `<img src="${vitLogoBase64}" class="cover-logo" alt="VIT Logo">` : ''}
      <div class="inst-name">Vellore Institute of Technology</div>
      <div class="inst-sub">Vellore Campus – Deemed to be University</div>
      <div class="school-name">School of Computer Science and Engineering (SCOPE)</div>
    </div>

    <div class="cover-title-box">
      <div class="course-badge">BCSE203E – Web Programming</div>
      <div class="assignment-title">LAB ASSIGNMENT – 7 (10 MARKS)</div>
      <div class="assignment-subtitle">Design and Development of a ReactJS-Based Campus Assistance Hub (SPA)</div>
    </div>

    <div>
      <table class="cover-details-table">
        <tr>
          <td>Student Name:</td>
          <td class="student-highlight">AJAY BERLIN</td>
        </tr>
        <tr>
          <td>Register Number:</td>
          <td class="reg-highlight">24BCE0449</td>
        </tr>
        <tr>
          <td>Course Name & Code:</td>
          <td>BCSE203E – Web Programming</td>
        </tr>
        <tr>
          <td>Curriculum Module:</td>
          <td>Module 6 – ReactJS (Components, Lifecycle, Component API, Constructors)</td>
        </tr>
        <tr>
          <td>Slot:</td>
          <td>L31 + L32 + L51 + L52</td>
        </tr>
        <tr>
          <td>Faculty Name:</td>
          <td>Prof. Nihaal Ahmed.K</td>
        </tr>
        <tr>
          <td>Campus Location:</td>
          <td>VIT Vellore Main Campus</td>
        </tr>
        <tr>
          <td>Public GitHub Repository:</td>
          <td><a href="https://github.com/ajayberlin0608/Campus-Assistance-Hub" style="color: #0284c7; text-decoration: underline; font-family: monospace;">https://github.com/ajayberlin0608/Campus-Assistance-Hub</a></td>
        </tr>
      </table>
    </div>

    <div class="cover-footer">
      Vellore Institute of Technology (VIT) · Katpadi, Vellore, Tamil Nadu – 632014, India · Academic Year 2026–2027
    </div>
  </div>

  <!-- PAGE 2: PROBLEM STATEMENT & SYLLABUS -->
  <div class="page">
    <div class="header-bar">
      <span>BCSE203E – Web Programming | Assignment 7</span>
      <span>Student: AJAY BERLIN (24BCE0449)</span>
    </div>

    <h1>1. Problem Statement & Assignment Objectives</h1>
    
    <div class="box-quote">
      <strong>Problem Statement:</strong><br>
      A university intends to develop a <strong>Campus Assistance Hub</strong>, a Single Page Application (SPA) that enables students to explore important campus services such as Academic Support, Library Services, Transportation, Hostel Services, Health &amp; Wellness, and Technical Support through a unified web interface.<br><br>
      Design and develop a complete, responsive, and interactive Single Page Application using ReactJS. The application shall present the available campus services through a professionally designed interface and allow users to select or explore a service and dynamically view its relevant information without navigating to separate HTML webpages.<br><br>
      The application shall be developed using the ReactJS concepts covered in Module 6, including React Environment Setup, ReactJS Basics, JSX, React Components, React Component API, React Component Life Cycle, Constructors, and React Developer Tools. Students are expected to analyze the requirements and design an appropriate component-based architecture consisting of meaningful and reusable components.<br><br>
      Repeated elements such as service cards, categories, or information sections shall be implemented using reusable React components rather than independently duplicated structures. A suitable constructor shall be used for component initialization, and at least one appropriate component life-cycle method shall be demonstrated to perform or indicate an initialization or update-related operation.
    </div>

    <h2>1.1 Module 6 Syllabus Alignment</h2>
    <p>This implementation rigorously adheres to every curricular milestone specified in Module 6:</p>
    <ul>
      <li><span class="badge-pill m6">Environment Setup</span> Vite 5.4.21 bundler with React 18 createRoot modern rendering engine.</li>
      <li><span class="badge-pill m6">React Basics & JSX</span> Declarative JSX syntax compiling to virtual DOM nodes with key-based reconciliation.</li>
      <li><span class="badge-pill m6">Component Reusability</span> <code>&lt;ServiceCard /&gt;</code>, <code>&lt;ServiceGrid /&gt;</code>, and <code>&lt;ServiceDetails /&gt;</code> eliminate duplication.</li>
      <li><span class="badge-pill m6">Constructor State</span> Class component <code>LifeCycleMonitor</code> uses <code>constructor(props)</code> with <code>super(props)</code> and explicit state initialization.</li>
      <li><span class="badge-pill m6">Life Cycle Methods</span> Demonstrates <code>componentDidMount()</code> (mount logging) and <code>componentDidUpdate()</code> (prop transition auditing).</li>
      <li><span class="badge-pill m6">Component API</span> Demonstrates <code>this.setState()</code>, <code>this.forceUpdate()</code>, <code>this.props</code>, and <code>this.state</code>.</li>
      <li><span class="badge-pill m6">React DevTools</span> Clean inspectable component hierarchy tree with props and state tracking.</li>
    </ul>

    <h2>1.2 VIT Vellore Campus Context & Branding</h2>
    <p>The application was tailored specifically for <strong>VIT Vellore Main Campus</strong>:</p>
    <ul>
      <li><strong>Institutional Theme:</strong> VIT Navy (<code>#002855</code>), Academic Gold (<code>#f59e0b</code>), and Sapphire Blue (<code>#0f4c81</code>).</li>
      <li><strong>Authentic Facilities:</strong> Academic Support &amp; FFCS (Technology Tower TT-108), Periyar EVR Central Library (6-tier stacks), Campus Shuttles (Transport Depot), Hostels &amp; Chief Warden Office, 24/7 Health Centre (with CMC Vellore tie-up), CTS Support (COMM Building), Security Gate 1, and Student Welfare (Dr. MGR Central Block).</li>
      <li><strong>Interactive Elements:</strong> Live IST digital clock, rolling campus announcements ticker, and 24/7 emergency response directory.</li>
    </ul>

    <div class="footer-bar">
      <span>Vellore Institute of Technology · BCSE203E Web Programming</span>
      <span>Page 2</span>
    </div>
  </div>

  <!-- PAGE 3: ARCHITECTURE & HOTS -->
  <div class="page">
    <div class="header-bar">
      <span>BCSE203E – Web Programming | Assignment 7</span>
      <span>Student: AJAY BERLIN (24BCE0449)</span>
    </div>

    <h1>2. Component Architecture & HOTS Design Justification</h1>

    <h2>2.1 Component Hierarchy</h2>
    <div class="box-info">
      <pre style="font-family: Consolas, monospace; font-size: 8.5pt; line-height: 1.35;">
App (SPA Central Orchestrator & State Container)
├── Header (Branding, Live IST Clock, Notice Ticker, Student Badge: AJAY BERLIN 24BCE0449)
├── Hero (Institutional Banner, Campus Metric Cards: 8 Services, 24/7 Care, SPA, M6 Engine)
├── ServiceGrid (Stateful Search Box & Category Filter Pills)
│   ├── ServiceCard x 8 (Reusable Card Instances mapped from dataset array)
├── ServiceDetails (Dynamic Single-Page Inspection Modal with Facilities & Contacts)
├── LifeCycleMonitor (React ES6 Class Component: Constructor, componentDidMount, componentDidUpdate)
├── HotsModal (Scalability Analysis Modal: 5 to 50 Services)
├── EmergencyModal (24/7 Priority Emergency Helplines Directory)
└── Footer (Campus Links, Student Submission Details, Public Repository Link)
      </pre>
    </div>

    <h2>2.2 Higher-Order Thinking Skills (HOTS) Scalability Justification</h2>
    <div class="box-quote">
      <strong>HOTS Question:</strong> Suppose the Campus Assistance Hub is expanded from 5 services to 50 services. Analyze how your component design would affect code reusability, duplication, and maintainability. Identify one important component-design decision made in your application and justify why it would remain useful as the application grows.
    </div>

    <h3>1. Impact on Code Reusability, Duplication, and Maintainability</h3>
    <ul>
      <li><strong>Zero Code Duplication (100% Component Reuse):</strong> In our architecture, not a single service card is hardcoded. Exactly one reusable <code>&lt;ServiceCard /&gt;</code> component definition exists. Whether presenting 5 services or 50 services, rendering occurs via high-order array mapping (<code>services.map(s =&gt; &lt;ServiceCard key={s.id} service={s} onSelect={onSelect} /&gt;)</code>).</li>
      <li><strong>Data-Driven Decoupling ($O(1)$ Code Overhead):</strong> Expanding to 50 services requires adding data records strictly to <code>src/data/services.js</code> or pulling from a REST/GraphQL API. The React presentation layer remains completely untouched.</li>
      <li><strong>Centralized Maintainability ($O(1)$ Modification Cost):</strong> Any visual refinement, badge adjustment, accessibility modification, or button tweak made inside <code>ServiceCard.jsx</code> instantly and uniformly propagates across all 50 rendered cards.</li>
    </ul>

    <h3>2. Key Component-Design Decision: Decoupled State Container Architecture</h3>
    <p>
      The primary design decision was <strong>lifting state orchestration to <code>App.jsx</code> while keeping card components purely presentational</strong>:
    </p>
    <ul>
      <li><strong>Unified State Synchronization:</strong> Search filtering, category tabs, and active service selection update the dataset once at top level, keeping all child components in perfect synchronization without prop-drilling or stale state.</li>
      <li><strong>Scalability to Virtualization / Pagination:</strong> When scaling to 50+ services, a virtualization container (e.g., <code>react-window</code>) or pagination controls can be dropped directly inside <code>ServiceGrid</code> without altering the interface or props of <code>ServiceCard</code>.</li>
      <li><strong>Lifecycle Predictability:</strong> Service card selections trigger <code>componentDidUpdate</code> in <code>LifeCycleMonitor</code> cleanly, providing audit logging and dynamic document updates without side-effects.</li>
    </ul>

    <table class="data-table">
      <thead>
        <tr>
          <th>Dimension</th>
          <th>5 Services (Baseline)</th>
          <th>50 Services (Scaled)</th>
          <th>Architectural Justification</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Component Instances</strong></td>
          <td>1 Reusable Card Definition</td>
          <td>1 Reusable Card Definition</td>
          <td>100% Component Reuse; Zero JSX Duplication</td>
        </tr>
        <tr>
          <td><strong>Maintenance Overhead</strong></td>
          <td>Low</td>
          <td>$O(1)$ Complexity</td>
          <td>Only the data model array expands</td>
        </tr>
        <tr>
          <td><strong>Search/Filter Logic</strong></td>
          <td>In-memory array filter</td>
          <td>Memoized client filter / Paginated</td>
          <td>Instant single-page responsiveness</td>
        </tr>
        <tr>
          <td><strong>Backend Readiness</strong></td>
          <td>Static dataset in <code>services.js</code></td>
          <td>Direct REST / GraphQL API endpoint</td>
          <td>Production-grade decoupling</td>
        </tr>
      </tbody>
    </table>

    <div class="footer-bar">
      <span>Vellore Institute of Technology · BCSE203E Web Programming</span>
      <span>Page 3</span>
    </div>
  </div>

  <!-- PAGE 4: SCREENSHOTS 1 & 2 -->
  <div class="page">
    <div class="header-bar">
      <span>BCSE203E – Web Programming | Assignment 7</span>
      <span>Student: AJAY BERLIN (24BCE0449)</span>
    </div>

    <h1>3. Application Output & Screenshots</h1>

    <h2>3.1 Main Application Header & Hero View</h2>
    <div class="screenshot-card">
      <img src="${sc1}" alt="Main Header and Hero Banner">
      <div class="screenshot-caption">
        <strong>Figure 3.1:</strong> Top navigation header and hero banner showing VIT Vellore branding, campus announcement ticker, student credentials badge (<strong>AJAY BERLIN · 24BCE0449</strong>), real-time IST digital clock, and 4 core campus metric cards.
      </div>
    </div>

    <h2>3.2 Campus Services Directory Grid View</h2>
    <div class="screenshot-card">
      <img src="${sc2}" alt="Campus Services Directory Grid">
      <div class="screenshot-caption">
        <strong>Figure 3.2:</strong> Campus Services Grid rendering 8 reusable <code>&lt;ServiceCard /&gt;</code> components with category color-coded badges, star ratings, operating hours, real-time keyword search, and department filter pills.
      </div>
    </div>

    <div class="footer-bar">
      <span>Vellore Institute of Technology · BCSE203E Web Programming</span>
      <span>Page 4</span>
    </div>
  </div>

  <!-- PAGE 5: SCREENSHOTS 3 & 4 -->
  <div class="page">
    <div class="header-bar">
      <span>BCSE203E – Web Programming | Assignment 7</span>
      <span>Student: AJAY BERLIN (24BCE0449)</span>
    </div>

    <h1>3. Application Output & Screenshots (Contd.)</h1>

    <h2>3.3 Dynamic Single-Page Service Details View</h2>
    <div class="screenshot-card">
      <img src="${sc3}" alt="Dynamic Service Details Modal">
      <div class="screenshot-caption">
        <strong>Figure 3.3:</strong> Dynamic Single-Page Service Details inspector modal rendered upon selecting "Academic Support &amp; FFCS Cell (TT)", showcasing location (Technology Tower TT-108), operating hours, officer in charge, verified facilities checklist, and direct action triggers.
      </div>
    </div>

    <h2>3.4 React Component API & Life Cycle Event Monitor (Module 6)</h2>
    <div class="screenshot-card">
      <img src="${sc4}" alt="LifeCycle Monitor Telemetry">
      <div class="screenshot-caption">
        <strong>Figure 3.4:</strong> Module 6 React ES6 Class Component (<code>LifeCycleMonitor.jsx</code>) displaying state initialized in constructor, live props consumption, real-time lifecycle event logs (<code>componentDidMount</code>, <code>componentDidUpdate</code>), and Component API triggers (<code>this.setState()</code>, <code>this.forceUpdate()</code>).
      </div>
    </div>

    <div class="footer-bar">
      <span>Vellore Institute of Technology · BCSE203E Web Programming</span>
      <span>Page 5</span>
    </div>
  </div>

  <!-- PAGE 6: SCREENSHOTS 5 & 6 -->
  <div class="page">
    <div class="header-bar">
      <span>BCSE203E – Web Programming | Assignment 7</span>
      <span>Student: AJAY BERLIN (24BCE0449)</span>
    </div>

    <h1>3. Application Output & Screenshots (Contd.)</h1>

    <h2>3.5 HOTS Scalability Analysis Modal</h2>
    <div class="screenshot-card">
      <img src="${sc5}" alt="HOTS Scalability Modal">
      <div class="screenshot-caption">
        <strong>Figure 3.5:</strong> Module 6 Higher-Order Thinking Skills (HOTS) interactive modal presenting architectural scalability justification for expanding from 5 to 50 campus services with comparative evaluation.
      </div>
    </div>

    <h2>3.6 24/7 Priority Emergency Directory Modal</h2>
    <div class="screenshot-card">
      <img src="${sc6}" alt="Emergency Directory Modal">
      <div class="screenshot-caption">
        <strong>Figure 3.6:</strong> VIT Vellore 24/7 Priority Emergency Assistance directory modal featuring direct ambulance dispatch (Ext. 5555), Gate 1 Security hub, Health Centre, and national anti-ragging helpline with one-touch dialing.
      </div>
    </div>

    <div class="footer-bar">
      <span>Vellore Institute of Technology · BCSE203E Web Programming</span>
      <span>Page 6</span>
    </div>
  </div>

  <!-- PAGE 7: SCREENSHOTS 7 & 8 -->
  <div class="page">
    <div class="header-bar">
      <span>BCSE203E – Web Programming | Assignment 7</span>
      <span>Student: AJAY BERLIN (24BCE0449)</span>
    </div>

    <h1>4. Evidence of React Developer Tools & GitHub Repository</h1>

    <h2>4.1 React Developer Tools Component Tree Inspection</h2>
    <div class="screenshot-card">
      <img src="${sc7}" alt="React DevTools Component Hierarchy">
      <div class="screenshot-caption">
        <strong>Figure 4.1:</strong> React Developer Tools inspection verifying the clean component tree hierarchy (<code>&lt;App&gt;</code> ➔ <code>&lt;Header&gt;</code>, <code>&lt;Hero&gt;</code>, <code>&lt;ServiceGrid&gt;</code> with 8 <code>&lt;ServiceCard&gt;</code> instances, <code>&lt;ServiceDetails&gt;</code>, and <code>&lt;LifeCycleMonitor&gt;</code>), props inspection, and constructor state values.
      </div>
    </div>

    <h2>4.2 Public GitHub Repository (Verified in Incognito Mode)</h2>
    <div class="screenshot-card">
      <img src="${sc8}" alt="Public GitHub Repository">
      <div class="screenshot-caption">
        <strong>Figure 4.2:</strong> Verified public GitHub repository (<code>https://github.com/ajayberlin0608/Campus-Assistance-Hub</code>) demonstrating public access, student commit history (Ajay Berlin), and complete open-source project tree.
      </div>
    </div>

    <div class="footer-bar">
      <span>Vellore Institute of Technology · BCSE203E Web Programming</span>
      <span>Page 7</span>
    </div>
  </div>

  <!-- PAGE 8: APP.JSX & MAIN.JSX -->
  <div class="page">
    <div class="header-bar">
      <span>BCSE203E – Web Programming | Assignment 7</span>
      <span>Student: AJAY BERLIN (24BCE0449)</span>
    </div>

    <h1>5. Complete Source Code Listings</h1>

    <h2>5.1 Application Orchestrator (src/App.jsx)</h2>
    <pre class="code-block">${readSource('src/App.jsx')}</pre>

    <h2>5.2 Bootstrap Entry Point (src/main.jsx) & HTML (index.html)</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
      <div>
        <div class="code-title">src/main.jsx</div>
        <pre class="code-block">${readSource('src/main.jsx')}</pre>
      </div>
      <div>
        <div class="code-title">index.html</div>
        <pre class="code-block">${readSource('index.html')}</pre>
      </div>
    </div>

    <div class="footer-bar">
      <span>Vellore Institute of Technology · BCSE203E Web Programming</span>
      <span>Page 8</span>
    </div>
  </div>

  <!-- PAGE 9: LIFECYCLE MONITOR & SERVICE CARD -->
  <div class="page">
    <div class="header-bar">
      <span>BCSE203E – Web Programming | Assignment 7</span>
      <span>Student: AJAY BERLIN (24BCE0449)</span>
    </div>

    <h1>5. Source Code Listings (Contd.)</h1>

    <h2>5.3 Module 6 React Class Component: Constructor & Life Cycle Monitor</h2>
    <div class="code-title">src/components/LifeCycleMonitor.jsx</div>
    <pre class="code-block">${readSource('src/components/LifeCycleMonitor.jsx')}</pre>

    <h2>5.4 Reusable Service Card Component</h2>
    <div class="code-title">src/components/ServiceCard.jsx</div>
    <pre class="code-block">${readSource('src/components/ServiceCard.jsx')}</pre>

    <div class="footer-bar">
      <span>Vellore Institute of Technology · BCSE203E Web Programming</span>
      <span>Page 9</span>
    </div>
  </div>

  <!-- PAGE 10: SERVICE GRID & SERVICE DETAILS -->
  <div class="page">
    <div class="header-bar">
      <span>BCSE203E – Web Programming | Assignment 7</span>
      <span>Student: AJAY BERLIN (24BCE0449)</span>
    </div>

    <h1>5. Source Code Listings (Contd.)</h1>

    <h2>5.5 Service Grid Component (src/components/ServiceGrid.jsx)</h2>
    <pre class="code-block">${readSource('src/components/ServiceGrid.jsx')}</pre>

    <h2>5.6 Single-Page Dynamic Service Details Modal (src/components/ServiceDetails.jsx)</h2>
    <pre class="code-block">${readSource('src/components/ServiceDetails.jsx')}</pre>

    <div class="footer-bar">
      <span>Vellore Institute of Technology · BCSE203E Web Programming</span>
      <span>Page 10</span>
    </div>
  </div>

  <!-- PAGE 11: HEADER, HERO, FOOTER & MODALS -->
  <div class="page">
    <div class="header-bar">
      <span>BCSE203E – Web Programming | Assignment 7</span>
      <span>Student: AJAY BERLIN (24BCE0449)</span>
    </div>

    <h1>5. Source Code Listings (Contd.)</h1>

    <h2>5.7 Header & Hero Components</h2>
    <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 8px;">
      <div>
        <div class="code-title">src/components/Header.jsx</div>
        <pre class="code-block">${readSource('src/components/Header.jsx')}</pre>
      </div>
      <div>
        <div class="code-title">src/components/Hero.jsx</div>
        <pre class="code-block">${readSource('src/components/Hero.jsx')}</pre>
      </div>
    </div>

    <h2>5.8 Institutional Footer Component (src/components/Footer.jsx)</h2>
    <pre class="code-block">${readSource('src/components/Footer.jsx')}</pre>

    <div class="footer-bar">
      <span>Vellore Institute of Technology · BCSE203E Web Programming</span>
      <span>Page 11</span>
    </div>
  </div>

  <!-- PAGE 12: DATA MODEL & MODALS -->
  <div class="page">
    <div class="header-bar">
      <span>BCSE203E – Web Programming | Assignment 7</span>
      <span>Student: AJAY BERLIN (24BCE0449)</span>
    </div>

    <h1>5. Source Code Listings (Contd.)</h1>

    <h2>5.9 Campus Services Data Model (src/data/services.js)</h2>
    <pre class="code-block" style="font-size: 7.5pt;">${readSource('src/data/services.js')}</pre>

    <h2>5.10 Emergency Modal Component (src/components/EmergencyModal.jsx)</h2>
    <pre class="code-block" style="font-size: 7.5pt;">${readSource('src/components/EmergencyModal.jsx')}</pre>

    <div class="footer-bar">
      <span>Vellore Institute of Technology · BCSE203E Web Programming</span>
      <span>Page 12</span>
    </div>
  </div>

  <!-- PAGE 13: CONCLUSION, CHECKLIST & DECLARATION -->
  <div class="page">
    <div class="header-bar">
      <span>BCSE203E – Web Programming | Assignment 7</span>
      <span>Student: AJAY BERLIN (24BCE0449)</span>
    </div>

    <h1>6. Conclusion & Verification Summary</h1>

    <div class="box-info">
      <h3 style="margin-bottom: 2mm;">Assignment Requirements Verification Checklist</h3>
      <table class="data-table">
        <thead>
          <tr>
            <th>Requirement Specification</th>
            <th>Implementation Reference</th>
            <th>Evaluation Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>React Environment Setup</strong></td>
            <td>Vite 5.4.21, React 18 createRoot, JSX compiler</td>
            <td><strong style="color: #059669;">COMPLETED (100%)</strong></td>
          </tr>
          <tr>
            <td><strong>Single Page Application (SPA)</strong></td>
            <td>Zero full-page reloads, dynamic inspection modals</td>
            <td><strong style="color: #059669;">COMPLETED (100%)</strong></td>
          </tr>
          <tr>
            <td><strong>Component Reusability</strong></td>
            <td>Single <code>&lt;ServiceCard /&gt;</code> definition mapped dynamically</td>
            <td><strong style="color: #059669;">COMPLETED (100%)</strong></td>
          </tr>
          <tr>
            <td><strong>Constructor State Initialization</strong></td>
            <td><code>LifeCycleMonitor.jsx</code> constructor with <code>super(props)</code></td>
            <td><strong style="color: #059669;">COMPLETED (100%)</strong></td>
          </tr>
          <tr>
            <td><strong>Component Life Cycle Methods</strong></td>
            <td><code>componentDidMount()</code> &amp; <code>componentDidUpdate()</code> in monitor</td>
            <td><strong style="color: #059669;">COMPLETED (100%)</strong></td>
          </tr>
          <tr>
            <td><strong>React Component API</strong></td>
            <td><code>this.setState()</code> &amp; <code>this.forceUpdate()</code> interactive triggers</td>
            <td><strong style="color: #059669;">COMPLETED (100%)</strong></td>
          </tr>
          <tr>
            <td><strong>React Developer Tools Usage</strong></td>
            <td>Inspected component tree, props, and constructor state</td>
            <td><strong style="color: #059669;">COMPLETED (100%)</strong></td>
          </tr>
          <tr>
            <td><strong>HOTS Design Justification</strong></td>
            <td>5 to 50 services scalability evaluation and comparative table</td>
            <td><strong style="color: #059669;">COMPLETED (100%)</strong></td>
          </tr>
          <tr>
            <td><strong>VIT Vellore Institutional Context</strong></td>
            <td>Official navy/gold branding, authentic campus facilities</td>
            <td><strong style="color: #059669;">COMPLETED (100%)</strong></td>
          </tr>
          <tr>
            <td><strong>Public GitHub Repository</strong></td>
            <td><code>https://github.com/ajayberlin0608/Campus-Assistance-Hub</code></td>
            <td><strong style="color: #059669;">VERIFIED &amp; PUBLIC</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>6.1 Declaration of Originality</h2>
    <p>
      I, <strong>AJAY BERLIN</strong> (Register Number: <strong>24BCE0449</strong>), hereby declare that this assignment report titled <em>"Design and Development of a ReactJS-Based Campus Assistance Hub"</em> for course <strong>BCSE203E – Web Programming</strong> (Slot: L31+L32+L51+L52) is an authentic and original submission developed by me under the guidance of <strong>Prof. Nihaal Ahmed.K</strong>. All ReactJS components, life-cycle implementations, constructors, styling, and documentation have been created and verified in strict accordance with the university guidelines.
    </p>

    <div style="margin-top: 10mm; display: flex; justify-content: space-between; align-items: flex-end; padding: 0 4mm;">
      <div>
        <p style="margin-bottom: 2px;"><strong>Date:</strong> 19th September 2026</p>
        <p style="margin-bottom: 2px;"><strong>Place:</strong> Vellore Institute of Technology, Vellore</p>
        <p style="font-size: 8.5pt; color: #64748b;">Vellore, Tamil Nadu – 632014</p>
      </div>
      <div style="text-align: center;">
        <div style="font-family: 'Brush Script MT', 'Lucida Handwriting', cursive, sans-serif; font-size: 20pt; color: #002855; margin-bottom: 2px;">Ajay Berlin</div>
        <div style="border-top: 1.5px solid #002855; width: 180px; margin: 0 auto;"></div>
        <p style="font-size: 9.5pt; font-weight: 700; color: #002855; margin-top: 4px;">AJAY BERLIN</p>
        <p style="font-size: 8.5pt; color: #64748b;">(Reg. No. 24BCE0449)</p>
      </div>
    </div>

    <div class="footer-bar" style="margin-top: 10mm;">
      <span>Vellore Institute of Technology · BCSE203E Web Programming</span>
      <span>Page 13</span>
    </div>
  </div>

</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'submission_report.html'), html);
console.log('Clean 13-page submission_report.html generated successfully!');
