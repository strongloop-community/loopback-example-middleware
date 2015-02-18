#loopback-faq-middleware
```
git clone git@github.com:strongloop/loopback-faq-middleware.git
cd loopback-faq-middleware
npm install
slc run
```

- [How do you serve static content via static middleware?](https://github.com/strongloop/loopback-faq-middleware#how-do-you-serve-static-content-via-static-middleware)

#How do you serve static content via static middleware?
1. Add static middleware to the [files property](https://github.com/strongloop/loopback-faq-middleware/blob/master/server/middleware.json#L17-L19) in middleware.json
2. Delete [`server/boot/root.js`](https://github.com/strongloop/loopback-faq-middleware/blob/master/server/boot).
3. Create [`client/index.html`](https://github.com/strongloop/loopback-faq-middleware/blob/master/client/index.html)
4. Start the server via `slc run` and browse to [`localhost:3000`](http://localhost:3000). You should see `hello world` being served.
