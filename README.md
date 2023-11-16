We are starting to accumulate these great projects and want to show case them in a portfolio web app for your future employers to see. In this Sprint you will research what a portfolio web app should contain for a web developer and create your own unique portfolio web app. We will be doing this in React, Chakra UI or Bootstrap , and deploying it with Azure and using ASP.NET Core for our API, 

Create front end with React using Vite
Use Chakra UI or Bootstrap
You are welcome to use any third party libraries you see fit
Site must have a landing page, an about me page, and a contact me page with a form so people can send you their information, A page were you can click on your projects and show case them..
Add your unique styling and make it your own.

Pages
    Landing Page
        Main page image, overlaid with a Contact Me button, leading to Contact Me page.

        Header with my name and "Web Developer".

        NavBar with About, Technologies, Work, and Contact sections. Each link will take user to that section on this same page.

            About Me blurb listing hobbies and interests, links to my LinkedIn page and my resume (hosted on SQL server). Icons for LinkedIn and resume.

            Technologies lists coding languages, frameworks, libraries, etc with which I have experience.

            Work carousel showcases my past projects; clicking on them will lead to the project which is hosted in SQL server. Also, a link to my GitHub - code or it didn't happen! Icon for GitHub.

            Contact form with Name, Email, Subject, and Message fields. Submit button

    Contact Me Page
        Contact form with Name, Email, Subject, and Message fields. Submit button.


Link to Figma: https://www.figma.com/file/SGVJjr37o9zlesoL5iG64U/Untitled?type=design&node-id=0-1&mode=design&t=eGPI5SyNSQCTKTqn-0



Link other projects in Azure process:
copy file link from GitHub
open new window in VS Code, click on gear icon in bottom left (Manage) and choose Command Palette
type Git Clone
paste in file link from GitHub, hit Enter
do not select a folder, just click Select as Repository Destination
cd into file, if necessary (if you have to cd, might be a problem...)
npm i
npm run dev
click on Azure extension on left side
make sure you're signed in, click the plus to add a resource
choose create static web app
hit enter for the default name, choose us west 2, choose react (if html, choose html), hit enter when you see the forward slash, erase build and type '/dist' (if html type '/index.html'), hit enter
click Open Actions in GitHub (using dist because we used vite to create files, otherwise, use the default 'build')

Once successfully built/deployed, click on Visual Studio Enterprise Subscription so it expands, then click on Static Web Apps - right click on the name of the item you just deployed and choose Browse Site. It will open in web page; use the link for that site.