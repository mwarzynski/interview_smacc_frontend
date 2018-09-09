# SMACC frontend

http://51.15.199.13/

My experience with Vue.js: 0.

At vuejs.org there is "[...] start building things in no time!". That's how I created this repository.

If you have any advice about coding the frontend side (in this particular case Vue.js), I would love to hear them.

## Challenge

Form that allows to send mails.

## How to build?

```
npm install
npm run build
echo "At this point the files should be at dist/ folder. You may use them to load statically wherever you want."
echo "Of course, you can containerize the application."
docker ./ -name smacc-frontend
```

## Tests

These tests are testing the fully working application (smacc-docker-compose).
It's kind of end-to-end, but I assume that if mail provider returned status OK, mail was sent successfully.
For sure, I should check if the mail was really received at the 'to' account, but well... let's say it's *nice to have*.

```
$ npm run test

> test@1.0.0 test /home/.../smacc-frontend
> jest

 PASS  tests/mail.test.js
  mail form
    ✓ mail should be sent successfully (3117ms)
    ✓ invalid input data, therefore cant submit (246ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        4.75s, estimated 9s
Ran all test suites.
```
