
// Select a list of matching elements, context is optional
export function $(selector:any, context?:any){
  var nodeList = (context || document).querySelectorAll(selector);
  return nodeList;
}

// Select the first match only, context is optional
export function $1(selector:any, context?:any){
  var nodeList = (context || document).querySelector(selector);
  return nodeList;
}
