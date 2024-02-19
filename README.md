# Water consumption tracker

Record daily water intake and track

## Live page

https://dailywater.vercel.app/#/

## Tracker Benefits
* Habit drive
* Add / edit / delete daily water drinks
* View statistics
* Personal rate setting

## Used tecnologies and libraries
- This project was created using [Vite.js](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) react template.
- [React Router](https://reactrouter.com/en/main) for SPA routing
- [Redux Toolkit](https://redux-toolkit.js.org) for app state managment
- [Axios](https://axios-http.com/) for REST API
- [styled-components](https://styled-components.com) for styling
- [Formik](https://formik.org) & [Yup](https://www.npmjs.com/package/yup) to building forms and input validation
- [react-modal](https://www.npmjs.com/package/react-modal) to building modal windows
- [Backend](https://watertracker-back.onrender.com/api-docs/) was specially developed for this project ([Source on GitHub](https://github.com/dolphin-vr/watertracker-back))

### Changelog
#### [2.0.5], now
- +: password reminder (via send reset link to email);
- *: refactoring all sign forms to decrease boilerplate code;
- +: notify on sign-up and sign-in errors;
- *: refactoring background images - using separates svg-s instead of stored in sprite (because css, unfortunatly, can't scale background svg-images from sprite);
- *: refactoring WelcomePage to improove semantic markup
- *: some minor code improovments
#### [1.0.12], 2024-01-10
- initial MVP release