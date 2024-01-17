const speed = document.getElementById("speed");
const prod = document.getElementById("prod");
const time = document.getElementById("time");
const items = document.getElementById("items");

const outputElement = document.getElementById("output");
const buttonElement = document.getElementById("calc");

buttonElement.addEventListener("click", () => {
    const speedValue = speed.value;
    const prodValue = prod.value;
    const timeValue = time.value;
    const itemsValue = items.value;

    const ticks_per_swing = 12 / ((((speedValue * prodValue) / timeValue) * itemsValue) / 60);
    console.log(ticks_per_swing);

    if (ticks_per_swing) {
        const output = reverseMod(ticks_per_swing);
        outputElement.innerHTML = output;
    } else {
        outputElement.innerHTML = "Invalid input";
    }
});



function reverseMod(v) {
    // Arbitrary limit of 2^28 to finish in a reasonable amount of time
    for (let i = 1; i < 268435456; i++) {
        let result = parseFloat((v * i).toFixed(8)); // reduce floating point errors
        if (result % 1 === 0) {
            return `${result} % ${i}`;
        }
    }
    return "No solution found"
}