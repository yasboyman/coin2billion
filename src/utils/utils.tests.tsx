import {calculateDistance, calculateNumberOfSteps} from "./utils";
import { expect } from 'jest';

test('calculateDistance - New York City', () => {
    // Test the distance between two locations in New York City
    const lat1 = 40.7128;
    const lon1 = -74.0060;
    const lat2 = 41.8781;
    const lon2 = -87.6298;
    const expectedDistance = 294.4572244865982;
    const distanceNYC = calculateDistance(lat1, lon1, lat2, lon2);
    expect(distanceNYC).toBeCloseTo(expectedDistance, 5);
});

test('calculateDistance - San Francisco', () => {
    // Test the distance between two locations in San Francisco
    const lat3 = 37.7749;
    const lon3 = -122.4194;
    const lat4 = 38.5816;
    const lon4 = -121.4944;
    const expectedDistance = 53.01684759893238;
    const distanceSF = calculateDistance(lat3, lon3, lat4, lon4);
    expect(distanceSF).toBeCloseTo(expectedDistance, 5);
});

test('calculateNumberOfSteps - 1 mile', () => {
    // Test a distance of 1 mile
    const distance = 1;
    const expectedSteps = 6792;
    const steps = calculateNumberOfSteps(distance);
    expect(steps).toBe(expectedSteps);
});

test('calculateNumberOfSteps - 10 miles', () => {
    // Test a distance of 10 miles
    const distance = 10;
    const expectedSteps = 67920;
    const steps = calculateNumberOfSteps(distance);
    expect(steps).toBe(expectedSteps);
});

test('calculateNumberOfSteps - 100 miles', () => {
    // Test a distance of 100 miles
    const distance = 100;
    const expectedSteps = 679200;
    const steps = calculateNumberOfSteps(distance);
    expect(steps).toBe(expectedSteps);
});
