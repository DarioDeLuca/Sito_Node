
function RegistraValori(){
	let email = document.getElementById("display_email").value
	let pwd = document.getElementById("display_pwd").value
	fetch(`/reg?user=${email}&password=${pwd}`,{method: "POST"})
	.then(res=>res.json())
	.then(res=>{if (res.status==800) alert('error')
else{alert('registrazione effettuata con successo')}})
}







