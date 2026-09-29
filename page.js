export function createPage(){
return `
<main class="page">
<header class="topbar"><div class="brand">FITBUDDY</div><div class="tagline">AI TRAINING DESK</div></header>
<section class="hero"><p class="eyebrow">PERSONALISED PROGRAMMING</p>
<h1>YOUR WEEK, BUILT<br>AROUND YOUR GOAL</h1>
<p class="intro">Enter your details, get a day-by-day training week, then tell FitBuddy what to change and it rebuilds the plan around your feedback.</p></section>
<section class="dashboard">
${detailsCard()}${weekCard()}${recoveryCard()}
</section>
<footer>FitBuddy — train with a plan, not a guess</footer>
</main>`;
}
function detailsCard(){return `<div class="card details-card"><div class="section-number">01</div><div class="card-heading">YOUR DETAILS</div>
<form id="planForm">
<div class="field"><label>Name</label><input id="name" placeholder="Maya Reyes"></div>
<div class="two-columns"><div class="field"><label>Age</label><input id="age" type="number" placeholder="20"></div>
<div class="field"><label>Weight (kg)</label><input id="weight" type="number" placeholder="60"></div></div>
<div class="field"><label>Goal</label><select id="goal"><option value="strength">Build strength</option><option value="muscle">Build muscle</option><option value="fat-loss">Fat loss</option><option value="fitness">General fitness</option><option value="endurance">Improve endurance</option></select></div>
<div class="field"><label>Intensity</label><div class="intensity"><button type="button" class="intensity-btn" data-intensity="Low">Low</button><button type="button" class="intensity-btn active" data-intensity="Medium">Medium</button><button type="button" class="intensity-btn" data-intensity="High">High</button></div></div>
<button class="primary-btn" type="submit">GENERATE PLAN →</button></form></div>`}
function weekCard(){return `<div class="card week-card"><div class="section-number">02 / 7 DAYS</div><div class="card-heading">THE WEEK</div><div id="weekOutput" class="empty-state"><div class="empty-mark">＋</div><h2>NO PLAN YET</h2><p>Fill in your details and FitBuddy will lay out seven days of training here.</p></div></div>`}
function recoveryCard(){return `<div class="card"><div class="section-number">03</div><div class="card-heading">NUTRITION & RECOVERY</div><p class="recovery-text">Get a short, goal-specific tip on eating and recovering around your training.</p><button id="tipBtn" class="secondary-btn">GET A TIP →</button><div id="tipOutput" class="tip-output"></div></div>`}
