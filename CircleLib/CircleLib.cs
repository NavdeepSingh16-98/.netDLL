using System;
namespace CircleLib
{
    public class CircleCalculator
    {
        // Exposed for edge-js: accept object input and return object
        public static object GetRadius(object input)
        {
            double diameter = Convert.ToDouble(input);
            if (diameter < 0)
            {
                throw new ArgumentException("Diameter cannot be negative.");
            }
            return diameter / 2;
        }
    }
}