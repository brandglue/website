{
  module.exports = {
    extends: [
      'stylelint-config-recommended',
      'stylelint-config-styled-components',
      'stylelint-config-prettier',
    ],
    processors: ['stylelint-processor-styled-components'],
    rules: {
      'selector-type-no-unknown': [
        true,
        {
          ignoreTypes: ['/-styled-mixin/', '$dummyValue'],
        },
      ],
      'property-no-unknown': [true, { ignoreProperties: ['/-styled-mixin/'] }],
    },
  };
}
