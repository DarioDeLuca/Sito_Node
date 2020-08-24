function Registra(){
	valore = document.getElementById("display_puntata").value
	let scelta=parseInt(valore)
	document.getElementById('bottone_1').disabled=false
	document.getElementById('bottone_2').disabled=true
	if ((scelta/1)===scelta ){
		console.log("Ebbene, credi di farcela in "+ valore + " tiri?")
		dialogo.innerHTML="Ebbene, credi di farcela in "+ valore + " tiri? Perfetto, chi tra noi si avvicinerà maggiormente al numero esatto di tiri vincerà"
		document.getElementById('bottone_1').disabled=false
	}
	else{
		dialogo.innerHTML="Tu devi essere quello simpatico della famiglia..."
		document.getElementById('bottone_1').disabled=true
	}
}
bottone_scelta.onclick=Registra