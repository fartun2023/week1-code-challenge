let score = prompt("enter score");
 
 if (score > 79 && score<=100) {
    grade = 'A';
    console.log(`your grade is ${grade}`);
 
 } else if (score>=60 && score<=79) {
    grade = 'B';
    console.log(`your grade is ${grade}`);

} else if (score>=49 && score<=59) {
  grade = 'C';
  console.log(`your grade is ${grade}`);

 } else if (score>=40 && score<=49) {
   grade = 'D';
   console.log(`your grade is ${grade}`);

 }else if(score<40) {
   grade = 'E';
   console.log(`your grade is ${grade}`);

} else{
   console.log(`grade is not valid`);
}

  
//speed dectator
   const speedLimit = 70;
   const kmPerPoint = 5;
function speedDectator(carspeed) {
 if (carspeed <=speedLimit) {
       console.log(`Ok`);
       
   } else {
       const point = Math.floor((carspeed-speedLimit)/kmPerPoint);
       if(point<=12) {
         console.log(`point:${point}`);
       } else {
         console.log("your license suspended");
       }
       } 
      }
   
      function taxCalculator(basicSalary, benefits ) {
         const totalSalary = basicSalary + benefits;
         // NHIF Calculation
         let nhifDeduction = ``;
         if (totalSalary <= 5999) {
           nhifDeduction = 150;
         } else if (totalSalary >= 6000 && totalSalary <= 7999) {
           nhifDeduction = 300;
         } else if (totalSalary >= 8000 && totalSalary <= 11999) {
           nhifDeduction = 400;
         } else if (totalSalary >= 12000 && totalSalary <= 14999) {
           nhifDeduction = 500;
         } else if (totalSalary >= 15000 && totalSalary <= 19999) {
           nhifDeduction = 600;
         } else if (totalSalary >= 20000 && totalSalary <= 24999) {
           nhifDeduction = 750;
         } else if (totalSalary >= 25000 && totalSalary <= 29999) {
           nhifDeduction = 850;
         } else if (totalSalary >= 30000 && totalSalary <= 34999) {
           nhifDeduction = 900;
         } else if (totalSalary >= 35000 && totalSalary <= 39999) {
           nhifDeduction = 950;
         } else {
           nhifDeduction = 1700;
         }
       
         // NSSF calcultion
         let nssfContribution = ``;
         if (totalSalary < 6000) {
           nssfContribution = 0;
         } else if (totalSalary >= 6000 && totalSalary <= 18000) {
           nssfContribution = totalSalary * 0.06;
         } else {
           nssfContribution = 1080;
         }
         // If statement for monthly and annual tax
         const personalRelief = 2400;
         let TaxableIncome =
           totalSalary - (nssfContribution + nhifDeduction + personalRelief);
         let monthlyTax = "";
         let annualTax = "";
         if (TaxableIncome <= 24000) {
           monthlyTax = TaxableIncome * 0.1;
           annualTax = TaxableIncome * 12 * 0.1;
         } else if (TaxableIncome > 24000 && TaxableIncome <= 32333) {
           monthlyTax = TaxableIncome * 0.25;
           annualTax = TaxableIncome * 12 * 0.25;
         } else if (TaxableIncome > 32333) {
           monthlyTax = TaxableIncome * 0.3;
           annualTax = TaxableIncome * 12 * 0.3;
         }
         let netSalary = totalSalary - (monthlyTax + nssfContribution + nhifDeduction);
         return `Your Payee tax is ${monthlyTax} monthly, ${annualTax} annually. NHIF is ${nhifDeduction}, NSSF is ${nssfContribution} netsalary is ${netSalary}monthly and yearly ${
           netSalary * 12
         }`;
      }