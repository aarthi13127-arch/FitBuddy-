import { workouts } from '../data/workouts.js';
import { renderWorkouts } from '../ui/workout-list.js';
import { savePlan } from '../utils/storage.js';

export function setupForm(){
document.getElementById('planForm').addEventListener('submit',e=>{
e.preventDefault();
const data={
name:document.getElementById('name').value.trim()||'Athlete',
age:document.getElementById('age').value,
weight:document.getElementById('weight').value,
goal:document.getElementById('goal').value,
intensity:window.selectedIntensity
};
renderWorkouts(workouts[data.goal],data.name);savePlan(data);
});
}