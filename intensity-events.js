export function setupIntensity(){
window.selectedIntensity='Medium';
document.querySelectorAll('.intensity-btn').forEach(btn=>btn.addEventListener('click',()=>{
document.querySelectorAll('.intensity-btn').forEach(b=>b.classList.remove('active'));
btn.classList.add('active');window.selectedIntensity=btn.dataset.intensity;
}));
}