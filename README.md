# OrderBob
---
View and manage your orders on the internet!

<!-- [View the App](http://shipbob.robabby.com) -->

### How to run the app locally

* clone the repo locally `git clone https://github.com/robabby/shipbob.git`
* `cd shipbob`
* `npm run dev || yarn dev`
  * This runs `concurrently` and will serve both the Node.js API and ember-cli app server

### How to run the app as a docker container

* clone the repo locally `git clone https://github.com/robabby/shipbob.git`
* install ember-cli as a global `npm i -g ember-cli || yarn global ember-cli`
* Give the `docker.sh` file permissions with `chmod 755 docker.sh`
* Then run `yarn docker || npm run docker`

### Other things I would have done

- [ ] Write tests
- [ ] Set up an [ember-cli-mirage](http://www.ember-cli-mirage.com/) server to fully mock out the API
- [ ] Implemented [ember-fastboot](https://www.ember-fastboot.com/) for server-side rendering
- [ ] Clean input data
- [ ] Form Validation
- [ ] Pagination on data grids
- [ ] filter to show which orders have incomplete data using computed
- [ ] Notification service
- [ ] Provide confirmation dialogs when performing a destructive action
- [ ] Understand what the “Use store.findRecord()” console warning is all about
- [ ] Better UI & better UX considerations
- [ ] Mobile-first

---

#### Note:
I am pre-populating the Order Details form intentionally. You can overwrite any of the values if you wish.
