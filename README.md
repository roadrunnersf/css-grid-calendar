# CSS Grid Calendar

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tooling

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It uses:

-   react
-   redux
-   redux/toolkit
-   reselect
-   dayjs
-   emotion/styled
-   material-ui

## Project Terminology

### Slots

A slot (or time slot) is an increment of time, the number of which (per hour) dictates the the accuracy to which events are sized and positioned on the calendar. To use css grid to arrange the events on the calendar, each day column is split into different vertical slots.

The default slots per hour is 12 slots, which means that the visual accuracy of the calendar is to the nearest 5 minutes - the size and placement of each event will be rounded to the nearest 5 minutes.
Adding more slots per hour will increase the visual accuracy of the calendar, but decrease performance. 12 slots per hour seems to be more than precise enough. Google's calendar seems to be more accurate than this, with even a 1 minute difference in event length has an effect on the size of that event on the screen (1 minute roughly being 1 pixel of size on my screen!)

### Time blocks

A time block is a visual 'cell' displayed on the calendar to make it easier for the user to see what time an event runs until, much like a graph might have horizontal lines.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
