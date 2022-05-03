//All primes are 6k plus or minus 1 after 5
//5 = (1*6)-1 //7 (1*6 + 1) //11 = (2*6)-1  //13 (2*6) + 1
//17 (3*6)-1 //19 (3*6)+1
//k=1,2,3 *(6) //-1,+1 every iteration of k

//array of 200 O(n)

const isPrime = (numberToTest) => {
    if (numberToTest <= 1) return false;
    if (numberToTest <= 3) return true;

    if (numberToTest % 2 === 0 || numberToTest%3 === 0) return false;

    for(let i = 5;i*i < numberToTest;i = i+6){
        if(numberToTest%i === 0 || numberToTest%(i+2) == 0) false;
    }
    console.log("is Prime", numberToTest);
    return true;
}

let arr = Array.from(Array(200).keys());
const checkAllPrimes = arr => {
    arr.forEach(ele => {
        isPrime(ele);
    });
}

checkAllPrimes(arr);


//if over 5 does it divide by 6 plus or minus 1