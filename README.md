# skdb_minimal
A minimal example using skdb in a browser

# INSTALL

git clone https://github.com/SkipLabs/skdb_minimal.git
cd skdb_minimal
npm install --global http-server
npm i

# RUN

open script.mjs, edit the line ```const b64key = "";``` with the secret key.
Then from the skdb_minimal directory run http-server
open your browser at https://localhost:8080
