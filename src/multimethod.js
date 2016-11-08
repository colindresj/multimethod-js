module.exports = function createMultimethod() {
  function multimethod() {};

  multimethod.registry = Object.create(null);

  return multimethod;
}
