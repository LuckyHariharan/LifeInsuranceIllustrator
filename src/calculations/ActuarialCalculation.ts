const ActuarialCalculation = (
  interest: number,
  payPeriods: number,
  gender: string,
  payment: number,
  smokingStatus: string,
  age: number
): number => {
  const discountRateArray: number[] = [];
  const paymentArray: number[] = [];
  // Step 1: Build the discount rate array using n=1,...,payPeriods (1/(1+i)^n)
  let discountRate = 1 / (1 + interest);
  for (let i = 0; i < payPeriods; i++) {
    discountRateArray.push(discountRate);
    discountRate *= 1 / (1 + interest);
  }
  const femaleNonsmokerMortalityArray = [
    0.000174, 0.000199, 0.00022, 0.000234, 0.000245, 0.000253, 0.00026,
    0.000266, 0.000272, 0.000275, 0.000277, 0.000284, 0.00029, 0.0003, 0.000313,
    0.000333, 0.000357, 0.000375, 0.00039, 0.000405, 0.000424, 0.000447,
    0.000476, 0.000514, 0.00056, 0.000613, 0.000667, 0.000723, 0.000774,
    0.000823, 0.000866, 0.000917, 0.000983, 0.001072, 0.001168, 0.00129,
    0.001453, 0.001622, 0.001792, 0.001972, 0.002166, 0.002393, 0.002666, 0.003,
    0.003393, 0.003844, 0.004352, 0.004899, 0.005482, 0.006118, 0.006829,
    0.007279, 0.007821, 0.008475, 0.009234, 0.010083, 0.011011, 0.01203,
    0.013154, 0.014415, 0.015869, 0.017555, 0.0195, 0.021758, 0.024412,
    0.027579, 0.031501, 0.036122, 0.041477, 0.047589, 0.054441, 0.061972,
    0.070155, 0.078963, 0.088336, 0.098197, 0.108323, 0.119188, 0.131334,
    0.145521, 0.162722, 0.18212, 0.199661, 0.217946, 0.236834,
  ];

  const femaleSmokerMortalityArray = [
    0.00015, 0.00022, 0.00026, 0.00027, 0.00027, 0.00027, 0.00028, 0.0003,
    0.00034, 0.00036, 0.00036, 0.00035, 0.00034, 0.00035, 0.00037, 0.0004,
    0.00043, 0.00046, 0.00049, 0.00054, 0.00061, 0.00068, 0.00076, 0.00084,
    0.00091, 0.00096, 0.001, 0.00104, 0.00108, 0.00112, 0.00117, 0.00126,
    0.00135, 0.00146, 0.00158, 0.00171, 0.00186, 0.00202, 0.0022, 0.0024,
    0.00262, 0.00287, 0.00314, 0.00345, 0.00381, 0.00421, 0.00466, 0.00518,
    0.00575, 0.0064, 0.00713, 0.00793, 0.00882, 0.00981, 0.0109, 0.01209,
    0.01339, 0.01482, 0.01638, 0.01813, 0.02011, 0.02234, 0.02489, 0.02775,
    0.03098, 0.03463, 0.03898, 0.04393, 0.04951, 0.05597, 0.06331, 0.07173,
    0.08086, 0.09088, 0.10186, 0.11371, 0.12612, 0.13937, 0.15344, 0.16748,
    0.18238, 0.20089, 0.22099, 0.24266, 0.26552,
  ];

  const maleNonsmokerMortalityArray = [
    0.000282, 0.000325, 0.000364, 0.000399, 0.00043, 0.000459, 0.000492,
    0.000526, 0.000569, 0.000616, 0.000669, 0.000728, 0.000764, 0.000789,
    0.000808, 0.000824, 0.000834, 0.000838, 0.000828, 0.000808, 0.000789,
    0.000783, 0.0008, 0.000837, 0.000889, 0.000955, 0.001029, 0.00111, 0.001188,
    0.001268, 0.001355, 0.001464, 0.001615, 0.001808, 0.002032, 0.002285,
    0.002557, 0.002828, 0.003088, 0.003345, 0.003616, 0.003922, 0.004272,
    0.004681, 0.005146, 0.005662, 0.006237, 0.006854, 0.00751, 0.00822,
    0.009007, 0.009497, 0.010085, 0.010787, 0.011625, 0.012619, 0.013798,
    0.015195, 0.016834, 0.018733, 0.020905, 0.023367, 0.026155, 0.029306,
    0.032858, 0.036927, 0.041703, 0.046957, 0.052713, 0.059148, 0.066505,
    0.075015, 0.084823, 0.095987, 0.108482, 0.122214, 0.136799, 0.152409,
    0.169078, 0.186882, 0.205844, 0.219247, 0.238612, 0.258341, 0.278219,
  ];

  const maleSmokerMortalityArray = [
    0.00029, 0.00042, 0.00057, 0.00072, 0.00082, 0.00086, 0.00088, 0.00088,
    0.00088, 0.00088, 0.00088, 0.00088, 0.00087, 0.00085, 0.00084, 0.00084,
    0.00088, 0.00093, 0.00101, 0.00109, 0.00117, 0.00128, 0.00139, 0.00149,
    0.00161, 0.00174, 0.00187, 0.00198, 0.00204, 0.0021, 0.00216, 0.00222,
    0.00227, 0.00233, 0.00239, 0.0025, 0.00264, 0.0028, 0.00299, 0.00321,
    0.00347, 0.00376, 0.0041, 0.00449, 0.00494, 0.00545, 0.00604, 0.00672,
    0.00748, 0.00831, 0.0092, 0.01015, 0.01115, 0.01224, 0.01347, 0.0149,
    0.01658, 0.01856, 0.02084, 0.0234, 0.02622, 0.02924, 0.03251, 0.03606,
    0.04005, 0.04458, 0.04981, 0.05556, 0.06258, 0.07061, 0.07985, 0.09046,
    0.10241, 0.1157, 0.12985, 0.1447, 0.15973, 0.17457, 0.18907, 0.20252,
    0.21433, 0.23011, 0.24709, 0.26576, 0.28575,
  ];

  // Step 2: Construct an array of n length where each value is payment
  for (let i = 0; i < payPeriods; i++) {
    paymentArray.push(payment);
  }

  // Step 3: Calculate the Actuarial Present Value
  let actuarialPresentValue = 0;
  let mortalityArray = []; // initialize mortality array here to conditionally mutate later
  for (let i = 0; i < payPeriods; i++) {
    // Determine the correct mortality array based on gender and smoking status
    if (gender === "female" && smokingStatus === "non-smoker") {
      mortalityArray = femaleNonsmokerMortalityArray;
    } else if (gender === "female" && smokingStatus === "smoker") {
      mortalityArray = femaleSmokerMortalityArray;
    } else if (gender === "male" && smokingStatus === "non-smoker") {
      mortalityArray = maleNonsmokerMortalityArray;
    } else if (gender === "male" && smokingStatus === "smoker") {
      mortalityArray = maleSmokerMortalityArray;
    } else {
      throw new Error("Invalid gender or smoking status");
    }
    const presentValue =
      paymentArray[i] *
      discountRateArray[i] *
      (1 - mortalityArray[i + age - 15]); // 1- mortality is chance of living next year, the fisrt mortality value is age 15

    // Add it to the total
    actuarialPresentValue += presentValue;
  }

  return actuarialPresentValue;
};
// Example usage:
const result = ActuarialCalculation(0.05, 10, "Male", 1000, "Smoker", 30);

export default ActuarialCalculation;
