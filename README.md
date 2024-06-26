# elderly assessment web application
Assessment tools for elderly population. Our app will be specifically designed towards old people and will be focused on making their experience using technologies safer.

Badges: [![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/Fedmichard/elderly_assessment_tool/badge)](https://securityscorecards.dev/viewer/?uri=github.com/Fedmichard/elderly_assessment_tool)

## About
Our app will be structured around the actual assessment and information providing aspects. Our assessment will show things like examples of safe vs. unsafe websites/emails/messages and then provide a series of questions which will ask the user if the image above looks misleading or dangerous. Of all users, elderly folk make up such a large majority of the individuals who are affected by phishing and phone scams. These happen so often and most of the time they are completely oblivious to these attacks taking place, our website aims to minimize the amount they are affected. Our project stack currently is: ReactJs, Express, MySQL database, NodeJs, and the Bootstrap library.


## Languages & Tools
<img align="left" alt="java" width="50px" style="padding-right:30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
<img align="left" alt="java" width="50px" style="padding-right:30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
<img align="left" alt="java" width="50px" style="padding-right:30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
<img align="left" alt="java" width="50px" style="padding-right:30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
<img align="left" alt="java" width="50px" style="padding-right:30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
<img align="left" alt="java" width="50px" style="padding-right:30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg" />
<img align="left" alt="java" width="50px" style="padding-right:30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
<br />
.

## Front-end
Designed using ReactJS, Bootstrap, HTML, and CSS. We're constantly working on making the app as responsive as possible for future screen sizes, making it compatible for mobile devices. We also send and receive requests from our back-end using Axios. The current UI/UX design was created within Figma and below are some pictures of our front-end implementing those designs:

### Home Page
![Home](https://github.com/Fedmichard/elderly_assessment_tool/assets/48575985/cc6a04e1-5d6d-4496-adab-0eb90636620d)


### About Page
![Read](https://github.com/Fedmichard/elderly_assessment_tool/assets/48575985/1e403dd9-9f8a-42cd-adf4-74079221bfca)


### Assessment Page
![Assess](https://github.com/Fedmichard/elderly_assessment_tool/assets/48575985/ee31948b-3c2f-4f27-930b-2aef78b619d3)



## Back-end
Our backend has been established already in MySQL and is ready for communication with our front-end via requests made by Axios. Our database itself communicates only with the back-end using express, below is a rudimentary schema created by our back-end for our database:
![Screenshot_2024-03-15_013912](https://github.com/Fedmichard/elderly_assessment_tool/assets/48575985/df75f48e-c4ac-474c-815a-8cba396adfcf)


## Security
* Password hashing for safe and secure storage of our user information using Bcrypt
* SQL Injection Prevention during the log-in and sign-up process
* JWT Cookie generation for successful user authorization
* Tips for creating a safe environment for their digital information
* The saving of the assessments and user information
* Communication via axios and express


## Features
* Provide an assessment tool which will give a detailed report of how the user responds to Phishing attempts, how the user responds to non-Phishing attempts, how the user interacts with the visuals of a site, and things missed or not missed in the examples
* Provide resources from trusted outlets to enhance the learning of the user such as common threats and how to mitigate them
* Tips for creating a safe environment for their digital information
* The saving of the assessments and user information securly


## How to use:
* We recommend first navigating to the "About Phishing Scams" section of our site
* Read the information from top to bottom and take notes if necessary
* Move on to the following assessment for Phishing Scams
* Retake the test if you score lower than expected
* Once your score is adequate, move on to the next section and repeat!
* Consider creating an account to store your score results!


## Contributors
<!-- readme: contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/Fedmichard">
            <img src="https://avatars.githubusercontent.com/u/48575985?v=4" width="100;" alt="Fedmichard"/>
            <br />
            <sub><b>Fedmichard Francois</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/VictorMoralesBlanco123">
            <img src="https://avatars.githubusercontent.com/u/93718568?v=4" width="100;" alt="VictorMoralesBlanco123"/>
            <br />
            <sub><b>Victor Morales Blanco</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ElfYet">
            <img src="https://avatars.githubusercontent.com/u/161971347?v=4" width="100;" alt="ElfYet"/>
            <br />
            <sub><b>Vladimir Ovsyannikov</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: contributors -end -->
