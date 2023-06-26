export declare const unresponsiveProps: {
    readonly minBlockSize: readonly ["100vh"];
    readonly userSelect: readonly ["none"];
    readonly cursor: readonly ["default", "pointer"];
    readonly boxShadow: {
        readonly low: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly high: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    readonly borderRadius: {
        readonly "1x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "2x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "3x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "4x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly round: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
};
export declare const colorProps: {
    readonly background: {
        readonly primary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly neutral: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly highlight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    readonly color: {
        readonly primary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly neutral: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
};
export declare const responsiveProperties: {
    readonly margin: {
        readonly "1x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "2x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "3x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "4x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "5x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "6x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "7x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "8x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "9x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    readonly padding: {
        readonly "1x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "2x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "3x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "4x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "5x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "6x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "7x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "8x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "9x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    readonly width: {
        readonly "1/2": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "1/3": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "2/3": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "1/4": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "3/4": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "1/5": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "2/5": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "3/5": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "4/5": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly full: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    readonly fontSize: any;
    readonly flexWrap: readonly ["wrap", "nowrap"];
    readonly display: readonly ["none", "block", "inline", "inline-block", "flex", "inline-flex"];
    readonly flexDirection: readonly ["row", "column", "row-reverse", "column-reverse"];
    readonly justifyContent: readonly ["flex-start", "center", "flex-end", "space-between"];
    readonly alignItems: readonly ["stretch", "flex-start", "center", "flex-end", "baseline"];
    readonly paddingTop: {
        readonly "1x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "2x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "3x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "4x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "5x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "6x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "7x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "8x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "9x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    readonly paddingBottom: {
        readonly "1x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "2x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "3x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "4x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "5x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "6x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "7x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "8x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "9x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    readonly paddingLeft: {
        readonly "1x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "2x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "3x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "4x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "5x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "6x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "7x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "8x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "9x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    readonly paddingRight: {
        readonly "1x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "2x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "3x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "4x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "5x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "6x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "7x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "8x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "9x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    readonly marginTop: {
        readonly "1x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "2x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "3x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "4x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "5x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "6x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "7x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "8x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "9x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    readonly marginBottom: {
        readonly "1x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "2x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "3x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "4x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "5x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "6x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "7x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "8x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "9x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    readonly marginLeft: {
        readonly auto: "auto";
        readonly "1x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "2x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "3x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "4x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "5x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "6x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "7x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "8x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "9x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    readonly marginRight: {
        readonly auto: "auto";
        readonly "1x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "2x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "3x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "4x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "5x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "6x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "7x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "8x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "9x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    readonly gap: {
        readonly none: "none";
        readonly "1x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "2x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "3x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "4x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "5x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "6x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "7x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "8x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly "9x": `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
};
