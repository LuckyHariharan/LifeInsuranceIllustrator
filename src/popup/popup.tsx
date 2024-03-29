import React, { useEffect, useState } from "react";
import "./popup.css";
import { useTransition, animated } from "react-spring";
import * as XLSX from "xlsx";
import { SensitivityCalculation } from "../calculations/SensitivityCalculation";
import handleFileUpload from "../excel/FileHandlers";
import ActuarialCalculation from "../calculations/ActuarialCalculation";
import ToggleButtons from "../components/toggle";
const Popup = () => {
  // Add stages
  const Stages = {
    Input: "input",
    Result: "result",
  };
  // State
  const [showPolicyIllustrator, setShowPolicyIllustrator] = useState(true);
  const [generateXLSX, setGenerateXLSX] = useState(true);

  const [isActuarialMode, setIsActuarialMode] = useState(true);
  const [gender, setGender] = useState("male");
  const [smoking, setSmoking] = useState("non-smoker");
  const [periods, setPeriods] = useState("0");
  const [periodsDisplay, setPeriodsDisplay] = useState("0");
  const [interestRate, setInterestRate] = useState("0%");
  const [interestRateDisplay, setInterestRateDisplay] = useState("0%");
  const [numericInterest, setNumericInterest] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState("$0");
  const [paymentFrequency, setPaymentFrequency] = useState("monthly");
  const [paymentStartYear, setPaymentStartYear] = useState("0");
  const [stage, setStage] = useState(Stages.Input);
  const [result, setResult] = useState<number | null>(null);
  const [ageDisplay, setAgeDisplay] = useState<number | "">(15);
  const [age, setAge] = useState<number>(15);
  const [ageError, setAgeError] = useState(false);
  const [interestError, setInterestError] = useState(false);

  const [payPeriodError, setPayPeriodError] = useState(false);
  const [smokingStatusError, setSmokingStatusError] = useState(false);
  const [genderStatusError, setGenderStatusError] = useState(false);
  const [formattedResult, setFormattedResult] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [previousAge, setPreviousAge] = useState(15);
  const [sensitivityResult, setSensitivityResult] =
    useState<SensitivityResult | null>(null);

  // SensitivityResult type definition
  type SensitivityResult = {
    lowerRangeAPV: number;
    lowerCashValue65: number;
    lowerCashValue85: number;
    higherRangeAPV: number;
    higherCashValue65: number;
    higherCashValue85: number;
    cashValue65: number;
  };
  const [showToggle, setShowToggle] = useState(true);
  const toggleScreen = () => {
    setShowToggle(!showToggle);
    setShowPolicyIllustrator(!showPolicyIllustrator);
  };
  // Function to format the interest rate input
  const reformatInterestRateInput = (value: string): string => {
    // Remove any non-digit characters (except ".")
    value = value.replace(/[^\d.]/g, "");

    // Ensure only one decimal point
    const parts = value.split(".");
    if (parts.length > 2) {
      value = parts.slice(0, 2).join(".") + parts.slice(2).join("");
    }

    return value;
  };

  // Function to parse currency string
  function parseCurrencyString(currencyString: string): number {
    const sanitizedString = currencyString.replace(/[$,]/g, "");
    return parseFloat(sanitizedString);
  }
  const exportToXLSX = () => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Generate an array from 1 to 100 - age
    const policyYearValues = Array.from(
      { length: 100 - age + 1 },
      (_, i) => i + 1
    );

    // Calculate the actuarial present value for each policy year with compound interest
    let accumulatedResult = 0;
    const resultArray = policyYearValues.map((policyYear) => {
      const interestRate = numericInterest / 100;

      // Accumulate the interest-weighted result based on the result at year 0
      accumulatedResult = accumulatedResult * (1 + interestRate) + result;

      return {
        "Policy Year": policyYear,
        "Actuarial Present Value": accumulatedResult,
      };
    });

    // Add a worksheet with your data
    const ws = XLSX.utils.json_to_sheet(resultArray, {
      header: ["Policy Year", "Actuarial Present Value"],
    });

    // Assign the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");

    // Save the workbook as an XLSX file
    if (generateXLSX) {
      XLSX.writeFile(wb, "actuarial_data.xlsx");
    }
  };

  // Function to format result
  const formatResult = (value: number): string => {
    if (isNaN(value) || typeof value !== "number") {
      return "$0.00";
    }

    const formattedValue = value.toFixed(2);
    const [dollars, cents] = formattedValue.split(".");
    const formattedDollars = dollars.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return `$${formattedDollars}.${cents}`;
  };
  useEffect(() => {
    if (!ageError && !payPeriodError) {
      const result = ActuarialCalculation(
        numericInterest / 100,
        parseInt(periods),
        gender,
        parseCurrencyString(paymentAmount),
        smoking,
        age
      );
      const sensitivityResult = SensitivityCalculation(
        numericInterest / 100,
        parseInt(periods),
        gender,
        parseCurrencyString(paymentAmount),
        smoking,
        age
      );
      setResult(result);
      setSensitivityResult(sensitivityResult);
      setFormattedResult(formatResult(result));
    }
    if (gender !== "") {
      setGenderStatusError(false);
      setDisableButton(false);
    }
    if (age > 15 && age < 100) {
      setAgeError(false);
    }
    if (smoking !== "") {
      setSmokingStatusError(false);
      setDisableButton(false);
    }
  }, [
    ageError,
    payPeriodError,
    gender,
    age,
    smoking,
    numericInterest,
    periods,
    paymentAmount,
  ]);

  const handleCalculate = () => {
    if (smoking === "") {
      setSmokingStatusError(true);
      console.log("Smoking condition executed");

      return;
    }
    if (gender === "") {
      setGenderStatusError(true);

      return;
    }

    if (age < 15 || age > 100) {
      setAgeError(true);
      console.log("Age condition executed");

      return;
    } else {
      if (parseInt(periods) + age > 100) {
        setPayPeriodError(true);
        console.log("Pay condition executed");

        return;
      } else {
        setPayPeriodError(false);
        setAgeError(false);
      }
    }
    console.log(
      ageError,
      payPeriodError,
      genderStatusError,
      smokingStatusError
    );

    if (
      !ageError &&
      !payPeriodError &&
      !genderStatusError &&
      !smokingStatusError
    ) {
      setNumericInterest(parseFloat(interestRate.replace(/%/g, "")));

      const result = ActuarialCalculation(
        numericInterest / 100,
        parseInt(periods),
        gender,
        parseCurrencyString(paymentAmount),
        smoking,
        age
      );
      setResult(result);
      setFormattedResult(formatResult(result));
    }

    if (ageError || genderStatusError || smokingStatusError || payPeriodError) {
      console.log(
        ageError,
        payPeriodError,
        genderStatusError,
        smokingStatusError
      );

      return;
    } else {
      setStage(Stages.Result); // Set the stage to 2 to go to stage 2
      console.log(
        ageError,
        payPeriodError,
        genderStatusError,
        smokingStatusError
      );
    }

    exportToXLSX();
  };

  const handleBackToStage1 = () => {
    setStage(Stages.Input);
    setInputFieldsFocused({
      gender: false,
      age: false,
      smoking: false,
      periods: false,
      interestRate: false,
      paymentAmount: false,
      name: false,
    });
  };

  // Function to format the interest rate input
  const formatInterestRateInput = (value: string): string => {
    value = value.replace(/%/g, "");
    if (value[value.length - 1] !== "%") {
      value += "%";
    }
    return value;
  };

  // Function to format the payment amount input
  const formatPaymentAmountInput = (value: string): string => {
    value = value.replace(/[$,]/g, "");
    const [dollars, cents] = value.split(".");
    const formattedDollars = dollars.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return cents !== undefined
      ? `$${formattedDollars}.${cents}`
      : `$${formattedDollars}`;
  };

  // State to track if input fields have been focused (changed) by the user
  const [inputFieldsFocused, setInputFieldsFocused] = useState({
    gender: false,
    age: false,
    smoking: false,
    periods: false,
    interestRate: false,
    paymentAmount: false,
    name: false,
  });

  // Function to handle input blur
  const handleInputBlur = (
    event: React.FocusEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    setInputFieldsFocused((prevInputFieldsFocused) => ({
      ...prevInputFieldsFocused,
      [fieldName]: true,
    }));
  };

  const stage1 = (
    <div className="">
      <div className="mb-4 ">
        <div className="flex justify-between">
          <label className="block text-gray-900 font-bold mb-2">Gender</label>
          <label className="text-gray-900 font-bold mb-2 text-right">Age</label>
          <div></div>
        </div>
        <div className="flex items-center">
          <select
            className={`border rounded px-3 py-2 w-full ${
              inputFieldsFocused.gender ? "border-black" : ""
            }`}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            onSelect={(e) => setGenderStatusError(false)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            className={`border rounded px-3 py-2 w-full ${
              inputFieldsFocused.age ? "border-black" : ""
            }`}
            value={ageDisplay}
            onSelect={(e) => {
              setAgeError(false);
            }}
            onChange={(e) => {
              setAgeDisplay(parseInt(e.target.value));
              setAge(parseInt(e.target.value));
            }}
            onBlur={(e) => handleInputBlur(e, "age")} // Pass the event and field name
            onClick={() => setAgeDisplay("")}
            min={15}
            max={100}
          />
        </div>
        {genderStatusError && !inputFieldsFocused.gender && (
          <p className="text-green-500 text-left pr-4">
            Please select a gender.
          </p>
        )}
        {ageError && (
          <p className="text-green-500 text-right pr-4">
            Age must be between 15 and 100.
          </p>
        )}
      </div>
      <div className="mb-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Smoking Status
          </label>
          <select
            className={`border rounded px-3 py-2 w-full ${
              inputFieldsFocused.smoking ? "border-black" : ""
            }`}
            value={smoking}
            onChange={(e) => setSmoking(e.target.value)}
            onSelect={(e) => setSmokingStatusError(false)}
          >
            <option value="">Select Smoking Status</option>
            <option value="smoker">Smoker</option>
            <option value="non-smoker">Non-Smoker</option>
          </select>
        </div>
        {smokingStatusError && !inputFieldsFocused.smoking && (
          <p className="text-green-500 text-left pr-4">
            Please select a smoking status.
          </p>
        )}
      </div>
      {/* <div>
        <label className="block text-gray-700 font-bold mb-2">
          Upload XLSX File
        </label>
        <input type="file" accept=".xlsx, .csv" onChange={handleFileUpload} />
      </div> */}

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Number of Pay Periods
        </label>
        <input
          className={`border rounded px-3 py-2 w-full ${
            inputFieldsFocused.periods ? "border-black" : ""
          }`}
          value={periodsDisplay}
          onClick={(e) => setPeriodsDisplay("")}
          onSelect={(e) => {
            {
              setPayPeriodError(false);
            }
          }}
          onChange={(e) => {
            const inputValue = e.target.value;
            setPeriods(inputValue); // Update the state with the input value
            setPeriodsDisplay(inputValue);
          }}
          min={0}
          max={85}
        />

        {payPeriodError && !inputFieldsFocused.periods && (
          <p className="text-green-500 text-left pr-4">
            The sum of Pay Periods and Age must not exceed 100.
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Interest Rate
        </label>
        <input
          type="text"
          className={`border rounded  px-3 py-2 w-full ${
            inputFieldsFocused.interestRate ? "border-black" : ""
          }`}
          onClick={(e) => setInterestRateDisplay("")}
          value={interestRateDisplay}
          onChange={(e) => {
            setInterestRate(formatInterestRateInput(e.target.value));
            setInterestRateDisplay(formatInterestRateInput(e.target.value));
          }}
          onKeyDown={(e) => {
            // Check if the pressed key is the backspace key
            if (e.key === "Backspace") {
              // Handle backspace key here (if needed)
              setInterestRate("");
            }
          }}
        />{" "}
        {/* {interestError && !inputFieldsFocused.interestRate && (
          <p className="text-green-500 text-right pr-4">
            Please
          </p>
        )} */}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Payment Amount
        </label>
        <input
          type="text"
          className={`border rounded px-3 py-2  w-full ${
            inputFieldsFocused.paymentAmount ? "border-black" : ""
          }`}
          value={paymentAmount}
          onKeyDown={(e) => {
            // Check if the pressed key is the backspace key
            if (e.key === "Backspace") {
              // Handle backspace key here (if needed)
              setPaymentAmount("");
            }
          }}
          onClick={(e) => setPaymentAmount("")}
          onChange={(e) =>
            setPaymentAmount(formatPaymentAmountInput(e.target.value))
          }
        />
      </div>
      <div className="flex justify-start space-x-8 mx-auto">
        <div className="flex items-center space-x-2">
          <label className="text-gray-700 font-bold">Generate .XLSX</label>
          <input
            type="checkbox"
            checked={generateXLSX}
            onChange={() => setGenerateXLSX(!generateXLSX)}
          />
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
          onClick={handleCalculate}
          hidden={disableButton}
        >
          Calculate
        </button>
      </div>
    </div>
  );
  // Rest of the code comments

  const stage2 = (
    <div className="text-center h-full space-y-8 w-full ">
      <p className="text-md mt-8 ">
        The Actuarial Present Value of that series of payments today is:{" "}
        <span className="text-green-600 font-bold text-lg">
          {formattedResult || "0"}
        </span>
      </p>
      <div className="grid grid-cols-4 bg-white w-full space-y-4 px-4">
        <p></p>
        <p className="font-bold underline">interest-0.10%</p>
        <p className="font-bold underline">interest</p>
        <p className="font-bold underline">interest+0.10%</p>
        <p className="font-bold ">APV Age 65</p>
        <p>
          {sensitivityResult &&
            formatResult(sensitivityResult.lowerCashValue65 || 0)}
        </p>
        <p>
          {sensitivityResult &&
            formatResult(sensitivityResult.cashValue65 || 0)}
        </p>
        <p>
          {sensitivityResult &&
            formatResult(sensitivityResult.higherCashValue65 || 0)}
        </p>{" "}
      </div>
      <div className="">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 "
          onClick={handleBackToStage1}
        >
          Back to Input
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full p-4 bg-slate-200">
      <h1
        className={`text-2xl mb-4 ${
          isActuarialMode && stage === Stages.Input
            ? "text-black font-bold"
            : "text-black font-bold"
        } flex justify-center`}
      >
        {isActuarialMode && stage === Stages.Input
          ? "Open Source Insurance Illustrator"
          : "Result"}
      </h1>
      <div>
        {showToggle ? (
          <div className="">
            {/* Your toggle button */}
            <div className="flex  mb-4 justify-center">
              {
                <ToggleButtons
                  toggleScreen={toggleScreen}
                  showPolicyIllustrator={showPolicyIllustrator}
                />
              }
            </div>

            <div>
              <div className="flex justify-start  ">
                <div className="flex flex-col w-full">
                  <p>V1.04 </p>
                  <p>Lakshman Hariharan </p>
                </div>
                <input
                  className={`border rounded  px-3 py-2 w-full ${
                    inputFieldsFocused.name ? "border-black" : ""
                  }`}
                  placeholder="Enter Profile Name"
                />
              </div>
              <div>
                <p className="font-bold">Illustration Details</p>
                <div
                  className="flex bg-white rounded border-2 border-black p-4 w-full mb-2"
                  style={{ height: "60px", overflowY: "auto" }}
                >
                  <p>
                    age {`${age} `} {gender && `${gender} `}
                    {smoking && `${smoking}, `}
                    {paymentAmount !== "$" && `${paymentAmount} `} at{" "}
                    {interestRate !== "%" && `${interestRate} `} for{" "}
                    {periods && !isNaN(parseInt(periods)) && (
                      <span>
                        {parseInt(periods)}{" "}
                        {parseInt(periods) === 1 ? "year" : "years"}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            {stage === Stages.Input && stage1}
            {stage === Stages.Result && stage2}
          </div>
        ) : (
          <div>
            {/* Your toggle button */}
            <div className="flex  mb-4 justify-center">
              {
                <ToggleButtons
                  toggleScreen={toggleScreen}
                  showPolicyIllustrator={showPolicyIllustrator}
                />
              }
            </div>
            <div>
              <div className="flex justify-start  ">
                <div className="flex flex-col w-full">
                  <p>V1.03 </p>
                  <p>Lakshman Hariharan </p>
                </div>
                <input
                  className={`border rounded  px-3 py-2 w-full ${
                    inputFieldsFocused.name ? "border-black" : ""
                  }`}
                  placeholder="Enter Profile Name"
                />
              </div>
              <div>
                <p className="font-bold">Illustration Details</p>
                <div
                  className="flex bg-white rounded border-2 border-black p-4 w-full mb-2"
                  style={{ height: "60px", overflowY: "auto" }}
                >
                  <p>
                    age {`${age} `} {gender && `${gender} `}
                    {smoking && `${smoking}, `}
                    {paymentAmount !== "$" && `${paymentAmount} `} at{" "}
                    {interestRate !== "%" && `${interestRate} `} for{" "}
                    {periods && !isNaN(parseInt(periods)) && (
                      <span>
                        {parseInt(periods)}{" "}
                        {parseInt(periods) === 1 ? "year" : "years"}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            {stage === Stages.Input && stage1}
            {stage === Stages.Result && stage2}
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
