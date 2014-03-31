# Kitt $ cat
`kittcat -v 0.0.1`

## Demo-app :
http://gabriel-dehan.github.io/kittcat

## Dependencies

(Most will be packaged with the app in a future version);

- jQuery
- Angular JS
- Highlight JS
- jQuery Custom Select
- Underscore JS
- Base JS

- Bootstrap CSS

# A Jquery File/Source Code Explorer Plugin

## You instanciate it like that :

```javascript
$('Element').kittcat({
  api: 'localhost:3000/',
  fileEndpoint: '/file',
  treeEndpoint: '/tree.json'
});
```

### Api endpoints

You must provide two API endpoints :

- the `fileEndpoint` that will answer to get requests like `myEndPoint/1` and should answer with the file with id 1's content.
- the `treeEndpoint` that will answer to get requests like `myEndPoint` and should answer with a JSON tree formatted like this :
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

# What it does already :

- Display a file tree
  - You can click on a folder to open it
  - You can click on a open folder to close it
  - You can click on a file to open it

- Displaying a file
  - You can select a line by clicking on it's number
  - Automatic language detection
  - You can choose the language for the file highlight
  - You can choose a theme for the file display (default: github)
  - Displays options for the file (number of lines, type of file, path)


# Todo :
- Comment
- Account url to load files directly
- When clicking on a file path open up the tree
- When loading a file directly open up the tree
- Watch for line changes
- When specifying line in hash load the file with the line selected

- Refactor things into directives (especially when needing a timeout, see : http://stackoverflow.com/questions/22149551/calling-a-jquery-function-inside-an-angular-directives-after-changes-to-ng-bind)

// URLS are like .../#F1-L15

- Make grunt.js task to compile templates in one swift document.kittcat.templates
- Make grunt.js compile all javascript files in one swift file (except some dependencies)
- Make a grunt.js task to do the previous two and make it ready for production