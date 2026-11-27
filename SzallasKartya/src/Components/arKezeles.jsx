export function kedvezmenyesAr(szallas) {
    const kedvezmeny = szallas.kedvezmeny || 0;
    const ar = szallas.ar;

    const kedvezmenyesAr = ar * (1 - kedvezmeny / 100);

    return Math.round(kedvezmenyesAr / 100) * 100;
}