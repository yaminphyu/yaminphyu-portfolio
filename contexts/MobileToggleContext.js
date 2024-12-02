import { createContext, useState } from 'react';

const MobileToggleContext = createContext({
    isToggle: false,
    setIsToggle: () => {}
});

const MobileToggleProvider = ({ children }) => {
    const [isToggle, setIsToggle] = useState(false);

    return (
        <MobileToggleContext.Provider value={{ isToggle, setIsToggle }}>
            {children}
        </MobileToggleContext.Provider>
    )
};

export { MobileToggleContext, MobileToggleProvider }