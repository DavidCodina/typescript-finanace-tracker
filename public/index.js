import { $1 } from './helpers.js';
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = $1('#finance-tracker-form');
const type = $1('#type');
const tofrom = $1('#tofrom');
const details = $1('#details');
const amount = $1('#amount');
const ul = $1('#item-list');
const list = new ListTemplate(ul);
/* =============================================================================

============================================================================= */
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
