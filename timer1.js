const args = process.argv.slice(2);

for (const arg of args) {
  const delay = Number(arg);

  if (delay >= 0 && !isNaN(delay)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay * 1000);
  }
}