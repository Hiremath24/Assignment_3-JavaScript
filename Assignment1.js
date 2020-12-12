function cardnumber(inputtxt)
{
  var cardno = ("[1-9]{14} /^[^a-zA-Z] ^\d*[02468] ");
  if(inputtxt.value.match(cardno))
        {
      return true;
        }
      else
        {
        alert("Not a valid credit card number!");
        return false;
        }
}
