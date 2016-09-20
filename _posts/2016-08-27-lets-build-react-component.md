---
layout: post
title: Let's build React component
image: reactlogo.png
---

A few weeks ago I bought myself a book about React basics called [Learn Pure React](https://daveceddia.com/learn-pure-react/) and started reading it. After few pages I decided to write my first blog post about the most basic feature of React - component.

So we will be writting our first **Hello, World!** component today.

## What is React?

"React is an open-source JavaScript library providing a view for data rendered as HTML. React views are typically rendered using components that contain additional components specified as custom HTML tags."
<br>
- Wikipedia

## What is React Component?

It's basically a code block full of different code blocks(components) that is being rendered into DOM.

We will create our **Hello, World!** component soon, so everything will get much clearer (if it already isn't).

<blockquote>
  <strong>Note:</strong>
  <br/>
  Components can render to only one node in DOM tree.
</blockquote>

## Let's create our first component

We will be using **create-react-app** created by Facebook itself to make our build process faster and much easier. Check out this [link for instructions ](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) on how to install **create-react-app**.

So after you installed **c-r-a** on your Mac/PC/WhateverYouUse, we will create our project by entering in terminal:

<pre>
 <code class="language-bash">
 $ create-react-app hello-world && cd hello-world
 </code>
</pre>

Now wait for a few seconds, or half a minute. After everything is ready, we may notice few folders are now installed in our <code>hello-world</code> directory. We have few extra files that are not needed and will remove them by typing next commands in our terminal:

<pre>
 <code class="language-bash">
 $ rm src/App.js src/App.css src/logo.svg
 </code>
</pre>

Those are extra starting files that are setting default style we don't need at the moment.

Now we can start our build by typing this into terminal:

<pre>
 <code class="language-bash">
 $ npm start
 </code>
</pre>

Now, open your <code>src/index.js</code> file and make it look like this:

<pre>
 <code class="language-jsx">
  import React from 'react';
  import ReactDOM from 'react-dom';

  // we will write some code here very soon


  // Render component to DOM

  ReactDOM.render(
    &lt;App/>,
    document.querySelector('#root')
  );
 </code>
</pre>

Next step is to create our <code>HelloWorld</code> component:

<blockquote>
  <strong>Note:</strong>
  <br/>
  React components are written in Pascal case.
</blockquote>

<pre>
 <code class="language-jsx">
  import React from 'react';
  import ReactDOM from 'react-dom';

  // HelloWorld component

  const HelloWorld = React.createClass({
    render: function(){
      return (

      );
    }
  });

  // Render component to DOM

  ReactDOM.render(
    &lt;HelloWorld/>,
    document.querySelector('#root')
  );
 </code>
</pre>

Don't forget to change the name of component that we render on bottom of our code from <code>App</code> to <code>HelloWorld</code>.

Let's put our Hello, World! in our component:

<pre>
 <code class="language-jsx">
  import React from 'react';
  import ReactDOM from 'react-dom';

  // HelloWorld component

  const HelloWorld = React.createClass({
    render: function(){
      return (
        &lt;h1>Hello, World!&lt;/h1>
      );
    }
  });

  // Render component to DOM

  ReactDOM.render(
    &lt;HelloWorld/>,
    document.querySelector('#root')
  );
 </code>
</pre>

And that's it! You should have "Hello, World!" written on you webpage.

In next blog post, I will teach you how to create our <code>HelloWorld</code> component from two different components: <code>Hello</code> and <code>World</code>.
