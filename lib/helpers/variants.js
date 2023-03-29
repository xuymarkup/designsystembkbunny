const getValue = (props, variants) => (typeof variants === "function" ? variants(props) : variants);

module.exports = (prop, values) => props => {
    const variants = props[prop] && values[props[prop]];
    return variants && getValue(props, variants);
};
