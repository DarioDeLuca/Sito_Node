

function login(){
	let email= document.getElementById("display_email").value
	let pwd= document.getElementById("display_pwd").value
	fetch(`/val?user=${email}&password=${pwd}`,{method: "GET"})
	.then(res=>res.json())
	.then(res=>{if (res.status==800) alert('error')})
}







