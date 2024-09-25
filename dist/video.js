(function() {

	function setClickHandler(id, fn) {
		document.getElementById(id).onclick = fn;
	}

	setClickHandler('video_container', function(e) {
		var className = e.target.className;
		~className.indexOf('htmlvid') &&
			BigPicture({
				el: e.target,
				vidSrc: e.target.getAttribute('vidSrc')
			});
		~className.indexOf('vimeo') &&
			BigPicture({
				el: e.target,
				vimeoSrc: e.target.getAttribute('vimeoSrc')
			});
		~className.indexOf('youtube') &&
			BigPicture({
				el: e.target,
				ytSrc: e.target.getAttribute('ytSrc')
			});
	})
})();
