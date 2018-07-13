import { MDCSelect } from '@material/select';

let select;
if(document.querySelector('.mdc-select')){
	const select = new MDCSelect(document.querySelector('.mdc-select'));
}

export { select };