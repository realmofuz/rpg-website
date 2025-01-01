const stars = [];

const parameters = {
	starCount: 500,
	apocalypseSeconds: 600
}

noise.seed(Math.random());
for(let i = 0; i < parameters.starCount; i++) {
	let pos;
	do {
		pos = [Math.random(),Math.random()]
	} while(Math.random() > Math.abs(noise.perlin2(pos[0]*2, pos[1]*2)))
	stars.push({x:pos[0],y:pos[1],ttl:Math.floor(Math.sqrt(Math.random())*1000*parameters.apocalypseSeconds),size:Math.ceil(Math.random()*4),lum:Math.cbrt(Math.abs(noise.perlin2(pos[0]*2,pos[1]*2)))*255});
}



window.addEventListener("load", ()=>{
	function resize(){
		let styles = getComputedStyle(canvas);
		canvas.width = parseInt(styles.width);
		canvas.height = parseInt(styles.height);
	}

	window.addEventListener("resize", resize);

	let start = performance.now();

	function frame(now) {
		let time = now - start;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for(let i in stars) {
			let star = stars[i];
			if(!star) continue;
			let opacity = Math.sqrt(0.5*Math.sin((now + star.ttl)/1000)+0.5);
			if((opacity < 0.1) && (time > star.ttl)) {
				delete stars[i]
				continue;
			}
			ctx.fillStyle = `rgba(${star.lum}, ${star.lum}, ${star.lum}, ${opacity})`
			let x = star.x * canvas.width, y = star.y * canvas.height;
			ctx.fillRect(x-star.size/2, y-star.size/2, star.size, star.size);
		}
		requestAnimationFrame(frame)
	}

	const canvas = document.querySelector("#splash canvas"), ctx = canvas.getContext("2d");
	resize();
	frame();
});
