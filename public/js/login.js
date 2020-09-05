

function login(){
	let email= document.getElementById("display_email").value
	let pwd= document.getElementById("display_pwd").value
	if(email === "" || pwd===""){
		alert("inserire i dati richiesti")
	}
	else {
		fetch(`/val?user=${email}&password=${pwd}`,{method: "GET"})
		.then(res=>res.json())
		.then(res=>{if (res.status==800) alert('username o password errati')})
	}
}







