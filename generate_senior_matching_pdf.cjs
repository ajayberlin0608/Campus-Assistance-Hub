// generate_senior_matching_pdf.cjs
const fs = require('fs');
const path = require('path');

function getBase64Image(filePath) {
  if (!fs.existsSync(filePath)) return '';
  const ext = path.extname(filePath).replace('.', '');
  const data = fs.readFileSync(filePath).toString('base64');
  return `data:image/${ext === 'svg' ? 'svg+xml' : ext};base64,${data}`;
}

const scHero = getBase64Image(path.join(__dirname, 'screenshots', 'ref_hero.png'));
const scCardsTop = getBase64Image(path.join(__dirname, 'screenshots', 'ref_cards_top.png'));
const scDetails = getBase64Image(path.join(__dirname, 'screenshots', 'ref_service_details.png'));
const scLifecycle = getBase64Image(path.join(__dirname, 'screenshots', 'ref_lifecycle_footer.png'));
const scHotsTop = getBase64Image(path.join(__dirname, 'screenshots', 'ref_hots_top.png'));
const scHotsBottom = getBase64Image(path.join(__dirname, 'screenshots', 'ref_hots_bottom.png'));
const scEmergTop = getBase64Image(path.join(__dirname, 'screenshots', 'ref_emergency_top.png'));
const scEmergBottom = getBase64Image(path.join(__dirname, 'screenshots', 'ref_emergency_bottom.png'));
const scIncognito = getBase64Image(path.join(__dirname, 'screenshots', 'screenshot_8_github_repo.png'));

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>24BCE0449_VL2026270104528_AST07</title>
  <style>
    @page {
      size: A4;
      margin: 18mm 18mm 18mm 18mm;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 11pt;
      line-height: 1.45;
      color: #000000;
      background: #ffffff;
    }

    .page {
      page-break-after: always;
      height: 255mm;
      max-height: 255mm;
      position: relative;
      overflow: hidden;
    }

    .page:last-child {
      page-break-after: auto;
    }

    /* Page 1: Senior-Style Centered Cover */
    .cover-container {
      height: 245mm;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .cover-title-red {
      color: #cc0000;
      font-weight: bold;
      font-size: 18pt;
      text-decoration: underline;
      margin-bottom: 6px;
      letter-spacing: 0.5px;
    }

    .cover-sub-red {
      color: #cc0000;
      font-weight: bold;
      font-size: 18pt;
      text-decoration: underline;
      margin-bottom: 26px;
      letter-spacing: 0.5px;
    }

    .cover-info-line {
      font-weight: bold;
      font-size: 14pt;
      margin-bottom: 10px;
      color: #000000;
    }

    /* Text Headings */
    .heading-large-underline {
      font-size: 16pt;
      font-weight: bold;
      text-decoration: underline;
      margin-bottom: 14px;
      text-transform: uppercase;
    }

    .subheading-bold {
      font-size: 11pt;
      font-weight: bold;
      margin-bottom: 14px;
    }

    .content-p-bold {
      font-size: 11pt;
      font-weight: bold;
      line-height: 1.45;
      margin-bottom: 14px;
      text-align: justify;
    }

    .bullet-list {
      list-style-type: disc;
      margin-left: 24px;
      margin-bottom: 14px;
    }

    .bullet-list li {
      font-size: 11pt;
      font-weight: bold;
      margin-bottom: 4px;
    }

    .tree-block {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12pt;
      line-height: 1.35;
      white-space: pre;
      margin-top: 10px;
    }

    /* Screenshot Page Layout (2 images per page) */
    .screenshot-page-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .screenshot-img-box {
      width: 100%;
      height: 115mm;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border: 1px solid #dcdcdc;
      background: #fafafa;
    }

    .screenshot-img-box img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .incognito-box {
      width: 100%;
      height: 170mm;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #dcdcdc;
      background: #000;
      margin-top: 15px;
    }

    .incognito-box img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  </style>
</head>
<body>

  <!-- PAGE 1: COVER PAGE -->
  <div class="page">
    <div class="cover-container">
      <div class="cover-title-red">WEB PROGRAMMING - BCSE203E</div>
      <div class="cover-sub-red">ASSIGNMENT 7</div>
      <div class="cover-info-line" style="margin-top: 10px;">NAME: AJAY BERLIN</div>
      <div class="cover-info-line">REG NO: 24BCE0449</div>
      <div class="cover-info-line">FACULTY: Nihaal Ahmed K</div>
    </div>
  </div>

  <!-- PAGE 2: QUESTION PART 1 -->
  <div class="page">
    <div class="heading-large-underline">QUESTION</div>
    <div class="subheading-bold">Design and Development of a ReactJS-Based Campus Assistance Hub</div>

    <p class="content-p-bold">
      A university intends to develop a Campus Assistance Hub, a Single Page Application (SPA) that enables students to explore important campus services such as Academic Support, Library Services, Transportation, Hostel Services, Health &amp; Wellness, and Technical Support through a unified web interface.
    </p>

    <p class="content-p-bold">
      Design and develop a complete, responsive, and interactive Single Page Application using ReactJS. The application shall present the available campus services through a professionally designed interface and allow users to select or explore a service and dynamically view its relevant information without navigating to separate HTML webpages.
    </p>

    <p class="content-p-bold">
      The application shall be developed using the ReactJS concepts covered in Module 6, including React Environment Setup, ReactJS Basics, JSX, React Components, React Component API, React Component Life Cycle, Constructors, and React Developer Tools. Students are expected to analyze the requirements and design an appropriate component-based architecture consisting of meaningful and reusable components.
    </p>

    <p class="content-p-bold">
      Repeated elements such as service cards, categories, or information sections shall be implemented using reusable React components rather than independently duplicated structures. A suitable constructor shall be used for component initialization, and at least one appropriate component life-cycle method shall be demonstrated to perform or indicate an initialization or update-related operation.
    </p>

    <p class="content-p-bold">
      The application shall provide meaningful interaction within the single page. For example, selecting a campus service may dynamically display its description, contact information, location, operating hours, or other relevant details. The implementation should demonstrate
    </p>
  </div>

  <!-- PAGE 3: QUESTION PART 2, VIT BRANDING & HOTS -->
  <div class="page">
    <p class="content-p-bold">
      how JSX, components, component structure, and life-cycle behaviour work together to create a maintainable web interface.
    </p>

    <p class="content-p-bold">
      Students shall also use React Developer Tools to inspect the component hierarchy of their application and provide evidence of its usage. The final solution should demonstrate design thinking and component reusability, rather than simply reproducing a static webpage.
    </p>

    <div class="subheading-bold" style="margin-top: 18px; margin-bottom: 10px;">VIT Campus Context and Branding</div>

    <p class="content-p-bold">
      The application shall be developed with VIT – Vellore Institute of Technology, Vellore Campus as the contextual reference. Students should consider realistic campus requirements, services, locations, facilities, and student-use scenarios while designing the application.
    </p>

    <p class="content-p-bold" style="margin-bottom: 8px;">The application should appropriately incorporate:</p>
    <ul class="bullet-list">
      <li>VIT logo / institutional branding</li>
      <li>VIT – Vellore Institute of Technology name</li>
      <li>VIT Vellore campus context</li>
      <li>Suitable campus-related visual elements or imagery</li>
      <li>A professional university-oriented interface</li>
    </ul>

    <p class="content-p-bold">
      The information presented in the application may be sample/mock information for academic demonstration and need not represent official VIT service information.
    </p>

    <div class="subheading-bold" style="margin-top: 18px; margin-bottom: 10px;">HOTS / Design Analysis</div>

    <p class="content-p-bold">
      Suppose the Campus Assistance Hub is expanded from 5 services to 50 services. Analyze how your component design would affect code reusability, duplication, and maintainability. Identify one important component-design decision made in your application and justify why it would remain useful as the application grows.
    </p>
  </div>

  <!-- PAGE 4: SCREENSHOTS 1 & 2 -->
  <div class="page">
    <div class="heading-large-underline">SCREENSHOTS:</div>
    <div class="screenshot-page-container">
      <div class="screenshot-img-box">
        <img src="${scHero}" alt="Hero Banner and Header View">
      </div>
      <div class="screenshot-img-box">
        <img src="${scCardsTop}" alt="Campus Services Directory Top">
      </div>
    </div>
  </div>

  <!-- PAGE 5: SCREENSHOTS 3 & 4 -->
  <div class="page">
    <div class="screenshot-page-container" style="margin-top: 6mm;">
      <div class="screenshot-img-box">
        <img src="${scDetails}" alt="Service Details Modal">
      </div>
      <div class="screenshot-img-box">
        <img src="${scLifecycle}" alt="LifeCycle Event Monitor and Footer">
      </div>
    </div>
  </div>

  <!-- PAGE 6: SCREENSHOTS 5 & 6 (HOTS MODAL) -->
  <div class="page">
    <div class="screenshot-page-container" style="margin-top: 6mm;">
      <div class="screenshot-img-box">
        <img src="${scHotsTop}" alt="HOTS Modal Top Analysis">
      </div>
      <div class="screenshot-img-box">
        <img src="${scHotsBottom}" alt="HOTS Modal Comparative Table">
      </div>
    </div>
  </div>

  <!-- PAGE 7: SCREENSHOTS 7 & 8 (EMERGENCY MODAL) -->
  <div class="page">
    <div class="screenshot-page-container" style="margin-top: 6mm;">
      <div class="screenshot-img-box">
        <img src="${scEmergTop}" alt="Emergency Directory Modal Top">
      </div>
      <div class="screenshot-img-box">
        <img src="${scEmergBottom}" alt="Emergency Directory Modal Scrolled">
      </div>
    </div>
  </div>

  <!-- PAGE 8: PROJECT STRUCTURE -->
  <div class="page">
    <div class="heading-large-underline">PROJECT STRUCTURE</div>

    <div class="tree-block">
Campus Assistance Hub
│
├── public/
│   ├── vit-logo.svg
│   └── vit-logo.png
│
├── src/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── ServiceCard.jsx
│   │   ├── ServiceCard.css
│   │   ├── ServiceGrid.jsx
│   │   ├── ServiceGrid.css
│   │   ├── ServiceDetails.jsx
│   │   ├── ServiceDetails.css
│   │   ├── LifeCycleMonitor.jsx
│   │   ├── LifeCycleMonitor.css
│   │   ├── HotsModal.jsx
│   │   ├── HotsModal.css
│   │   ├── EmergencyModal.jsx
│   │   ├── EmergencyModal.css
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   └── services.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
    </div>
  </div>

  <!-- PAGE 9: COMPONENT HIERARCHY & GITHUB LINK -->
  <div class="page">
    <div class="subheading-bold" style="font-size: 15pt; margin-bottom: 12px;">Component Hierarchy</div>

    <div class="tree-block" style="margin-bottom: 24px;">
App
│
├── Header
│
├── Hero
│
├── ServiceGrid
│   │
│   ├── ServiceCard
│   ├── ServiceCard
│   ├── ServiceCard
│   ├── ServiceCard
│   ├── ServiceCard
│   ├── ServiceCard
│   ├── ServiceCard
│   └── ServiceCard
│
├── ServiceDetails
│
├── LifeCycleMonitor
│
└── Footer
    </div>

    <div class="heading-large-underline" style="margin-top: 15px; margin-bottom: 15px;">GITHUB REPOSITORY LINK:</div>
    <div style="font-size: 12pt;">
      <a href="https://github.com/ajayberlin0608/Campus-Assistance-Hub" style="color: #000000; text-decoration: none;">https://github.com/ajayberlin0608/Campus-Assistance-Hub</a>
    </div>
  </div>

  <!-- PAGE 10: TESTED IN INCOGNITO -->
  <div class="page">
    <div class="heading-large-underline" style="font-size: 16pt; text-decoration: none;">Tested in incognito:</div>

    <div class="incognito-box">
      <img src="${scIncognito}" alt="GitHub Repository Tested in Incognito">
    </div>
  </div>

</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'senior_matching_report.html'), html);
console.log('senior_matching_report.html generated successfully!');
