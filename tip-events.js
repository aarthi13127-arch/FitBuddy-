import { tips } from '../data/tips.js';
export function setupTip(){
document.getElementById('tipBtn').addEventListener('click',()=>{
const goal=document.getElementById('goal').value;
const box=document.getElementById('tipOutput');
box.textContent=tips[goal];box.style.display='block';
});
}