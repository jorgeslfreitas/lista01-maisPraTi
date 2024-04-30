let num = 101;
let count = 0;

while (count < 50) {

    let countPrimos = 2;
    let restoZero = 0;

    while (countPrimos < num) {
        if (num % countPrimos == 0) {
            restoZero++;
        }
        countPrimos++;
    }

    if (restoZero == 0) {
        console.log(num);
        count++;
    }

    num++;
}
