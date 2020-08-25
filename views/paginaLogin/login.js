const bottone_scelta=document.getElementById("bottone_conferma")
let email=""
let pwd=""
function Verifica(){
	email = document.getElementById("display_email").value
	pwd = document.getElementById("display_pwd").value
	
}
bottone_scelta.onclick=Verifica()



