# Using React

## Redux or Hooks

Our path forward will focus more on using hooks and context vs. Redux. Redux is a powerful tool, but it isn't always worth the added boilerplate and complexity. For most of our applications hooks serves us in terms of managing state. To quote the Redux documentation, use Redux if most of the following are true:

>* You have large amounts of application state that are needed in many places in the app
>* The app state is updated frequently
>* The logic to update that state may be complex
>* The app has a medium or large-sized codebase, and might be worked on by many people
>* You need to see how that state is being updated over time

(https://redux.js.org/faq/general)

## Functional Components
Don't use classes, don't use `createClass`. If you need state or lifecycle methods or side-effects, [use hooks](https://reactjs.org/docs/hooks-intro.html).

```jsx
import React from 'react';

export const MyComponent = {id, charities} => {
  return (
    <div>
      <p>My Component ID: {id}</p>
      <ul>
        {
          charities.map( (charity, index) => {
            return (
              <li key={index}>
                {charity.name}
              </li>
            );
          });
        }
      </ul>
    <div>
  );
};



