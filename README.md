#loopback-faq-middleware
```
git clone git@github.com:strongloop/loopback-faq-middleware.git
cd loopback-faq-middleware
npm install
slc run
```

- [How do you use static middleware?](https://github.com/strongloop/loopback-faq-middleware#how-do-you-use-static-middleware)

#How do you use static middleware?
1. Remove the contents of the default [routes property](https://github.com/strongloop/loopback-faq-middleware/blob/master/server/middleware.json#L14-L15) in middleware.json
2. Add static middleware to the [files property](https://github.com/strongloop/loopback-faq-middleware/blob/master/server/middleware.json#L17-L19) in middleware.json
