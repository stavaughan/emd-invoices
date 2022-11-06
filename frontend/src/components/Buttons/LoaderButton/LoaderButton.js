import React from 'react';
import { LoadingIcon } from '.';
import { Button } from '..';

const LoaderButton = (props) => {

    const {
        type,
        className,
        setLoading,
        setOnclick,
        afterLoading,
        disabled,
        message,
        loading,
        label,
		wait,
        icon
    } = props;

    const setLoaderTimeout = () => {
        if(setLoading){
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                if(afterLoading){
                    afterLoading()
                }
            }, 1500)
        }
    };

    const onClickHandler = (e) => {
        if(setOnclick) {
            setOnclick(e);
        }
		setLoaderTimeout()
    };

    return (
        <Button
            type={type}
            className={className}
            rest={{
                onClick: onClickHandler,
                disabled: loading || disabled
            }}
        >
            <LoadingIcon
                loading={loading}
                message={message}
                label={label}
                icon={icon}
				wait={wait}
            />
        </Button>
    )
}

export default LoaderButton
