const GREETINGS = {
    en: "Good Morning",
    de: "Guten Morgen",
    fr: "Bonjour",
    ru: "Dobre Utra",
    kr: "Annyeonghaseyo"
};

module.exports.greet = function (code) {
    if (code) {
        // check if value associated with the language code exists
        if (!GREETINGS[code]) {
            return "Error! We don't support this language.";
        }
        else {
            return GREETINGS[code];
        }
    }
    else {
        // return greeting in english if code is empty
        return GREETINGS['en'];
    }
}

module.exports.greetRandom = function () {
    // _.values returns values of objects in array
    // _.sample returns any random item in array
    return GREETINGS.en;
}