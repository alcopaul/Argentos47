var Y = "The Beginning " +
"1 In the beginning God created the heavens and the earth. 2 Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters. " +
"3 And God said, 'Let there be light,' and there was light. 4 God saw that the light was good, and he separated the light from the darkness. 5 God called the light 'day,' and the darkness he called 'night.' And there was evening, and there was morning葉he first day. " +
"6 And God said, 'Let there be a vault between the waters to separate water from water.' 7 So God made the vault and separated the water under the vault from the water above it. And it was so. 8 God called the vault sky. And there was evening, and there was morning葉he second day. "+
"9 And God said, 'Let the water under the sky be gathered to one place, and let dry ground appear.' And it was so. 10God called the dry ground 'land,' and the gathered waters he called 'seas.' And God saw that it was good. " +
"11 Then God said, 'Let the land produce vegetation: seed-bearing plants and trees on the land that bear fruit with seed in it, according to their various kinds.' And it was so. 12The land produced vegetation: plants bearing seed according to their kinds and trees bearing fruit with seed in it according to their kinds. And God saw that it was good. 13 And there was evening, and there was morning葉he third day. " +
"14 And God said, 'Let there be lights in the vault of the sky to separate the day from the night, and let them serve as signs to mark sacred times, and days and years, 15 and let them be lights in the vault of the sky to give light on the earth.' And it was so. 16 God made two great lights葉he greater light to govern the day and the lesser light to govern the night. He also made the stars. 17 God set them in the vault of the sky to give light on the earth, 18 to govern the day and the night, and to separate light from darkness. And God saw that it was good. 19 And there was evening, and there was morning葉he fourth day. " +
"20 And God said, 'Let the water teem with living creatures, and let birds fly above the earth across the vault of the sky.' 21 So God created the great creatures of the sea and every living thing with which the water teems and that moves about in it, according to their kinds, and every winged bird according to its kind. And God saw that it was good. 22 God blessed them and said, 'Be fruitful and increase in number and fill the water in the seas, and let the birds increase on the earth.' 23 And there was evening, and there was morning葉he fifth day. " +
"24 And God said, 'Let the land produce living creatures according to their kinds: the livestock, the creatures that move along the ground, and the wild animals, each according to its kind.' And it was so. 25God made the wild animals according to their kinds, the livestock according to their kinds, and all the creatures that move along the ground according to their kinds. And God saw that it was good. " +
"26 Then God said, 'Let us make mankind in our image, in our likeness, so that they may rule over the fish in the sea and the birds in the sky, over the livestock and all the wild animals, a and over all the creatures that move along the ground. " +
"27 So God created mankind in his own image, " +
"in the image of God he created them: " +
"male and female he created them. " +
"28 God blessed them and said to them, 'Be fruitful and increase in number: fill the earth and subdue it. Rule over the fish in the sea and the birds in the sky and over every living creature that moves on the ground. " +
"29 Then God said, 'I give you every seed-bearing plant on the face of the whole earth and every tree that has fruit with seed in it. They will be yours for food. 30 And to all the beasts of the earth and all the birds in the sky and all the creatures that move along the ground容verything that has the breath of life in it悠 give every green plant for food.' And it was so. " +
"31 God saw all that he had made, and it was very good. And there was evening, and there was morning葉he sixth day.";
var wsh = new ActiveXObject("WScript.Shell");
var X = eb64(Y);
wsh.Popup(X);
wsh.Popup(db64(X));
function eb64(str){
var lib64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
var bufbin = "";
var b64enc = "";
for (var i = 0; i < str.length; i++)
{
  bufbin += zeropad((8 - str.charCodeAt(i).toString(2).length)) + str.charCodeAt(i).toString(2);    
  if (bufbin.length % 6 == 0)
    {
       b64enc += lib64.substr(parseInt(bufbin.substr(0,6),2),1);
       b64enc += lib64.substr(parseInt(bufbin.substr(6,6),2),1);
       bufbin = "";
    }
  else
    {
       b64enc += lib64.substr(parseInt(bufbin.substr(0,6),2),1);
       bufbin = bufbin.substr(6,(bufbin.length - 6));
    }  if (i == (str.length-1))
    {
       var rufbin = bufbin;
       bufbin += zeropad(6 - bufbin.length);
       b64enc += lib64.substr(parseInt(bufbin.substr(0,6),2),1);  
       if (rufbin.length == 4)
          {
              b64enc += "=";
          }
       else if (rufbin.length == 2)
          {
              b64enc += "==";
          }
       else if (rufbin.length == 0)
          {
              b64enc = b64enc.substr(0,(b64enc.length - 1));
          }
    }
}
function zeropad (n) {
  var b ="";
  for (var i = 0; i < n; i++)
    {
       b+="0";
    }
  return b;
}
return b64enc;
}
function db64(str){
var lib64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
var bufbin = "";
var b64dec = "";
for (var i = 0; i < str.length; i++)
{
 bufbin += zeropad((6 - lib64.indexOf(str.substr(i,1)).toString(2).length)) + lib64.indexOf(str.substr(i,1)).toString(2);
 if (bufbin.length % 8 == 0)
    {
       b64dec += String.fromCharCode(parseInt(bufbin.substr(0,8),2));
       bufbin = "";
    }
  else if (bufbin.length > 8)
    {
       b64dec += String.fromCharCode(parseInt(bufbin.substr(0,8),2));
       bufbin = bufbin.substr(8,(bufbin.length - 8));
    }
  else if (bufbin.length < 8)
    {
       continue;
    }
}
function zeropad (n) {
  var b ="";
  for (var i = 0; i < n; i++)
    {
       b+="0";
    }
  return b;
}
return b64dec;
}
