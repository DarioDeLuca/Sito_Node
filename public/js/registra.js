
function RegistraValori(){
	let email = document.getElementById("display_email").value
	let pwd = document.getElementById("display_pwd").value
	if (email === "" || pwd==="" ){
		alert("inserire i dati richiesti")
	}
	else {
		if(pwd.length>8 && pwd.match(/[A-Z]/ && /[a-z]/ && /[0-9]/))
		{fetch(`/reg?user=${email}&password=${pwd}`,{method: "POST"})
		.then(res=>res.json())
		.then(res=>{if (res.status==800) {alert('error')} else{alert('registrazione effettuata con successo')}})}
		else {alert("la password non rispetta le condizioni ")}
		}
}







