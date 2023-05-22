/**
 * START: Follow the instructions below.
 */

// Add types to this function declaration.

function doubleThePopulation(value:any) {
    return value * 2;
}

// Correct or remove the function calls which cause type errors.

doubleThePopulation(5);

doubleThePopulation("6.12");

doubleThePopulation(8_526);

doubleThePopulation(false);

// Alter this function so the `language2` parameter is optional.
// Hint: Check `language2` is not `undefined` before passing it to `console.log()`.

function languagesSpoken(country: string, language1: string, language2?: string): void {
    console.log(`The languages spoken in ${country} are:`);

    if(typeof language2 === "string"){
        console.log(language2);
    }

    console.log(language1);
}

languagesSpoken("Colombia", "Spanish", "English");

languagesSpoken("Italy", "Italian");

languagesSpoken("New Zealand", "English", "Māori");

// ----

export {};
