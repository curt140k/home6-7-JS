//string---------------------------------------------------------------
function ucFirst(str) {
    if (str) {
       return str.charAt(0).toUpperCase()  + str.slice(1);
    }
    return str;
}

alert(ucFirst("asdasd"));




function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength) + '...';
  }

  return str;
}

alert(truncate("blablablablablablablablablablabla", 20));

