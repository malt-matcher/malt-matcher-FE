<h2 align="center">
  <img alt="funky" src="./src/assets/mmlogo.png" width="738px"/>
<br>
<br>
  Malt Matcher is the brain-child of Cole Stephenson, where a group of 7
        developers both collaborated on, and spearheaded different ends of the
        development process to create an app that centers around something we
        are all passionate about: BEER!
</h2>
<br>
<p align="center"> We worked with the React Framework on the Front-End and Ruby on Rails on
        the Back-End, and on both sides, we implemented GraphQL to create this
        app to find the breweries that carried our brew of choice.
<br>
<p align="center">We hope you enjoy!

<p align="center">🍻 Cheers! 🍻</p>

<div align="center">

<!-- ## <b>Deployed Page:</b>

[Malt Matcher](https://malt-matcher-fe.herokuapp.com/) -->

<br>

</div>

## <b>Getting Started:</b>

<!-- _To simply experience the application visit the link listed above_ -->

_For the curious developer:_

* Fork [Malt Matcher FE](https://github.com/malt-matcher/malt-matcher-FE) repository.
  * Please contact us for an API key.
  * Configure local `.env` file with API key after it's been supplied.
* Clone to your local machine
* `cd` into the repository
* Once in the repository, run `npm install`.
* After installation, run `npm start`.
* A live server should now be available at `http://localhost:3000/`.
* Paste this addresses into your browser to run the app.

<br>

## <b>Walkthrough:</b>

**USER FLOW:**

Landing Page:

https://user-images.githubusercontent.com/97558758/197641327-e50cc1f9-8513-4867-aa8b-2d3e089d9c1e.mov

Search for Breweries:

https://user-images.githubusercontent.com/97558758/197641352-8e5aa317-0bc0-4ea3-8d16-074621027459.mov

List of Breweries that Match Search:

https://user-images.githubusercontent.com/97558758/197641386-0bf6cb24-3685-4397-949b-578e8c3c2895.mov

Website & Social Media Links:

https://user-images.githubusercontent.com/97558758/197641421-dfd2151e-aa71-4f41-a568-f55336055f61.mov

List of Beers that Brewery has:

https://user-images.githubusercontent.com/97558758/197641457-4ffa8fad-258f-4248-8e4e-d8757e8fa415.mov

Back to Search Button:

https://user-images.githubusercontent.com/97558758/197641489-acfdb67a-3315-47aa-babe-2766b67b6148.mov

Brewery Directions:

https://user-images.githubusercontent.com/97558758/197641511-478d92c4-be0e-40b3-ac50-0ae240bd1079.mov

About Us:

https://user-images.githubusercontent.com/97558758/197641545-5ab705d5-689e-4a00-a08e-724567d53a82.mov

**ERROR HANDLING:**

Loading Message:

https://user-images.githubusercontent.com/97558758/197641597-904405ed-1755-4b59-87fc-9531e61ce1fd.mov

No Search if All Dropdowns don't have values:

https://user-images.githubusercontent.com/97558758/197641352-8e5aa317-0bc0-4ea3-8d16-074621027459.mov

No Results on Brewery Search:

https://user-images.githubusercontent.com/97558758/198124807-9905faac-89b5-466c-aad6-29b6b893b6b0.mov

Bad URL:

https://user-images.githubusercontent.com/97558758/197641640-4e197ee0-cc02-4f1e-b2c6-90acce01832c.mov

<br>

## <b>Planning:</b>

- [Wireframe & Component Architecture](https://excalidraw.com/#json=qXbjxtAtpm6PYjBsN3pnN,Eq-tFQY0344kp1S-Yt4Pyw)<br>
- [Organization Project Board](https://github.com/orgs/malt-matcher/projects/1/views/1)

<br>

## <b>Features:</b>

**User:**

- From Landing Page, the user can click the "Find Some Brews!" button to take them to a search page
- User can search by Style, City, and Radius.
- Brewery results are displayed on the next page in a scrollable list. If no breweries match the search criteria, a message will be shown to the user.
- User can click on the name of the brewery to be led to that breweries website. They can also click on the breweries Facebook, Instagram, and Twitter links to be led there as well.
- After a user clicks the breweries beers button, they are led to a page that lists out the beers the brewery carries.
- The user can then either click the "Back to Search" button for another search, or can click the brewery name's direction button to be shown a Google Map imbed where they can see the breweries pin on a map, and also get directions bia Google Maps.
- If the user clicks the "About" text in the top right of the page, they will be taken to a page that details the project overview, as well as the team that worked on the project.
- If the user enteres a bad URL, they will be led to an error page with a button that will take them to the Landing Page.

**Developer:**

- Best GraphQL & React practices to ensure application stability
- End to End testing with mulitple UX in mind
- Provide different React Router routes
- Secure a 95% lighthouse accessibility score on all components
- A consistent, modular file structure

<br>

## <b>Future Extensions:</b>

- Extend search throughout the entire US, and then...the WORLD!
- Ability to Login and favorite breweries & beers.
- Find a higher quality API source for the BE to use.

<br>

## <b>Technologies:</b>

**Front-End**
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

**Back-End**
![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white)
![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

**Both-Ends**
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![CircleCI](https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

<br>

## <b>Group Reflections:</b>

<details>
<summary><b>Andrew Miller</b></summary>
<p>Bottoms up! This was our first time working with members of a team who handle backend software development. Previous to this, our servers were all local or already set up for us. This presented us with a unique opportunity to learn about their process and how that fit in to the front end we haven't yet seen. Learning graphQL on the fly and making it work on both front end and back end seemed to be a challenge, but there is power in learning something well enough to execute properly in a short window of time. It was both humbling and exciting working with a group of some of the strongest developers I have met in the program to date. I am proud of the way this project has turned out so far!</p>
</details>

<details>
<summary><b>Cole Stephenson</b></summary>
<p>Turing is built around the final summit of the Mod 4 capstone, and so I came into this project with the expectation of stress and grind. All that was put to rest by the ease of communication and progress this team had. I feel lucky to say that all six of my groupmates were kind, hardworking, and professional over the course of the last 2.5 weeks.
On both sides, we had to undertake self-teaching and implementing GraphQL. We had to configure circleCI and manage a pipeline for the first time. We had to stay in constant communication about the flow of data, and got to share the win of connecting the FE and BE for the first time.
We made a fantastic project that we can all be proud of. Thank you all for your time and effort toward that end. I'm confident all of you will go on to be killer devs in the wild.
Cheers!</p>
</details>

<details>
<summary><b>Jordan Farelli</b></summary>
<p>Looking back to the start of this project and seeing what the finished product looks like, it’s an incredible feeling to see what we accomplished as a FULL-STACK TEAM!!!
We took on a new language (GraphQL) and incorporated it within a React app on the FE, and Ruby on Rails on the BE.
Setting a project up in a new language definitely has its challenges. Everyone was fresh and (most of us) had no idea what a “schema” was.
As a team, we each took time to study GraphQL on our own and then came back together, talked about what we learned, and then mob-coded together to get the schema locked-down on the BE, and the proper query syntax on the FE to pull in the data we needed.
From start to finish, this project was a blast to work on with each individual, and it was great getting experience in a full-stack project.
Cheers, guys! :beers:</p>
</details>

<details>
<summary><b>Bryan Shears</b></summary>
<p>Working with both an agile full-stack team was a great experience. I am impressed with out quickly we learned and successfully implemented a new technology in GraphQL. Our front end and back end teams met consistently in daily stand-ups, to communicate issues that each end was having, which was key to our success. Sometimes this involved translating, back-end speak to front-end speak or vice versa, which was also a great learning experience. We also came together to troubleshoot, continuous deployment on CircleCI and issues on Heroku.  Our group honed in on our MVP, and didn't stray from accomplishing this goal, or letting the MVP get too large that the project became unrealistic in our given time-frame. It is humbling to work with such a skilled and intelligent group of developers!
Cheers!</p>
</details>

<details>
<summary><b>Bryce Simonds</b></summary>
<p>From the first day of project inception I had a good feeling my team of three front end engineers and 4 back end engineers were going to work well together. Everyone took the time and put the effort in when it came to defining the relationship and expectations for how our team communicates, our schedules and varying time zones, and how we will handle conflicts if any arise. WIth a solid foundation we moved forward into splitting up into front end focused tasks and back end focused tasks. This split could have also split our communication and collaboration, but because of our solid foundation my team continued to put in the effort to keep everyone up to date on any solutions, challenges, and/or blockers at our daily stand ups and our weekly team reflections. We all learned a TON (implementing GraphQL, CircleCI, hooking up front end repository to BE repository, how to work in a bigger team), finished our minimum viable product, and some might say we consider our team a bit of a family now. I highly recommend any of these engineers to any job as each individual’s skills are immaculate!</p>
</details>

<details>
<summary><b>Parker David Thompson</b></summary>
<p>Mob mentality meant a lot of things for this group, both in how we coded new technologies together or came together as a group, like a family. Working with an entire team of FE and BE developers was an unknown experience to me and I couldn't have landed with a better group. If communication is key was a real key then we would be the master key, everyone was open and honest during feedback and standup's and really drove the community culture and made it a place where you could grow as a developer. I wish nothing but the best for every member of this group, break a kneecap.</p>
</details>

<details>
<summary><b>Thiago Silveira</b></summary>
<p>Collaborating with the FE team has been my pleasure. I was fortunate to learn a bit about their flow and the different challenges they face in the front end. This project opened my eyes to how the back end and front end teams depend on one another every step of the way, to form a cohesive and unified MVP. The weekly stand ups and team retros not only made us better team players, but better developers as well.</p>
</details>

<br>

## <b>Contributors:</b>

**Front-End**

- Andrew Miller:
  [LinkedIn](https://www.linkedin.com/in/andrew-miller-0393b448/) | [Github](https://github.com/andrewmiller45)

- Cole Stephenson:
  [LinkedIn](https://www.linkedin.com/in/cole-stephenson-99688a240/) | [Github](https://github.com/colestephenson1)

- Jordan Farelli:
  [LinkedIn](https://www.linkedin.com/in/jordan-farelli/) | [Github](https://github.com/jfarelli)

**Back-End**

- Bryan Shears:
  [LinkedIn](https://www.linkedin.com/in/bryan-shears/) | [Github](https://github.com/b-shears)

- Bryce Simonds:
  [LinkedIn](https://www.linkedin.com/in/bryce-simonds/) | [Github](https://github.com/brycesimonds)

- Parker David Thompson:
  [LinkedIn](https://www.linkedin.com/in/parker-thomson-a15a68146/) | [Github](https://github.com/pdthomson)

- Thiago Silveira:
  [LinkedIn](https://www.linkedin.com/in/thiag-o/) | [Github](https://github.com/tig-o)
