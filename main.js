$(function() {
    $('#kitt-cat').kittcat({
        api: 'http://localhost:3000',
        fileEndpoint: '/file',
        treeEndpoint: '/tree.json'
    });
});
