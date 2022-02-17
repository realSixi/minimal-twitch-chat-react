import chroma from 'chroma-js';

export function hashCode(str: string) { // java String#hashCode
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

export const getColor = (s: string) => {
    let hash = hashCode(s);
    return chroma.hsl(hash % 360, 0.7, 0.7).hex();
};

export const isDark = (s: string) => {
    //console.log("check darkgness", s, chroma(s).get("lab.l"));
    return chroma(s).get('lab.l') < 30;
};

export const invertColor = (s: string) => {
    return (Number(`0x1${s}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase();
};


export const normalizeColor = (s: string | undefined) => {
    if (!s) return s;

    if (chroma(s).get('lab.l') > 50)
        return s;

    return chroma(s).brighten(1).hex();
};
