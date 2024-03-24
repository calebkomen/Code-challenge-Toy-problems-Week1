1.GRADEGENERATOR

Grade Generator

This is a simple JavaScript function named gradeGenerator which takes a numeric input marks and returns a corresponding letter grade based on predefined grade boundaries.

Functionality
The function gradeGenerator takes a single parameter marks, representing the score of a student. It then evaluates the input against predetermined grade boundaries and returns a letter grade accordingly.

Grade Boundaries
A: 79 - 100
B: 60 - 78
C: 49 - 59
D: 40 - 48
E: 0 - 39
Usage
To use the gradeGenerator function, simply call it with the marks as the argument. For example:

javascript
Copy code
const result = gradeGenerator(85);
console.log(result); // Output: "A"
Example
javascript
Copy code
const grade = gradeGenerator(65);
console.log(grade); // Output: "B"
Note
The function assumes that the input marks will be within the range of 0 to 100. Any value outside this range may produce unexpected results.
This implementation does not handle invalid inputs or edge cases such as negative numbers. It's recommended to handle such cases before passing the input to this function.




2.SPEEDDETECTOR

Speed Detector

This is a JavaScript function named speedDetector which calculates demerit points for speeding violations and determines the outcome based on predefined criteria.

Functionality
The function speedDetector takes a single parameter speed, representing the speed of a vehicle. It then calculates demerit points based on the deviation from the speed limit and returns an appropriate response.

Constants
speedLimit: Stores the speed limit, set to 70 km/h.
kmPerPoint: Stores the number of kilometers per demerit point, set to 5 km.
Calculation
The function calculates the demerit points by subtracting the speedLimit from the actual speed, dividing the result by kmPerPoint, and flooring the result to get an integer value representing demerit points.

Response
The function returns different responses based on the calculated demerit points:

"Ok": If the speed is within the limit (less than or equal to 70 km/h).
"License suspended": If the demerit points exceed 12.
"Points: X": If the demerit points are within the limit, where X represents the calculated demerit points.

3.NETSALARYCALCULATION
Functionality
The program includes a function calculateNetSalary(basicSalary, benefits) which calculates the net salary based on the provided basicSalary and benefits.

Input:
basicSalary: The basic salary of the individual.
benefits: Additional benefits or allowances.
Output:
The function returns an object containing the following calculated values:

grossSalary: The total gross salary (basic salary + benefits).
kraTax: The tax amount deducted by KRA.
nhifDeduction: The NHIF deduction.
nssfDeduction: The NSSF deduction.
netSalary: The net salary after deductions.
Usage
To use the calculateNetSalary function, provide the basic salary and benefits as arguments. 