const tree = {
  name: 'John',
  children: [
    {
      name: 'Jim',
      children: [],
    },
    {
      name: 'Zoe',
      children: [
        { name: 'Kyle', children: [] },
        { name: 'Sophia', children: [{ name: 'Jonas', children: [] }] },
      ],
    },
  ],
};

const sumRange = (n, total = 0) => {
  if (n < 0) {
    return total;
  }
  return sumRange(n -1, total + n )
};


console.log(sumRange(100))