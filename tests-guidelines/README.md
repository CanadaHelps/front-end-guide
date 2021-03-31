# Testing Guide

## Key Libraries

* [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)
* [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom)
* [jest-fetch-mock](https://www.npmjs.com/package/jest-fetch-mock)
* [jest](https://jestjs.io/docs/en/getting-started.html)

## Background Reading

* [Testing Implementation Details (don't)](https://kentcdodds.com/blog/testing-implementation-details)
* [Testing Library: Guiding Principles](https://testing-library.com/docs/guiding-principles)

## Structuring a Test

We use Jest to run and write our tests. Jest uses Jasmine under the hood. Create a `__tests__` directory in a folder close to the code you are writing the test for. If you are creating mocks it is usually a good idea to add `__mocks__` directory in the root of your application so you can share the mocks between tests.

A typical test should look like this

```javascript

import React from "react";

describe("<Name Of Something We're Testing>", () => {

  // variables to share across our tests

  beforeEach(() => {
    // actions we repeat every test
  })


// typically each test should only test one thing, but this is not set in stone
  it("one thing we're testing", () => {

    expect(<some aspect>).to<Something>();

  });

});



```
## Using Snapshots

We avoid using snapshots except for the most basic of initial tests. They tend to get ignored when reviewed and don't create a sufficient level of confidence.

## What to Test

* Renders and UI changes of the various visual states of a program
* The result of state changes and state management (reducers, helpers, action creators)
* UI behaviours for UI components, what the user does with the application

## What to Ignore

* localization message files
* `node_modules`
* output files
* really, over the top side effects (i.e. CDN embed scripts, iframe inter-communication, ???) that would be more trouble to stand-up than they are worth

## Mocking

We should mock things like data fetching, impractical side-effects like Google Charts or when we specifically need to isolate a piece of code for testing. Mocking should be done with care as we still want to maintain our confidence in our tests and code, over mocking can disguise potential issues.

Jest makes mocking really easy. For fetch mocking our applications are configured to use `jest-fetch-mock` which gives you `mockResponse`, `once`, `mockResponses`, etc. tacked onto the fetch object.

For mocking of other libraries or our own code we can simply import the package and then mock it with `jest.mock()`. See the jest documentation for further details.

## Writing Async Tests

Make sure to have a `catch` clause or `try/catch` to capture Promise rejection or async thrown errors.

```javascript


  it("should do something when I call this async function", () => {

    return asyncFunction().then(() => {
      return expect(<some aspect>).to<Something>();
    }).catch(e => {
      return expect(e).toBeFalsy();
    });

  });


```

