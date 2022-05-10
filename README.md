# module-6-assignments
RoboGarden Bootcamp assignments using Ionic

## Reminder App assignment prompt
Create an Ionic application:
Using the Ionic CLI, type in the correct command, which will create a tab based Ionic application.

Give the following names to two of the three tabs and their corresponding pages:
Events
Reminders

The events page should include 2 cards, which contain information about four different events. Your cards should contain:
Header
Sub-header
Ion-icon
Content
Label

The Reminders page should contain buttons that have the reminder date as the text of the button. Once the user clicks the button that has a specific date, an alert should pop up with a message explaining the date reminder. You should add at least 3-5 buttons and alerts. Each 3 buttons should be placed on the same row. The last 2 buttons should also be placed on the same row.

## Planner app assignment prompt
Description:
In this project, you will use Ionic to create an application that will help you plan this year’s goals that you would like to achieve.
The application will also save all your achievements of the year for you to be able to take a look at what you have completed this year.
Your application should include :
To Do List page, which should be updated weekly.
Goals page, which should be updated monthly.
Achievements page, which will contain all the plans that you have finished in your To Do List and Goals.
Notes page, where you can add a detailed description of what you completed each week.
Video diary, which will contain videos that motivate you to work.
Images diary, which will contain images that motivate you to work.

Step 1: Create the pages:
You should create all the pages that will be included in this project :
To Do List
Add Task
Goals
Add Goal
Achievements
Notes
Add Note
Video Diary
Images Diary

Step 2: Create a Firebase database:
In this step, you will create a Firebase Database and connect it to the Ionic application.
The database will include the tables and their variables, accordingly:

Task:
ID
Name
Description
Date_of_start
Date_of_end
Status

The initial value of the status should be “Not Done”:
ID
Description
Name
Date_of_start
Date_of_end
Status
Note:

ID
Name
Header
Details
Importance

Step 3: Add UI components to the pages:
To Do List page:
This page’s contents should be displayed in a list, and each element (task) in the list should have a checkbox. Once the user clicks on the checkbox, a toast should appear showing the user: “This task has been done.”
This page should include a button that redirects you to the Add Task page.
Add Task page:
This page should include all the inputs required to create a task, as well as a button, which will update the database with a new task.
Goals page:
This page’s contents should be displayed in a list, and each element (goal) in the list should have a checkbox. Once the user clicks on the checkbox, a toast should appear showing the user: “This task has been done.”
This page should include a button that redirects you to the Add Goal page.
Add Goal page:
This page should include all the inputs required to create a goal, as well as a button, which will update the database with a new goal.
Achievements page:
This page’s contents (achievements) should be displayed in Cards.
The card will show the name, the description, and the date the task was done.
Notes page:
This page’s contents should be displayed in Cards.
The card will show the name, the description, and the date the task was done.
This page should include a button that redirects you to the Add Note page.
Add Note page:
This page should include all the inputs required to create a task, as well as a button, which will update the database with a new task.

Step 4: Handling the database changes:
You should handle any changes in the database, such as:
Once the user adds a task in the Add Task page, the task should appear in the To Do List page.
Once the user adds a goal in the Add Goal page, the goal should appear in the Goals page.
Once the user adds a note in the Add Note page, the note should appear in the Notes page.
Once the user checks the checkbox of the task in the To Do List page, the task should be removed from the To Do List page and then added to the Achievements page.
Once the user checks the checkbox of the goal in the Goals page, the goal should be removed from the Goals page and then added to the Achievements page.
