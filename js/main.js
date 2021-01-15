let $main = $('.main');
let $panel = $('#js-panel');
let $title = $('#js-title');
let $dark_mode_btn = $('#js-dark-mode-btn');

function selectFolder(e) {
    let theFiles = e.target.files; // choose folder's all files
    
    // have folder
    if (theFiles.length > 0) {
        // remove images
        $panel.empty();

        // append images
        for (let i=0; i < theFiles.length ; i++) {
            let reader = new FileReader();

            reader.onload = function(e) {
                $panel.append(`<img data-name="${theFiles[i].name}" src="${e.target.result}" />`);
            }
            
            reader.readAsDataURL(theFiles[i]); // convert to base64 string
        }

        // update title
        let relativePath = theFiles[0].webkitRelativePath;
        let folder_name = relativePath.split("/")[0];
        $title.text(folder_name);
    }
}

$dark_mode_btn.on('click', function(){
    $main.toggleClass('dark-mode');
});