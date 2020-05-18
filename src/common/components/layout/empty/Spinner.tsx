import React, { FC, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "astroturf";
import "../../../../styles/spinner.scss";
import Spin from "antd/es/spin";

interface IProps {
    size?: "large" | "small";
    fill?: string;
    timeout?: number;
    withHeight?: boolean;
}

export const Spinner: FC<IProps> = ({
    fill = "#fff",
    size = "small",
    timeout = 1000,
    withHeight = false,
}) => {
    const [inProp, setInProp] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setInProp(true);
        }, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [size, fill, timeout]);

    return (
        <SpinnerArea large={size === "large"} withHeight={withHeight}>
            <CSSTransition in={inProp} timeout={300} unmountOnExit classNames="spinner">
                {/*<SpinnerIcon fill={fill} />*/}
                <Spin size="large" />
            </CSSTransition>
        </SpinnerArea>
    );
};

const SpinnerArea = styled.div<{ large: boolean; withHeight?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0;
  margin: auto;

  &.withHeight {
    height: auto;
  }

  svg {
    width: 22px;
    height: 22px;
    -moz-animation: spin 1.2s infinite linear;
    -webkit-animation: spin 1.2s infinite linear;
    animation: spin 1.2s infinite linear;
  }

  &.large {
    svg {
      width: 34px;
      height: 34px;
    }
  }

  @keyframes spin {
    0% {
      -moz-transform: rotateZ(0deg);
      -webkit-transform: rotateZ(0deg);
      -o-transform: rotateZ(0deg);
      -ms-transform: rotateZ(0deg);
    }
    100% {
      -moz-transform: rotateZ(360deg);
      -webkit-transform: rotateZ(360deg);
      -o-transform: rotateZ(360deg);
      -ms-transform: rotateZ(360deg);
    }
  }
`;
