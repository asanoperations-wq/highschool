const weeks = [
  {
    title: "Start where you are",
    summary: "Begin with curiosity, not pressure. Set up the journal and notice what your current life already tells you.",
    reflection: "Weekly writing (250–400 words): What did I learn about myself this week? What evidence supports it? What question should I investigate next?",
    lessons: [
      ["There is no single right path", "Read Chapter 1 of <em>Designing Your Life</em>. Watch <a href='https://www.ted.com/talks/bill_burnett_5_steps_to_designing_the_life_you_want' target='_blank' rel='noreferrer'>Bill Burnett’s TEDxStanford talk</a>.", "Write: What messages have I received about having my life figured out? Which help me, and which create pressure?"],
      ["Current-life dashboard", "Complete the workbook’s Health/Work/Play/Love dashboard.", "Write 350 words on one area that feels strong, one needing attention, and what ‘better’ would look like this year. This can remain private."],
      ["Baseline portrait", "Read Stanford’s <a href='https://lifedesignlab.stanford.edu/dyl' target='_blank' rel='noreferrer'>course overview</a>. Start four Good Time Journal entries this week.", "Create a two-page ‘Where I am now’ entry: favorite subjects, responsibilities, frustrations, admired people, and questions about adulthood."]
    ]
  },
  {
    title: "Build a compass",
    summary: "Name provisional values and conditions for a life that feels worthwhile—not a fixed identity.",
    reflection: "Weekly writing: Which values have actual evidence behind them? Where do my Workview and Lifeview agree or pull in different directions?",
    lessons: [
      ["Workview", "Read the book’s Building a Compass section. Complete the Workview exercise.", "Write 300–400 words: What is work for? Consider contribution, security, challenge, relationships, and freedom."],
      ["Lifeview", "Complete the Lifeview exercise in the book or workbook.", "Write 300–400 words: What makes a good life? Include relationships, health, community, learning, play, and responsibility."],
      ["Tensions and non-negotiables", "Compare your Workview and Lifeview.", "List five provisional values and five conditions you would rather not give up. Give a real example or reason for each."]
    ]
  },
  {
    title: "Notice energy and engagement",
    summary: "The journal becomes evidence: which activities, settings, and problems leave you energized or drained?",
    reflection: "Weekly writing: What patterns show up in my energy and engagement? What is the strongest piece of evidence?",
    lessons: [
      ["Wayfinding", "Read the book’s Wayfinding section and review the first two weeks of Good Time Journal entries.", "Underline activities, people, settings, or problems that raise both engagement and energy."],
      ["Pattern map", "Make four lists: I enjoy; I am becoming capable at; I care about; I avoid or find draining.", "For every item, add a real example—not only an adjective."],
      ["Curiosity inventory", "List 25 curiosities: jobs, problems, communities, skills, places, lifestyles, or technologies.", "Circle 10 worth a closer look. Explain which three surprise you and why."]
    ]
  },
  {
    title: "Reframe and widen the search",
    summary: "Use assessments to generate questions, not to receive a verdict about who you are.",
    reflection: "Weekly writing: Which assessment ideas fit the evidence I already have? Which do not? What might the tools be missing?",
    lessons: [
      ["Getting unstuck", "Read the book’s reframing section.", "Turn three limiting beliefs into useful questions. Example: ‘What low-risk experience would give me better evidence?’"],
      ["Interests", "Complete the <a href='https://www.careeronestop.org/ExploreCareers/Assessments/self-assessments.aspx' target='_blank' rel='noreferrer'>CareerOneStop Interest Assessment</a>.", "Identify results that fit current evidence, ones that do not, and questions worth exploring."],
      ["Values and skills evidence", "Complete the <a href='https://www.careeronestop.org/ExploreCareers/Assessments/work-values.aspx' target='_blank' rel='noreferrer'>Work Values Matcher</a>.", "List 10 skills with a school, home, volunteer, hobby, or work example that demonstrates each skill."]
    ]
  },
  {
    title: "Design possible lives",
    summary: "Create three different five-year possibilities, then compare them without forcing a choice.",
    reflection: "Weekly writing: What is common across all three plans? What question, rather than conclusion, comes next?",
    lessons: [
      ["Odyssey Plan A", "Read the book’s Odyssey Plans section.", "Draft a plausible five-year path if current interests continue. Include location, typical week, learning, people, money needs, and one uncertainty."],
      ["Alternate possibilities", "Create Plan B (if Plan A vanished) and Plan C (a path worth trying without status or image pressure).", "Make them genuinely different; neither must be ‘the answer.’"],
      ["Compare without choosing", "Use Stanford’s <a href='https://lifedesignlab.stanford.edu/dyl' target='_blank' rel='noreferrer'>Odyssey Plan description</a> as context.", "Rate each plan for curiosity, coherence with values, confidence, and unanswered questions—not prestige."]
    ]
  },
  {
    title: "Scan the world of work",
    summary: "Look broadly before narrowing. Include both college-focused and skill/training-focused directions.",
    reflection: "Weekly writing: Which directions feel exciting, curious, or not for me? What concrete evidence led to each label?",
    lessons: [
      ["Career clusters", "Use <a href='https://schools.utah.gov/cte/pathways/index' target='_blank' rel='noreferrer'>Utah Career Pathways</a> or <a href='https://www.onetonline.org/' target='_blank' rel='noreferrer'>O*NET</a>.", "Choose 10 careers across at least five areas. Include at least one degree route and one skills-training route."],
      ["First five scans", "For five careers, use O*NET or CareerOneStop.", "For each, record one task, work setting, essential skills, training level, and one attractive or unattractive feature."],
      ["Second five scans", "Repeat for five more careers. Watch two relevant <a href='https://www.careeronestop.org/Videos/CareerVideos/career-videos.aspx' target='_blank' rel='noreferrer'>CareerOneStop videos</a>.", "Sort all 10 into interested, curious, not for me, and need more evidence."]
    ]
  },
  {
    title: "Compare four directions with Utah data",
    summary: "Move from ideas to reality by comparing work details, training, and local labor-market information.",
    reflection: "Weekly writing (500–700 words): Compare the four directions. For each, name a strength, concern, unanswered question, and two cited sources.",
    lessons: [
      ["Deep research: directions 1–2", "Choose four directions. For the first two use <a href='https://www.onetonline.org/' target='_blank' rel='noreferrer'>O*NET</a>, <a href='https://www.bls.gov/ooh/' target='_blank' rel='noreferrer'>BLS OOH</a>, and <a href='https://jobs.utah.gov/wi/data/career/index.html' target='_blank' rel='noreferrer'>Utah DWS</a>.", "Record work setting, skills, training, local inexperienced/median wages, and source date."],
      ["Deep research: directions 3–4", "Repeat for the other two careers.", "Include work conditions, schedule, outlook/openings, and Utah licensing requirements where relevant."],
      ["Compare evidence", "Build a four-career comparison chart.", "Do not treat a median wage as a starting wage. Say whether the information is Salt Lake City–Murray, statewide, or national."]
    ]
  },
  {
    title: "Design a realistic Salt Lake County life",
    summary: "Explore how work, money, place, time, and relationships might connect in an adult life.",
    reflection: "Weekly writing: Which conclusions are still uncertain—pay, benefits, housing, transportation, job availability, or something else?",
    lessons: [
      ["A life-fit budget", "Use the <a href='https://livingwage.mit.edu/counties/49035' target='_blank' rel='noreferrer'>Salt Lake County Living Wage Calculator</a> as one planning estimate.", "Sketch a first-independent-adult budget: housing, food, transport, health care, savings, recreation, and an emergency margin."],
      ["Place, people, and conditions", "For each finalist career, investigate likely commute, indoor/outdoor work, schedule, seasonal demands, and flexibility to live elsewhere.", "Write a one-page Salt Lake County fit check. State your own values; do not assume one Utah lifestyle fits everyone."],
      ["Money and trade-offs", "Compare local wage information to the planning budget.", "Explain what would need more research before this could guide an actual decision."]
    ]
  },
  {
    title: "Map several pathways",
    summary: "A career direction can have more than one training route. A college major is not a career destiny.",
    reflection: "Weekly writing: What could I learn or study if the exact job changes? Which doors do I want senior-year choices to keep open?",
    lessons: [
      ["Postsecondary routes", "For each finalist, map degree, community college, certificate, apprenticeship, service, employment, or entrepreneurship routes using <a href='https://uguide.utah.edu/' target='_blank' rel='noreferrer'>UGuide</a> and <a href='https://apprenticeship.utah.gov/future-apprentices/' target='_blank' rel='noreferrer'>Apprenticeship Utah</a>.", "Record training time, costs to investigate, and transferable skills."],
      ["Major is not destiny", "Read the University of Utah’s <a href='https://transfer.utah.edu/majors-and-programs.php' target='_blank' rel='noreferrer'>major-and-career guidance</a>.", "For each finalist, identify two possible education/training routes and three transferable skills."],
      ["Keep doors open", "Review current high-school options with a parent.", "Draft a provisional senior-year learning plan: courses, one skill to strengthen, and possible CTE, dual-enrollment, volunteer, or work experiences."]
    ]
  },
  {
    title: "Learn from working adults",
    summary: "Real conversations test assumptions that data alone cannot answer. A parent helps arrange and supervise them.",
    reflection: "Weekly writing (400–600 words): What surprised me about daily work, preparation, schedule, trade-offs, and entry into the field?",
    lessons: [
      ["Prepare respectfully", "Read UC Berkeley’s <a href='https://career.berkeley.edu/start-exploring/informational-interviews/' target='_blank' rel='noreferrer'>informational-interview guide</a>. With a parent or trusted adult, select three people or fields.", "Draft a brief request and choose five to eight questions from the fieldwork tools below."],
      ["First conversation", "Complete a 20–30 minute informational interview. If scheduling is delayed, prepare or watch a credible professional interview instead.", "Write a thank-you note within two days. Record only information the person permits."],
      ["Synthesize evidence", "Complete additional conversations as scheduling allows; they may spill into Weeks 11–12.", "What matched or contradicted online research? What does the student want to test next?"]
    ]
  },
  {
    title: "Prototype and test",
    summary: "Try one small, low-risk experience to get better evidence—not to prove a career choice.",
    reflection: "Weekly writing (500 words): What did I expect? What happened? What evidence strengthened, weakened, or complicated this direction?",
    lessons: [
      ["Choose a test", "Read the book’s Prototyping section.", "Choose one job shadow, supervised volunteer shift, campus/program visit, small project, introductory lesson, or extra conversation. State the assumption it will test."],
      ["Complete the test", "Use the job-shadow worksheet below if applicable. Alternatives are a virtual tour, recorded professional interview, or supervised hands-on project.", "The goal is evidence, not an impressive experience."],
      ["Reflect and revise", "Review your notes and the four-career comparison.", "What is the next smallest useful experiment or question?"]
    ]
  },
  {
    title: "Make a usable compass",
    summary: "Finish with an evidence-based next-year plan, not a permanent identity or a final adult-life decision.",
    reflection: "Final writing (600–800 words): What changed in my thinking, what evidence matters most, and what will I explore next?",
    lessons: [
      ["Build the portfolio", "Gather highlights from the journal, compass, assessments, scans, comparison chart, Odyssey Plans, interviews, prototype, and senior-year plan.", "Organize them into a clear Career & Life Design Portfolio."],
      ["Write the 12-month plan", "Name three directions worth continuing to explore; for each, record evidence and uncertainty.", "Add two people/places to learn from, one course/skill/experience, and a date to reassess."],
      ["Share and revise", "Give an optional five- to seven-minute presentation to family or a mentor.", "Ask: ‘What question do you think I should investigate next?’ Write one final revision to the plan."]
    ]
  }
];

const weekButtons = document.getElementById('week-buttons');
const weekContent = document.getElementById('week-content');
const progressCount = document.getElementById('progress-count');
const progressBar = document.getElementById('progress-bar');
const saveStatus = document.getElementById('save-status');
const progressStorageKey = 'career-life-design-progress-v3';
const previousWorkspaceKey = 'career-life-design-workspace-v2';
const legacyChecklistKey = 'career-life-design-completed-lessons-v1';
let currentWeek = 0;

function defaultProgress() {
  let completed = [];
  try {
    const previous = JSON.parse(localStorage.getItem(previousWorkspaceKey));
    if (previous && Array.isArray(previous.completed)) completed = previous.completed;
    else completed = JSON.parse(localStorage.getItem(legacyChecklistKey)) || [];
  } catch { /* New visitors begin with no completed lessons. */ }
  return { completed, updatedAt: null };
}

function progress() {
  try {
    const saved = JSON.parse(localStorage.getItem(progressStorageKey));
    if (saved && Array.isArray(saved.completed)) return saved;
  } catch { /* Start with a clean progress record if stored data is unreadable. */ }
  return defaultProgress();
}

function saveProgress(nextProgress, message = 'Completion progress saved in this browser.') {
  nextProgress.updatedAt = new Date().toISOString();
  localStorage.setItem(progressStorageKey, JSON.stringify(nextProgress));
  saveStatus.textContent = message;
}

function updateProgress() {
  const completed = progress().completed;
  progressCount.textContent = completed.length;
  progressBar.style.width = `${(completed.length / 36) * 100}%`;
}

function renderWeek(index, moveFocus = false) {
  currentWeek = index;
  const week = weeks[index];
  const completed = progress().completed;
  weekContent.innerHTML = `
    <p class="week-kicker">Week ${index + 1} of 12</p>
    <h2>${week.title}</h2>
    <p class="week-summary">${week.summary}</p>
    ${week.lessons.map((lesson, lessonIndex) => {
      const id = `${index}-${lessonIndex}`;
      return `<section class="lesson">
        <div class="lesson-top">
          <div><p class="lesson-label">Lesson ${lessonIndex + 1} · 60 minutes</p><h3>${lesson[0]}</h3></div>
          <label class="complete-box"><input type="checkbox" data-lesson-id="${id}" ${completed.includes(id) ? 'checked' : ''} /> Complete</label>
        </div>
        <p><strong>Read / watch:</strong> ${lesson[1]}</p>
        <p class="lesson-action"><strong>Write / do:</strong> ${lesson[2]}</p>
      </section>`;
    }).join('')}
    <section class="weekly-write"><p class="lesson-label">End-of-week journal entry</p><p>${week.reflection}</p></section>
  `;
  document.querySelectorAll('.week-button').forEach((button, buttonIndex) => button.setAttribute('aria-current', buttonIndex === index ? 'true' : 'false'));
  weekContent.querySelectorAll('[data-lesson-id]').forEach((box) => box.addEventListener('change', saveCompletion));
  if (moveFocus) weekContent.focus();
}

function saveCompletion(event) {
  const id = event.target.dataset.lessonId;
  const saved = progress();
  const completed = new Set(saved.completed);
  event.target.checked ? completed.add(id) : completed.delete(id);
  saved.completed = [...completed];
  saveProgress(saved, 'Lesson progress saved.');
  updateProgress();
}

function downloadBackup() {
  const saved = progress();
  const backupData = { version: 3, completed: saved.completed, exportedAt: new Date().toISOString() };
  const backup = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  const date = new Date().toISOString().slice(0, 10);
  link.href = URL.createObjectURL(backup);
  link.download = `career-life-design-backup-${date}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  saveStatus.textContent = 'Completion backup downloaded. Save it in the shared course folder.';
}

function restoreBackup(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const restored = JSON.parse(reader.result);
      if (!Array.isArray(restored.completed)) throw new Error('Invalid backup');
      if (!window.confirm('Replace the work currently saved in this browser with this backup?')) return;
      saveProgress({ completed: restored.completed, updatedAt: restored.exportedAt || null }, 'Completion backup restored.');
      updateProgress();
      renderWeek(currentWeek);
    } catch {
      saveStatus.textContent = 'That file is not a valid Career & Life Design backup.';
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

weeks.forEach((week, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'week-button';
  button.textContent = `Week ${index + 1}`;
  button.setAttribute('aria-current', index === 0 ? 'true' : 'false');
  button.addEventListener('click', () => renderWeek(index, true));
  weekButtons.appendChild(button);
});

document.getElementById('print-page').addEventListener('click', () => window.print());
document.getElementById('download-backup').addEventListener('click', downloadBackup);
document.getElementById('restore-backup').addEventListener('change', restoreBackup);
renderWeek(currentWeek);
updateProgress();
