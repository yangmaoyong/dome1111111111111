show(0);
		function show(index) {
			var lis = document.getElementsByClassName("tiao1");
			for (var i = 0; i < lis.length; i++) {
				lis[i].getElementsByTagName("ul")[0].style.height = "0px";
			}
			lis[index].getElementsByTagName("ul")[0].style.height = "72px"
		}