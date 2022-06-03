# Justin Kwon - DECO2017 StudBud Web App Prototype
## Overview 
As stated in the design brief, my web application StudBud focuses on employing a number of tools to help fellow students in need of studying. These tools include a stopwatch, task manager and dictionary, alongside a music player at the bottom of each page in the app. Icons and music are all custom made - now that I think about it I guess I prioritised stylisation over the rest of the project...

Start from **index.html**, then click on **create.html** for the dashboard. App pages include **stopwatch.html** and **pomodoro.html** for the timer, task.html for the kanban board and **dictionary.html** for the dictionary.

Two css files have been made: **style_start.css** for the homepage, and **style.css** for the rest. Three js files have been made: **script.js** for the majority of the app, **dictionary.js** for the dictionary and **server.js** for hosting.

## Feedback + Challenges
As evident in my feedback for the design brief, I was awarded for my design approach to help students study in the most positive mood, with simple colour psychology and rule of thirds dictating many pages of the StudBud website.

### Challenge 1
Despite the strengths of my design brief, I was told that I did not make it clear how I could navigate between pages. This is further substantiated by how in the design brief, the icons on my navigation bar had no text on them - just symbols. This could make the application very difficult for users. 

### Challenge 2
I was also told I was vague about my design choices because my iterative process was just adding colour to wireframes. Having a colour scheme too simple of just blue and white can cause confusion. There were a number of features that were not discussed much about, and I have decided to fix that as shown on the bottom of this page.

### Challenge 3
The best marked feature of my design brief was the personas and justification - a pair of students who want to make it easy to read information and study in an organised manner, and collaborate their information. I had the idea of implementing a file creator as a result, but unfortunately - there have not been similar solutions out there made with just HTML, CSS and Javascript. I realised that if I wanted to at least make a functioning web application, I needed three tools, the first and second being the stopwatch and the task manager. I made the ultimate sacrifice of making a dictionary search page instead, deeming the final product unworthy of the original design brief to a degree. I am still very disappointed about this choice. However, I still managed to achieve customisability of organising information, something I mentioned in my design brief by adding a description to the task manager and giving the abilitiy to switch between stopwatch and pomodoro timers.

## Response to Challenges 

### Challenge 1
As response to my first challenge, which regards navigation, I have made it clear that my navigation bar can now be read in both text and symbol form.
<img src="https://i.ibb.co/j8zmpHP/Stud-Bud-001.png" alt="Navbar differences" title="Navbar differences">


I did not make it thoroughly clear in my design brief, but the real application starts from the dashboard (create.html) and from then you can choose between the stopwatch, task manager and dictionary. Once you leave the dashboard, you can always enter these features again through clicking on the icons on the navbar.
<img src="https://i.ibb.co/bmDbFrF/Stud-Bud-002.png" alt="Navigation on dashboard" title="Navigation on dashboard">

I also implemented navigation on the timer, where a click on the bottom can alternate between stopwatch and pomodoro modes.
<img src="https://i.ibb.co/ctSXtY4/Stud-Bud-003.png" alt="Small navigation on timer" title="Small navigation on timer">

### Challenge 2
As response to my second challenge, regarding my design choices, I looked back at my design for the kanban board task manager and realised, although tasks can be in different colours, users would be unable to visually determine them as all columns are white. I decided to leave the tasks the same colour, but making the columns darker in correlation to their urgency. 
<img src="https://i.ibb.co/f26m6Dx/Stud-Bud-004.png" alt="Kanban board evolution" title="Kanban board evolution">

A similar case was made in regards to the buttons in the stopwatch pages.
<img src="https://i.ibb.co/0Fvj1LW/Studbud-007.png" alt="Pomodoro button evolution" title="Pomodoro button evolution">


I admit, initially I had no idea where to put my music player so I just slapped on a giant circle with a play button and called it a day. For the finished product, I decided to place it on the bottom of the application, as a small bar in which you can start, stop, reset and adjust the volume of.
<img src="https://i.ibb.co/qNZZQZq/Stud-Bud-005.png" alt="Finally got an actual music player" title="Music player">

### Challenge 3
As an admittedly last-minute attempt at completing my web application, I added a dictionary page and formatted it in a similar way to the task manager and stopwatch pages. 
<img src="https://i.ibb.co/frLDT52/Stud-Bud-006.png" alt="Dictionary" title="Dictionary">

## Bibliography
### Codes
The elements **tricolumn** and **onecolumn** are from my other web design assessment which can be accessed here: https://replit.com/@JustinKwon2/Gold-Foundation-MAIN-PAGE#index.html

- TalkersCode. (2022, April 15). Create custom audio player using HTML5 and JavaScript. TalkersCode.com - A Web Development And Internet Marketing Blog. Retrieved June 3, 2022, from http://talkerscode.com/webtricks/create-custom-audio-player-using-html5-and-javascript.php
- Jana, S. (2022, April 26). Create a simple stopwatch using JavaScript (tutorial + code). Foolish Developer. Retrieved June 3, 2022, from https://www.foolishdeveloper.com/2021/10/simple-stopwatch-using-javascript.html
- Collier, J. (2021, May 6). Comparing Javascript &amp; jQuery through building a pomodoro timer. DevelopIntelligence. Retrieved June 3, 2022, from https://www.developintelligence.com/blog/2016/10/comparing-javascript-jquery-build-a-pomodoro-timer/
- Karthik. (2022, April 25). Creating a Kanban Board with HTML, CSS &amp; JavaScript. Karthik Dev Articles. Retrieved June 3, 2022, from https://karthikdevarticles.com/creating-a-kanban-board-with-html-css-and-javascript
- Yelne, P. (2022, January 3). Build a dictionary app in HTML CSS &amp; JavaScript. Codegyan. Retrieved June 3, 2022, from https://codegyan.in/articles/build-a-dictionary-app-in-html-css-javascript.htm
  
### Pictures
- Presta, H. (2019, August 16). Tips for achieving school/work balance. UMKC Roo News. Retrieved June 3, 2022, from https://info.umkc.edu/unews/tips-for-achieving-school-work-balance/
- Department of Foreign Affairs and Trade. (2013, November 6). Group of young people texting on mobile phones. Flickr. Retrieved June 3, 2022, from https://www.flickr.com/photos/106853342@N04/10699648676 


### Music
Credit to Toby Fox, who inspired me to make my little song on the music player!!