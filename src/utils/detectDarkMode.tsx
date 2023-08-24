const detectDarkMode = ():boolean => {
    if (window.matchMedia) {
        const query = window.matchMedia("(prefers-color-scheme: dark)");
        return query.matches;
    }
    return true;
}

export default detectDarkMode;