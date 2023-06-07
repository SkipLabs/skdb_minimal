# skdb_minimal
A minimal example using skdb in a browser

# INSTALL

```
git clone https://github.com/SkipLabs/skdb_minimal.git
cd skdb_minimal
npm install --global http-server
npm i
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

# RUN

open ```script.mjs```, edit the line ```const b64key = "";``` with the secret.

Then from the skdb_minimal directory run:

```
$ http-server -S
```

You can open your browser at `https://localhost:8080`. Because we generated a
self-signed SSL certificate above (using `openssl`), you will first have to
inform your browser that the SSL certificate is OK.
