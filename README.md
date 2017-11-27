# OrderBob
---
View and manage your orders on the internet!

[View the App](http://shipbob.robabby.com)

### How to run the app locally

* clone the repo locally `git clone https://github.com/robabby/shipbob.git`
* `cd shipbob`
* `npm run dev || yarn dev`
  * This runs `concurrently` and will serve both the Node.js API and ember-cli app server

### How to run the app as a docker container

* clone the repo locally `git clone https://github.com/robabby/shipbob.git`
* install ember-cli as a global `npm i -g ember-cli || yarn global ember-cli`
* cd into the client directory `cd shipbob/client`
* Build the client files `ember build --environment=production --output-path=../public/`
* Build the Docker container `docker build -t robabby/shipbob .`
* Run it `docker run -p 8090:3000 -d robabby/shipbob:latest`

### Other things I would have done

- [ ] Write tests
- [ ] Clean input data
- [ ] Form Validation
- [ ] Pagination on data grids
- [ ] filter to show which orders have incomplete data using computed
- [ ] Notification service
- [ ] Provide confirmation dialogs when performing a destructive action
- [ ] Set up a mirage server to fully mock out the API
- [ ] Understand what the “Use ‘store.findRecord()” warning is all abut…
