# Mobile Life OS PWA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn `index_family_backup.html` into a mobile-first personal Life OS PWA prototype with persistent local data.

**Architecture:** Keep the first prototype as a single responsive HTML app so it can be opened quickly on phone browsers and added to the home screen. Store user-created tasks, future items, notes, and review text in `localStorage`; keep generated/demo activity data separate so it can later be replaced by a Windows desktop activity collector.

**Tech Stack:** Plain HTML, CSS, JavaScript, existing `manifest.json`, existing `sw.js`, browser `localStorage`.

---

### Task 1: Preserve The Original Backup

**Files:**
- Read: `index_family_backup.html`
- Create: `index_personal_pwa.html`

- [ ] **Step 1: Copy the backup into a new prototype file**

Run:

```powershell
Copy-Item -LiteralPath index_family_backup.html -Destination index_personal_pwa.html
```

Expected: `index_personal_pwa.html` exists and `index_family_backup.html` remains unchanged.

- [ ] **Step 2: Verify both files exist**

Run:

```powershell
Get-ChildItem index*.html | Select-Object Name,Length
```

Expected: output includes `index.html`, `index_family_backup.html`, and `index_personal_pwa.html`.

### Task 2: Replace The First Screen With A Mobile Personal Console

**Files:**
- Modify: `index_personal_pwa.html`

- [ ] **Step 1: Replace the visible app shell copy**

Change the title/brand from family portal language to:

```text
My Life OS
오늘의 나
```

Expected: the first viewport reads as a personal app, not a family app.

- [ ] **Step 2: Add the mobile-first sections**

The first screen should contain these sections in this order:

```text
오늘의 나
24시간 미니 타임라인
빠른 입력
지금 남은 것
다음 7일
오늘 한 일
미분류 활동
오늘의 기록
```

Expected: on a phone-width viewport, the sections stack vertically and are readable without horizontal scrolling.

### Task 3: Add Persistent Local Storage

**Files:**
- Modify: `index_personal_pwa.html`

- [ ] **Step 1: Define one localStorage key**

Use this key:

```javascript
const LIFE_OS_STORAGE_KEY = 'my-life-os:pwa-state:v1';
```

- [ ] **Step 2: Define the default state**

Use this shape:

```javascript
const defaultLifeState = {
  inbox: [],
  tasks: [
    { id: 'task-1', title: '개인앱 설계도 정리', done: false },
    { id: 'task-2', title: '24시간 타임라인 구조 잡기', done: false }
  ],
  upcoming: [
    { id: 'event-1', date: '다음 주', title: '첫 PWA 버전 폰에서 확인' }
  ],
  doneToday: [
    { id: 'done-1', title: '나를 위한 앱 방향 정리' },
    { id: 'done-2', title: 'UI 톤 결정' }
  ],
  review: '오늘의 나는 방향을 다시 내 쪽으로 가져왔다. 지금은 작게 시작해도 충분하다.'
};
```

- [ ] **Step 3: Save after every user action**

Every quick input, task toggle, task add, and review edit must call:

```javascript
saveLifeState(state);
```

Expected: refreshing the browser preserves added items and edited review text.

### Task 4: Build The 24-Hour Timeline Prototype

**Files:**
- Modify: `index_personal_pwa.html`

- [ ] **Step 1: Add demo activity blocks**

Use static demo blocks for the first version:

```javascript
const demoTimeline = [
  { start: 0, end: 7.5, label: '수면', category: 'sleep' },
  { start: 8.5, end: 10.25, label: 'Codex', category: 'deep' },
  { start: 10.25, end: 11, label: '설계 대화', category: 'create' },
  { start: 13.5, end: 15, label: '자료조사', category: 'learn' },
  { start: 20, end: 20.75, label: 'YouTube', category: 'drift' },
  { start: 22.5, end: 23, label: '하루 정리', category: 'review' }
];
```

- [ ] **Step 2: Render each block by percentage**

Calculate:

```javascript
const left = (block.start / 24) * 100;
const width = ((block.end - block.start) / 24) * 100;
```

Expected: the timeline visually spans 00 to 24 and blocks align proportionally.

### Task 5: PWA Metadata And Offline Shell

**Files:**
- Modify: `manifest.json`
- Modify: `sw.js`
- Modify: `index_personal_pwa.html`

- [ ] **Step 1: Update manifest app identity**

Use:

```json
{
  "name": "My Life OS",
  "short_name": "Life OS",
  "start_url": "./index_personal_pwa.html",
  "display": "standalone",
  "background_color": "#f6f4ef",
  "theme_color": "#f6f4ef"
}
```

Expected: adding to home screen opens the personal prototype.

- [ ] **Step 2: Ensure service worker caches the prototype file**

Add `./index_personal_pwa.html` to the cache list if `sw.js` uses a static file array.

Expected: after first load, the app shell can reopen offline.

### Task 6: Manual Verification

**Files:**
- Test: `index_personal_pwa.html`
- Test: `manifest.json`
- Test: `sw.js`

- [ ] **Step 1: Start a local static server**

Run:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Expected: server listens at `http://127.0.0.1:4173/`.

- [ ] **Step 2: Open the prototype**

Open:

```text
http://127.0.0.1:4173/index_personal_pwa.html
```

Expected: first screen is mobile-first, calm, and personal.

- [ ] **Step 3: Verify persistence**

Actions:

```text
1. Add a quick input.
2. Toggle a task.
3. Edit the review text.
4. Refresh the page.
```

Expected: all three changes remain after refresh.

- [ ] **Step 4: Verify mobile layout**

Use a phone-width viewport around `390x844`.

Expected: no horizontal scrolling, no overlapping text, and the 24-hour timeline remains readable.

### Self-Review

- Spec coverage: The plan covers mobile-first UI, PWA install behavior, persistent local storage, timeline visualization, and a later path for activity collection.
- Placeholder scan: No placeholder implementation steps remain.
- Type consistency: State names are consistent across tasks: `inbox`, `tasks`, `upcoming`, `doneToday`, and `review`.
