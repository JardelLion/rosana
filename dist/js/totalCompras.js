let files = document.querySelectorAll('.file-upload')



addClassFiles = function(filesNumber){
    files[filesNumber].addEventListener('change', () => {
        files[filesNumber].classList.add('file-upload--style')
    })

}


if(files.length <= 1){
    addClassFiles(0);

}
else {
    addClassFiles(0);
    addClassFiles(1);

}


