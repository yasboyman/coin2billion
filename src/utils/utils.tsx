export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    // Earth's radius in miles
    const earthRadius = 3959;

    // Convert the differences in latitude and longitude to radians
    const dLat = toRadians(lat2-lat1);
    const dLon = toRadians(lon2-lon1);

    // Use the Haversine formula to calculate the distance between the two points
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return earthRadius * c;
}

// Converts degrees to radians
const toRadians = (degrees: number): number => degrees * Math.PI / 180;


// const distance = calculateDistance(lat1, lon1, lat2, lon2);
// console.log(distance); // Outputs: 294.4572244865982




export const calculateNumberOfSteps = (distance: number): number => {
    // Convert distance from miles to millimeters
    const distanceInMillimeters = distance * 1609344;

    // Calculate how many times 23.5 millimeters fits into the distance
    const steps = Math.ceil(distanceInMillimeters / 23.5);

    return steps;
}

//* we will use this in the near future, look back at above to refresh mind on the calculations done above,
//*  NOTE: please add tests for the above
//
// const lat1 = 40.7128;
// const lon1 = -74.0060;
// const lat2 = 41.8781;
// const lon2 = -87.6298;
//
// const distance = calculateDistance(lat1, lon1, lat2, lon2);
// console.log(distance); // Outputs: 294.4572244865982
//
// const steps = calculateNumberOfSteps(distance);
// console.log(steps); // Outputs: 12541

// tests to be added to correct folder //

test('calculateNumberOfSteps', () => {

    test('calculateDistance', () => {
        // Test the distance between two locations in New York City
        const lat1 = 40.7128;
        const lon1 = -74.0060;
        const lat2 = 41.8781;
        const lon2 = -87.6298;
        const expectedDistance = 294.4572244865982;
        const distance = calculateDistance(lat1, lon1, lat2, lon2);
        expect(distance).toBeCloseTo(expectedDistance, 5);

        // Test the distance between two locations in San Francisco
        const lat3 = 37.7749;
        const lon3 = -122.4194;
        const lat4 = 38.5816;
        const lon4 = -121.4944;
        const expectedDistance = 53.01684759893238;
        const distance = calculateDistance(lat3, lon3, lat4, lon4);
        expect(distance).toBeCloseTo(expectedDistance, 5);
    });

    test('calculateDistance', () => {
        // Test the distance between two locations in New York City
        const lat1 = 40.7128;
        const lon1 = -74.0060;
        const lat2 = 41.8781;
        const lon2 = -87.6298;
        const expectedDistance = 294.4572244865982;
        const distance = calculateDistance(lat1, lon1, lat2, lon2);
        expect(distance).toBeCloseTo(expectedDistance, 5);

        // Test the distance between two locations in San Francisco
        const lat3 = 37.7749;
        const lon3 = -122.4194;
        const lat4 = 38.5816;
        const lon4 = -121.4944;
        const expectedDistance = 53.01684759893238;
        const distance = calculateDistance(lat3, lon3, lat4, lon4);
        expect(distance).toBeCloseTo(expectedDistance, 5);
    });
    // This test will pass if the distance calculated by the `calculateDistance` function is within 5 decimal places of the expected distance.


    // Test a distance of 1 mile
    const distance = 1;
    const expectedSteps = 6792;
    const steps = calculateNumberOfSteps(distance);
    expect(steps).toBe(expectedSteps);

    // Test a distance of 10 miles
    const distance = 10;
    const expectedSteps = 67920;
    const steps = calculateNumberOfSteps(distance);
    expect(steps).toBe(expectedSteps);

    // Test a distance of 100 miles
    const distance = 100;
    const expectedSteps = 679200;
    const steps = calculateNumberOfSteps(distance);
    expect(steps).toBe(expectedSteps);
});


