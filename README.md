## Requirement
- gem
  - bundle
- node.js
- npm
- fontforge (This is required unfortunately. You gonna have to install this as globally)
- eot-utils
- woff2



## Set up
### Install global dependencies
```
$ brew tap bramstein/webfonttools
$ brew install fontforge
$ brew install eot-utils woff2
$ gem install bundler
```

### Install local dependencies
```
$ yarn install
$ bundle install
```

Edit `fontcustom.yml` as you need.


### Build
```
$ path=path/to.sketch npm start
```

demo.sketch will selected if `path` option is empty or undefined.
