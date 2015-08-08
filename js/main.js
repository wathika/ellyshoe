function get_email_link (link_title) {
	var username = "jbrillon95";
	var hostname = "gmail.com";
	var link = username + "@" + hostname;
	link_title = link_title || link;
	document.write("<a href='" + "mail" + "to:" + link + "''>"+link_title + "</a>" )
}