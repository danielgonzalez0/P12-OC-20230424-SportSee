<p align="center">
<img src="https://img.shields.io/badge/VERCEL-Deployed-brightgreen?style=for-the-badge&logo=vercel">
<img src="https://img.shields.io/badge/Create%20with-React-blue?style=for-the-badge&logo=react">
<img src="https://img.shields.io/badge/Graphs%20created%20with-RECHARTS-turquoise?style=for-the-badge&logo=react%22">
</p>

# Application SportSee with React

The project is part of a front-end training course specialising in React delivery by openclassrooms.

training link : https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react

Project goal: develop an analytic Dashboard with React and implement graphics with an external library

Figma template: [click here](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?type=design&node-id=1-2&t=4qQ0y4Zo7bgi2PRr-0)

User stories dashboard: [click here](https://openclassrooms.notion.site/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e?p=073b0c149d8942d38620b5cf8c55b239&pm=s)

## Version

version 1

### Project Deployment link:

[link](https://p12-oc-20230424-sport-b0zegj0m0-danielgonzalez0.vercel.app/)

ps: backend have to be launch before 

## Features

- react router
- functional components
- horizontal & vertical navbar
- desktop design version only (breakpoint 1024)
- design pattern for data modeling class
- graphs components using recharts library [link](https://recharts.org/en-US/)
- documentation with JSDoc and proptypes


## Tech Stack

**Client:** React, react-router-dom, , axios, Sass, esLint, Prop-types, Recharts

**Server:** see backend repository [link](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

## Required

[![Node.js](https://custom-icon-badges.demolab.com/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

[![NPM](https://img.shields.io/badge/-NPM-CC3534?logo=npm&logoColor=white&style=for-the-badge)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Installation

### front-end

clone project

```bash
  git clone https://github.com/danielgonzalez0/P12-OC-20230424-SportSee.git
```

Go to the project directory

```bash
  cd P12-OC-20230424-SportSee
```

Install dependencies

```bash
  npm install
```

launch server

```bash
  npm run start
```

### Back-end

Go to the back-end repository [link](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)
Follow the readme instructions (2 ways to install: with or without Docker)

This project includes four endpoints that you will be able to use: 

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).


**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

## Screenshots

![dashboard](https://github.com/danielgonzalez0/P12-OC-20230424-SportSee/assets/86351071/282b9a79-e6cd-4ec8-b5f2-0bd61ea9b804)

## 🚀 About Me

I am currently retraining to become a front-end developer and am taking the Application Developer - JavaScript React course at OpenClassrooms.

The objective of this training is to acquire a specialization in front-end and to consolidate the knowledge that I obtained during my previous training in web development.

The ultimate goal is to find a first position as a junior web developer to perfect my skills and gain more experience.

I am a professional with many years of experience in controlling and accounting, combined with a solid higher education background. I am able to function independently, and I have a strong sense of organisation and proven analytical and synthesis skills.

I am empathetic and rigorous by nature, I listen to others and I can easily work in a team.
