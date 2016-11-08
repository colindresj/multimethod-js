exports.defmulti = function defmulti(dispatchFn) {
  const multimethod = function multimethod() {
    const v = dispatchFn.apply(null, arguments);

    return multimethod.registry[v].apply(null, arguments);
  }

  multimethod.registry = Object.create(null);

  return multimethod;
};

exports.defmethod = function defmethod(mm, dispatchVal, fn) {
  mm.registry[dispatchVal] = fn;
};

exports.defdefault = function defdefault(mm, fn) {
  exports.defmethod(mm, '__default__', fn);
};
