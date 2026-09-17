function upgradeCrew() {
    const pirates = [{
        name: "Thi",
        bounty: 200,
        strength: 800 
    },
    {
        name: "Hoa",
        bounty: 400,
        strength: 900 
    }];

    const awakenedPirates = pirates.map((pirate) => ({
        name: pirate.name.toUpperCase(),
        bounty: pirate.bounty * 2,
        strength: pirate.strength * 1.5
    }));

    console.log(awakenedPirates);

    const monsterTrioCandidates = pirates.filter(pirate => pirate.strength > 500);

    console.log(monsterTrioCandidates);
}
upgradeCrew();