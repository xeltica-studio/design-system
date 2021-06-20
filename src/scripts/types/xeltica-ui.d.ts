interface Element {
    open?: () => void;
    close?: () => void;
}

declare var Element: {
    prototype: Element;
    new(): Element;
};