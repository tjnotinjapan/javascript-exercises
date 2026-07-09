const findTheOldest = function(people) {
        
    // Get today's date
    const today = new Date();

    // Create empty age dictionary
    // Populate it with names and ages from the people argument
    const ageDictionary = [];
    
    people.forEach((person) => {
        let name = person["name"];
        let age = (today.getFullYear() - person["yearOfBirth"]);
        if (person["yearOfDeath"]) {
            age = (person["yearOfDeath"] - person["yearOfBirth"]);
        } 
        
        let newEntry = {"name": name, "age": age};
        ageDictionary.push(newEntry)
    });

    // Compare ages to find the oldes one in the age dictionary
    // Set first entry as return name, then update if following entry is older
    // Return the name entry from people array that matches return name value at end
    let returnName = ageDictionary[0]["name"];
    for (i = 1; i < ageDictionary.length; i++) {
        if (ageDictionary[i-1]["age"] < ageDictionary[i]["age"]) {
            returnName = ageDictionary[i]["name"]
        }
    }

    return people.find(entry => entry.name === returnName);

};

// Do not edit below this line
module.exports = findTheOldest;
