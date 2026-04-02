//your JS code here. If required.
let select = document.getElementById("colorSelect");

function removeColor(){
	let index = select.selectedIndex;
	if(index !=-1){
		select.remove(index);
	}
}