const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
    // Add the current batch count to the accumulator
    return accumulator + currentValue;
  }, 0); // Initialize accumulator with 0
  
  console.log(totalBatteries);


