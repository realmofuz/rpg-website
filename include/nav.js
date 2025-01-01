document.write(`
	<header>
		<a data-section="news" href="/news">News</a>
		<a data-section="home" href="/" class="homelink">The Realm of Uz</a>
		<a data-section="forums" href="https://forums.realmofuz.net">Forums</a>
	</header>
`)
document.querySelector(`a[data-section=${document.head.getAttribute("data-section")}]`).classList.add("activelink")
