const one = 'I',
      five = 'V',
      ten =  'X',
      fifty = 'L',
      hundred = 'C',
      thousand = 'M';

module.exports = n => {
  if (n <= 3) return one.repeat(n);

  if (n <= 5) {
      const ones = 5 - n;
      return one.repeat(ones) + five;
  }

  if (n <= 8) {
      const ones = n - 5;
      return five + one.repeat(ones);
  }

  if (n <= 10) {
      const ones = 10 - n;
      return one.repeat(ones) + ten;
  }
};
