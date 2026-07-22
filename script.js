
//Task 1
function formatFullName(firstName, LastName){
    if (firstName == null || LastName == null){
        return "invalid name input"
    }
    let Fname = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    let Lname = LastName.charAt(0).toUpperCase() + LastName.slice(1);
    return `${Lname}, ${Fname}`;
}
console.log(formatFullName("dimpal", "patil"))
console.log(formatFullName("dimpal"))

//Task 2

function calculateTotalCost(price, quantity, taxRate) {
    if (
        typeof price !== "number" ||
        typeof quantity !== "number" ||
        typeof taxRate !== "number"
    ) {
        return "invalid input";
    }

    let totalCost = (price * quantity) * (1 + taxRate);
    return totalCost;
}
console.log(calculateTotalCost(20,50,0.9))
console.log(calculateTotalCost(20,"a",0.9))

//Task 3//

function checkEligibility(age, isEmployed){
    if (age > 18 && isEmployed) {
        return "Person is eligible for program";
    } else if (age > 18 && !isEmployed) {
        return "Person  conditionally  eligible for program";
    }
    else {
        return "person is not eligible";
    }

}

console.log(checkEligibility(24, true))
console.log(checkEligibility(17, false))
console.log(checkEligibility(25, false))


//Task 4

function refactorCalculateTotalCost(price, quantity, taxRate, discount)
{

    if (
        typeof price !== "number" ||
        typeof quantity !== "number" ||
        typeof taxRate !== "number"
    ) {
        return "Invalid input.";
    }

    let totalCost = price * quantity;
    if(discount != null){
        totalCost -= discount;
    }

    totalCost *= (1 + taxRate);

    return totalCost;
} 

console.log(refactorCalculateTotalCost(20, 2, 0.5, 10 ))
console.log(refactorCalculateTotalCost(10, 2, 0.5))
console.log(refactorCalculateTotalCost(10, 2, "l"))