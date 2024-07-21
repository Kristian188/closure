// using objects

const createCalculator = () => {
    let total = 0
    return {
        add: (num) => {
            total += num;
            return total;

        },
        subtract: (num) => {
            total -= num;
            return total;

        },
        multiply: (num) => {
            total *= num;
            return total;
        },
        divide: (num) => {
            if (num !== 0) {
                total /= num;

            } else {
                return `Cannot divide by ${num}`;
            }
            return total;

        }, 
        getTotal: () => total





    }
}
const calculator = createCalculator();
console.log(calculator.add(3)); // 3
console.log(calculator.subtract(2)); // 1
console.log(calculator.multiply(9)); // 9
console.log(calculator.divide(3)); // 3
console.log(calculator.divide(0)); // Cannot divide by 0
console.log(calculator.getTotal()); // 3

