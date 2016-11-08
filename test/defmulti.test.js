const test = require('tape');
const mm = require('../src');

test('sample test', t => {
  var fmb = mm.defmulti(
    creature => creature.type,
    'full moon behavior' // optional
  );

  mm.defmethod(fmb, 'wolf', creature => creature.name + ' will howl.');

  mm.defmethod(fmb, 'crow', creature => creature.name + ' will squak.');

  mm.defdefault(fmb, creature => creature.name + ' will do something.');

  t.equal(
    fmb({ type: 'wolf', name: 'Larry' }),
    'Larry will howl.'
  );

  t.equal(
    fmb({ type: 'crow', name: 'Steve' }),
    'Steve will squak.'
  );

  t.end();
});
