// weekday working day//
function he()
{
	let getday=document.getElementById('day').value;

	let msg=document.getElementsByTagName('p');
	let tday=new Date(getday);
	let day=tday.getDay();
	console.log(day);


	if((day=="0")||(day=="6"))
	{
		console.log("weekend");
	}
	else  if((day>="1")&&(day<="5"))
	{
		console.log("working  day");
		
		 msg.innerHTML="worikng day";
		 
		 
	}
	else 
	{
		 console.log("It's not a day");
	}
}