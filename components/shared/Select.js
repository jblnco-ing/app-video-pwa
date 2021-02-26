import ReactSelect from 'react-select';

const Select = ({ instanceId, options, onChange, defaultValue }) => <ReactSelect instanceId={instanceId} options={options} onChange={onChange} isSearchable={false} defaultValue={defaultValue} styles={colourStyles} />;

const colourStyles = {
    control: (styles, { isFocused }) => ({
        ...styles,
        backgroundColor: 'var(--blue)',
        border: 'solid 2px var(--violet)',
        borderRadius: 0,
        boxShadow: isFocused ? 'none' : null,
        ':hover': {
            ...styles[':active'],
            border: 'solid 2px var(--violet)',
            cursor: 'pointer',
        },
    }),
    valueContainer: styles => ({
        ...styles,
        justifyContent: 'center',
        fontWeight: 'bold',
        padding: '0px 0px 0px 36px'
    }),
    indicatorSeparator: styles => ({
        ...styles,
        display: 'none',
    }),
    menu: styles => ({
        ...styles,
        borderRadius: 0,
        border: 'solid 2px var(--violet)',
        top: '30px',
        boxShadow: 'none',
        zIndex: 99
    }),
    menuList: styles => ({
        ...styles,
        padding: '0px',
    }),
    option: (styles, { isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isSelected
                ? 'var(--violet)'
                : isFocused
                    ? 'var(--violet)'
                    : 'var(--blue)',
            color: 'white',
            cursor: isSelected ? 'default' : 'pointer',
            borderBottom: 'solid 1px var(--violet)',
            textAlign: 'center',
        };
    },
};
export default Select;