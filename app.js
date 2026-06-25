// ============================================================
// MINDSET — Foundation Script
// ============================================================

const DB_KEY = 'mindset_v1';

const Storage = {
  load() {
    try {
      const raw = localStorage.getItem(DB_KEY);
      return raw ? JSON.parse(raw) : this.defaults();
    } catch (e) { return this.defaults(); }
  },
  save(data) { localStorage.setItem(DB_KEY, JSON.stringify(data)); },
  defaults() {
    return {
      theme: 'light',
      xp: 0,
      streak: 0,
      freeze: 0,
      manualDayOffset: 0,
    };
  }
};

let db = Storage.load();

/* ---------------- Theme ---------------- */
function applyTheme(theme, animate) {
  if (animate) {
    const curtain = document.createElement('div');
    curtain.className = 'theme-curtain is-wiping';
    document.body.appendChild(curtain);
    setTimeout(() => {
      document.body.setAttribute('data-theme', theme);
    }, 350);
    curtain.addEventListener('animationend', () => curtain.remove());
  } else {
    document.body.setAttribute('data-theme', theme);
  }
  db.theme = theme;
  Storage.save(db);
}

document.body.setAttribute('data-theme', db.theme || 'light');
const themeToggle = document.getElementById('themeToggle');
themeToggle.checked = db.theme === 'dark';
themeToggle.addEventListener('change', () => {
  applyTheme(themeToggle.checked ? 'dark' : 'light', true);
});

/* ---------------- Galaxy labels (Study / Exercise / Weekly) ---------------- */
const GALAXY_RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function buildGalaxyLabel(text) {
  const ringStars = Array.from({ length: 20 }, () => {
    const style = `--angle:${GALAXY_RANDOM(0,360)};--g-duration:${GALAXY_RANDOM(6,20)};--g-delay:${GALAXY_RANDOM(1,10)};--g-alpha:${GALAXY_RANDOM(40,90)/100};--g-size:${GALAXY_RANDOM(2,6)};--g-distance:${GALAXY_RANDOM(40,90)}`;
    return `<span class="g-star" style="${style}"></span>`;
  }).join('');
  const staticStars = Array.from({ length: 4 }, () => {
    const style = `--g-duration:${GALAXY_RANDOM(6,20)};--g-delay:${GALAXY_RANDOM(1,10)};--g-alpha:${GALAXY_RANDOM(40,90)/100};--g-size:${GALAXY_RANDOM(2,6)}`;
    return `<span class="g-star g-star--static" style="${style}"></span>`;
  }).join('');

  return `
    <button class="galaxy-label" type="button">
      <span class="g-spark"></span>
      <span class="g-backdrop"></span>
      <span class="g-container">${staticStars}</span>
      <span class="g-galaxy"><span class="g-galaxy__ring">${ringStars}</span></span>
      <span class="g-text">${text}</span>
    </button>
  `;
}

document.querySelectorAll('[data-galaxy-label]').forEach(wrap => {
  wrap.innerHTML = buildGalaxyLabel(wrap.dataset.galaxyLabel);
});

/* ---------------- Custom cursor ---------------- */
const cursorEl = document.getElementById('cursor');
let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
let cx = mouseX, cy = mouseY;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  updateEyes(mouseX, mouseY);
});

function cursorLoop() {
  cx += (mouseX - cx) * 0.25;
  cy += (mouseY - cy) * 0.25;
  cursorEl.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
  requestAnimationFrame(cursorLoop);
}
cursorLoop();

document.addEventListener('mouseover', (e) => {
  if (e.target.closest('button, .task-row, a, input, .menu-item')) {
    cursorEl.classList.add('is-hover');
  }
});
document.addEventListener('mouseout', (e) => {
  if (e.target.closest('button, .task-row, a, input, .menu-item')) {
    cursorEl.classList.remove('is-hover');
  }
});

/* ---------------- Chloe eye tracking ---------------- */
const pupilLeft = document.getElementById('pupilLeft');
const pupilRight = document.getElementById('pupilRight');
const miniPupils = document.querySelectorAll('.chloe-mini-pupil');
const MAX_MOVE = 6;
const MAX_MOVE_MINI = 2;

function updateEyes(x, y) {
  moveEye(pupilLeft, x, y, document.getElementById('chloe'), MAX_MOVE);
  moveEye(pupilRight, x, y, document.getElementById('chloe'), MAX_MOVE);
  miniPupils.forEach(p => moveEye(p, x, y, document.getElementById('chloeMini'), MAX_MOVE_MINI));
}

function moveEye(pupilEl, x, y, containerEl, maxMove) {
  if (!pupilEl || !containerEl) return;
  const rect = containerEl.getBoundingClientRect();
  if (rect.width === 0) return;
  const cx2 = rect.left + rect.width / 2;
  const cy2 = rect.top + rect.height / 2 * 0.6;
  const dx = x - cx2;
  const dy = y - cy2;
  const dist = Math.hypot(dx, dy) || 1;
  const move = Math.min(maxMove, dist / 30);
  const ang = Math.atan2(dy, dx);
  pupilEl.style.transform = `translate(${Math.cos(ang) * move}px, ${Math.sin(ang) * move}px)`;
}

/* ---------------- Intro -> App transition ---------------- */
const intro = document.getElementById('intro');
const app = document.getElementById('app');
const chloeMini = document.getElementById('chloeMini');
const introEnter = document.getElementById('introEnter');

function enterApp() {
  intro.classList.add('is-leaving');
  app.hidden = false;
  setTimeout(() => {
    chloeMini.classList.add('is-settled');
  }, 150);
  setTimeout(() => { intro.remove(); }, 750);
}
introEnter.addEventListener('click', enterApp);
intro.addEventListener('click', enterApp);

/* ---------------- LVL / XP reveal ---------------- */
const lvlPill = document.getElementById('lvlPill');
const xpPanel = document.getElementById('xpPanel');
lvlPill.addEventListener('click', () => {
  const open = xpPanel.classList.toggle('is-open');
  xpPanel.hidden = false;
  lvlPill.setAttribute('aria-expanded', String(open));
  if (open) renderXP();
});

function renderXP() {
  const lvl = Math.floor(db.xp / 100) + 1;
  const xpInLevel = db.xp % 100;
  document.getElementById('lvlNum').textContent = lvl;
  document.getElementById('xpFill').style.width = xpInLevel + '%';
  document.getElementById('xpLabel').textContent = `${xpInLevel} / 100 XP`;
}
renderXP();

/* ---------------- Top stats ---------------- */
function renderStats() {
  document.getElementById('statStreak').textContent = db.streak || 0;
  document.getElementById('statFreeze').textContent = db.freeze || 0;
}
renderStats();

/* ---------------- Menu ---------------- */
const menuTrigger = document.getElementById('menuTrigger');
const menuPanel = document.getElementById('menuPanel');
const menuCurtain = document.getElementById('menuCurtain');

function toggleMenu(force) {
  const open = force !== undefined ? force : !menuPanel.classList.contains('is-open');
  menuPanel.classList.toggle('is-open', open);
  menuCurtain.classList.toggle('is-open', open);
  menuTrigger.classList.toggle('is-active', open);
  menuTrigger.setAttribute('aria-expanded', String(open));
}
menuTrigger.addEventListener('click', () => toggleMenu());
menuCurtain.addEventListener('click', () => toggleMenu(false));

/* ---------------- View routing ---------------- */
const menuItems = document.querySelectorAll('.menu-item');
const views = document.querySelectorAll('.view');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const target = item.dataset.view;
    menuItems.forEach(i => i.classList.remove('is-active'));
    item.classList.add('is-active');
    views.forEach(v => v.classList.toggle('is-active', v.dataset.view === target));
    toggleMenu(false);
  });
});

/* ---------------- Journey day calculation ---------------- */
const TOTAL_DAYS = 1095;
const JOURNEY_START_DATE = '2026-6-25'; // Day 1 of the 1095-day journey

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

if (!db.startDate) {
  db.startDate = JOURNEY_START_DATE;
  Storage.save(db);
}

function getCurrentJourneyDay() {
  const [sy, sm, sd] = db.startDate.split('-').map(Number);
  const start = new Date(sy, sm - 1, sd);
  const now = new Date();
  const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = Math.round((todayMidnight - start) / 86400000);
  const dayNum = diff + 1 + (db.manualDayOffset || 0);
  return Math.min(Math.max(dayNum, 1), TOTAL_DAYS);
}

function getTasksForToday() {
  const day = getCurrentJourneyDay();
  if (typeof MINDSET_TASKS !== 'undefined' && MINDSET_TASKS[day]) {
    return MINDSET_TASKS[day];
  }
  // Fallback in case tasks.js failed to load
  return { study: ['Study content unavailable for today.'], exercise: ['Exercise content unavailable for today.'] };
}

function getJourneyWeekNumber() {
  const day = getCurrentJourneyDay();
  return Math.min(Math.ceil(day / 7), 156);
}

function weekKey() {
  return `journey-w${getJourneyWeekNumber()}`;
}

function getWeeklyTasks() {
  const weekNum = getJourneyWeekNumber();
  const key = `Week_${String(weekNum).padStart(2, '0')}`;
  if (typeof weeklyBossFights !== 'undefined' && weeklyBossFights[key]) {
    const fight = weeklyBossFights[key];
    return [fight.technical_boss, fight.physical_boss];
  }
  return ['Boss fight unavailable for this week.'];
}

function buildTaskList(listEl, items, storeKey, keyFn) {
  listEl.innerHTML = '';
  const period = (keyFn || todayKey)();
  let remaining = 0;
  items.forEach((text, i) => {
    const key = `${storeKey}_${period}_${i}`;
    if (db[key]) return; // already completed this period, skip rendering
    remaining++;
    const li = document.createElement('li');
    li.className = 'task-row';
    li.textContent = text;
    li.addEventListener('click', () => completeTask(li, key, listEl));
    listEl.appendChild(li);
  });
  if (remaining === 0) showAllDoneState(listEl);
}

function showAllDoneState(listEl) {
  if (listEl.querySelector('.task-done-state')) return;
  const li = document.createElement('li');
  li.className = 'task-row task-done-state';
  li.textContent = 'All done for now';
  listEl.appendChild(li);
}

function completeTask(el, key, listEl) {
  el.classList.add('is-leaving');
  db[key] = true;
  db.xp = (db.xp || 0) + 10;
  Storage.save(db);
  renderXP();
  setTimeout(() => {
    el.remove();
    if (listEl && !listEl.querySelector('.task-row')) showAllDoneState(listEl);
  }, 420);
  checkDayFullyComplete();
}

const todaysTasks = getTasksForToday();
buildTaskList(document.getElementById('studyList'), todaysTasks.study, 'study');
buildTaskList(document.getElementById('exerciseList'), todaysTasks.exercise, 'exercise');

/* Weekly tasks — only shown on Sundays */
const weeklyBlock = document.getElementById('weeklyBlock');
if (weeklyBlock) {
  const isSunday = new Date().getDay() === 0;
  weeklyBlock.hidden = !isSunday;
  if (isSunday) {
    buildTaskList(document.getElementById('weeklyList'), getWeeklyTasks(), 'weekly', weekKey);
  }
}

/* ---------------- Day counter ---------------- */
document.getElementById('topbarDay').textContent = `${getCurrentJourneyDay()} / ${TOTAL_DAYS}`;

/* ============================================================
   ATTENDANCE
   Tracks days where ALL daily tasks (study + exercise) were
   completed. db.completedDays = list of date-keys fully done.
   db.missedDays = list of date-keys that ended incomplete.
   db.lastCheckedDay = the last calendar day we've already
   evaluated for missed-day/freeze logic, so we never double-process.
   ============================================================ */
if (!db.completedDays) db.completedDays = [];
if (!db.missedDays) db.missedDays = [];
if (db.freeze === undefined) db.freeze = 0;
const MAX_FREEZE = 3;

function dateKeyToDate(key) {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d);
}
function dateToKey(d) {
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function checkDayFullyComplete() {
  const day = todayKey();
  const tasks = getTasksForToday();
  const studyDone = tasks.study.every((_, i) => db[`study_${day}_${i}`]);
  const exerciseDone = tasks.exercise.every((_, i) => db[`exercise_${day}_${i}`]);
  if (studyDone && exerciseDone && !db.completedDays.includes(day)) {
    db.completedDays.push(day);
    Storage.save(db);
    renderAttendance();
    renderStreakFromAttendance();
  }
}

/**
 * Runs once per app load. Looks at every calendar day strictly between
 * the last day we checked and today (i.e. days that have now fully
 * ended), and for each one that wasn't completed, marks it missed —
 * consuming a freeze silently if one is available, otherwise the
 * streak's consecutive-day count will naturally stop there.
 */
function processMissedDays() {
  const todayD = new Date();
  const todayMidnight = new Date(todayD.getFullYear(), todayD.getMonth(), todayD.getDate());

  let cursor;
  if (db.lastCheckedDay) {
    cursor = dateKeyToDate(db.lastCheckedDay);
    cursor.setDate(cursor.getDate() + 1);
  } else {
    // First run ever — start checking from the journey's start date.
    cursor = dateKeyToDate(db.startDate);
  }

  let changed = false;
  while (cursor < todayMidnight) {
    const key = dateToKey(cursor);
    const alreadyCompleted = db.completedDays.includes(key);
    const alreadyMissed = db.missedDays.includes(key);
    if (!alreadyCompleted && !alreadyMissed) {
      if (db.freeze > 0) {
        db.freeze -= 1; // silently protect the streak for this one day
      } else {
        db.missedDays.push(key);
      }
      changed = true;
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  db.lastCheckedDay = dateToKey(new Date(todayMidnight.getTime() - 86400000));
  if (changed) Storage.save(db);
  else Storage.save(db); // still persist lastCheckedDay
}

function renderStreakFromAttendance() {
  // Current streak: consecutive completed days ending yesterday,
  // plus today if today is already complete. Today not being
  // finished yet should never make the streak look broken.
  const sorted = [...db.completedDays].sort();
  let streak = 0;
  let cursor = new Date();
  const todayK = todayKey();
  if (!sorted.includes(todayK)) {
    cursor.setDate(cursor.getDate() - 1); // start counting from yesterday
  }
  while (true) {
    const key = dateToKey(cursor);
    if (sorted.includes(key)) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }
  db.streak = streak;
  Storage.save(db);
  renderStats();
}

function renderAttendance() {
  const days = db.completedDays || [];
  const sorted = [...days].sort();

  // Current streak — same logic as renderStreakFromAttendance: an
  // unfinished "today" should never make the streak look broken.
  let current = 0;
  let cursor = new Date();
  const todayK = todayKey();
  if (!sorted.includes(todayK)) {
    cursor.setDate(cursor.getDate() - 1);
  }
  while (true) {
    const key = dateToKey(cursor);
    if (sorted.includes(key)) {
      current++;
      cursor.setDate(cursor.getDate() - 1);
    } else break;
  }

  // Best streak: longest run of consecutive calendar days in the list
  let best = 0;
  let run = 0;
  let prevDate = null;
  sorted.forEach(key => {
    const [y, m, d] = key.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    if (prevDate) {
      const diffDays = Math.round((date - prevDate) / 86400000);
      run = diffDays === 1 ? run + 1 : 1;
    } else {
      run = 1;
    }
    best = Math.max(best, run);
    prevDate = date;
  });

  // This month %
  const now = new Date();
  const daysElapsedThisMonth = now.getDate();
  const thisMonthCount = days.filter(key => {
    const [y, m] = key.split('-').map(Number);
    return y === now.getFullYear() && m === now.getMonth() + 1;
  }).length;
  const monthPct = daysElapsedThisMonth ? Math.round((thisMonthCount / daysElapsedThisMonth) * 100) : 0;

  const elCurrent = document.getElementById('attCurrentStreak');
  const elBest = document.getElementById('attBestStreak');
  const elTotal = document.getElementById('attTotalDays');
  const elMonth = document.getElementById('attMonthPct');
  if (elCurrent) elCurrent.textContent = current;
  if (elBest) elBest.textContent = Math.max(best, current);
  if (elTotal) elTotal.textContent = days.length;
  if (elMonth) elMonth.textContent = monthPct + '%';

  const missedEl = document.getElementById('attendanceMissed');
  if (missedEl) {
    const missedCount = (db.missedDays || []).length;
    if (missedCount > 0) {
      missedEl.textContent = `${missedCount} day${missedCount === 1 ? '' : 's'} missed since starting.`;
      missedEl.classList.remove('is-empty');
    } else {
      missedEl.classList.add('is-empty');
    }
  }
}

processMissedDays();
renderAttendance();
renderStreakFromAttendance();

/* ============================================================
   MISTAKES
   ============================================================ */
if (!db.mistakes) db.mistakes = []; // { date: 'YYYY-MM-DD', text: '...' }

function formatMistakeDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function renderMistakes() {
  const list = document.getElementById('mistakeList');
  const empty = document.getElementById('mistakeEmpty');
  if (!list) return;
  list.innerHTML = '';
  const entries = [...db.mistakes].reverse(); // newest first
  empty.classList.toggle('is-hidden', entries.length > 0);
  entries.forEach(entry => {
    const li = document.createElement('li');
    li.className = 'mistake-entry';
    li.innerHTML = `
      <span class="mistake-date">${formatMistakeDate(entry.date)}</span>
      <span class="mistake-text"></span>
    `;
    li.querySelector('.mistake-text').textContent = entry.text;
    list.appendChild(li);
  });
}

const mistakeForm = document.getElementById('mistakeForm');
if (mistakeForm) {
  mistakeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('mistakeInput');
    const text = input.value.trim();
    if (!text) return;
    db.mistakes.push({ date: todayKey(), text });
    Storage.save(db);
    input.value = '';
    renderMistakes();
  });
}

renderMistakes();

/* ============================================================
   BACKUP
   ============================================================ */
const exportBtn = document.getElementById('exportBtn');
const importInput = document.getElementById('importInput');
const backupStatus = document.getElementById('backupStatus');

if (exportBtn) {
  exportBtn.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(db, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const stamp = todayKey().replace(/[^\d]/g, '-');
    a.href = url;
    a.download = `mindset-backup-${stamp}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    backupStatus.textContent = 'Exported.';
    setTimeout(() => { backupStatus.textContent = ''; }, 3000);
  });
}

if (importInput) {
  importInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        db = parsed;
        Storage.save(db);
        backupStatus.textContent = 'Imported. Reloading…';
        setTimeout(() => location.reload(), 900);
      } catch (err) {
        backupStatus.textContent = 'That file could not be read.';
      }
    };
    reader.readAsText(file);
    importInput.value = '';
  });
}

/* ============================================================
   ROADMAP
   ============================================================ */
const PHASES = [
  {
    id: 0, name: 'Setup', dates: 'Day 1',
    desc: 'Get your public presence ready before the real work starts.',
    resources: ['GitHub profile', 'LinkedIn profile', 'X (Twitter) profile', 'HackerOne / Bugcrowd profile']
  },
  {
    id: 1, name: 'Foundation', dates: 'Day 1–150',
    desc: 'Programming logic and networking basics — the base everything else stands on.',
    resources: ['CS50x — start from Week 0', 'Network+ (Prof Messer)', 'TryHackMe — Intro path']
  },
  {
    id: 2, name: 'Core Security', dates: 'Day 151–320',
    desc: 'Learn how systems actually break — web and network vulnerabilities.',
    resources: ['Security+', 'PortSwigger Web Academy', 'TryHackMe CTFs', 'OWASP Top 10']
  },
  {
    id: 3, name: 'Automation', dates: 'Day 321–430',
    desc: 'Python and API security — automate the repetitive parts of the work.',
    resources: ['CS50P', 'OWASP API Security Top 10', 'HackerOne report-writing guide']
  },
  {
    id: 4, name: 'Advanced Pentest', dates: 'Day 431–610',
    desc: 'Real-world penetration testing and cloud security, industry-grade.',
    resources: ['OSCP', 'AWS Security Specialty', 'Google Cloud security', 'Kubernetes basics', 'HackTheBox']
  },
  {
    id: 5, name: 'AI/ML Foundation', dates: 'Day 611–790',
    desc: 'Core machine learning concepts — the base for AI security work.',
    resources: ['Stanford CS229', 'DeepLearning.AI', 'Kaggle Learn']
  },
  {
    id: 6, name: 'AI Security', dates: 'Day 791–960',
    desc: 'Attacking and defending AI systems — still a young, fast-moving field.',
    resources: ['OWASP LLM Top 10', 'CompTIA SecAI+', 'MITRE ATLAS', 'Garak', 'PyRIT']
  },
  {
    id: 7, name: 'Mastery', dates: 'Day 961–1095',
    desc: 'Specialization, portfolio, and career positioning — the endgame.',
    resources: ['Portfolio site', 'Agentic AI workflows', 'Bug bounty scaling', 'Job applications']
  },
];

function renderRoadmap() {
  const track = document.getElementById('phaseTrack');
  track.innerHTML = '';

  PHASES.forEach((phase, idx) => {
    const isComplete = !!db[`phase_${phase.id}_done`];
    const isCurrent = !isComplete && (idx === 0 || !!db[`phase_${PHASES[idx - 1].id}_done`]);
    const isLast = idx === PHASES.length - 1;

    const li = document.createElement('li');
    li.className = 'phase' + (isComplete ? ' is-complete' : '') + (isCurrent ? ' is-current' : '');
    li.dataset.phaseId = phase.id;

    li.innerHTML = `
      <div class="phase-node">
        <svg viewBox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg>
      </div>
      ${!isLast ? '<div class="phase-line-fill"></div>' : ''}
      <div class="phase-head">
        <span>
          <span class="phase-num">PHASE ${String(phase.id).padStart(2, '0')}</span>
          <span class="phase-name">${phase.name}</span>
        </span>
        <span class="phase-dates">${phase.dates}</span>
      </div>
      <div class="phase-body">
        <div class="phase-body-inner">
          <p class="phase-desc">${phase.desc}</p>
          <ul class="resource-list">
            ${phase.resources.map((r, ri) => `
              <li class="resource-item ${db[`res_${phase.id}_${ri}`] ? 'is-done' : ''}" data-res-idx="${ri}">
                <span class="resource-check"></span>
                <span class="resource-name">${r}</span>
              </li>
            `).join('')}
          </ul>
          <button class="phase-complete-btn" data-phase-id="${phase.id}">
            ${isComplete ? 'Completed' : 'Mark phase complete'}
          </button>
        </div>
      </div>
    `;

    track.appendChild(li);
  });

  // Expand/collapse — only one open at a time
  track.querySelectorAll('.phase-head').forEach(head => {
    head.addEventListener('click', () => {
      const phaseEl = head.closest('.phase');
      const wasOpen = phaseEl.classList.contains('is-open');
      track.querySelectorAll('.phase').forEach(p => p.classList.remove('is-open'));
      if (!wasOpen) phaseEl.classList.add('is-open');
    });
  });

  // Resource toggle
  track.querySelectorAll('.resource-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const phaseId = item.closest('.phase').dataset.phaseId;
      const ri = item.dataset.resIdx;
      const key = `res_${phaseId}_${ri}`;
      db[key] = !db[key];
      Storage.save(db);
      item.classList.toggle('is-done', db[key]);
    });
  });

  // Mark phase complete
  track.querySelectorAll('.phase-complete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const phaseEl = btn.closest('.phase');
      const phaseId = btn.dataset.phaseId;
      const key = `phase_${phaseId}_done`;
      if (db[key]) return; // already complete, nothing to do
      db[key] = true;
      db.xp = (db.xp || 0) + 200;
      Storage.save(db);
      phaseEl.classList.add('is-complete');
      btn.textContent = 'Completed';
      renderXP();
      setTimeout(() => renderRoadmap(), 750); // re-render after animation settles, to update next phase's is-current state
    });
  });
}

renderRoadmap();
