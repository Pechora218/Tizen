window.onload = function() {
    // TODO:: Do your initialization job
	var resolutionText = document.querySelector('#text');
	resolutionText.innerText = window.screen.availWidth.toString() + "x" + window.screen.availHeight.toString();
    var contentImage = document.querySelector('#image');
	contentImage.style.display = "block";
	var contentButton = document.querySelector('#text');
	contentButton.style.display = 'block';
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
    var imageButton = document.querySelector('#image_button');

    imageButton.addEventListener("click", function() {
        var contentImage = document.querySelector('#image');
        if (contentImage.style.display === "block")
        {
        	contentImage.style.display = 'none';
        }
        else
        {
        	contentImage.style.display = 'block';
        }
    });
    
    var resolutionButton = document.querySelector('#resolution_button');

    resolutionButton.addEventListener("click", function() {
        var contentButton = document.querySelector('#text');
        if (contentButton.style.display === "block")
        {
        	contentButton.style.display = 'none';
        }
        else
        {
        	contentButton.style.display = 'block';
        }
    });
};
