import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";

function FlourishGetImage(props) {
    const [ImageLink, setImageLink] = useState("link");

    // componentDidMount ve componentDidUpdate kullanımına benzer bir kullanım sunar:
    useEffect(() => {

        
        //Link Çağır
        fetch('https://public.flourish.studio/visualisation/'+props.flourish_id).then(
            // Yukarıdaki adresi text olarak çekiyoruz.
            (response) => response.text()
            ).then(
                (text) => {
                    //JSSoup, Python'daki beautifulsoup benzeri bir araç
                    var JSSoup = require('jssoup').default;
                    var soup = new JSSoup(text);
                    // çektiğimiz text üzerinde meta etiketinde arama yapıyoruz.
                    //let ImageLink = soup.findAll('meta')[10].nextElement.attrs.content
                    setImageLink(soup.findAll('meta')[10].nextElement.attrs.content)
                    document.getElementsByTagName("META")[2].content="Your description about the page or site here to set dynamically";                    
                }     
            );
    });

    const handleClick = (ImageLink,name,e) => {
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
                    
                };

      return (
        <React.Fragment>
        <button className="btn btn-sm btn-secondary me-1 mb-1" onClick={(e) => handleClick(ImageLink,props.name, e)}>
            <i className="fas fa-download navbar-icon"></i> Resim indir!
        </button>
        <Helmet>
            <title>Merkez Veri | {props.name}</title>
                <meta name="robots" content="noindex" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@merkezveri" />
                <meta name="twitter:title" content={props.name} />
                <meta name="twitter:description" content="Verilerin görselleştirilmesi Merkez Veri tarafından yapılmıştır." />
                <meta name="twitter:creator" content="@merkezveri" />
                <meta name="twitter:image" content={ImageLink} />
            </Helmet>
        </React.Fragment>
    )
}

export default FlourishGetImage