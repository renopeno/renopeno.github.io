---
layout: post
title: Developing Alias game [ 1 ]
image: logo-blue-circle.svg
---

For the last few months, I've been working on my personal web game version of popular board game - [Alias](https://en.wikipedia.org/wiki/Alias_(board_game)).

I enjoy playing it with my friends but we have a problem. The only Alias mobile game available in Croatian language is made only for Android devices. That's when I decided I want to create my own version of it.

I'm using React from Facebook with create-react-app. React is my framework of choice for the last few months and I'm enjoying using it. I love everything about that concept of collecting and connecting UI components into a web application. Just like Legos!

### Logo

I created this logo. It contains all letters of the word Alias put together in one place. **Can you find them?**

As this is __development post__, I won't be writing about logo creation here, so let's move on to the structure of my game.


### Structure

Basic components right now in my game are <Home /> component where users create their teams and <Session /> component which represetnts basic gameplay mechanics. It is contained of navigation, points, timeleft and CurrentWord components.

On top of everything is React Router which is handling routing through my game.

Right now, basic game mechanics are working and styling is done as can be seen in two screenshots below. My game state (current points, time left for current game etc.) lives in this <Session /> component.

<img src="../../../../img/post/Home-component.png" alt="home-screenshot" class="img-inline">
<img src="../../../../img/post/Session-component.png" alt="session-screenshot" class="img-inline">

### Preserving data

I'm not very familiar with working with databases, but I'll try to manage data by syncing states of my components with [Firebase](https://firebase.google.com/). To do that, I'll be using [re-base](https://www.npmjs.com/package/re-base).

I'll be writting about dealing with state, Firebase and everything about it in my next post.

Bye bye ✌🏻
