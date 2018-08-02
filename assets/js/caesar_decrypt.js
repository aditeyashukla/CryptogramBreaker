/*function csr_dcrpt()
  {
	  var text = document.getElementById('atbashtext').value;
    var amt = document.getElementById('num').value;
    var tma = 26 - amt;
	  var alphabet = "abcdefghijklmnopqrstuvwxyz";
	  var output = "";
	  for ( var i=0; i<text.length; i++ )
	  {
		  var character = text.substr( i, 1 );
		  var position = alphabet.indexOf( character );
		  var position_small = alphabet.indexOf( character.toLowerCase() );

		  var character_new = "";
      if (character == ' ')
        character_new= ' ';
        else{
		  if ( position_small>-1 )
			  if ( position>-1 )
				  character_new = alphabet.charAt( position - amt );

			  else
				  character_new = alphabet.charAt( position_small - amt ).toUpperCase();
		  else
			  character_new = character;

		  if(position<amt)
					character_new = alphabet.charAt( position + tma);

        }
		  output += character_new;
	  }

	  document.getElementById('atbashtext').value = output;
  }
function initatbash() {
	document.write('<textarea name="atbashtext" id="atbashtext" cols="66" rows="5"></textarea><br /><input type="button" onClick="csr_dcrpt()" class="button" value="Break Caeser" />');
}
*/

function csr_dcrpt() {
  var str = document.getElementById("atbashtext").value;
  var amt = document.getElementById("num").value;
  var amount = parseInt(amt, 10);

	// Wrap the amount
	if (amount < 0)
		return caesarShift(str, amount + 26);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90)){

        if(code < 65 + amount){
          c = String.fromCharCode(code + 26 - amount);
        }

          else{
				c = String.fromCharCode(code - amount);}
        }
			// Lowercase letters
			else if ((code >= 97) && (code <= 122)){

        if(code < 97 + amount){
          c = String.fromCharCode(code + 26 - amount);
        }

      else{
				//c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        c = String.fromCharCode(code - amount);
      }
      }

		}

		// Append
		output += c;

	}

	// All done!
  document.getElementById('atbashtext').value = output;
}
function initatbash() {
document.write('<textarea name="atbashtext" id="atbashtext" cols="66" rows="5"></textarea><br /><input type="button" onClick="csr_ncrpt()" class="button" value="Apply Caeser" />');
}
