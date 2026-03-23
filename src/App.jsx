import { useState } from "react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body {
    font-family: 'DM Sans', sans-serif;
    background: #0f0e0c;
    color: #f0ebe0;
    min-height: 100vh;
  }

  .plan-root {
    max-width: 860px;
    margin: 0 auto;
    padding: 28px 20px 60px;
  }

  .hero {
    text-align: center;
    padding: 36px 0 28px;
    border-bottom: 1px solid #2a2620;
    margin-bottom: 28px;
  }

  .hero-eyebrow {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #c9a84c;
    margin-bottom: 12px;
  }

  .hero-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(32px, 6vw, 52px);
    line-height: 1.1;
    color: #f7f1e3;
    margin-bottom: 10px;
  }

  .hero-title em {
    font-style: italic;
    color: #c9a84c;
  }

  .hero-sub {
    font-size: 14px;
    color: #9a9080;
    margin-top: 8px;
    font-weight: 300;
  }

  .milestones {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 20px;
    flex-wrap: wrap;
  }

  .milestone-pill {
    background: #1c1a16;
    border: 1px solid #2e2a22;
    border-radius: 999px;
    padding: 6px 16px;
    font-size: 12px;
    color: #c9a84c;
    font-weight: 500;
  }

  .milestone-pill span {
    color: #9a9080;
    margin-right: 6px;
  }

  /* TABS */
  .tabs {
    display: flex;
    gap: 4px;
    overflow-x: auto;
    padding-bottom: 2px;
    margin-bottom: 28px;
    border-bottom: 1px solid #2a2620;
    scrollbar-width: none;
  }

  .tabs::-webkit-scrollbar { display: none; }

  .tab-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px 18px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #6a6050;
    border-radius: 6px 6px 0 0;
    white-space: nowrap;
    transition: all 0.2s;
    position: relative;
    bottom: -1px;
  }

  .tab-btn:hover { color: #c9a84c; background: #1a1810; }

  .tab-btn.active {
    color: #c9a84c;
    border-bottom: 2px solid #c9a84c;
    background: #1a1810;
  }

  /* SECTION */
  .section-title {
    font-family: 'DM Serif Display', serif;
    font-size: 26px;
    color: #f7f1e3;
    margin-bottom: 6px;
  }

  .section-desc {
    font-size: 13px;
    color: #7a7060;
    margin-bottom: 24px;
    line-height: 1.6;
  }

  /* CARDS */
  .card {
    background: #1a1810;
    border: 1px solid #2a2620;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 16px;
  }

  .card-title {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #c9a84c;
    margin-bottom: 12px;
  }

  .card-sub {
    font-size: 12px;
    color: #7a7060;
    margin-bottom: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 12px;
  }

  /* PHASE BANNER */
  .phase-banner {
    background: linear-gradient(135deg, #1e1c14 0%, #241f14 100%);
    border: 1px solid #3a3020;
    border-left: 3px solid #c9a84c;
    border-radius: 10px;
    padding: 16px 20px;
    margin-bottom: 16px;
  }

  .phase-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #c9a84c;
    margin-bottom: 4px;
  }

  .phase-name {
    font-family: 'DM Serif Display', serif;
    font-size: 18px;
    color: #f7f1e3;
    margin-bottom: 4px;
  }

  .phase-desc {
    font-size: 12px;
    color: #7a7060;
    line-height: 1.5;
  }

  /* WORKOUT DAY */
  .workout-day {
    background: #1a1810;
    border: 1px solid #2a2620;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 12px;
  }

  .workout-day-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 18px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .workout-day-header:hover { background: #201e15; }

  .day-badge {
    background: #c9a84c;
    color: #0f0e0c;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 3px 8px;
  }

  .day-name {
    font-size: 14px;
    font-weight: 600;
    color: #f0ebe0;
    margin-left: 10px;
  }

  .day-focus {
    font-size: 11px;
    color: #7a7060;
    margin-left: 8px;
  }

  .day-left { display: flex; align-items: center; }

  .chevron {
    color: #7a7060;
    font-size: 12px;
    transition: transform 0.2s;
  }
  .chevron.open { transform: rotate(180deg); }

  .workout-exercises {
    padding: 0 18px 14px;
    border-top: 1px solid #252215;
  }

  .exercise-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #1f1e14;
    font-size: 13px;
  }

  .exercise-row:last-child { border-bottom: none; }
  
  .ex-name { color: #d4cdb8; }
  .ex-sets { color: #c9a84c; font-weight: 600; font-size: 12px; }

  /* NUTRITION */
  .macro-bar {
    background: #1a1810;
    border: 1px solid #2a2620;
    border-radius: 10px;
    padding: 16px 20px;
    margin-bottom: 12px;
  }

  .macro-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
  }

  .macro-row:last-child { margin-bottom: 0; }

  .macro-label {
    width: 80px;
    font-size: 12px;
    color: #9a9080;
    font-weight: 500;
  }

  .macro-track {
    flex: 1;
    height: 6px;
    background: #252215;
    border-radius: 3px;
    overflow: hidden;
  }

  .macro-fill {
    height: 100%;
    border-radius: 3px;
  }

  .macro-val {
    width: 60px;
    text-align: right;
    font-size: 12px;
    color: #c9a84c;
    font-weight: 600;
  }

  /* MEAL CARD */
  .meal-block {
    display: grid;
    grid-template-columns: 36px 1fr;
    gap: 12px;
    padding: 14px 0;
    border-bottom: 1px solid #221f15;
  }

  .meal-block:last-child { border-bottom: none; }

  .meal-time-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3px;
  }

  .meal-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #c9a84c;
    flex-shrink: 0;
  }

  .meal-line {
    width: 1px;
    flex: 1;
    background: #2a2620;
    margin-top: 6px;
  }

  .meal-time-label {
    font-size: 11px;
    color: #c9a84c;
    font-weight: 600;
    margin-bottom: 2px;
  }

  .meal-name {
    font-size: 14px;
    font-weight: 600;
    color: #f0ebe0;
    margin-bottom: 4px;
  }

  .meal-items {
    font-size: 12px;
    color: #7a7060;
    line-height: 1.7;
  }

  /* SWAP TABLE */
  .swap-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid #221f15;
    font-size: 13px;
  }

  .swap-row:last-child { border-bottom: none; }
  .swap-old { color: #7a7060; flex: 1; text-decoration: line-through; }
  .swap-arrow { color: #c9a84c; font-size: 16px; }
  .swap-new { color: #d4cdb8; flex: 1; }

  /* SKIN */
  .routine-step {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: 10px 0;
    border-bottom: 1px solid #221f15;
  }

  .routine-step:last-child { border-bottom: none; }

  .step-num {
    width: 24px;
    height: 24px;
    background: #c9a84c;
    color: #0f0e0c;
    font-size: 11px;
    font-weight: 700;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .step-name {
    font-size: 13px;
    font-weight: 600;
    color: #f0ebe0;
    margin-bottom: 2px;
  }

  .step-note {
    font-size: 12px;
    color: #7a7060;
    line-height: 1.5;
  }

  /* SCHEDULE */
  .schedule-day {
    background: #1a1810;
    border: 1px solid #2a2620;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 12px;
  }

  .schedule-day-header {
    padding: 12px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1e1c13;
    cursor: pointer;
  }

  .schedule-day-name {
    font-family: 'DM Serif Display', serif;
    font-size: 18px;
    color: #f7f1e3;
  }

  .schedule-tag {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 999px;
  }

  .tag-workout { background: #2a2010; color: #c9a84c; border: 1px solid #3a3020; }
  .tag-rest { background: #102015; color: #4aaa70; border: 1px solid #1a3025; }
  .tag-gf { background: #201018; color: #d47090; border: 1px solid #3a2030; }
  .tag-prep { background: #101520; color: #5090c9; border: 1px solid #203040; }

  .schedule-blocks {
    padding: 12px 18px;
  }

  .time-block {
    display: flex;
    gap: 14px;
    padding: 7px 0;
    font-size: 13px;
    border-bottom: 1px solid #1f1e14;
  }

  .time-block:last-child { border-bottom: none; }

  .tb-time {
    width: 70px;
    color: #c9a84c;
    font-size: 11px;
    font-weight: 600;
    flex-shrink: 0;
    padding-top: 1px;
  }

  .tb-task { color: #d4cdb8; line-height: 1.5; }
  .tb-note { font-size: 11px; color: #6a6050; margin-top: 1px; }

  /* BALANCE */
  .balance-card {
    background: #1a1810;
    border: 1px solid #2a2620;
    border-radius: 12px;
    padding: 18px 20px;
    margin-bottom: 12px;
  }

  .balance-title {
    font-family: 'DM Serif Display', serif;
    font-size: 18px;
    color: #f7f1e3;
    margin-bottom: 14px;
  }

  .rule-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    padding: 9px 0;
    border-bottom: 1px solid #221f15;
    font-size: 13px;
  }

  .rule-item:last-child { border-bottom: none; }

  .rule-icon {
    font-size: 16px;
    width: 24px;
    flex-shrink: 0;
    text-align: center;
    margin-top: 1px;
  }

  .rule-text { color: #d4cdb8; line-height: 1.5; }

  .rule-text strong {
    color: #f7f1e3;
    font-weight: 600;
  }

  .supps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
  }

  .supp-item {
    background: #141210;
    border: 1px solid #2a2620;
    border-radius: 8px;
    padding: 12px 14px;
  }

  .supp-name {
    font-size: 13px;
    font-weight: 600;
    color: #f0ebe0;
    margin-bottom: 3px;
  }

  .supp-why {
    font-size: 11px;
    color: #7a7060;
    line-height: 1.4;
  }

  .tip-box {
    background: #1e1c10;
    border: 1px solid #3a3020;
    border-radius: 10px;
    padding: 14px 18px;
    margin-bottom: 14px;
    font-size: 13px;
    color: #c4bc9a;
    line-height: 1.6;
  }

  .tip-box strong { color: #c9a84c; }

  .overview-stat {
    text-align: center;
    padding: 16px;
    background: #1a1810;
    border: 1px solid #2a2620;
    border-radius: 10px;
  }

  .stat-val {
    font-family: 'DM Serif Display', serif;
    font-size: 28px;
    color: #c9a84c;
    line-height: 1;
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 11px;
    color: #7a7060;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .progress-item {
    padding: 10px 0;
    border-bottom: 1px solid #221f15;
  }

  .progress-item:last-child { border-bottom: none; }

  .progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
    font-size: 12px;
  }

  .progress-name { color: #d4cdb8; font-weight: 500; }
  .progress-target { color: #c9a84c; }

  .progress-bar {
    height: 4px;
    background: #252215;
    border-radius: 2px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    border-radius: 2px;
    background: linear-gradient(90deg, #c9a84c, #e8c86a);
  }
`;

const workoutDays = [
  {
    day: "Day 1",
    name: "Push Day",
    focus: "Shoulders + Chest",
    exercises: [
      { name: "Dumbbell Shoulder Press", sets: "3 × 12" },
      { name: "Dumbbell Lateral Raises", sets: "3 × 15" },
      { name: "Band Pull-Apart", sets: "3 × 15" },
      { name: "Wide Push-Ups", sets: "3 × 15" },
      { name: "Dumbbell Floor Press", sets: "3 × 12" },
      { name: "Dumbbell Front Raises", sets: "3 × 12" },
      { name: "Plank Hold", sets: "3 × 40 sec" },
    ],
  },
  {
    day: "Day 2",
    name: "Cardio + Core",
    focus: "Fat Burn + Endurance",
    exercises: [
      { name: "Brisk Walk / Light Jog (outdoors)", sets: "25–30 min" },
      { name: "Bicycle Crunches", sets: "3 × 20" },
      { name: "Leg Raises", sets: "3 × 15" },
      { name: "Russian Twists", sets: "3 × 20" },
      { name: "Mountain Climbers", sets: "3 × 20" },
      { name: "Plank", sets: "3 × 45 sec" },
    ],
  },
  {
    day: "Day 3",
    name: "Pull Day",
    focus: "Back + Biceps + Neck",
    exercises: [
      { name: "Dumbbell Bent-Over Row", sets: "3 × 12" },
      { name: "Single-Arm Dumbbell Row", sets: "3 × 12 each" },
      { name: "Band Lat Pulldown", sets: "3 × 15" },
      { name: "Dumbbell Rear Delt Fly", sets: "3 × 15" },
      { name: "Dumbbell Bicep Curl", sets: "3 × 12" },
      { name: "Dumbbell Hammer Curl", sets: "3 × 12" },
      { name: "Band Face Pull", sets: "3 × 15" },
      { name: "Isometric Neck Resistance", sets: "3 × 10 each side" },
    ],
  },
  {
    day: "Day 4",
    name: "Full Body + Core",
    focus: "Functional Strength",
    exercises: [
      { name: "Dumbbell Goblet Squat", sets: "3 × 15" },
      { name: "Romanian Deadlift (DB)", sets: "3 × 12" },
      { name: "Dumbbell Shoulder Press", sets: "3 × 12" },
      { name: "Push-Ups", sets: "3 × 15" },
      { name: "Dumbbell Row", sets: "3 × 12" },
      { name: "Burpees (modified)", sets: "3 × 10" },
      { name: "Plank + Leg Raise Superset", sets: "3 rounds" },
    ],
  },
];

const meals = [
  {
    time: "10:30 AM",
    name: "Breakfast / Post-Workout",
    items: "2 whole eggs + 2 egg whites · ½ cup oatmeal or brown rice · 1 banana · Black coffee or green tea (no sugar)",
  },
  {
    time: "1:30 PM",
    name: "Pre-Work Fuel",
    items: "1 serving chicken breast or tuna · ½ cup brown rice or sweet potato · Mixed vegetables · 500ml water",
  },
  {
    time: "6:30 PM",
    name: "Mid-Shift Meal",
    items: "Lean protein (chicken/tuna/tofu) · Small carb portion · Fruit or salad · No soda — sparkling water or calamansi",
  },
  {
    time: "12–1 AM",
    name: "Post-Work Light Snack",
    items: "Greek yogurt OR 2 hard-boiled eggs · No heavy carbs after midnight · Sleep within 1 hour",
  },
];

const swaps = [
  { old: "White rice (big serving)", next: "Brown rice (½ cup max)" },
  { old: "Soda / sugary drinks", next: "Sparkling water, calamansi, green tea" },
  { old: "Fast food / processed food", next: "Prepped chicken, tuna, eggs" },
  { old: "Midnight heavy meals", next: "Light protein snack only" },
  { old: "Skip breakfast", next: "Eat within 1hr of waking up" },
];

const morningRoutine = [
  { name: "Gentle Cleanser", note: "Non-foaming, for dry/sensitive skin. Try Cetaphil or CeraVe Hydrating Cleanser." },
  { name: "Hydrating Toner", note: "Alcohol-free. Pyunkang Yul or cosRx AHA/BHA Clarifying are good picks." },
  { name: "Vitamin C Serum", note: "Start every other day. Brightens skin tone, helps with glow over time." },
  { name: "Eye Cream", note: "Caffeine-based for dark circles. The Ordinary Caffeine Solution 5% works well." },
  { name: "Light Moisturizer", note: "Non-comedogenic. Don't skip even if skin feels okay — dry skin needs this." },
  { name: "SPF 30–50", note: "Even indoors! Blue light from screens causes dark spots. Non-negotiable." },
];

const nightRoutine = [
  { name: "Oil Cleanser (if worn SPF)", note: "Dissolves sunscreen and grime. Skip if you didn't use SPF that day." },
  { name: "Gentle Cleanser", note: "Second cleanse. Gentle and clean, don't over-wash." },
  { name: "Hydrating Toner", note: "Same as morning. Rebalance after cleansing." },
  { name: "Niacinamide Serum", note: "Reduces pimples, evens skin tone, controls oil. Use nightly." },
  { name: "Retinol (2x/week only)", note: "Start slow — twice a week only for first 4 weeks. Texture + acne fixer." },
  { name: "Rich Moisturizer", note: "Heavier than daytime. Lock in overnight hydration for dry skin." },
  { name: "Eye Cream", note: "Pat gently around eyes. Consistent use over weeks = visible difference." },
];

const scheduleData = [
  {
    day: "Monday",
    tag: "workout", tagLabel: "Workout",
    blocks: [
      { time: "9:30 AM", task: "Wake up + Hydrate", note: "500ml water immediately. No phone for first 5 min." },
      { time: "10:00 AM", task: "PUSH Workout (Shoulders + Chest)", note: "45–60 min. Dumbbells + bands at home." },
      { time: "11:00 AM", task: "Shower + Morning Skincare Routine", note: "" },
      { time: "11:30 AM", task: "Breakfast + Hobby Block", note: "Pixel art, World of Wiz dev, or gaming — guilt-free." },
      { time: "1:30 PM", task: "Pre-work meal + prep", note: "" },
      { time: "2:00 PM", task: "Work", note: "2PM–12AM shift." },
      { time: "12:00 AM", task: "Post-work night skincare", note: "Even if tired — 5 min minimum." },
      { time: "12:30 AM", task: "Wind down", note: "No intense gaming. Relax, stretch, light reading." },
      { time: "1:30 AM", task: "Sleep", note: "" },
    ],
  },
  {
    day: "Tuesday",
    tag: "workout", tagLabel: "Workout",
    blocks: [
      { time: "9:30 AM", task: "Wake up + Hydrate", note: "" },
      { time: "10:00 AM", task: "Cardio + Core Workout", note: "25-min brisk walk/jog outdoors + core circuit." },
      { time: "11:00 AM", task: "Shower + Skincare", note: "" },
      { time: "11:30 AM", task: "Breakfast + Hobby Block", note: "Good day for focused game dev work." },
      { time: "1:30 PM", task: "Pre-work meal", note: "" },
      { time: "2:00 PM", task: "Work", note: "" },
      { time: "12:00 AM", task: "Night skincare + Sleep prep", note: "" },
      { time: "1:30 AM", task: "Sleep", note: "" },
    ],
  },
  {
    day: "Wednesday",
    tag: "rest", tagLabel: "Rest Day",
    blocks: [
      { time: "10:00 AM", task: "Wake up (slightly later ok)", note: "Body needs recovery." },
      { time: "10:30 AM", task: "Light stretching / casual walk", note: "15–20 min only. Not a full workout." },
      { time: "11:00 AM", task: "Skincare + Breakfast", note: "" },
      { time: "11:30 AM", task: "Extended Hobby Time", note: "Best day for longer game dev sessions or gaming." },
      { time: "1:00 PM", task: "Meal prep if possible", note: "Cook chicken/boil eggs for the next 2 days." },
      { time: "2:00 PM", task: "Work", note: "" },
      { time: "12:00 AM", task: "Night skincare + Sleep", note: "" },
    ],
  },
  {
    day: "Thursday",
    tag: "workout", tagLabel: "Workout",
    blocks: [
      { time: "9:30 AM", task: "Wake up + Hydrate", note: "" },
      { time: "10:00 AM", task: "PULL Workout (Back + Biceps + Neck)", note: "45–60 min. This builds the broad shoulder + back look." },
      { time: "11:00 AM", task: "Shower + Skincare", note: "" },
      { time: "11:30 AM", task: "Breakfast + Hobby", note: "" },
      { time: "1:30 PM", task: "Pre-work meal", note: "" },
      { time: "2:00 PM", task: "Work", note: "" },
      { time: "12:00 AM", task: "Night skincare + Sleep", note: "" },
    ],
  },
  {
    day: "Friday",
    tag: "workout", tagLabel: "Workout",
    blocks: [
      { time: "9:30 AM", task: "Wake up + Hydrate", note: "" },
      { time: "10:00 AM", task: "Full Body + Core Workout", note: "End the week strong. Focus on core — this is your tummy goal." },
      { time: "11:00 AM", task: "Shower + Skincare", note: "Take extra time Friday — glow up for the weekend." },
      { time: "11:30 AM", task: "Breakfast + Hobby", note: "Reward yourself — you finished 4 workouts this week." },
      { time: "1:30 PM", task: "Pre-work meal", note: "" },
      { time: "2:00 PM", task: "Work", note: "" },
      { time: "12:00 AM", task: "Night skincare", note: "Retinol night — apply twice this week." },
    ],
  },
  {
    day: "Saturday",
    tag: "gf", tagLabel: "GF Day",
    blocks: [
      { time: "9:30 AM", task: "Wake up + Skincare + Groom", note: "Look good, feel good. This matters." },
      { time: "10:00 AM", task: "Girlfriend time starts", note: "Walk together = bonus activity. Make healthy food choices when eating out." },
      { time: "6:00 PM", task: "Smart dinner choice", note: "Avoid deep-fried, excessive rice. Grilled/steamed options." },
      { time: "9:00 PM", task: "GF time ends", note: "" },
      { time: "9:30 PM", task: "Wind down", note: "Hobby time or just rest." },
      { time: "1:30 AM", task: "Sleep", note: "Don't sleep too late after date day." },
    ],
  },
  {
    day: "Sunday",
    tag: "prep", tagLabel: "Rest + Prep",
    blocks: [
      { time: "10:00 AM", task: "Wake up + Hydrate + Skincare", note: "" },
      { time: "10:30 AM", task: "Meal prep for the week", note: "Cook chicken, boil eggs, portion brown rice. 1 hour saves 5 days." },
      { time: "12:00 PM", task: "Personal Hobby Day", note: "Longest block of the week for World of Wiz or gaming." },
      { time: "1:30 PM", task: "Lunch + Rest", note: "" },
      { time: "2:00 PM", task: "Work", note: "" },
      { time: "12:00 AM", task: "Night skincare + Sleep", note: "" },
    ],
  },
];

const supplements = [
  { name: "Vitamin C", why: "1000mg daily — skin glow, immunity" },
  { name: "Vitamin D3", why: "2000 IU — you work indoors at night" },
  { name: "Zinc", why: "Reduces pimples + skin repair" },
  { name: "Omega-3", why: "Dry skin barrier + brain health" },
  { name: "Collagen Peptides", why: "Skin elasticity + glow" },
  { name: "Whey Protein", why: "Hit protein target easily" },
];

const rules = [
  { icon: "💧", text: "<strong>Drink 2.5–3L water daily.</strong> This alone will reduce face fat, improve skin, reduce hunger, and boost energy. Water before each meal = eat less." },
  { icon: "🚫", text: "<strong>Zero soda for 30 days.</strong> This is your single biggest fat loss lever. Cut sugar drinks, watch the belly and face fat drop faster than anything else." },
  { icon: "📸", text: "<strong>Take a progress photo every 2 weeks.</strong> Same lighting, same pose. Motivation is visual — you'll see changes you don't feel yet." },
  { icon: "🌙", text: "<strong>Consistent sleep time matters more than hours.</strong> Sleep by 1:30AM, wake by 9:30AM every day. Even weekends. Your body needs the rhythm." },
  { icon: "🍱", text: "<strong>Meal prep Sunday = survival.</strong> When you're tired after work, you'll eat fast food unless food is already ready. Prep or you'll fail." },
  { icon: "💑", text: "<strong>GF days are not cheat days.</strong> Make smart choices — grilled over fried, skip the soda, walk when you can. She'll probably join the healthy habits." },
  { icon: "🎮", text: "<strong>Hobby time is non-negotiable — but scheduled.</strong> Block 11:30AM–1:30PM daily for hobbies guilt-free. Outside that block, discipline rules." },
  { icon: "🧴", text: "<strong>Never skip skincare, even if it's 1AM.</strong> 5 minutes minimum. Cleanser + moisturizer. The results are cumulative — consistency is everything." },
  { icon: "⚖️", text: "<strong>You don't need to be perfect.</strong> Missing one workout isn't failure. Eating fast food once isn't failure. Failing to restart after that IS." },
  { icon: "📅", text: "<strong>Wedding is November — that's 8 months.</strong> Photoshoot in May/June is 10 weeks away. The photo shoot is your first real goal. Keep it in sight." },
];

export default function HealthPlan() {
  const [activeTab, setActiveTab] = useState("overview");
  const [openWorkout, setOpenWorkout] = useState(null);
  const [openSchedule, setOpenSchedule] = useState(null);

  const tabs = [
    { id: "overview", label: "🗺 Overview" },
    { id: "workout", label: "💪 Workout" },
    { id: "nutrition", label: "🥗 Nutrition" },
    { id: "skin", label: "✨ Skin & Glow" },
    { id: "schedule", label: "📅 Schedule" },
    { id: "balance", label: "⚖️ Balance" },
  ];

  return (
    <>
      <style>{style}</style>
      <div className="plan-root">
        <div className="hero">
          <div className="hero-eyebrow">Your Personal Health Blueprint</div>
          <h1 className="hero-title">The <em>Glow Up</em> Plan</h1>
          <p className="hero-sub">Built for your schedule · your body · your goals · your life</p>
          <div className="milestones">
            <div className="milestone-pill"><span>🎯</span>Photoshoot — May / June 2026</div>
            <div className="milestone-pill"><span>💍</span>Wedding — November 2026</div>
            <div className="milestone-pill"><span>⏱</span>Starting Now</div>
          </div>
        </div>

        <div className="tabs">
          {tabs.map(t => (
            <button
              key={t.id}
              className={`tab-btn ${activeTab === t.id ? "active" : ""}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div>
            <p className="section-title">Your Roadmap</p>
            <p className="section-desc">Here's a big-picture summary of your two-phase journey — photoshoot prep first, then wedding build.</p>

            <div className="grid-2" style={{marginBottom: 20}}>
              <div className="overview-stat"><div className="stat-val">~10</div><div className="stat-label">Weeks to Photoshoot</div></div>
              <div className="overview-stat"><div className="stat-val">~8</div><div className="stat-label">Months to Wedding</div></div>
              <div className="overview-stat"><div className="stat-val">4×</div><div className="stat-label">Workouts per Week</div></div>
              <div className="overview-stat"><div className="stat-val">~65kg</div><div className="stat-label">Target Weight Range</div></div>
            </div>

            <div className="phase-banner">
              <div className="phase-label">Phase 1 · March – May/June 2026</div>
              <div className="phase-name">Photoshoot Prep — The Lean Phase</div>
              <div className="phase-desc">Priority: Lose belly fat, tighten core, define shoulders, improve skin glow. Strict calorie deficit (~1,800 kcal), 4 workouts/week, aggressive skincare and hydration. This is where the biggest visual change happens.</div>
            </div>

            <div className="phase-banner">
              <div className="phase-label">Phase 2 · June – November 2026</div>
              <div className="phase-name">Wedding Build — The Shape Phase</div>
              <div className="phase-desc">Priority: Maintain fat loss, add light muscle to shoulders, chest, and back. Slight calorie increase (~2,000 kcal). Sustain skin routine. By November, you'll look structured, healthy, and confident — not bulky.</div>
            </div>

            <div className="card">
              <div className="card-title">Your 5 Main Goals</div>
              <div style={{display:"grid", gap:8}}>
                {[
                  ["🫃", "Flat belly + light abs", "Achieved through calorie deficit + core training"],
                  ["🦷", "Broader shoulders + defined neck", "Pull day + push day + neck resistance work"],
                  ["🏃", "Cardio endurance (stairs, walking)", "Tuesday cardio sessions + daily walking"],
                  ["🌟", "Glowing, clearer skin", "Hydration + consistent skincare routine"],
                  ["😮‍💨", "Reduce face fat + double chin", "Water, less salt, overall fat loss + face massage"],
                ].map(([icon, goal, how], i) => (
                  <div key={i} style={{display:"flex", gap:12, padding:"9px 0", borderBottom: i<4?"1px solid #221f15":"none", fontSize:13}}>
                    <span style={{fontSize:18}}>{icon}</span>
                    <div>
                      <div style={{color:"#f0ebe0", fontWeight:600}}>{goal}</div>
                      <div style={{color:"#7a7060", fontSize:12, marginTop:2}}>{how}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="card-title">Phase 1 Weekly Targets</div>
              {[
                { name: "Workouts completed", target: "4 / 4", pct: 100 },
                { name: "Water intake", target: "2.5L daily", pct: 83 },
                { name: "Soda-free days", target: "7 / 7", pct: 100 },
                { name: "Skincare routine", target: "AM + PM", pct: 95 },
                { name: "Sleep before 2AM", target: "5+ days", pct: 71 },
              ].map((item, i) => (
                <div key={i} className="progress-item">
                  <div className="progress-header">
                    <span className="progress-name">{item.name}</span>
                    <span className="progress-target">{item.target}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WORKOUT */}
        {activeTab === "workout" && (
          <div>
            <p className="section-title">Workout Plan</p>
            <p className="section-desc">4 days/week using your dumbbells, bands, and outdoors. Designed for your goals: no bulk, just a clean shape — flat core, defined shoulders, wider back.</p>

            <div className="tip-box">
              <strong>When to work out:</strong> You work 2PM–12AM, so aim for <strong>10:00–11:00 AM</strong> workouts, before work starts. Do it first — before distractions hit. Even 45 minutes is enough.
            </div>

            <div className="card" style={{marginBottom:16}}>
              <div className="card-title">Weekly Split</div>
              {[
                ["Mon", "Day 1 — Push", "Shoulders + Chest"],
                ["Tue", "Day 2 — Cardio + Core", "Fat Burn + Endurance"],
                ["Wed", "Rest", "Light walk or stretch only"],
                ["Thu", "Day 3 — Pull", "Back + Biceps + Neck"],
                ["Fri", "Day 4 — Full Body", "Functional Strength + Core"],
                ["Sat", "GF Day", "Walk together counts!"],
                ["Sun", "Rest + Prep", "Meal prep + hobbies"],
              ].map(([d, name, focus], i) => (
                <div key={i} style={{display:"flex", gap:10, alignItems:"center", padding:"8px 0", borderBottom:i<6?"1px solid #221f15":"none", fontSize:13}}>
                  <span style={{width:34, color:"#c9a84c", fontWeight:700, fontSize:12, flexShrink:0}}>{d}</span>
                  <span style={{color:"#f0ebe0", fontWeight:600, flex:1}}>{name}</span>
                  <span style={{color:"#7a7060", fontSize:12}}>{focus}</span>
                </div>
              ))}
            </div>

            {workoutDays.map((day, i) => (
              <div key={i} className="workout-day">
                <div className="workout-day-header" onClick={() => setOpenWorkout(openWorkout === i ? null : i)}>
                  <div className="day-left">
                    <span className="day-badge">{day.day}</span>
                    <span className="day-name">{day.name}</span>
                    <span className="day-focus">— {day.focus}</span>
                  </div>
                  <span className={`chevron ${openWorkout === i ? "open" : ""}`}>▼</span>
                </div>
                {openWorkout === i && (
                  <div className="workout-exercises">
                    {day.exercises.map((ex, j) => (
                      <div key={j} className="exercise-row">
                        <span className="ex-name">{ex.name}</span>
                        <span className="ex-sets">{ex.sets}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="tip-box" style={{marginTop:16}}>
              <strong>Progressions:</strong> Week 1–4 focus on form. Week 5–8 increase reps or dumbbell weight. Week 9+ add complexity. Never skip warm-up (5 min arm circles, band pull-aparts, light jog in place).
            </div>
          </div>
        )}

        {/* NUTRITION */}
        {activeTab === "nutrition" && (
          <div>
            <p className="section-title">Nutrition Plan</p>
            <p className="section-desc">Built around your shift schedule. No extreme dieting — just smarter choices, better timing, and the right swaps.</p>

            <div className="macro-bar">
              <div className="card-title" style={{marginBottom:14}}>Daily Targets (Phase 1 — Fat Loss)</div>
              {[
                { label: "Calories", val: "~1,800 kcal", pct: 72, color: "#c9a84c" },
                { label: "Protein", val: "~130–140g", pct: 88, color: "#5090c9" },
                { label: "Carbs", val: "~150–170g", pct: 60, color: "#4aaa70" },
                { label: "Fats", val: "~55–65g", pct: 45, color: "#c97050" },
              ].map((m, i) => (
                <div key={i} className="macro-row">
                  <span className="macro-label">{m.label}</span>
                  <div className="macro-track">
                    <div className="macro-fill" style={{ width: `${m.pct}%`, background: m.color }} />
                  </div>
                  <span className="macro-val">{m.val}</span>
                </div>
              ))}
            </div>

            <div className="card">
              <div className="card-title">Meal Schedule</div>
              <div>
                {meals.map((meal, i) => (
                  <div key={i} className="meal-block">
                    <div className="meal-time-col">
                      <div className="meal-dot" />
                      {i < meals.length - 1 && <div className="meal-line" />}
                    </div>
                    <div>
                      <div className="meal-time-label">{meal.time}</div>
                      <div className="meal-name">{meal.name}</div>
                      <div className="meal-items">{meal.items}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="card-title">Key Food Swaps</div>
              {swaps.map((s, i) => (
                <div key={i} className="swap-row">
                  <span className="swap-old">{s.old}</span>
                  <span className="swap-arrow">→</span>
                  <span className="swap-new">{s.next}</span>
                </div>
              ))}
            </div>

            <div className="tip-box">
              <strong>Face fat tip:</strong> Reduce sodium/salt heavily. Salty food causes water retention — that's what makes your face look puffy in the morning. Cut soy sauce, instant noodles, chips. Your double chin will visibly reduce within weeks just from this.
            </div>

            <div className="card">
              <div className="card-title">Hydration Target</div>
              <div style={{fontSize:13, color:"#d4cdb8", lineHeight:1.7}}>
                <strong style={{color:"#c9a84c"}}>2.5–3 liters of water daily.</strong> Start your morning with 500ml immediately on waking. Drink 500ml before each meal. This reduces appetite, flushes fat, clears skin, and reduces face puffiness. Flavor with calamansi or cucumber if plain water is boring.
              </div>
            </div>
          </div>
        )}

        {/* SKIN */}
        {activeTab === "skin" && (
          <div>
            <p className="section-title">Skin & Glow Routine</p>
            <p className="section-desc">Built for dry/sensitive skin with pimples, deep eye bags, and face fat. Consistent routine over time — not a one-time fix.</p>

            <div className="tip-box">
              <strong>Reality check:</strong> Your skin reflects your lifestyle. The biggest levers are — water intake, sleep consistency, sugar reduction, and not touching your face. The products accelerate it, but habits drive the results.
            </div>

            <div className="card">
              <div className="card-title">☀️ Morning Routine (~1:30 PM before work)</div>
              {morningRoutine.map((step, i) => (
                <div key={i} className="routine-step">
                  <div className="step-num">{i + 1}</div>
                  <div>
                    <div className="step-name">{step.name}</div>
                    <div className="step-note">{step.note}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card">
              <div className="card-title">🌙 Night Routine (~12–1 AM after work)</div>
              {nightRoutine.map((step, i) => (
                <div key={i} className="routine-step">
                  <div className="step-num">{i + 1}</div>
                  <div>
                    <div className="step-name">{step.name}</div>
                    <div className="step-note">{step.note}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid-2">
              <div className="card" style={{marginBottom:0}}>
                <div className="card-title">😤 Reduce Face Fat</div>
                <div style={{fontSize:13, color:"#d4cdb8", lineHeight:1.8}}>
                  • Overall calorie deficit (main driver)<br/>
                  • Cut salt drastically (water retention)<br/>
                  • Gua sha facial massage daily (5–10 min upward strokes)<br/>
                  • Lymphatic drainage under jaw<br/>
                  • Chew sugar-free gum (jaw definition)<br/>
                  • Stay hydrated — paradoxically, more water = less facial puffiness
                </div>
              </div>
              <div className="card" style={{marginBottom:0}}>
                <div className="card-title">👁 Dark Eye Circles</div>
                <div style={{fontSize:13, color:"#d4cdb8", lineHeight:1.8}}>
                  • Consistent sleep schedule (biggest factor)<br/>
                  • Caffeine eye cream twice daily<br/>
                  • Cold spoon or cold water splash in morning<br/>
                  • Stay hydrated<br/>
                  • Vitamin K in diet (green veggies)<br/>
                  • Accept: your shift makes this hard — consistency softens it over months
                </div>
              </div>
            </div>

            <div className="card" style={{marginTop:12}}>
              <div className="card-title">💊 Recommended Supplements</div>
              <div className="supps-grid">
                {supplements.map((s, i) => (
                  <div key={i} className="supp-item">
                    <div className="supp-name">{s.name}</div>
                    <div className="supp-why">{s.why}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCHEDULE */}
        {activeTab === "schedule" && (
          <div>
            <p className="section-title">Weekly Schedule</p>
            <p className="section-desc">A realistic week built around your 2PM–12AM work shift. Click each day to expand the time blocks.</p>

            {scheduleData.map((day, i) => (
              <div key={i} className="schedule-day">
                <div className="schedule-day-header" onClick={() => setOpenSchedule(openSchedule === i ? null : i)}>
                  <span className="schedule-day-name">{day.day}</span>
                  <div style={{display:"flex", gap:8, alignItems:"center"}}>
                    <span className={`schedule-tag tag-${day.tag}`}>{day.tagLabel}</span>
                    <span className={`chevron ${openSchedule === i ? "open" : ""}`} style={{color:"#7a7060"}}>▼</span>
                  </div>
                </div>
                {openSchedule === i && (
                  <div className="schedule-blocks">
                    {day.blocks.map((b, j) => (
                      <div key={j} className="time-block">
                        <span className="tb-time">{b.time}</span>
                        <div>
                          <div className="tb-task">{b.task}</div>
                          {b.note && <div className="tb-note">{b.note}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* BALANCE */}
        {activeTab === "balance" && (
          <div>
            <p className="section-title">Life Balance Framework</p>
            <p className="section-desc">Your goals are physical, mental, creative, and relational. This isn't just a gym plan — it's a blueprint for how to live well across all of it.</p>

            <div className="card">
              <div className="card-title">Weekly Time Allocation</div>
              {[
                ["Work", "~50 hrs", "#c97050"],
                ["Sleep", "~56 hrs", "#5090c9"],
                ["Workout", "~4 hrs", "#c9a84c"],
                ["GF Time", "~11 hrs", "#d47090"],
                ["Hobby (Dev + Pixel Art)", "~8–10 hrs", "#4aaa70"],
                ["Gaming", "~5–7 hrs", "#9070c9"],
                ["Self-care + Meals", "~10 hrs", "#7abcb0"],
              ].map(([label, val, color], i, arr) => (
                <div key={i} style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"9px 0", borderBottom:i<arr.length-1?"1px solid #221f15":"none", fontSize:13}}>
                  <div style={{display:"flex", alignItems:"center", gap:8}}>
                    <div style={{width:8, height:8, borderRadius:"50%", background:color, flexShrink:0}} />
                    <span style={{color:"#d4cdb8"}}>{label}</span>
                  </div>
                  <span style={{color, fontWeight:600, fontSize:12}}>{val}</span>
                </div>
              ))}
            </div>

            <div className="balance-card">
              <div className="balance-title">The 10 Rules of Discipline</div>
              {rules.map((rule, i) => (
                <div key={i} className="rule-item">
                  <span className="rule-icon">{rule.icon}</span>
                  <span className="rule-text" dangerouslySetInnerHTML={{ __html: rule.text }} />
                </div>
              ))}
            </div>

            <div className="card">
              <div className="card-title">Hobby Strategy (World of Wiz + Pixel Art + Gaming)</div>
              <div style={{fontSize:13, color:"#d4cdb8", lineHeight:1.8}}>
                <strong style={{color:"#c9a84c"}}>Daily creative block:</strong> 11:30 AM – 1:30 PM. This is sacred time — after workout, after shower, before work. Use it for game dev or pixel art.<br/><br/>
                <strong style={{color:"#c9a84c"}}>Gaming:</strong> Reserved for after work wind-down (12–1 AM) on light nights, and Wednesday/Sunday during extended hobby blocks. Keep it relaxing — not a grind session late at night.<br/><br/>
                <strong style={{color:"#c9a84c"}}>Pomodoro method for dev:</strong> 25 min focused work → 5 min break. Repeat 4x. You'll make more real progress in 2 hours of Pomodoro than 4 unfocused hours.
              </div>
            </div>

            <div className="tip-box">
              <strong>The bigger picture:</strong> You have a wedding, a photoshoot, a game you're building, a relationship to nurture, and a career happening all at once. That's a lot. The goal isn't perfection — it's building habits that stack quietly in the background while you live your life. Small wins every day over November. That's the whole plan.
            </div>
          </div>
        )}
      </div>
    </>
  );
}