function printBountyLeaderboard() {
    const crewList = [{
        name: "Zoro",
        bounty: 90000
    },
    {
        name: "Mario",
        bounty: 1000
    },
    {
        name: "Luigi",
        bounty: 800
    },
    {
        name: "Lucky",
        bounty: 780
    }
    ];

    crewList.sort((a,b)=> b.bounty-a.bounty);

    const icon = [ "🥇", "🥈", "🥉" ];

    for (let i = 0; i < crewList.length; i++){
         let icon1 = icon[i];
         if (icon1 === undefined){
            icon1 ="  ";
         }
        console.log(icon1 + i + ". " + crewList[i].name + " - " + crewList[i].bounty + " pts")
    }}

printBountyLeaderboard();