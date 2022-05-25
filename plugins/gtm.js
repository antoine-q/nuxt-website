export default function ({ $gtm, route }, inject) {
    const initGtag = () => {
        let supportsLocalStorage = true;
        const storageName = "cookies:accepted";
        
        try {
            const localStorageTest = "__check-localStorage";
            if (typeof window !== "undefined") {
                window.localStorage.setItem(localStorageTest, localStorageTest);
                window.localStorage.removeItem(localStorageTest);
            }
        } catch (e) {
            supportsLocalStorage = false;
        }
        
        let acceptTracking = false;
        if (supportsLocalStorage) {
            acceptTracking = localStorage.getItem(storageName);
        } else {
            acceptTracking = Cookie.get(storageName);
        }
        
        if (typeof acceptTracking === "string") {
            acceptTracking = JSON.parse(acceptTracking);
        }
        
        if (acceptTracking) {
            $gtm.init('GTM-PLKDPZ7');
        }
    }
    inject('initgtag', initGtag);
}
