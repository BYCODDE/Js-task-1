const createCounter = () => {
  return {
    count: 0,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      return (this.count = 0);
    },
  };
};

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

counter.decrement();
counter.reset();
console.log(counter.count);
