const detectDarkMode = ():boolean => {
    if (window.matchMedia) {
        const query = window.matchMedia('prefers-color-scheme: dark');
        return !query || !!query?.matches; // true or false
    }
    return false;
}

export default detectDarkMode;