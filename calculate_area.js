const fs = require('fs');

const RADIUS = 6378137;

function rad(deg) {
    return deg * Math.PI / 180;
}

function ringArea(coords) {
    let p1, p2, p3, lowerIndex, middleIndex, upperIndex, i;
    let area = 0;
    const coordsLength = coords.length;

    if (coordsLength > 2) {
        for (i = 0; i < coordsLength; i++) {
            if (i === coordsLength - 2) {
                lowerIndex = coordsLength - 2;
                middleIndex = coordsLength - 1;
                upperIndex = 0;
            } else if (i === coordsLength - 1) {
                lowerIndex = coordsLength - 1;
                middleIndex = 0;
                upperIndex = 1;
            } else {
                lowerIndex = i;
                middleIndex = i + 1;
                upperIndex = i + 2;
            }
            p1 = coords[lowerIndex];
            p2 = coords[middleIndex];
            p3 = coords[upperIndex];
            area += (rad(p3[0]) - rad(p1[0])) * Math.sin(rad(p2[1]));
        }

        area = area * RADIUS * RADIUS / 2;
    }

    return Math.abs(area);
}

function polygonArea(coords) {
    let area = 0;
    if (coords && coords.length > 0) {
        area += Math.abs(ringArea(coords[0]));
        for (let i = 1; i < coords.length; i++) {
            area -= Math.abs(ringArea(coords[i]));
        }
    }
    return area;
}

function calculateArea(feature) {
    let area = 0;
    if (feature.type === 'Polygon') {
        area = polygonArea(feature.coordinates);
    } else if (feature.type === 'MultiPolygon') {
        for (let i = 0; i < feature.coordinates.length; i++) {
            area += polygonArea(feature.coordinates[i]);
        }
    } else if (feature.type === 'GeometryCollection') {
        for (let i = 0; i < feature.geometries.length; i++) {
            area += calculateArea(feature.geometries[i]);
        }
    } else if (feature.type === 'Feature') {
        area = calculateArea(feature.geometry);
    } else if (feature.type === 'FeatureCollection') {
        for (let i = 0; i < feature.features.length; i++) {
            area += calculateArea(feature.features[i]);
        }
    }
    return area;
}

const files = [
    'sawahReal.json',
    'desaPanaikangReal.json',
    'kawasanHutan.json',
    'pemukimanReal.json',
    'Tambak 2.json',
    'desa panikang.json',
    'kars.json'
];

files.forEach(file => {
    try {
        const data = JSON.parse(fs.readFileSync('c:/panpeta/Peta-Desa-Panaikang/asset/' + file, 'utf8'));
        const area = calculateArea(data);
        console.log(`${file}: ${(area/10000).toFixed(2)} hektar (${area.toFixed(2)} meter persegi)`);
    } catch (e) {
        console.log(`Error processing ${file}: ${e.message}`);
    }
});
