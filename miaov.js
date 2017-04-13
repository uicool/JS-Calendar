var aInnerText=
[
	"Happy New Year!～",
	"Happy February!~",
	"Happy March!~",
	"Happy April!~",
	"Happy May!~",
	"Happy June!~",
	"Happy July!~",
	"Happy August!~",
	"Happy September!~",
	"Happy October!~",
	"Happy November!~",
	"Happy December!~"
];
window.onload = function(){
	var oDiv=document.getElementById('tab');
	var aLiBtn=oDiv.getElementsByTagName('ul')[0].getElementsByTagName('li');
	var i=0;
	
	for(i=0;i<aLiBtn.length;i++)
	{
		aLiBtn[i].onmouseover=select;
	}
}
function select(){
	var oDiv = document.getElementById('tab');
	var aLiBtn = oDiv.getElementsByTagName('ul')[0].getElementsByTagName('li');
	var oDivContent = oDiv.getElementsByTagName('div')[0];
	var sInnterHtml = '';
	var i = 0;

	for(i=0; i<aLiBtn.length; i++){
		aLiBtn[i].className = '';
	}
	for(i=0; i<aLiBtn.length; i++){
		if(aLiBtn[i] === this){
			aLiBtn[i].className = 'active';
			//Update Events
			sInnterHtml="<h2>" + (i+1) + " Month Event</h2>";
			sInnterHtml+="<p>" + aInnerText[i] + "</p>";
			oDivContent.innerHTML=sInnterHtml;
		}
	}
}