document.body.innerHTML += '<style>#_chromeExtensionSiteEditButton.active{background-color:black !important;} #_chromeExtensionSiteEditButton.active path{fill:white;}</style><svg id="_chromeExtensionSiteEditButton" style="position: fixed;z-index:9999;top:25px;right:25px;border:none;width:30px;height:30px;padding: 10px;border: 2px solid black;background-color:#fff;cursor:pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.078 4.232l-12.64 12.639-1.438 7.129 7.127-1.438 12.641-12.64-5.69-5.69zm-10.369 14.893l-.85-.85 11.141-11.125.849.849-11.14 11.126zm2.008 2.008l-.85-.85 11.141-11.125.85.85-11.141 11.125zm18.283-15.444l-2.816 2.818-5.691-5.691 2.816-2.816 5.691 5.689z"/></svg>';
document.getElementById("_chromeExtensionSiteEditButton").contentEditable = 'false';
document.getElementById("_chromeExtensionSiteEditButton").onclick = function(){
	if(document.body.contentEditable != 'true'){
		document.body.contentEditable = 'true';
		document.designMode='on';
		document.getElementById("_chromeExtensionSiteEditButton").setAttribute("class","active");
	}else{
		document.body.contentEditable = 'false';
		document.designMode='off';
		document.getElementById("_chromeExtensionSiteEditButton").removeAttribute("class");
	}
}