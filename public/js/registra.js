
function RegistraValori(){
	let email = document.getElementById("display_email").value
	let pwd = document.getElementById("display_pwd").value
	fetch(`/reg?user=${email}&password=${pwd}`,{method: "POST"})
	.then(res=>res.json())
	.then(res=>{if (res.status==200) alert("registrazione effettuata")
	else if (res.status==800) alert('error')})
}







