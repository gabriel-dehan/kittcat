# Kitt $ cat
`kittcat -v 0.2.0`

## Demo-app :
http://gabriel-dehan.github.io/kittcat

## Dependencies

(Most will be packaged with the app in a future version);

### JS
- jQuery
- Angular JS
- Angular Cookies JS
- Highlight JS
- jQuery Custom Select
- Underscore JS
- Base JS

### CSS
- Bootstrap CSS

# A Jquery File/Source Code Explorer Plugin

## You instanciate it like that :

```javascript
$('#my-explorer').kittcat({
  api: 'localhost:3000/',
  fileEndpoint: '/file',
  treeEndpoint: '/tree.json'
});
```

## API

You __must__ provide two _API endpoints_ (URLs to request from) :

- the `fileEndpoint` : will answer to `get` requests like `myEndPoint/1` and must answer with the file's (here with id 1) content.
- the `treeEndpoint` will answer to `get` requests like `myEndPoint` and must answer with a JSON tree formatted like this :
```json
[{
    "root"          : true,
    "is_dir"        : 1,
    "owner"         : "",
    "users"         : "",
    "name"          : "My Project",
    "_id"           : 1,
    "created_at"    : "2012-14-04",
    "last_modified" : "2012-14-04",
    "tree"          : [
        {
            "is_dir"        : 0,
            "_id"           : 2,
            "name"          : "File 1",
            "created_at"    : "2012-14-04",
            "last_modified" : "2012-14-04"
        },
        {
            "is_dir"        : 0,
            "_id"           : 3,
            "name"          : "File 2",
            "created_at"    : "2012-14-04",
            "last_modified" : "2012-14-04"
        },
        {
            "is_dir"        : 1,
            "_id"           : 4,
            "name"          : "Dir 1",
            "created_at"    : "2012-14-04",
            "last_modified" : "2012-14-04",
            "tree"          : [
                {
                    "is_dir"        : 0,
                    "_id"           : 5,
                    "name"          : "File 2",
                    "created_at"    : "2012-14-04",
                    "last_modified" : "2012-14-04"
                },
                { ... }
            ]
        },
        { ... }
    ]
}]
```

You can see a full example of this JSON structure in the `data/tree.json` file.

# What it does already :

- Display a file tree
  - You can click on a folder to open it
  - You can click on a open folder to close it
  - You can click on a file to open it

- Displaying a file
  - Load Files and Select lines according to URL ( `/#F1-L8` will open the first file on line 8)
  - You can select a line by clicking on it's number
  - Automatic language detection
  - You can choose the language for the file highlight
  - You can choose a theme for the file display (default: github)
  - Displays options for the file (number of lines, type of file, path)
  - Clicking on a file's path will open it's folder
  - Stores the chosen highlighting in the session

# Todo :
- Comment

- Make grunt.js task to compile templates in one swift document.kittcat.templates
- Make grunt.js compile all javascript files in one swift file (except some dependencies)
- Make a grunt.js task to do the previous two and make it ready for production

# License

[WTFPL](http://www.wtfpl.net/)