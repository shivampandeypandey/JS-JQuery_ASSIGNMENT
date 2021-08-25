let qTeams = {"aaiec": 400,
    "aaiwc": 60,
    "qai": 200,
    "poc": 100,
    "gtm": 50,
    "hr": 10
    };
let teamMembers = Object.keys(qTeams).sort((i,j) => qTeams[j] - qTeams[i]);
console.log(teamMembers);
