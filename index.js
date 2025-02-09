function clickk(){
    let url = document.getElementById("response").value
    isValidURL(url)


}


function isValidURL(str) {
    try {
      new URL(str);
      document.location = str
      return;
    } catch (_) {
      return console.error;
    }
  }
