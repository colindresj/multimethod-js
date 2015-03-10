# multimethod-js

> Clojure inspired multimethods for JavaScript

## API

### defMulti
Creates new multimethods.

Takes a dispatching function, primitive or no value as its only argument.
Returns a multimethod.

- Primitive implies a deep equality check dispatching function
- No value implies a deep equality check when dispatching function is called
  with a primitive or an instanceof check when called with a non-primitave.

```js
  const area = defmulti(obj => obj.type);
```

### defMethod
Creates and installs a new method of multimethod associated with a dispatch
value.

Takes a multimethod as its first argument, a dispatch value second, and a
function to be invoked with the argument(s) supplied to the multimethod's
dispatching function third.

Alternatively, a direct value to be returned on match can be passed as the
second argument.

```js
  defmethod(area, 'rect', r => r.width * r.height);
```

### getMethod
Given a multimethod and a dispatch value, returns the method that applies to
that value, or `null` if none apply and no default was set.

```js
  let rectArea = getmethod(area, 'rect');
```

### getAllMethods
Given a multimethod, returns a collection of dispatch values and associated
dispatch functions.

```js
  let allShapeAreas = getAllMethods(area);
```

### removeMethod
Removes the method of multimethod associate with a dispatch value.

```js
  removeMethod(area, 'rect');
```

### removeAllMethods
Removes all of the methods of multimethod.

```js
  removeAllMethods(area);
```

### Example
```js
import {defmulti, defmethod, default} from 'multimethod-js';

const area = defmulti(obj => obj.type);

defmethod(area, 'rect', r => r.width * r.height);

defmethod(area, 'circle', c => Math.PI * c.radius * c.radius);

defmethod(area, default, o => throw new Error(`No area calc for ${o.type}`));

const rect = {
  type: 'rect',
  width: 40,
  height: 40
};

area(rect); // => 1600

removeMethod(area, 'circle')

area(rect) // => Error: "No area calc for rect"
```

### Alt Chaining Example
```js
import {defmulti, default} from 'multimethod-js';

const area =
  defmulti(obj => obj.type)
    .defmethod('rect', r => r.width * r.height)
    .defmethod('circle', c => Math.PI * c.radius * c.radius)
    .defmethod(default, o => throw new Erorr(`No area calc for ${o.type}`));

area(rect); // => 1600
```
