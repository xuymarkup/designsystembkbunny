import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Icons from "../../accessories/Icons";
import {
    NewsItemStyles,
    NewsItemBoxStyles,
    NewsItemImageStyles,
    NewsItemTitleStyles,
    NewsItemLabelStyles,
    NewsItemBoxLabel,
    NewsItemCaption,
} from "./styles";

const NewsItem = props => {
    const { ratio, src, news } = props;
    return (
        <NewsItemStyles href="./" {...props}>
            {news.map(data => {
                return (
                    <Fragment key={data.id}>
                        <NewsItemBoxStyles variant="Transparent">
                            <NewsItemBoxLabel variant="Transparent">
                                <Icons name="Video" size={20} color="#fff" />
                                <NewsItemLabelStyles>{data.label}</NewsItemLabelStyles>
                            </NewsItemBoxLabel>
                            <NewsItemImageStyles ratio={ratio} src={src} />
                        </NewsItemBoxStyles>
                        <NewsItemCaption variant="Transparent">
                            <NewsItemTitleStyles variant="h3">{data.title}</NewsItemTitleStyles>
                        </NewsItemCaption>
                    </Fragment>
                );
            })}
        </NewsItemStyles>
    );
};

NewsItem.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

NewsItem.defaultProps = {
    ratio: "aspect1x1",
    src: {},
};

export default NewsItem;
