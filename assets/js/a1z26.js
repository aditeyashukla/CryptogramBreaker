var Alphabet1 = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var Alphabet2 = "0123456789"

/*
function nchk() { //Check what's in the textbox
  var chkr = document.getElementById('atbashtext').value;
  if (chkr.match(/[A-z]/) == null)
    decryptit();
  else
    encryptit();

}
*/

function encryptit()
{

        var text = document.getElementById('atbashtext').value;
	  var alphabet = "abcdefghijklmnopqrstuvwxyz";
	  var output = "";
	  for ( var i=0; i<text.length; i++ )
	  {

		  var character = text.substr( i, 1 );
      var position = alphabet.indexOf( character );
		  var position_small = alphabet.indexOf( character.toLowerCase() );

		  var character_new = "";
      if (character == '1' || character == '2' || character == '3' || character == '4' || character == '5' || character == '6' || character == '7' || character == '8' || character == '9' || character == '0' ){character_new = '{number'+character+'}';}
else{
		  if ( position_small>-1 )
			  if ( position>-1 )
				  character_new = position+1;
			  else
				  character_new = position_small+1;
		  else
			  character_new = character;
}
		  output += character_new+'-';


	  }

	  document.getElementById('atbashtext').value = output;

}


function decryptit()
{

                var plaintxt = ""
                var ciphertext = document.getElementById('atbashtext').value
                for (var  i = 0; i < ciphertext.length; i ++) {
            var thischar = ciphertext.charAt(i)
                        var charcheck = Alphabet2.indexOf(thischar)

                        if ( charcheck == -1){
                             plaintxt += thischar
                        }

            else {

                         if( i!= ciphertext.length-1){
                                               var nextchar = ciphertext.charAt(i+1)
                                                   var nextcharcheck = Alphabet2.indexOf(nextchar)
                           if (nextcharcheck == -1)//if nextchar is a space
                                                        plaintxt += Alphabet1.charAt(charcheck)
                                                   else {
                                                            var pos = 10 * parseInt(thischar) + parseInt(nextchar)
                                                                        if (pos < 27) {
                                                                            plaintxt += Alphabet1.charAt(pos)
                                                                            i++
                                    }
                                                                        else {
                                                                            alert("There may be fancy new letters in the year 207012 but in our time period, we only have 26. Double check and try again.")
                                                                                break
                                                                        }
                                                   }
                                         }
                                         else {
                                           if (charcheck == -1)
                                               plaintxt += thischar
                                           else
                                               plaintxt += Alphabet1.charAt(charcheck)
                                         }//end of i == ciphertext.length-1



                        }//end of charcheck !=-1



                }

                /*plaintxt = plaintxt.toLowerCase()
                plaintxt = standarize(plaintxt) */
                plaintxt = plaintxt.replace(/-/g,"")
                document.getElementById('atbashtext').value = plaintxt
}


function initatbash() {
	document.write('<textarea name="atbashtext" id="atbashtext" cols="60" rows="5"></textarea><br /><input type="button" onClick="encryptit()" class="button" value="Apply A1Z26" /><input type="button" onClick="decryptit()" class="button" value="Break A1Z26" />');
}
