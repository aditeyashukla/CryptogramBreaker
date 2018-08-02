function atbash()
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

		  if ( position_small>-1 )
			  if ( position>-1 )
				  character_new = alphabet.charAt( alphabet.length - position - 1 );
			  else
				  character_new = alphabet.charAt( alphabet.length - position_small - 1 ).toUpperCase();
		  else
			  character_new = character;

		  output += character_new;
	  }

	  document.getElementById('atbashtext').value = output;
  }
function initatbash() {
	document.write('<textarea name="atbashtext" id="atbashtext" cols="60" rows="5"></textarea><br /><input type="button" onClick="atbash()" class="button" value="Apply Atbash" />');
}