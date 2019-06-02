var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
    res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 500
        
        };

        //console.log(req.body);

        var userData = req.body;
        var userScores = userData.scores;

        //console.log(userScores);

        var totalDifference = 0;

        //nested loop
        for(var i = 0; i < friends.length; i++) { parseInt(totalDifference) < parseInt(bestMatch.friendsDifference)
            console.log(friends[i]);
            totalDifference = 0;

            for(var j = 0; j < friends[i].scores.length; j++) {
                //console.log("Before calculation:" + friends[i].name + totalDifference);
                //console.log("Users Scores " + userScores[j]);
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                //console.log("After calculation:" + friends[i].name + totalDifference);
                //debugger;
                //console.log("bestMatch Difference " + bestMatch.friendDifference);
                if(parseInt(totalDifference) <= parseInt(bestMatch.friendDifference)) {
                    //console.log("Best Match friend difference: " + friends[i] + bestMatch.friendDifference);
                    bestMatch.name = friends[i].name;
                    //console.log(bestMatch);
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                } //else {
                   // console.log("There is trouble in River City " + totalDifference + " " + bestMatch.friendDifference);
                //}
                //console.log("Total Difference: " + totalDifference);
            }
        }
        
        friends.push(userData);
        //console.log(friends);
        
        res.json(bestMatch);
        //console.log(bestMatch);
    });
}