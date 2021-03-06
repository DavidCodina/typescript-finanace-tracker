import { $, $1 }        from './helpers.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { Invoice }      from './classes/Invoice.js';
import { Payment }      from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';




const form                = $1('#finance-tracker-form') as HTMLFormElement;
const type                = $1('#type')                 as HTMLInputElement;
const tofrom              = $1('#tofrom')               as HTMLInputElement;
const details             = $1('#details')              as HTMLInputElement;
const amount              = $1('#amount')               as HTMLInputElement;
const ul                  = $1('#item-list')            as HTMLUListElement;
const list                = new ListTemplate(ul);


/* =============================================================================

============================================================================= */


form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let doc:    HasFormatter;
  let values:[string, string, number]  = [tofrom.value, details.value, amount.valueAsNumber];

  if (type.value === 'invoice'){ doc = new Invoice(...values); }
  else {                         doc = new Payment(...values); }

  list.render(doc, type.value, 'end');
});
