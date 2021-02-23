import React from 'react'


const iframe = "<iframe src='https://flo.uri.sh/visualisation/5361729/embed' title='Interactive or visual content' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/5361729/?utm_source=embed&utm_campaign=visualisation/5361729' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>"; 

function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }

function Main(props) {
    return (
        <React.Fragment>
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <h1 class="h2">Dashboard</h1>
                <Iframe iframe={iframe} />
            </main>
        </React.Fragment>
    )
}

export default Main
