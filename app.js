import { createPage } from './ui/page.js';
import { setupForm } from './events/form-events.js';
import { setupIntensity } from './events/intensity-events.js';
import { setupTip } from './events/tip-events.js';
import { loadSaved } from './utils/storage.js';

document.getElementById('app').innerHTML = createPage();
setupIntensity();
setupForm();
setupTip();
loadSaved();
