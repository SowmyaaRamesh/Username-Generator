const marvelComicsCharacters = require('marvel-comics-characters');
let name = "";
let prefix_boyish = ["Murk", "Dark", "Murky", "Overlord", "Inferno", "Jazz", "Raze", "Viper", "Boom", "Smoky", "Thunder", "Gale", "Flare", "Tor", "Spy", "Cyborg", "Fury", "Drone", "Shell", "Trip", "Valla", "Odin"]
let prefix_girly = ["Issa", "Iam", "xoxo", "xcx", "snazzy", "sassy", "Liz", "cutie", "pie", "choco", "lava", "toxic", "glitter", "sparkle", "glisten", "shimmer", "frey", "Iris", "Gaia", "Danae", "nyx"]
let prefix_neutral = ["One", "Itsme", "Bumfazzle", "Wallah", "Ismile", "Issa", "Iam", "Me", "Meta", "ricardo", "milos", "stalin", "Dat", "WhoDat", "Izzame", "Lil", "Attis", "Chaos", "Demons", "Spy", "Cyborg", "Hypno", "Krato", "Toxic", "Gale", "Viper", "Venom", "Epoch", "Enigma"]

let flag_boyish = ["Miss", "Dina", "Robbie", "Madame", "Doll", "Natasha", "Scarlet", "Kelly", "Ms", "Queen", "Lady", "Jessica", "Alice", "Emma", "Vega", "Angel", "Amazoness", "Lily", "Woman", "Girl", "Lace", "Old", "Gamora", "Medusa", "Thena", "Satana", "Daughter", "She"]


function getName(category) {
    let random;
    let random_prefix = "";
    if (category == "Girly") {
        random = Math.floor(Math.random() * 10);

        if (random > 7) {
            name = marvelComicsCharacters.random();
            name = name.replace(/[^a-zA-Z0-9]/g, '_');
            random = Math.floor(Math.random() * prefix_girly.length)
            random_prefix = prefix_girly[random];
        } else {
            var Override = {
                prefixes: ["Starry", "Vapor", "Placid", "Fernweh", "Itsme", "Yoyo", "I", 'Issa', 'Iam', "Frilly", "Sweety", "Sugar", "Hippy", "Sizzles", "Chic", 'Queen', 'Izza', 'xoxo', 'Me', 'Princess', 'Princy', "Leto"],
                suffixes: ["snazzy", "sassy", "Liz", "cutie", "pie", "choco", "lava", "toxic", "glitter", "sparkle", "glisten", "shimmer", "frey", "Iris", "Gaia", "Danae", "nyx", "Rhea", "Hestia", "Girl", "Kitty", "Maggi"]
            };
            var goby = require('goby').init(Override);

            name = goby.generate(['pre', 'suf']);
            name = name.replace(" ", "");

        }
        return name;
    } else {
        name = marvelComicsCharacters.random();
        name = name.replace(/[^a-zA-Z0-9]/g, '_');
        if (name.search("_") == -1) {
            if (category == "Boyish") {
                random = Math.floor(Math.random() * prefix_boyish.length)
                random_prefix = prefix_boyish[random];

            } else if (category == "Neutral") {
                random = Math.floor(Math.random() * prefix_neutral.length)
                random_prefix = prefix_neutral[random];
                if (random > 15) {
                    random_prefix = random_prefix.concat("_");
                }

            }

        }
        name = random_prefix.concat(name);
        return name;
    }


}

function isValidated(name) {
    let index = 0;
    for (index in flag_boyish) {
        if (name.search(flag_boyish[index]) != -1) {
            return false;
        }
    }

    return true;
}

function genUsername(category) {


    usernames = []
    for (var i = 0; i < 10; i++) {
        name = getName(category);

        if (category == "Boyish") {
            while (!isValidated(name)) {
                name = getName(category);

            }
        }
        usernames.push(name);
    }
    return usernames;
}




module.exports = genUsername;