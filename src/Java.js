class JavaFizzBuzz {
  isDivisibleByThree(number) {
    return (number %3 === 0);
  }

  isDivisibleByFive(number) {
    return (number %5 === 0);
  }

  isDivisibleByFifteen(number) {
    return (number %3 === 0 && number %5 === 0)
  }

  _isDivisibleBy(number, devider) {
      return number % devider === 0
  };

  play(number) {
      if (this.isDivisibleByFifteen(number)) {
          return 'FizzBuzz'
      };
      if (this.isDivisibleByThree(number)) {
        return 'Fizz'
      };
      if (this.isDivisibleByFive(number)) {
          return 'Buzz'
      };
      return number
  };
}
