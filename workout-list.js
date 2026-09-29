import { intensityNote } from '../utils/intensity.js';
export function renderWorkouts(plan,name){
const box=document.getElementById('weekOutput');
box.className='week-list';
box.innerHTML=`<div style="font-size:12px;color:#77746c;margin-bottom:5px;text-transform:uppercase">${name}'s ${window.selectedIntensity.toLowerCase()} intensity plan</div>`+
plan.map(d=>`<div class="day-row"><div class="day-name">${d[0]}</div><div><div class="workout-name">${d[1]}</div><div class="workout-detail">${d[2]} · ${intensityNote(window.selectedIntensity)}</div></div><div class="badge">${d[3]}</div></div>`).join('');
}