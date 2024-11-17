module.exports = {
  plugins: [
    require('postcss-replace')({
      pattern: /color-adjust/g,
      data: {
        colorAdjust: 'print-color-adjust',
      },
    }),
  ],
};

