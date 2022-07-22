# Teach Yo'Self

Chris, Elise, Henry

---

### Links to deployed websites

Front-End: <br>
http://www.teachyoself.co/
https://teachyoself-web.herokuapp.com/

Back-End <br>
https://teachyoself-api.herokuapp.com/


---

### Links to GitHub Repository

Main GitHub <br>
https://github.com/Team-Elise-Henry-Chris

Front-End: <br>
https://github.com/Team-Elise-Henry-Chris/T3A2_frontend

Back-End <br>
https://github.com/Team-Elise-Henry-Chris/T3A2_backend


---

### Purpose

The primary purpose of Teachyoself is to enable users to locate and access high quality educational resources. 

While the internet has enabled unparalleled access to information, it can still be difficult to find suitable learning resources. Firstly, there are many platforms for educational content, and having to swap between and search on these platforms can be discouraging. Teachyoself overcomes this friction by collating resources in one central place. Furthermore, it can be difficult to assess the quality of a learning resource. Investing time to learn something only to find the resource lacks quality is frustrating and presents a barrier to entry to learning. Teachyoself overcomes this boundary with its community driven submission and rating system. Users submit educational resources to a topic in the form of a post submission, and other users in the community are then able to rate the resource. This process allows for the democratic selection of quality resources. Additional features such as posts filtering allow only the most relevant resources to be shown to the user.

Secondarily, Teachyoself provides a community environment for the sharing and discussion of topics. The separation of topics into their own pages is a self-selecting process that connects users together through a common interest, and allows them to share their passion. Once the core functionality of the app has been completed, additional community features such as commenting, user profiles and messaging will increase the degree of interaction possible between users, and improve the engagement and quality of the community.

While there are a lot of educational platforms, most do not share content from external sites. Sites that compile resources from multiple sources are often subject specific and curated by a select few individuals, while community discussion sites like reddit are typically not focused on education. Teachyoself aims to fill a void for cross-platform, community driven education resource collation.

---

### Functionality/Features

- Navbar
    - Home page - contains all the topics
    - Create posts - allows logged in users to create a new post
- User Authentication
    - Sign up page
    - Log in page (user will be directed here if trying to create a new post)
- Logged in users can rate a post using a star system 
- Logged in users can create, update and delete their own posts 
- All users can filter topics 
- Non logged in users are restricted to only viewing posts and topics  
- Admin can create/update topics/categories
- Admins can edit and remove any posts

---

### Target Audience

Anyone wishing to learn, teach or contribute to a topic that they are passionate about, in an online community of users.

For example, a professional photographer might post something about ‘How to set up the camera and compose a stunning photo’. This professional might write out the steps in text form, or create a podcast, video, article or any other type of resource and include a link to the resource in the post. Another hobbyist photographer user may also want to create a post to a link to a useful resource they found such as ‘How to correctly select lens filters’. This generation of content ranging from resource creators to consumers, and from hobbyist to professional creates a diverse range of resources that appeals to a wide audience. The target audience also doesn’t necessarily have to upload a post either - they can simply learn from other people's posts without sharing their own content, and provide ratings on posts when they desire. A quality and insightful post will get voted highly by many people - which eventually leads to the post becoming a foundational piece of knowledge for anyone interested in the topic. The quality rating ensures a high quality of resource, and filters out low quality posts that may discourage selective users.


---

### Tech Stack

- React
- Express
- Node.js 
- MongoDB
- Tailwind

---

### Dataflow Diagram (DFD)

#### Login/Sign up DFD
![DFD Login](./docs/Teach_Yoself_-_DFD_Login.png)

#### New Post DFD
![DFD New Post](docs/Teach_Yoself_-_DFD_new_post.png)

#### View Post DFD
![DFD View Post](./docs/Teach_Yoself_-_DFD_View_Post.png)

#### Edit Post DFD
![DFD Edit Post](docs/Teach_Yoself_-_DFD_Edit_Post.png)

#### Delete Post DFD
![DFD Delete Post](./docs/Teach_Yoself_-_DFD_Delete_Post.png)

#### View Topic DFD
![DFD View Topic](./docs/Teach_Yoself_-_DFD_View_Topic.png)

#### New Star Rating DFD
![DFD New Star Rating](./docs/Teach_Yoself_-_DFD_New_star_rating.png)

#### Edit Star Rating
![DFD Edit Star Rating](./docs/Teach_Yoself_-_DFD_Edit_star_rating.png)


---

### Application Architecture Diagram (AAD)

![AAD](./docs/Teach_Yoself_AAD.png)

---

### User Stories

- As a user, I want to be able to see a list of posts on a topic page, so that I can access resources to learn about the topic.
- As a user, I want to be able to log in/sign up, so that I can have full access to the website.
- As a user, I want to be able to access my account page, so that I can view and edit my details.
- As a user, I want to be able to submit a post, so that I can share a good resource I found.
- As a user, I want to be able to edit my post, so I can update it with more information and fix my mistakes.
- As a user, I want to be able to delete my post, in case I decide it isn't relevant.
- As a user, I want to see categories of topics on the main landing page, so that I can quickly navigate to my desired topic.
- As a user, I want to be able to sort and filter posts, so I can find the posts that are most relevant to me.
- As a user, I want to be able to rate a post out of five, so that I can let other users know how good the content is.
- As a user, I want to see a navigation menu, so that I can go to other pages of the website with ease.
- As a user, I want to be able to view the website easily on a mobile device, so I can interact with it on the go.
- As an admin, I want to be able to delete and edit posts, so I can remove malicious content.

---

### Wireframes

#### Original Design:

Our original wireframes were created in Balsamiq and used as a visual aid to improve and iterate upon. These wireframes were intentionally left to a low fidelity to make starting the wireframing process easy, and to allow us to visualise the site layout and discuss specific aspects to improve on.

Original Login Page Design  
![Login](./docs/badwf_login.png)

Original Home Page Design  
![Home](./docs/badwf_home.png)

Original Create Post Design  
![Post](./docs/badwf_post.png)

Original Topic Page Design  
![Topic](./docs/badwf_topic.png)

#### Reviewed/Final Design 

The following wireframes were created in figma with improvements and additional detail over the original designs. Attention was paid to the layout of tiles on the home page and topic page to prioritise the presentation of content and make the pages feel less cramped. The navbar design was changed to be more sleek, and made easier to navigate by following the modern convention of having the site name followed by navigation links on the left, and user profile related links on the right. The post tile arrangement was also elucidated in further detail while maintaining comfortable spacing on all screen sizes and a thumbnail icon for easy visual reference. The button layout on the login page was also adjusted to avoid any confusion of the login button for the register button.

Additional commentary on design choices, functions and actions has been described on the green 'post it' notes and red arrows, while relationships between screens have been shown through the black arrows.

**Login Page**
![Login Page](./docs/login.png)

**Home Page**  
![Home Page](./docs/home.png)

**Topic Page**  
![Topic Page](./docs/topic.png)

**Create Post**  
![Create Post](./docs/create-post.png)

**Create an Account**  
![Create an Account](./docs/create-account.png)

**Wireframe Overview/Project Flow**  
![Overview](./docs/wireframe-overview.png)

---
### Project Management Methodology

Implemented Agile project management methodology in combination with scrum.  The team worked off our strengths and weaknesses from the start, and we allocated coding tasks based on this knowledge. This resulted in Elise and Chris focusing on the front-end of the application, whilst Henry focused on the back-end works.  

As part of the scrum methodology we carried out daily standups with educators as scrum masters, assisting with any issues that we might have.  The team did daily catch ups via video and telephone conference to allocate daily work and update on previous day's progress.  This also allowed the team members to raise any concerns with what they were doing.  The team also utilised Trello boards for general and project planning.  Tickets identify the size and priority using different colors.  Each ticket also contains the team member carrying out the task, as well as linking it to commits/merges/pull requests from GitHub.  GitHub pull requests were generally reviewed by another team member to allow for error checking and conflict resolution.  



---
### Trello and Planning 

**29/06/2022**
![Trello 1 - 29/06](./docs/2022_06_29.png)

**30/06/2022 - 1**
![Trello - 30/06](./docs/2022_06_30_1.png)

**30/06/2022 - 2**
![Trello - 30/06](./docs/2022_06_30_2.png)

**30/06/2022 - 3**
![Trello - 30/06](./docs/2022_06_30_3.png)

**01/07/2022**
![Trello - 01/07](./docs/2022_07_01.png)

**04/07/2022**
![Trello - 04/07](./docs/2022_07_04.png)

**07/07/2022**
![Trello - 07/07](./docs/2022_07_07.png)

**11/07/2022**
![Trello - 11/07](./docs/2022_07_11_1.png)

**11/07/2022**
![Trello - 11/07](./docs/2022_07_11_2.png)

**11/07/2022**
![Trello - 11/07](./docs/2022_07_11_3.png)

**12/07/2022**
![Trello - 12/07](./docs/2022_07_12.png)

**13/07/2022**
![Trello - 13/07](./docs/2022_07_13.png)

**19/07/2022**
![Trello - 19/07](./docs/2022_07_19.png)

**22/07/2022**
![Trello - 22/07](./docs/2022_07_22.png)

---
#### Team Logbook 


**29 June**

- Found out who we are working with
- Connected on discord and 
- Brainstorming ideas
- Working out technologies and services to use
- Setting up Trello board
- Setup google doc to plan
- Laying out GitHub structure

**30 June**

- Set up github organisation for the team
- Decided on idea
- Researched different authentication solutions (userfront, auth0)
- Discussed order and scope of requirements
    - R1 first
      - Outline MVP and then write any additional features separately
    - Write up user stories
    - Dataflow and application diagram
    - Update user story subtasks as per diagrams
    - Wireframes
- Wrote up idea pitch
- Community Driven education resources app idea approved by Glen
  - Feedback: Admin to make topics and user chooses pre-existing topic to post to
- Trello screenshot updated
- Preliminary ‘Purpose’ and ‘Target Audience’ for review by team

**1 July**

- Started planning out the day and delegation of tasks
- Completed user stories
- Revisited MVP, outlined application features
- Decided to use lucidchart for diagramming
- Decided to use figma for wireframing
- Started wireframing collaboration in figma (desktop, tablet, mobile)
  - Homepage
  - Login
  - Account
  - Topic

**4 July**

- Working on DataFlow Diagram and meeting its expectations
  - Got feedback from Glen with an example of a good DFD
- Considering changing MongoDB to Postgres and mongoose with node-postgres to align with our more relational database project
- App ‘purpose’ has been re-written
- App ‘target audience’ has been re-written
- ERD has been updated

**5 July**

- DFD updated following Glen’s example.
  - Separated each feature:
      - Login
      - new star rating
      - edit star rating
      - edit post
      - delete post 
      - view post 
      - view topic 
      - new post
- Grouping Front-end and Back-end processes.
- Updated Wireframes, with page linking logic and more details of buttons and text layout

**6 July**

- Updated AAD - added testing
- DFD is now final and looks good to Glen.
- Started compiling the documentation together in a single README.md file
- Revisited wireframes

**7 July**

- Updated wireframes with more detailed description of thought processes and why the final layout has been chosen
- Continuing to compile README.md file with updated content
- Finished README.md file
- Started planning for Part B
- Front-end framework will be React Vite.
- https://www.linkedin.com/pulse/setting-up-rtl-vite-react-project-william-ku
- https://docs.netlify.com/configure-builds/manage-dependencies/
- To troubleshoot Vite version error:
```npm i -D @testing-library/jest-dom @testing-library/react @testing-library/react-hooks @testing-library/user-event jsdom vitest –legacy-peer-deps```
- T3A2-A Full Stack App (Part A) - complete, unless further instructions from Matt or Glen.
- README.md and docs in compressed format.
- Created ‘Timeline’ spreadsheet as a journal to track actual project progress.
- Setup new google drive folder and document for part B

**8 July**

- Planned out the tasks for the day
  - Elise to start front end home page, configure tailwind
    - Created Components and Pages folders
    - Added Home, TopicList and Topic components
    - Added routes - only homepage route currently working
    - Hardcoded topics
    - Installed react-router-dom
    - Installed Tailwind and DaisyUi
    - Added basic homepage layout with card styles
    - Added basic navbar
    - Fixed formatting issues
  - Henry to create database schemas, create express repo/app
- Updated trello with new tasks
- For rubric requirement - trello include/show commit history 
  - Decided to link to a pull request corresponding to the finished item
- Setup express app template file structure

**11 Jul** 

- Planned out the tasks for the day.
  - Elise working on front-end Post form page.
  - Henry working on connecting back-end to Atlas.
  - Chris working on front-end individual Topic page.
    - Created individual topics page
    - Added routes for individual topics page
    - Made sample Topic Posts to use for formatting purposes
    - Updated existing Topics List page so that 'View Posts' links direct to that Topic
- Updated trello board tasks.
- Updated trello board screenshots.


**12 Jul** 
- Continuing planned tasks from yesterday.
  - Elise working on front-end Post form page.
    - Decided to work on the sign in and create account page first
      - Users need to be signed in to create a post, saves me refactoring the create post code later to accommodate with this
    - Sign in page was create with basic styling
    - Basic create account page was created
    - Backend calls need to be made so a user can be created/sign in
  - Henry working on connecting back-end to Atlas.
    - Mongoose and environment variables set up.
    - Topic routes complete.
  - Chris working on front-end individual Topic page.
    - Mobile layout almost complete, missing edit button.


**13 Jul**
- Planned out the tasks for the day.
  - Elise working on front-end New Post form.
  - Henry working on back-end authentication.
  - Chris working on front-end individual Topic page.
- Updated trello board tasks.
- Updated trello board screenshots

**14 Jul**
- Had a team chat and planned out the tasks for the day
  - Elise working on front-end routing and New Topic page tweaks.
  - Henry working on back-end authentication.
  - Chris working on front-end individual Topic page.
- Updated trello board tasks.
- Updated trello board screenshots

**15 Jul** 
- Elise working on login authentication logic on frontend
  - Getting the frontend ready for api calls
  - Installed axios
  - Started authentication for user sign up/sign in
- Henry working on back-end routing and schema.
- Chris working on front-end star rating and sorting function.
  - Star rating logic complete.
- Updated trello board tasks.
- Updated trello board screenshots

**18 Jul** 
- Elise working on login authentication logic on frontend
- Henry working on back-end routing.
- Chris working on front-end connecting posts index page.
- Updated trello board tasks.
- Updated trello board screenshots

**19 Jul** 
- Team meeting:
  - Cors issues during deployment.
  - Elise - front-end create account error handling.
  - Henry - routes back-end
  - Chris - front-end:
    - connecting index page to backend complete.
    - Individual topic pages only displaying filtered posts about topics(locally working).
    - Only user that created Posts can delete/edit them (locally working).
  - Testing and error handling left in in App to address.
  - User Testing spreadsheet still outstanding.

**20 Jul** 
- Elise working on front-end Admin page, error handling, testing.
- Henry working on back-end routing, testing.
- Chris working on front-end linking back-end Posts data to front-end, star rating feature. 

**21 Jul** 
- Elise working on front-end Admin page, error handling, testing.
- Henry working on back-end refactoring, testing.
- Chris working on front-end star rating feature, edit/delete posts connect to back-end and filter users with userid. 

**22 Jul**
- Elise fixing errors with frontend 
- Chris started testing on frontend
- Henry continuing with backend testing
- README updated 
- Submitted Project on Canvas!

---
### Project Actual Timeline
![Timeline-Actual](./docs/Timeline.png)



---

### User Testing

#### Development

![Development Testing 1](./docs/usertest1.png)

![Development Testing 2](./docs/usertest2.png)

![Development Testing 3](./docs/usertest3.png)

![Development Testing 4](./docs/usertest4.png)

![Development Testing 5](./docs/usertest5.png)

![Development Testing 6](./docs/usertest6.png)

![Development Testing 7](./docs/usertest7.png)

--- 

#### Production

![Production Testing 1](./docs/usertest1a.png)

![Production Testing 2](./docs/usertest2a.png)

![Production Testing 3](./docs/usertest3a.png)

![Production Testing 4](./docs/usertest4a.png)

![Production Testing 5](./docs/usertest5a.png)

![Production Testing 6](./docs/usertest6a.png)


---

### Libraries Used
**Front-End:**
- "axios": "^0.27.2",
  - This was used to call on routes from the back-end database, as an alternative to fetch requests.
- "daisyui": "^2.18.0",
  - A design interface for the app in conjunction with Tailwind to help with quick design layouts and visual formatting.
- "jwt-decode": "^3.1.2",
  - A decoder to help with decoding access tokens to enable encrypted sending and receiving of things such as user_id, user_role for security purposes.
- "moment": "^2.29.4",
  - A date formatter to help with producing the desired date format from the system's default one.
- "react": "^18.0.0",
  - The main front-end framework used for this project in combination with javascript.
- "react-dom": "^18.0.0",
  - The interface used between React and DOM, with primary function of mounting the app to the index.
- "vite": "^2.9.9",
  - Another framework used in combination with React for the front-end and also provides access to Vitest which handles unit and integration testing.
- "react-icons": "^4.4.0",
  - Used to access star icons for star rating feature of the app.
- "react-router-dom": "^6.3.0"
  - Used for setting up dynamic routing in the front-end.

**Back-End:**
- "bcrypt": "^5.0.1",
  - Hashing algorithm used to encrypt user passwords
- "cookie-parser": "^1.4.6",
  - Middleware parser for cookies - enables express to access refresh tokens stored in cookies, allowing a new access token to be granted
- "cors": "^2.8.5",
  - Middleware used to enable cross origin resource sharing from the back end to front end
- "dotenv": "^16.0.1",
  - Used to store and use environment variables effectively and safely
- "express": "^4.18.1",
  - Application framework built on Node.js used to create this API.
- "jsonwebtoken": "^8.5.1",
  - Middleware parser for JSON - enables the server to send and receive JSON data
- "mongoose": "^6.4.3",
  - Object modeling tool that is used to connect with MongoDB, and to query and modify the database
- "mongodb-memory-server": "^8.7.2"
  - A MongoDB server used in testing to simulate a database connection
- "mocha": "^10.0.0"
  - A testing framework that runs on node 
- "chai": "^4.3.6",
  - An assertion library for node used for testing
- "chai-http": "^4.3.0",
  - An extension of chai used to test HTTP apis


---
