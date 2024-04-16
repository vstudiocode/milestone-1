import readline from 'readline-sync';

import { Person, CoordinatesMap } from './interfaces';

const information = "https://github.com/vstudiocode/milestone-1/raw/main/information.json";
const cords = "https://github.com/vstudiocode/milestone-1/raw/main/cords.json"; // 2de json wordt nooit gebruikt?

console.log("Welcome to the JSON data viewer!\n\n1. View all data\n2. Filter by ID\n3. Exit\n"); // Extra \n zodat die nog een lijn tussen laat

async function printNameAndId() {
    try {
        const informationResponse = await fetch(information);
        const informationParsed : Person[] = await informationResponse.json();
        for (const information of informationParsed) {
            console.log(`- ${information.name} (${information.id})`);
        }
    } catch (error: any) {
        console.log(error);
    }
}

async function printAllInfoFromID(id: number) {
    try {
        const informationResponse = await fetch(information);
        const informationParsed : Person[] = await informationResponse.json();
        let foundId = false;
        for (const information of informationParsed) {
            if (information.id === id) {
                foundId = true;
                console.log(`- ${information.name} (${information.id})`);
                console.log(`  - Description: ${information.description}`);
                console.log(`  - Age: ${information.age}`);
                console.log(`  - Active: ${information.active}`);
                console.log(`  - Birthdate: ${information.dateOfBirth}`);
                console.log(`  - Image: ${information.profilePhotoUrl}`);
                console.log(`  - Status: ${information.status}`);
                console.log(`  - Hobbies: ${information.hobbies.join(', ')}`);
                console.log(`    - Address ID: ${information.address.id}`);
                console.log(`    - Address Street: ${information.address.street}`);
                console.log(`    - Address City: ${information.address.city}`);
                console.log(`    - Address Country: ${information.address.country}`);
            }
        }
        if (!foundId) {
            console.log("\nError: ID was not found.");
        }
    } catch (error: any) {
        console.log(error);
    }
}

let choice : number = Number(readline.question("Please enter your choice: "));

if (choice === 1) {
    console.log(); // om een lege lijn te outputten
    printNameAndId();
} else if (choice == 2) {
    let filter : number = Number(readline.question("Please enter the ID you want to filter by: ")); // in mijn json data is ID een integer
    console.log(); // om een lege lijn te outputten
    printAllInfoFromID(filter);
}
// Er moet geen else if voor 3 zijn omdat de code hier toch stopt.

export {}
