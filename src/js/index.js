import { addCounter } from './counter-functions';
import { addCounterElement } from './dom';

addCounterElement.addEventListener('click', addCounter);
