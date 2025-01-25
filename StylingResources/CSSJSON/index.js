const fs = require('fs');
const path = require('path');

// Define the different keys for components
const componentKeys = [
    "DivContainer",
    "LayoutGrid",
    "LayoutGridRow",
    "LayoutGridColumn",
    "TextBox",
    "TextArea",
    "ActionButton"
];

// Function to read class names from the JS file and categorize them
function generateCSSClassesJson(filePath) {
    // Read the content of the JS file
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Regex patterns to match class names (e.g., MarginTop10, Height20)
    const classRegex = /export const (\w+)/g;
    
    // Object to hold categorized CSS classes for multiple components
    const jsonStructure = {};

    // Initialize structure for each component key
    componentKeys.forEach(key => {
        jsonStructure[key] = [];
    });
    
    // Extract all class names using regex
    let match;
    while ((match = classRegex.exec(fileContent)) !== null) {
        const className = match[1];
        
        // Separate border properties into borderColor, borderWidth, borderRadius, borderLeft, borderRight, etc.
        if (className.startsWith('BorderColor')) {
            addClassToCategory(jsonStructure, 'Border Color', className, 'Properties to set the border color for elements.');
        } else if (className.startsWith('BorderALL')) {
            addClassToCategory(jsonStructure, 'BorderWidth All', className, 'Properties to set the border width for elements.');
        } else if (className.startsWith('BorderLeft')) {
            addClassToCategory(jsonStructure, 'Border Left', className, 'Properties to set the left border of elements.');
        } else if (className.startsWith('BorderRight')) {
            addClassToCategory(jsonStructure, 'Border Right', className, 'Properties to set the right border of elements.');
        } else if (className.startsWith('BorderTop')) {
            addClassToCategory(jsonStructure, 'Border Top', className, 'Properties to set the top border of elements.');
        } else if (className.startsWith('BorderBottom')) {
            addClassToCategory(jsonStructure, 'Border Bottom', className, 'Properties to set the bottom border of elements.');
        }else if (className.startsWith('BorderRadiusAll')) {
            addClassToCategory(jsonStructure, 'Border Radius', className, 'Properties to set the border radius for elements.');
        }else if (className.startsWith('BorderRadiusTopLeft')) {
            addClassToCategory(jsonStructure, 'BorderRadius TopLeft', className, 'Properties to set the top-left border radius of elements.');
        } else if (className.startsWith('BorderRadiusTopRight')) {
            addClassToCategory(jsonStructure, 'BorderRadius TopRight', className, 'Properties to set the top-right border radius of elements.');
        } else if (className.startsWith('BorderRadiusBottomLeft')) {
            addClassToCategory(jsonStructure, 'BorderRadius BottomLeft', className, 'Properties to set the bottom-left border radius of elements.');
        } else if (className.startsWith('BorderRadiusBottomRight')) {
            addClassToCategory(jsonStructure, 'BorderRadius BottomRight', className, 'Properties to set the bottom-right border radius of elements.');
        }else if (className.startsWith('MarginTop')) {
            addClassToCategory(jsonStructure, 'Margin Top', className, 'Margin Top properties to set space above elements.');
        } else if (className.startsWith('MarginBottom')) {
            addClassToCategory(jsonStructure, 'Margin Bottom', className, 'Margin Bottom properties to set space below elements.');
        } else if (className.startsWith('MarginLeft')) {
            addClassToCategory(jsonStructure, 'Margin Left', className, 'Margin Left properties to set space to the left of elements.');
        } else if (className.startsWith('MarginRight')) {
            addClassToCategory(jsonStructure, 'Margin Right', className, 'Margin Right properties to set space to the right of elements.');
        } else if (className.startsWith('PaddingTop')) {
            addClassToCategory(jsonStructure, 'Padding Top', className, 'Padding Top properties to set inner space above elements.');
        } else if (className.startsWith('PaddingBottom')) {
            addClassToCategory(jsonStructure, 'Padding Bottom', className, 'Padding Bottom properties to set inner space below elements.');
        } else if (className.startsWith('PaddingLeft')) {
            addClassToCategory(jsonStructure, 'Padding Left', className, 'Padding Left properties to set inner space to the left of elements.');
        } else if (className.startsWith('PaddingRight')) {
            addClassToCategory(jsonStructure, 'Padding Right', className, 'Padding Right properties to set inner space to the right of elements.');
        } else if (className.startsWith('PositionTop')) {
            addClassToCategory(jsonStructure, 'Position Top', className, 'Position Top properties to set the vertical positioning of elements.');
        } else if (className.startsWith('PositionBottom')) {
            addClassToCategory(jsonStructure, 'Position Bottom', className, 'Position Bottom properties to set the vertical positioning of elements.');
        } else if (className.startsWith('PositionLeft')) {
            addClassToCategory(jsonStructure, 'Position Left', className, 'Position Left properties to set the horizontal positioning of elements.');
        } else if (className.startsWith('PositionRight')) {
            addClassToCategory(jsonStructure, 'Position Right', className, 'Position Right properties to set the horizontal positioning of elements.');
        } else if (className.startsWith('Opacity')) {
            addClassToCategory(jsonStructure, 'Opacity', className, 'Control the transparency of elements.');
        } else if (className.startsWith('ZIndex')) {
            addClassToCategory(jsonStructure, 'ZIndex', className, 'ZIndex determines the stacking order of elements.');
        } else if (className.startsWith('Elevation')) {
            addClassToCategory(jsonStructure, 'Elevation', className, 'Elevation property adds depth by casting a shadow.');
        } else if (className.startsWith('Height')) {
            addClassToCategory(jsonStructure, 'Height', className, 'Height properties for vertical sizing.');
        } else if (className.startsWith('Width')) {
            addClassToCategory(jsonStructure, 'Width', className, 'Width properties for horizontal sizing.');
        } else if (className.startsWith('Background')) {
            addClassToCategory(jsonStructure, 'Background Colors', className, 'Background color properties for elements.');
        } else if (className.startsWith('ShadowColor')) {
            addClassToCategory(jsonStructure, 'Shadow Color', className, 'Shadow color properties for elements.');
        } else if (className.startsWith('ShadowOffsetHeight')) {
            addClassToCategory(jsonStructure, 'ShadowOffset Height', className, 'ShadowOffset Height properties for elements.');
        } else if (className.startsWith('ShadowOffsetWidth')) {
            addClassToCategory(jsonStructure, 'ShadowOffset Width', className, 'ShadowOffset Width properties for elements.');
        }
        // Individual dropdowns for Rotate, Scale, Skew, and Translate
        else if (className.startsWith('Rotate')) {
            addClassToCategory(jsonStructure, 'Rotate', className, 'Rotation properties to rotate elements in degrees.');
        } else if (className.startsWith('Scale')) {
            addClassToCategory(jsonStructure, 'Scale', className, 'Scaling properties to resize elements.');
        } else if (className.startsWith('SkewX')) {
            addClassToCategory(jsonStructure, 'SkewX', className, 'Skewing properties to skew x-axis elements in degrees.');
        }else if (className.startsWith('SkewY')) {
            addClassToCategory(jsonStructure, 'SkewY', className, 'Skewing properties to skew y-axis elements in degrees.');
        } else if (className.startsWith('TranslateX')) {
            addClassToCategory(jsonStructure, 'TranslateX', className, 'Translation x-axis properties to move elements.');
        }else if (className.startsWith('TranslateY')) {
            addClassToCategory(jsonStructure, 'TranslateY', className, 'Translation y-axis properties to move elements.');
        }
    }

    return jsonStructure;
}

// Helper function to add a class to the appropriate category for all components
function addClassToCategory(jsonStructure, category, className, description) {
    // Iterate over each component and add the category if it doesn't exist
    Object.keys(jsonStructure).forEach(component => {
        let categoryEntry = jsonStructure[component].find(entry => entry.name === category);
        if (!categoryEntry) {
            categoryEntry = {
                name: category,
                type: 'Dropdown',
                description: description,
                options: []
            };
            jsonStructure[component].push(categoryEntry);
        }

        // Add the class to the options of the category
        categoryEntry.options.push({
            name: className,
            class: className
        });
    });
}

// Function to write the generated JSON structure to a file
function writeJsonToFile(outputPath, jsonData) {
    fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2));
    console.log(`JSON file has been written to ${outputPath}`);
}

// Example usage: Replace 'path_to_your_js_file' with your actual JS file path
const inputFilePath = path.join(__dirname, 'style.js'); // Input JS file containing class names
const outputFilePath = path.join(__dirname, 'generated_css_classes.json'); // Output JSON file

const jsonResult = generateCSSClassesJson(inputFilePath);
writeJsonToFile(outputFilePath, jsonResult);
