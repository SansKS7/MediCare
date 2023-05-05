function isfirstName(val) {
    
    var reg = /^[a-zA-Z]+$/;
    if (reg.test(val) && val.trim().length>0) return true;
    return false;
  }

  function isAddress(val) {
    
    var reg = /^[a-zA-Z0-9\s+/b+(/,@)]+$/;
    // var reg=/^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/

    if (reg.test(val)) return true;
    return false;
  }

  function isPhno(val) {
    var phoneNo = /^\d{10,10}$/;
    if (phoneNo.test(val)) return true;
    return false;
  }

  function isAge(val) {
    var phoneNo = /^\d{2}$/;
    if (phoneNo.test(val)) return true;
    return false;
  }

  function isPassword(val) {
    

    var regex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!regex.test(val)) {
      return false;
    }
    return true;
  }

  function isRePassword(pass, repass) {
    if (pass === repass) return true;
    return false;
  }

module.exports = {isfirstName,isAddress,isAge,isPassword,isPhno,isRePassword}; 