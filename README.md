# pixel-editor

This is a simple drawing application I made. Its intended usage is to be assist in the creation of pixel art, but it can be used to create other types of art as well. 
This application uses a limited amount of external libraries. The only functionality for which a library has been used for is the exporting function.

## Usage

The input fields titled *Width* and *Height* are for setting the canvas's width and height in pixels. For example if you select a width of 16 and a height of 16, then the canvas
will be 16 pixels wide and 16 pixels high. Its total area will then by definition be equal to 265 pixels<sup>2</sup>, which leaves you with 265 pixels to do with as you please. These input field can be viewed below:

![dimension-buttons](https://github.com/adamkumlin/pixel-editor/assets/71759619/a49e0684-c4b3-46cf-9ba5-e2e2e99ba820)

The second input field, titled *Color* can be used to change your current color, which is the color that will be applied to pixels when you paint them. The color can be changed at any time by clicking on the input 
element and choosing a new color. Below is a video to visualize this:

https://github.com/adamkumlin/pixel-editor/assets/71759619/a7ff602e-3d78-4c0b-8ae4-df6e91f4e9f5

The next two buttons are *Toggle outline* and *Eraser*. As their names suggest, they are for toggling the canvas's outline, and for erasing pixels' colors.

## Technologies used
- React
- [html-to-image](https://www.npmjs.com/package/html-to-image)
- [Vite](https://vitejs.dev/)
- TypeScript
