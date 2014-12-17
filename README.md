#loopback-faq-middleware
```
git clone git@github.com:strongloop/loopback-faq-middleware.git
cd loopback-faq-middleware
npm install
slc run
```

- [How do you use static middleware?](https://github.com/strongloop/loopback-faq-middleware/tree/features/how-to-add-static-mw#how-do-you-use-static-middleware)

#How do you use static middleware?
1. Remove the contents of the default [routes property](https://github.com/strongloop/loopback-faq-middleware/blob/features/how-to-add-static-mw/server/middleware.json#L14-L15) in middleware.json
2. Add static middleware to the [files property](https://github.com/strongloop/loopback-faq-middleware/blob/features/how-to-add-static-mw/server/middleware.json#L16-L20) in middleware.json
