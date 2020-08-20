const test = require('ava');

test('Array', t => {
  const arr1 = [1,2,3]
  const arr2 = arr1.slice()
  // normally we don't use array like this
  // but sometimes we might reach out of the array boundary unexpectedly
  for (let i = -1; i > -10; i--) {
    arr2[i] = 111
  }
  console.log(arr1)
  console.log(arr2)
  t.deepEqual(arr1, arr2)
})