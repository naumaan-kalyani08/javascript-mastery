const MainFunction = (percent) => {
  return (AddTip = (billAmount) => {
    return (billAmount * percent) / 100;
  });
};
const tip15 = MainFunction(15);
console.log(tip15(100));
