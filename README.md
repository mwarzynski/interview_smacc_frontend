# SMACC frontend

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