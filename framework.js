function expect(actual) {
  return {
    toBe(expect) {
      if (actual !== expect) {
        throw new Error("Unsuccesful test");
      }
    },
  };
}

function it(tittle, callback) {
  try {
    callback();
    console.log(`✔ ${tittle}`);
  } catch {
    console.error(`x ${tittle}`);
  }
}
