## Requirement
- gem
  - bundle
- node.js
- npm
- fontforge (This is required unfortunately. You gonna have to install this as globally)


### On Mac
```
$ brew install fontforge --with-python
$ brew install eot-utils
$ gem install bundle
```

### On Linux
```
$ sudo apt-get install fontforge
$ wget http://people.mozilla.com/~jkew/woff/woff-code-latest.zip
$ unzip woff-code-latest.zip -d sfnt2woff && cd sfnt2woff && make && sudo mv sfnt2woff /usr/local/bin/
$ gem install bundle
```


### Project
```
$ npm install
$ vi fontcustom.yml
```


### Build
```
$ path=path/to.sketch npm run generate
```
