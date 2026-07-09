const getTheTitles = function(books) {
    // Make an empty array
    // Assign book titles to empty array
    const titles = [];

    books.forEach((entry) => {
        titles.push(entry["title"]);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
