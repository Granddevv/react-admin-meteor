# Admin panel (React, Meteor)

Meteor project boilerplate in [ES6](https://es6.io/) and [React](https://facebook.github.io/react/) using [AdminLTE 2.4.3] styles.

### Prerequisites
* Node v6.9 or higher
* Npm v3 or higher
* Meteor v1.6.1

### Meteor packages
* accounts-password
* accounts-base
* alanning:roles
* react-meteor-data
* dispatch:mocha

### Basic features
* Authentication
* Routing (Uses [React Router](https://github.com/ReactTraining/react-router) as standard for React)

### Installation
```
> git clone https://github.com/Granddevv/react-admin-meteor.git <yourapp>
> cd <yourapp> && rm -rf .git
> npm install
```

### Running Tests
Using [Mocha](https://mochajs.org/) as test driver package and [PhantomJS](http://phantomjs.org/) for browser driver.
Also included test utilities, [Enzyme](https://github.com/airbnb/enzyme) and [Chai](http://chaijs.com/api/). See test examples in `test/` folder.

```
> npm test
```

### Linting
Uses [Airbnb style guide](https://github.com/airbnb/javascript). Just modify your rules in `.eslintrc`.
Lint will also run automatically on precommit, making sure your code is still ES6 standard! You can modify the precommit command list on `package.json` if you want to add more cool stuffs.

```
> npm run lint
```

### Own the project and start coding!
```
> npm start
```
