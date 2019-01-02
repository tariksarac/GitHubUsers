import React from 'react';
import Loader from 'react-loader-spinner';
import {loaderStyle} from "../../../utils/constants";

const ArtlandLoader = (props) => {
    return (
        <div style={ loaderStyle }>
            <Loader
                type="Triangle"
                color="#3c4146"
                height="50"
                width="50"
            />
        </div>
    );
};

ArtlandLoader.propTypes = {};
ArtlandLoader.defaultProps = {};

export default ArtlandLoader;
