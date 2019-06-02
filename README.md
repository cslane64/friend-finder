# FriendFinder

This friend finder app is used to find those people that think along the same wave lengths as you.

Basically you answer some questions, and then the app finds the best match based on other users answers in the system.

Technologies used are:
 [Express]
 [Node.JS] 
 [HTML]
 [JSON]
 [AJAX]

The user is presented with a "home" page with a button that allows then to begin the survey.

On the survey, the user is required to put in their name and a URL to a photo of themselves and 10 questions using the Likert scale. The Likert scale is a way to gaige the users feeling about certain statements by strongly agreeing, strongly disagreeing or selecting an answer somewhere in between those two extremes.

Once the questions have been answered, the progrma logic calculates the users total score, and compares it to the scores of each of the people in the system. It does this by using a nested loop. The first loop iterates over each person already in the system. It then loops through each of those people's question scores and tallies the difference between the user's score. for example, If the user answered 1 to the first question and the person already in the system answered 3 then the difference is 2. That process happens for each question answered by each person. 

As each person in the system is looped through, the dfference is checked to see if it is the lowest score so far. If it is, then the system believes that it has found your best match based on the fact that you answered your questions most similarly.

Once the alleged best match has been found, a modal (which is an html element that added a good 6 hours onto this homework assignment. FYI, it appears that despite the fact that you download the code snippet directly from the bootstrap website, it needs an "older" script tag in prder to work properly... but I digress...) pops up with the name and picture of who the friend finder app believes is your best match.

Version 2.0 of this app, there won't be a version 2.0 of this app... but if there were, it would allow for more specific information about the user to be collected. For instance, many consider this a dating app, but there is no way to detremine if I prefer men pr women to date. I ended being most compatible with Billy Bob Thorton. He's a pretty cool guy, but not someone I would like to date. 

Other information that would be relevent is if the user was a New York sports fan. If they were into photography whether they prefer Canon or Nike, truck preference Ford or Chevy, soft drink preference Coke or Pepsi. As a Ford driving, Coke drinking, Canon shooting Red Sox fan... these things are critical to know up front.

Enjoy the app and hopefully you find yuour best match.

Thanks,
Chris





