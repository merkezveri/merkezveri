import React from 'react';

function Iframe(props) {
    const iframe = "<iframe src='https://flo.uri.sh/visualisation/"+props.flourish_id+"/embed' title='Interactive or visual content' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/"+props.flourish_id+"/?utm_source=embed&utm_campaign=visualisation/"+props.flourish_id+"' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>"
    return (<div dangerouslySetInnerHTML={ {__html: iframe?iframe:""}} />);
  }


function Main(props) {
    
    // Make Twitter Share Link
    const twitterLink = "https://twitter.com/intent/tweet?url=" + window.location.href + "&text=" + encodeURI(props.item.name) + "&via=merkezveri"

    return (
        <React.Fragment>
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between mt-4">
                    <div>
                        <h1 class="h2mt-4">{props.item.name}</h1>
                        <p class="fw-light fst-italic">- {props.item.category}</p>
                    </div>
                    <div>
                        <a class="btn btn-sm btn-primary" href={twitterLink} target="_blank" rel="noreferrer" role="button">
                        <i class="fab fa-twitter navbar-icon"></i> Twitter ile paylaş!
                        </a>
                    </div>
                </div>
                <Iframe flourish_id={props.item.flourish_id} />
            </main>
        </React.Fragment>
    )
}

export default Main
