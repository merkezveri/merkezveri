import React from 'react';
const twitterShare = require('twitter-share');


function TwitterShare(props) {

    // create all the links!!!
    const params = {
        text: props.name,
        url: window.location.href,
        hashtags: ['tüik', 'istatistik', 'veri'],
        via: 'merkezveri', // optional String
    };
    const tweetLink = twitterShare(params);
    return (
        <a className="btn btn-sm btn-primary mb-1" href={tweetLink} target="_blank" rel="noreferrer" role="button">
        <i className="fab fa-twitter navbar-icon"></i> Twitter ile paylaş!
    </a>

    )
}
export default TwitterShare
