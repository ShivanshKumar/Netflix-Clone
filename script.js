const divBar = document.querySelectorAll('#mdiv5>div');
const textNode = document.querySelectorAll( "#mdiv5 >div>div");

const a = [`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
`Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one low fixed monthly fee. Plans start from Rs.199 a month. No extra costs or contracts.`,
`Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
`Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.`,
`Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`]

textNode.forEach((tn,i)=>{
	tn.addEventListener('click',()=>{
	if(tn.parentElement.children[1]===undefined){

		if(find()!==undefined){find().removeChild(find().children[1])};

		const div = document.createElement("div");
		div.appendChild(document.createTextNode(a[i]));
		tn.parentElement.appendChild(div);
		div.className = 'des';
	}
	else{
		tn.parentElement.removeChild(tn.parentElement.children[1]);
	}
	})
})

const find = ()=>{
	let ub;
	divBar.forEach((db)=>{
		if(db.children[1]!==undefined){
			ub = db;	
		}
	});
	return ub;
}