const bottone_scelta=document.getElementById("bottone_conferma")
const bottone_home=document.getElementById("bottone_home")


function RegistraValori(){
	let email = document.getElementById("display_email").value
	let pwd = document.getElementById("display_pwd").value
	if (pwd==="ciao" && email==="caio@gmail.com"){
		console.log("bela")
	}
}

function saluta(){
	console.log("diocane")
}

bottone_scelta.onclick=RegistraValori


