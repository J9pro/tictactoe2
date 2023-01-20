
# Tic-Tac-Toe: <a href="https://brilliant-kringle-9ea801.netlify.app/">Try it!</a>

![Tic-Tac-Toe Gameplay](https://user-images.githubusercontent.com/57073322/213552866-b8da58c7-7d9b-426a-8fa3-7770e9cc8fa9.gif)

This was an exercise in project management in which I organized a small group of women-only software engineers to create a Tic-Tac-Toe game with JavaScript. This project allowed the group to practice setting up and closing issues, forking, and making pull/merge requests. We held daily standups and weekly meetings to collaborate on the JavaScript game logic. As the project manager, my role was to create simple, granular issues so that even novice engineers would have opportunities to contribute, to manage pull/merge requests from contributors, and resolve code conflicts. I also documented the JavaScript code extensively so that that even novices in JavaScript can follow the flow of the game's logic.

## How It's Made:

**Tech used:** <img src="https://img.shields.io/badge/-JavaScript-B4E582?logo=javascript&logoColor=F7DF1E&style=flat&labelColor=454545">

The group used HTML, CSS, and JavaScript in combination with the GitHub repository. We used Discord for daily standups, and Google Meet with screen-sharing for JavaScript collaboration. At the end of the project, the repository was hosted through Netlify.

## Optimizations

The primary optimization in this project was to deconstruction the eight possible win conditions into a 'for...of' statement that simplified the conditionals required to determine a winner by looping through the iterable objects (the winCondition arrays). The alternative would have been to create numerous 'if/else' statements for each of the eight win conditions. 

## Lessons Learned:

My biggest takeaway from this project was the use of VSCode tools to resolve conflicts and merge code when multiple contributors were making changes to the same code. I was able to compare revisions and determine which contributions were most appropriate for the success of the project. The thing I most enjoyed about the project was the collaborative aspect of hearing from the other engineers why they made specific choices.
