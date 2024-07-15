//your JS code here. If required.
const btn = document.querySelector("#btn");
const output =document.querySelector("#output");

btn.addEventListener("click",()=>{
	const inputVal = document.querySelector("#ip").value;

	const firstPromise = new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(Number(inputVal));
			,2000})
	});

	// Chain Promise

	firstPromise.then((number)=>{
		output.textContent = `Result : ${number}`;

		return new Promise((resolve,reject)=>{

			setTimeout(()=>{
				resolve(number * 2);
			},2000)
		})
	}).then(number=>{
		output.textContent = `Result :${number}`;

		return new Promise((resolve,reject)=>{

			setTimeout(()=>{
				resolve(number - 3);
			},2000)
		})
	}).then(number=>{
		output.textContent = `Result: ${number}`

		return new Promise((resolve,reject)=>{

			setTimeout(()=>{
				resolve(number / 2);
			},2000)
		})
	}).then(number=>{
		output.textContent = `Result ; ${number}`;

		return new Promise ((resolve,reject)=>{
			setTimeout(()=>{
				resolve(number+ 10)
			},2000)
		})
	}).then(finalResult=.{
			output.textContent= `Final Result : ${finalResult}`
	}).catch((err)=>{
	console.error("Error:",err);
	})

})