var hp;
function hm(obj, state) {
obj.style.backgroundColor = (1 == state) ? '#EEEEEE' : '#FFFFFF';return;}
function home(obj, state) {
obj.style.borderColor = (1 == state) ? '#546E8A' : '#E1E1E1';}
function OpenGuide(tipo){
var url="http://www.shinystat.com/cgi-bin/searchguide.cgi?LANG=1&LOAD="+tipo;
if (typeof hp=="undefined" || hp.closed) hp = window.open(url ,'_blank','location=no,status=no,scrollbars=no,menubar=no,toolbar=yes,directories=no,resizable=no,width=700,height=450')
else hp.focus();}
function lg(ln){
var wh=""+escape(window.location.href);
var wha=wh.split("/");var _a=4;lc="";
while(_a < wha.length){lc+="/"+wha[_a];_a++;}
location.href="/"+ln+lc;
}
function getobj(id){
 if(document.getElementById && document.getElementById(id))  
  return document.getElementById(id);
 else if (document.all && document.all(id))
  return document.all(id);  
 else       
  return false;
}
function cm(id) {
 obj=getobj(id); 
 document.location = obj.href;
 return false;
}

function FormHelp(id, state){
  obj=getobj(id);
  obj.style.backgroundColor = ( state == 1) ? '#ffe8ab' : '';
}
function SS_gso(objectId) {
 if(document.getElementById && document.getElementById(objectId)) { 
  return document.getElementById(objectId).style;
 } else if (document.all && document.all(objectId)) {
  return document.all(objectId).style;

 } else if (document.layers && document.layers[objectId]) { 
  return document.layers[objectId];
 } else {       
  return false;
 }
}
var last="";

function showopz(chk)
{
 obj = SS_gso('opz');
 if (chk.checked)
  obj.display = 'block';
 else 
  obj.display = 'none';
}

function showopzmulti(id)
{
 if (!last) 
  last = SS_gso('opz1');  
 obj = SS_gso(id);   
 obj.display = 'block';
 if(last && (last != obj) ){
  last.display = 'none';
  last = obj;
 }
}

