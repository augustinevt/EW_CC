# eurowings_digital_code_challenge

Hello Eurowing Digital team!

Here is my official submission. This was honestly a pleasure to work on!

If you have any questions or something is not working as expected, please reach out to me. I would truly appreciate feedback as well.

Thanks again,

– August

A few notes:

  1. A imgur `client_id` is required to make allow the ExpressJS proxy-server to make authorized calls. Just add a `.env` file with a `IMGUR_CLIENT` variable. I would be happy to share mine with you, but due force of habit I did not include them on Github.

  2. If time allowed, I would probably have set up some tests with cypress and jest at critical points of the app functionality

  3. While the app certainly did not require a global state manager, I added a small demonstration of of one in the git branch `state_manager` please feel free to check that out as well.

## How to get started

```
$ git clone https://github.com/augustinevt/EW_CC.git
```

```
$ yarn install
```

add IMGUR_CLIENT to `.env`

run the expressJS proxy

```
$ yarn run serve-proxy
```

run the client developement server
```
$ yarn serve
```
