export function akciosAr(termek) {
    const ar = termek.ar;
    const akcio = termek.akcio;

    const szamoltAr = ar * (1 - akcio / 100);

    return Math.round(szamoltAr / 10) * 10;
}

export function arFormazas(ar) {
    return new Intl.NumberFormat("hu-HU").format(ar) + " Ft";
}