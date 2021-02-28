import React from 'react';
import FlourishGetImage from "./FlourishGetImage";
import TwitterShare from "./TwitterShare";
import FlourishIframe from "./FlourishIframe";
import {Helmet} from "react-helmet";

function Main(props) {
    const metaDescription = "Merkez Veri, verileri görselleştirerek kaliteli bir deneyim oluşturmayı amaçlar. Veri kategorisi: " + props.item.category + " Veri adı: " + props.item.name

    return (
        <React.Fragment>
            <Helmet>
                <title>Merkez Veri | {props.item.name}</title>
                <meta name="description" content={metaDescription} />
            </Helmet>            
            <main id="main" className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between mt-4">
                    <div>
                        <h1 className="h2">{props.item.name}</h1>
                        <p className="fw-light fst-italic">- {props.item.category}</p>
                    </div>
                    
                    <div className="d-none d-lg-block">
                        <FlourishGetImage flourish_id={props.item.flourish_id} name={props.item.name} />
                        <TwitterShare name = {props.item.name}/>
                    </div>
                </div>
                <div className="d-flex justify-content-end d-lg-none">
                    <FlourishGetImage flourish_id={props.item.flourish_id} name={props.item.name} />
                    <TwitterShare name = {props.item.name}/>
                </div>
                <FlourishIframe flourish_id={props.item.flourish_id} />
            </main>            
        </React.Fragment>
    )
}

export default Main
