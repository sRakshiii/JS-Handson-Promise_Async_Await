function printNumbers() {
    return new Promise((resolve) => {
      let count = 1;
      setInterval(() => {
        // console.log(count);
        count++;
      }, count * 1000);
    });
}
printNumbers().then(() => {
    console.log('Done');
  });