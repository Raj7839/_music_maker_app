window.addEventListener("load", () => {
	const sounds = document.querySelectorAll(".sound");
	const balls = document.querySelectorAll(".balls div");
	const visual = document.querySelector(".visual");
	const colors= ["#34495E","#E67E22","#63C91D","#57F331","#F4E610","#BDF1C3"];

	balls.forEach((ball,i)=> {
		ball.addEventListener("click",function(){
			sounds[i].currentTime = 0;
			sounds[i].play();
			createBubbles(i);
		});
	});

	const createBubbles = (i) => {
		const bubble = document.createElement("div");
		visual.appendChild(bubble);
		bubble.style.backgroundColor = colors[i];
		bubble.style.animation = "jump 1s ease";
		bubble.addEventListener("animationend", ()=>{
			visual.removeChild(this);
		})
	}
});