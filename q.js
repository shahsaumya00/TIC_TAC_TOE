var change=0;
var count=0;
var alrt=0;
//document.getElementById('restart').style.display=none;
/*var aa=document.getElementById('a1');
var ab=document.getElementById('a2');
var ac=document.getElementById('a3');
var ab=document.getElementById('b1');
var bb=document.getElementById('b2');
var bc=document.getElementById('b3');
var ca=document.getElementById('c1');
var cb=document.getElementById('c2');
var cc=document.getElementById('c3');*/

/*if ($("#a1").hasClass('o')
{
	 document.getElementById('test').innerHTML="123";
}*/
/*aa.onclick = function() {
   document.getElementById('test').innerHTML="123";
}*/

var reply_click = function()
{
	if (change==0)
	{
	
		if( document.getElementById(this.id).innerHTML!="O" &&  document.getElementById(this.id).innerHTML!="X")
		{
			count++;
			document.getElementById(this.id).innerHTML="O";
			change=1;
		}
		
	if((document.getElementById('a1').innerHTML=="O" && document.getElementById('a2').innerHTML=="O" && document.getElementById('a3').innerHTML=="O") || (document.getElementById('b1').innerHTML=="O" && document.getElementById('b2').innerHTML=="O" && document.getElementById('b3').innerHTML=="O")
|| (document.getElementById('c1').innerHTML=="O" && document.getElementById('c2').innerHTML=="O" && document.getElementById('c3').innerHTML=="O") ||
(document.getElementById('a1').innerHTML=="O" && document.getElementById('b1').innerHTML=="O" && document.getElementById('c1').innerHTML=="O") || (document.getElementById('a2').innerHTML=="O" && document.getElementById('b2').innerHTML=="O" && document.getElementById('c2').innerHTML=="O") || (document.getElementById('a3').innerHTML=="O" && document.getElementById('b3').innerHTML=="O" && document.getElementById('c3').innerHTML=="O") || (document.getElementById('a1').innerHTML=="O" && document.getElementById('b2').innerHTML=="O" && document.getElementById('c3').innerHTML=="O") || (document.getElementById('a3').innerHTML=="O" && document.getElementById('b2').innerHTML=="O" && document.getElementById('c1').innerHTML=="O"))
		{
			alert("O has won the game!! Press RESTART to Start a new game.");
	//		document.getElementById('restart').style.display=block;
			alrt=1;
		}
else if((document.getElementById('a1').innerHTML=="X" && document.getElementById('a2').innerHTML=="X" && document.getElementById('a3').innerHTML=="X") || (document.getElementById('b1').innerHTML=="X" && document.getElementById('b2').innerHTML=="X" && document.getElementById('b3').innerHTML=="X")
|| (document.getElementById('c1').innerHTML=="X" && document.getElementById('c2').innerHTML=="X" && document.getElementById('c3').innerHTML=="X") ||
(document.getElementById('a1').innerHTML=="X" && document.getElementById('b1').innerHTML=="X" && document.getElementById('c1').innerHTML=="X") || (document.getElementById('a2').innerHTML=="X" && document.getElementById('b2').innerHTML=="X" && document.getElementById('c2').innerHTML=="X") || (document.getElementById('a3').innerHTML=="X" && document.getElementById('b3').innerHTML=="X" && document.getElementById('c3').innerHTML=="X") || (document.getElementById('a1').innerHTML=="X" && document.getElementById('b2').innerHTML=="X" && document.getElementById('c3').innerHTML=="X") || (document.getElementById('a3').innerHTML=="X" && document.getElementById('b2').innerHTML=="X" && document.getElementById('c1').innerHTML=="X"))
		{
			alert("X has won the game!! Press RESTART to Start a new game.");
	//		 document.getElementById('restart').style.display=block;
			 alrt=1;
		}
	}
	else
	{
		if( document.getElementById(this.id).innerHTML!="O" &&  document.getElementById(this.id).innerHTML!="X")
		{
			count++;
			document.getElementById(this.id).innerHTML="X";
			change=0;
		}

		 if((document.getElementById('a1').innerHTML=="O" && document.getElementById('a2').innerHTML=="O" && document.getElementById('a3').innerHTML=="O") || (document.getElementById('b1').innerHTML=="O" && document.getElementById('b2').innerHTML=="O" && document.getElementById('b3').innerHTML=="O")
|| (document.getElementById('c1').innerHTML=="O" && document.getElementById('c2').innerHTML=="O" && document.getElementById('c3').innerHTML=="O") ||
(document.getElementById('a1').innerHTML=="O" && document.getElementById('b1').innerHTML=="O" && document.getElementById('c1').innerHTML=="O") || (document.getElementById('a2').innerHTML=="O" && document.getElementById('b2').innerHTML=="O" && document.getElementById('c2').innerHTML=="O") || (document.getElementById('a3').innerHTML=="O" && document.getElementById('b3').innerHTML=="O" && document.getElementById('c3').innerHTML=="O") || (document.getElementById('a1').innerHTML=="O" && document.getElementById('b2').innerHTML=="O" && document.getElementById('c3').innerHTML=="O") || (document.getElementById('a3').innerHTML=="O" && document.getElementById('b2').innerHTML=="O" && document.getElementById('c1').innerHTML=="O"))
                {
                        alert("O has won the game!! Press RESTART to Start a new game.");
	//		 document.getElementById('restart').style.display=block;
			 alrt=1;
                }
else if((document.getElementById('a1').innerHTML=="X" && document.getElementById('a2').innerHTML=="X" && document.getElementById('a3').innerHTML=="X") || (document.getElementById('b1').innerHTML=="X" && document.getElementById('b2').innerHTML=="X" && document.getElementById('b3').innerHTML=="X")
|| (document.getElementById('c1').innerHTML=="X" && document.getElementById('c2').innerHTML=="X" && document.getElementById('c3').innerHTML=="X") ||
(document.getElementById('a1').innerHTML=="X" && document.getElementById('b1').innerHTML=="X" && document.getElementById('c1').innerHTML=="X") || (document.getElementById('a2').innerHTML=="X" && document.getElementById('b2').innerHTML=="X" && document.getElementById('c2').innerHTML=="X") || (document.getElementById('a3').innerHTML=="X" && document.getElementById('b3').innerHTML=="X" && document.getElementById('c3').innerHTML=="X") || (document.getElementById('a1').innerHTML=="X" && document.getElementById('b2').innerHTML=="X" && document.getElementById('c3').innerHTML=="X") || (document.getElementById('a3').innerHTML=="X" && document.getElementById('b2').innerHTML=="X" && document.getElementById('c1').innerHTML=="X"))
                {
                        alert("X has won the game!! Press RESTART to Start a new game.");
	//		 document.getElementById('restart').style.display=block;
			 alrt=1;
                }
	}
}

if(count==9 && alrt==0)
{
        alert("Tie!");
}


document.getElementById('test').innerHTML=count;


/*function check()
{
	 if ($("#a1").hasClass('O') && $("#a2").hasClass('O') && $("#a3").hasClass('O'))
	{
		alert("O has won the game");
	}
}*/

/*var reply_click = function()
{
	document.getElementById(this.id).innerHTML="a";
//    alert("Button clicked, id "+this.id+", text"+this.innerHTML);
}*/

//document.getElementById('restart').onclick=reset();

function reset()
{

document.getElementById('a1').innerHTML=":)";
document.getElementById('a2').innerHTML=":)";
document.getElementById('a3').innerHTML=":)";
document.getElementById('b1').innerHTML=":)";
document.getElementById('b2').innerHTML=":)";
document.getElementById('b3').innerHTML=":)";
document.getElementById('c1').innerHTML=":)";
document.getElementById('c2').innerHTML=":)";
document.getElementById('c3').innerHTML=":)";
change=0;
count=0;
alrt=0;
}





document.getElementById('a1').onclick = reply_click;
document.getElementById('a2').onclick = reply_click;
document.getElementById('a3').onclick = reply_click;
document.getElementById('b1').onclick = reply_click;
document.getElementById('b2').onclick = reply_click;
document.getElementById('b3').onclick = reply_click;
document.getElementById('c1').onclick = reply_click;
document.getElementById('c2').onclick = reply_click;
document.getElementById('c3').onclick = reply_click;
//document.getElementById('test').innerHTML=count;

/*var aa=document.getElementById('a1').innerHTML;
var ab=document.getElementById('a2').innerHTML;
var ac=document.getElementById('a3').innerHTML;
var ab=document.getElementById('b1').innerHTML;
var bb=document.getElementById('b2').innerHTML;
var bc=document.getElementById('b3').innerHTML;
var ca=document.getElementById('c1').innerHTML;
var cb=document.getElementById('c2').innerHTML;
var cc=document.getElementById('c3').innerHTML;*/
/*if(count==2 && alert==0)
{
	alert("Tie!");
}*/
