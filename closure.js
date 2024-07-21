const createCounter = () => {
    let count = 0;

    const increment = () => {
        count++;
        return count;
    };

    return increment;
};

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3






// anonymous closure

const createCounter1 = () => {
    let count = 0;

    return () => {
        count++;
        return count;
    };
};

const counter1 = createCounter1();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3