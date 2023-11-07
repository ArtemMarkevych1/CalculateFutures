export const getThemeStyles = (theme, additionalStyles) => {
    return {
        ...additionalStyles,
        background: theme === 'dark' ? '#000' : '',
        color: theme === 'dark' ? '#fff' : '',
    }
}