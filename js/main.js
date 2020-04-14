let $panel = $('#main .panel');
let $title = $('#main .menu .title')

function selectFolder(e) {
    let theFiles = e.target.files; // choose folder's all files

    // have folder
    if (theFiles.length > 0) {
        // remove images
        $panel.empty();

        // append images
        for (let i=0; i < theFiles.length ; i++) {
            let curRelativePath = theFiles[i].webkitRelativePath;
            $panel.append(`<img src="./images/${curRelativePath}" />`);
        }

        // update title
        let relativePath = theFiles[0].webkitRelativePath;
        let folder_name = relativePath.split("/")[0];
        $title.text(folder_name);
    }
}

