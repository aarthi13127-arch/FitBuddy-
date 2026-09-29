export function savePlan(data){localStorage.setItem('fitbuddyPlan',JSON.stringify(data))}
export function loadSaved(){
const data=JSON.parse(localStorage.getItem('fitbuddyPlan')||'null');
if(!data)return;
if(document.getElementById('name'))document.getElementById('name').value=data.name||'';
if(document.getElementById('age'))document.getElementById('age').value=data.age||'';
if(document.getElementById('weight'))document.getElementById('weight').value=data.weight||'';
if(document.getElementById('goal'))document.getElementById('goal').value=data.goal||'strength';
window.selectedIntensity=data.intensity||'Medium';
document.querySelectorAll('.intensity-btn').forEach(b=>b.classList.toggle('active',b.dataset.intensity===window.selectedIntensity));
}