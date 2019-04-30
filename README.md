# react-questify

> Easily creates question forms using react

[![NPM](https://img.shields.io/npm/v/react-questify.svg)](https://www.npmjs.com/package/react-questify) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add react-questify
```

or

```bash
npm i react-questify
```

## Usage

```jsx
import React, { Component } from "react";

import ReactQuestify from "react-questify";

class MyComponent extends Component {
  ...

  render() {
    return <ReactQuestify questions={q} />;
  }
}
```

## Questions

### Text input

```js
{
    name: 'name', //the name value, it will be the key of the answers object
    text: 'Who are you?', //the question value
    suggestion: 'I am your worst nightmare', //the placeholder value, optional
    type: 'text', //input text
    answers: {
        default: { //default value
            goTo: 1 //go to the second element of the questions array (arrays start from 0 element)
        }
    }
}
```

### Select input

```js
{
    name: 'character',
    text: 'What\'s your favorite character?',
    options: ['Mickey Mouse', 'Donald Duck', 'Bugs Bunny', 'Duffy Duck'], //the available options
    type: 'text', //input text type
    answers: {
        'Mickey Mouse': { //custom value
            goTo: 3 //if the value is 'Mickey Mouse', go to 3 instead of 2 (skip one question)
        },
        default: {
            goTo: 2
        }
    }
}
```

### Options input

```js
{
    name: 'experience',
    text: 'How many years of experience do you have?',
    type: 'options', //options type
    options: ['1', '< 5', '< 10', '> 10'],
    answers: {
        default: {
            goTo: 3
        }
    }
}
```

### Color input

```js
{
    name: 'color',
    text: 'What is your favorite color?',
    type: 'color', //color type
    options: ['red', '#f90', '#555', 'green'],
    answers: {
        default: {
            goTo: 4
        }
    }
}
```

### Url input

```js
{
    name: 'facebook',
    text: "Please, write your facebook page url",
    suggestion: 'https://facebook.com/example',
    type: 'url',
    answers: {
        default: {
            goTo: 5
        }
    }
}
```

### Image input (coming soon)

## License

MIT © [gventuri](https://github.com/gventuri)
