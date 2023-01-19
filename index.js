const drivers = ["Gale", "Ama", "Tsuko", "Geb"];
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fare) => {
  return function (calculate) {
    return fare * calculate;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, oneFunction) {
  return oneFunction(drivers);
}
