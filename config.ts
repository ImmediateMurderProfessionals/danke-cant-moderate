import ConfigType from "./src/types/ConfigType";

require('dotenv').config();

const config: ConfigType = {
    "bot": {
        "clientID": process.env.CLIENT_ID ?? "put something here i want to make a fork of the wolf of ayup so i can use it in any server i want cuz im false banned from ayup public and i want to trade stocks", // The client ID of the bot
        "guildID": "jdhihfjf", // The guild for the game to be played in
        channels: {
            "info": "dbdhf",
            "log": "udhud7"
        },
        messages: {
            "priceBoard": "sdddd",
            "leaderboard": "sbdjbff"
        },
        newsAmountTruncate: 6,
        newsLengthTruncate: 40,
        leaderboardSizeTop: 20,
        leaderboardSizeBottom: 10,
        useEphemeralPurchase: true,
        useEphemeralWire: true,
        maxProfileHoldingsDisplay: 15,
        baseRoleId: "a",
        modRoleId: "a",
        topShareholdersAmount: 3
    },
    "theme": {
        financialCompanyName: "Ayup Express",
        financialCompanyTicker: "AYXP",
        financialCompanyLogo: "AYXP",
        financialCompanyColor: `#016FD0`
    },
    "colors": {
        "green": `#00c805`,
        "red": `#ff5001`,
        "blue": `#5865f2`
    },
    "game": {
        "startingBalance": 10000000, // Starting balance in CENTS
        "minHeldWire": 10000001,
        "startingCreditLimit": 20000000, // Starting credit limit in CENTS
        "randomWalkVolatility": 0.0025,
        "randomWalkInterval": 1, // In minutes
        "randomWalkAmount": 15, // Number of stocks to randomly walk
        "minimumStockPrice": 1,
        "chartsDaysBack": 15, // Number of days to show in the price chart
        "etcOffset": 4,
        "loanMaxMultiplier": 4,
        "creditDailyInterestPercent": 3,
        "creditDailyInterestMultiplier": 1.03,
        "maxRequestId": 120000000,
        "defaultItems": [
            {item: "000", quantity: 1},
            {item: "900", quantity: 1},
        ],
        "randomWalkBias":  1.30,
        "minimumLevelRequestAmount": 1,
        "modCommission": 0.75
    },
};

export default config;
