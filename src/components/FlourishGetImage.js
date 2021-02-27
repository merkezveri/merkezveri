import React from 'react';
var JSSoup = require('jssoup').default;

fetch('https://public.flourish.studio/visualisation/5395427/').then(
    (response) => response.text()
    ).then(
        (text) => {
            var soup = new JSSoup(text);
            //console.log(soup.findAll('p')[0].text)
            console.log(soup.findAll('meta')[10].nextElement.attrs.content)
        }
        
    );

function FlourishGetImage() {
    return (
        <div>
            Resim Çek!
        </div>
    )
}

export default FlourishGetImage