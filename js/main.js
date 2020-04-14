let $panel = $('#main .panel');
let $title = $('#main .menu .title')

function selectFolder(e) {
    let theFiles = e.target.files; // choose folder's all files
    let images_array = [];

    // have folder
    if (theFiles.length > 0) {
        // resort
        for (let i=0; i < theFiles.length ; i++) {
            images_array.push(theFiles[i].webkitRelativePath);
        }
        images_array.sort();
        
        // remove images
        $panel.empty();

        // append images
        for (let i=0; i < theFiles.length ; i++) {
            $panel.append(`<img src="./images/${images_array[i]}" />`);
        }

        // update title
        let relativePath = theFiles[0].webkitRelativePath;
        let folder_name = relativePath.split("/")[0];
        $title.text(folder_name);
    }
}

