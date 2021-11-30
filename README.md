# node-stress-test
Node.JS Stress test application for web APIs

# Options that can be passed to the script
* --workers=number - override number of workers to run
* --timeToRunInSeconds=number - override execution time of the stress test
* --url=string - override the base url on which to perform the stress test
* --paths=string[] - override paths on which to perform the stress test

# Example
npm run start -- --workers=1 --timeToRunInSeconds=5 --url=https://localhost:44339 --paths=/Home/Index,/Home/Login,/Test/Endpoint