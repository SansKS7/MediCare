function isfirstName(val) {
  var reg = /^[a-zA-Z\s]+$/;
  if (reg.test(val) && val.trim().length > 0) return true;
  return false;
}


  function isRating(val) {
    var rate = /^\d{1,2}$/;
    if (rate.test(val)) return true;
    return false;
  }
  function isAddress(val) {
    var reg = /^[a-zA-Z0-9-\s+/b+(/,@)]+$/;
    if (reg.test(val)) return true;
    return false;
  }

  function isPhno(val) {
    var phoneNo = /^\d{10,10}$/;
    if (phoneNo.test(val)) return true;
    return false;
  }

  function isMail(val) {
 
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.test(val)) return true;
    return false;
  }

  function isPassword(val) {
    var regex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!regex.test(val) || val.length > 15) {
    return false;
  }
    return true;
  }

  function isRePassword(pass, repass) {
    if (pass === repass) return true;
    return false;
  }

  function isSpeciality(val) {
   
    var regex = /^[a-zA-Z.-\s]*$/;
    if (regex.test(val) && val.trim().length > 0) return true;
  return false;
  
    return true;
  }


  module.exports = {isfirstName,isRating,isAddress,isPhno,isMail,isPassword,isRePassword,isSpeciality};