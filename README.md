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
$ brew install fontforge --with-python
$ brew install eot-utils woff2
```

### Install local dependencies
```
$ gem install bundle
$ yarn install
$ vi fontcustom.yml
```


### Build
```
$ path=path/to.sketch npm start
```

demo.sketch will selected if `path` option is empty or undefined.
