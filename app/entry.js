// paths need to be relative for them to work in the browser
import { router } from '@webformula/pax-core';

// --- components ---
// you can also import these on the pages that use them
import './components/custom-button.js';

// --- pages ---
import Home from './pages/home/page.js';
import another from './pages/another/page.js';

// configure router
router.addPageClass(Home, '/');
// second handles its routes internally
router.addPageClass(another);
router.init();
