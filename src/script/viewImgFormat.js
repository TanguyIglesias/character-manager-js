export const viewImgFormat = () => {

    const output = document.getElementById('output');
    if (window.FileList && window.File && window.FileReader) {
        document.getElementById('charImg').addEventListener('change', event => {
            output.src = '';
            const file = event.target.files[0];
            if (!file.type) {
                return;
            }
            if (!file.type.match('image.*')) {
                return;
            }
            const reader = new FileReader();
            reader.addEventListener('load', event => {
                output.src = event.target.result;
            });
            reader.readAsDataURL(file);
        });
    }
  };