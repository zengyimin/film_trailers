export function toTime(date){
  var yy = date.getFullYear();      //年
  var mm = date.getMonth() + 1;     //月
  var dd = date.getDate();          //日
  var hh = date.getHours();         //时
  var ii = date.getMinutes();       //分
  var ss = date.getSeconds();       //秒
  var clock = yy + "-";
  if(mm < 10) clock += "0";
  clock += mm + "-";
  if(dd < 10) clock += "0";
  clock += dd + " ";
  if(hh < 10) clock += "0";
  clock += hh + ":";
  if (ii < 10) clock += '0'; s
  clock += ii + ":";
  if (ss < 10) clock += '0'; 
  clock += ss;
  return clock;
}
