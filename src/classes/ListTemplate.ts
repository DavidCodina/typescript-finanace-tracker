import { HasFormatter } from "../interfaces/HasFormatter";



export class ListTemplate {
  constructor(private container: HTMLUListElement){}


  render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
    const li     = document.createElement('li');
    const h6     = document.createElement('h6');
    const p      = document.createElement('p');

    li.className = 'list-group-item p-3 border border-dark';
    li.style.marginTop = '-1px';
    h6.innerText = heading + ':';

    p.innerText  = item.format();
    p.className  = 'mb-0';

    li.append(h6);
    li.append(p);

    if (pos === 'start'){ this.container.prepend(li); }
    else {                this.container.append(li);  }
  }
}
