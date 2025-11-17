// Import edge-js
const edge = require('edge-js');
const path = require('path');

// Path to the compiled DLL
const dllPath = path.join(__dirname,'CircleLib','bin','Release','net8.0', 'CircleLib.dll');

// Create a function to call the .NET method
const getRadius = edge.func({
    assemblyFile: dllPath,
    typeName: 'CircleLib.CircleCalculator',
    methodName: 'GetRadius' // Must match the C# method name
});

// Example diameter
const diameter = 10;

// Call the .NET method
getRadius(diameter, (error, result) => {
    if (error) {
        console.error('Error calling .NET DLL:', error);
        return;
    }
    console.log(`Diameter: ${diameter}`);
    console.log(`Radius from .NET DLL: ${result}`);
});
