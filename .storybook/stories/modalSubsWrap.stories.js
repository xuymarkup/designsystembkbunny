import React, { Fragment } from "react";
import { Box, Text } from "../../lib/accessories";
import ModalSubsWrap from "../../lib/items/ModalSubsWrap";

export default {
    title: "Desing System/Items/ModalSubsWrap",
    component: ModalSubsWrap,
};

export const MODALSUBSWRAP = () => {
    return (
        <Fragment>
            <ModalSubsWrap handleClose={() => alert("funcionvacia")} active>
                <Box variant="Flex" style={{ justifyContent: "center" }}>
                    <Text variant="Label">OBJETO</Text>
                </Box>
            </ModalSubsWrap>
        </Fragment>
    );
};
