import Multimethod from './multimethod';

function defMulti(dispatchingFn) {
  const mm = new Multimethod(dispatchingFn);
  return mm.callable;
}
