var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
    res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: 500
        
        };

        console.log(req.body);

        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        var totalDiff = 0;

        //nested loop
        for(var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDiff = 0;

            for(j = 0; j< friends[i].scores[j]; j++) {
                totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if(totalDiff <= bestMatch.friendsDiff) {
                    bestMatch.name = friend[i].name;
                    bestMatch.photo = friend[i].photo;
                    bestMatch.friendDiff = friend[i].totalDiff;

                }
            }
        }

        friends.push(userData);
        res.json(bestMatch);
    });
}