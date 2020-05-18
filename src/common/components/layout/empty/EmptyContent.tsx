import React from "react";
import styled from "astroturf";
import { Spinner } from "./Spinner";

export const EmptyContent = () => {
    return (
        <Load>
            <Spinner fill={"#0acdde"} size={"large"} />
        </Load>
    );
};

const Load = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
