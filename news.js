addEventListener("load", ()=>{
	document.querySelectorAll("time").forEach(time => {
		time.textContent = new Date(time.dateTime).toLocaleDateString();
		time.onclick = () => {
			location.hash = time.parentElement.parentElement.id;
		};
	});
});
