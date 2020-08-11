import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
    return (
        <div style={{textAlign: 'center', top: '50%'}}>
            <CircularProgress />
        </div>
    )
}

export default Loading;