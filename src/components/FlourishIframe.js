import React from 'react'

function FlourishIframe(props) {
    const iframe = "<iframe src='https://flo.uri.sh/visualisation/"+props.flourish_id+"/embed' title='Interactive or visual content' frameborder='0' scrolling='no' style='width:100%;height:100%;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/"+props.flourish_id+"/?utm_source=embed&utm_campaign=visualisation/"+props.flourish_id+"' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>"

    return (
        <div className="Iframe" dangerouslySetInnerHTML={ {__html: iframe?iframe:""}} />   
    );
}

export default FlourishIframe
