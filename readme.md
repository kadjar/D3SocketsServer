# Getting Started

### NodeJS

The default apt-get NodeJS package is an older version (0.6.x). Joyent has documented a
way to get the most recent stable version here:  

https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#ubuntu-mint-elementary-os

Before following the guide, it's useful to get rid of the built-in `node` package if it
has been installed:

```
sudo apt-get --purge remove node
```

### Express

This application is built on top of Express. To work with it properly you'll need to install
the express package globally:

```
sudo npm install -g express
```

### PM2

PM2 is a Node app-runner that keeps track of processes and logs, and auto-restarts your node app
when it runs into a fatal error.

http://devo.ps/blog/2013/06/26/goodbye-node-forever-hello-pm2.html

```
sudo npm install -g pm2
```

#### Vagrant Commands

For convenience, some of the pm2 commands can be executed through Vagrant directly:

**vagrant app start:** Starts the app on all available processors  
**vagrant app stop:** Stops all running instances of the app  
**vagrant app restart:** Restarts all running instances of the app  
**vagrant app list:** Lists the apps that are currently running  
**vagrant app log:** Display a live log of all the apps that are currently running  
