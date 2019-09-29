Blockchain Block explorer 
============================

Getting Started
---------------

```sh
# clone it
git clone https://github.com/shiva2492/Blockchain-Explorer-Typescript

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies for backend server
npm install

# Create database 
1) psql postgres
2) CREATE DATABASE blockexplorer;
3) \q

# Start development live-reload server
PORT=3000 npm start

# to open the API doc
npm run-script docs

# After server is running, initiate and populate the database 
1) GET - localhost:3000/api/v1/load  ( You can stop the dataload (CTRL+C) in the midddle because it takes time )


# Start production server:
PORT=8080 npm start


# Start the frontend server:

cd public

# Start development live-reload server
npm start

# Launches the test runner in the interactive watch mode
npm test

# Builds the app for production to the build folder
npm run build

See the section about deployment for more information.
```

Performance fixes: 

1) Could have added the Redis cache middleware, So most recent blocks will always be fetched from redis layer rather than database call.
2) Debugging purpose could have been better by adding every layer console and adding console logs in files using winston.
3) Test cases could be better.


```



License
-------

MIT


