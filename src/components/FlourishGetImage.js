import React from 'react';
var JSSoup = require('jssoup').default;



function FlourishGetImage(props) {
    console.log("bu:",props.name)
    const handleClick = (flourish_id,name,e) => {
        //Link Çağır
        fetch('https://public.flourish.studio/visualisation/'+flourish_id).then(
            // Yukarıdaki adresi text olarak çekiyoruz.
            (response) => response.text()
            ).then(
                (text) => {
                    //JSSoup, Python'daki beautifulsoup benzeri bir araç
                    var soup = new JSSoup(text);
                    // çektiğimiz text üzerinde meta etiketinde arama yapıyoruz.
                    let ImageLink = soup.findAll('meta')[10].nextElement.attrs.content

                    //console.log(ImageLink)
                    
                    // Resmi indirmek için kullandığımız kod bloğu
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", ImageLink, true);
                    xhr.responseType = "blob";
                    xhr.onload = function(){
                        var urlCreator = window.URL || window.webkitURL;
                        var imageUrl = urlCreator.createObjectURL(this.response);
                        var tag = document.createElement('a');
                        tag.href = imageUrl;

                        //indirilen dosyanın adı
                        tag.download = name+".jpg";
                        document.body.appendChild(tag);
                        tag.click();
                        document.body.removeChild(tag);
                    }
                    xhr.send();
                    
                }     
            );
      }

      return (
        <button className="btn btn-sm btn-secondary me-1 mb-1" onClick={(e) => handleClick(props.flourish_id,props.name, e)}>
            <i className="fas fa-download navbar-icon"></i> Resim indir!
        </button>
    )
}

export default FlourishGetImage