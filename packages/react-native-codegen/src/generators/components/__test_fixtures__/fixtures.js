/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

import type {SchemaType} from '../../../CodegenSchema.js';

const NO_PROPS_NO_EVENTS: SchemaType = {
  modules: {
    NoPropsNoEvents: {
      type: 'Component',
      components: {
        NoPropsNoEventsComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
        },
      },
    },
  },
};

const INTERFACE_ONLY: SchemaType = {
  modules: {
    Switch: {
      type: 'Component',
      components: {
        InterfaceOnlyComponent: {
          interfaceOnly: true,
          paperComponentName: 'RCTInterfaceOnlyComponent',
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [
            {
              name: 'onChange',
              optional: true,
              bubblingType: 'bubble',
              typeAnnotation: {
                type: 'EventTypeAnnotation',
                argument: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      name: 'value',
                      optional: false,
                      typeAnnotation: {
                        type: 'BooleanTypeAnnotation',
                      },
                    },
                  ],
                },
              },
            },
          ],
          props: [
            {
              name: 'accessibilityHint',
              optional: true,
              typeAnnotation: {
                type: 'StringTypeAnnotation',
                default: '',
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const EVENTS_WITH_PAPER_NAME: SchemaType = {
  modules: {
    Switch: {
      type: 'Component',
      components: {
        InterfaceOnlyComponent: {
          interfaceOnly: true,
          paperComponentName: 'RCTInterfaceOnlyComponent',
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [
            {
              name: 'onChange',
              paperTopLevelNameDeprecated: 'paperChange',
              optional: true,
              bubblingType: 'bubble',
              typeAnnotation: {
                type: 'EventTypeAnnotation',
                argument: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      name: 'value',
                      optional: false,
                      typeAnnotation: {
                        type: 'BooleanTypeAnnotation',
                      },
                    },
                  ],
                },
              },
            },
            {
              name: 'onDire tChange',
              paperTopLevelNameDeprecated: 'paperDirectChange',
              optional: true,
              bubblingType: 'direct',
              typeAnnotation: {
                type: 'EventTypeAnnotation',
                argument: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      name: 'value',
                      optional: false,
                      typeAnnotation: {
                        type: 'BooleanTypeAnnotation',
                      },
                    },
                  ],
                },
              },
            },
          ],
          props: [],
          commands: [],
        },
      },
    },
  },
};

const BOOLEAN_PROP: SchemaType = {
  modules: {
    Switch: {
      type: 'Component',
      components: {
        BooleanPropNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'disabled',
              optional: true,
              typeAnnotation: {
                type: 'BooleanTypeAnnotation',
                default: false,
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const STRING_PROP: SchemaType = {
  modules: {
    Switch: {
      type: 'Component',
      components: {
        StringPropComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'accessibilityHint',
              optional: true,
              typeAnnotation: {
                type: 'StringTypeAnnotation',
                default: '',
              },
            },
            {
              name: 'accessibilityRole',
              optional: true,
              typeAnnotation: {
                type: 'StringTypeAnnotation',
                default: null,
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const INTEGER_PROPS: SchemaType = {
  modules: {
    Switch: {
      type: 'Component',
      components: {
        IntegerPropNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'progress1',
              optional: true,
              typeAnnotation: {
                type: 'Int32TypeAnnotation',
                default: 0,
              },
            },
            {
              name: 'progress2',
              optional: true,
              typeAnnotation: {
                type: 'Int32TypeAnnotation',
                default: -1,
              },
            },
            {
              name: 'progress3',
              optional: true,
              typeAnnotation: {
                type: 'Int32TypeAnnotation',
                default: 10,
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const FLOAT_PROPS: SchemaType = {
  modules: {
    Switch: {
      type: 'Component',
      components: {
        FloatPropNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'blurRadius',
              optional: false,
              typeAnnotation: {
                type: 'FloatTypeAnnotation',
                default: 0.0,
              },
            },
            {
              name: 'blurRadius2',
              optional: true,
              typeAnnotation: {
                type: 'FloatTypeAnnotation',
                default: 0.001,
              },
            },
            {
              name: 'blurRadius3',
              optional: true,
              typeAnnotation: {
                type: 'FloatTypeAnnotation',
                default: 2.1,
              },
            },
            {
              name: 'blurRadius4',
              optional: true,
              typeAnnotation: {
                type: 'FloatTypeAnnotation',
                default: 0,
              },
            },
            {
              name: 'blurRadius5',
              optional: true,
              typeAnnotation: {
                type: 'FloatTypeAnnotation',
                default: 1,
              },
            },
            {
              name: 'blurRadius6',
              optional: true,
              typeAnnotation: {
                type: 'FloatTypeAnnotation',
                default: -0.0,
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const DOUBLE_PROPS: SchemaType = {
  modules: {
    Switch: {
      type: 'Component',
      components: {
        DoublePropNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'blurRadius',
              optional: false,
              typeAnnotation: {
                type: 'DoubleTypeAnnotation',
                default: 0.0,
              },
            },
            {
              name: 'blurRadius2',
              optional: true,
              typeAnnotation: {
                type: 'DoubleTypeAnnotation',
                default: 0.001,
              },
            },
            {
              name: 'blurRadius3',
              optional: true,
              typeAnnotation: {
                type: 'DoubleTypeAnnotation',
                default: 2.1,
              },
            },
            {
              name: 'blurRadius4',
              optional: true,
              typeAnnotation: {
                type: 'DoubleTypeAnnotation',
                default: 0,
              },
            },
            {
              name: 'blurRadius5',
              optional: true,
              typeAnnotation: {
                type: 'DoubleTypeAnnotation',
                default: 1,
              },
            },
            {
              name: 'blurRadius6',
              optional: true,
              typeAnnotation: {
                type: 'DoubleTypeAnnotation',
                default: -0.0,
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const COLOR_PROP: SchemaType = {
  modules: {
    Switch: {
      type: 'Component',
      components: {
        ColorPropNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'tintColor',
              optional: true,
              typeAnnotation: {
                type: 'ReservedPropTypeAnnotation',
                name: 'ColorPrimitive',
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const IMAGE_PROP: SchemaType = {
  modules: {
    Slider: {
      type: 'Component',
      components: {
        ImagePropNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'thumbImage',
              optional: true,
              typeAnnotation: {
                type: 'ReservedPropTypeAnnotation',
                name: 'ImageSourcePrimitive',
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const POINT_PROP: SchemaType = {
  modules: {
    Switch: {
      type: 'Component',
      components: {
        PointPropNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'startPoint',
              optional: true,
              typeAnnotation: {
                type: 'ReservedPropTypeAnnotation',
                name: 'PointPrimitive',
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const INSETS_PROP: SchemaType = {
  modules: {
    ScrollView: {
      type: 'Component',
      components: {
        InsetsPropNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'contentInset',
              optional: true,
              typeAnnotation: {
                type: 'ReservedPropTypeAnnotation',
                name: 'EdgeInsetsPrimitive',
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const ARRAY_PROPS: SchemaType = {
  modules: {
    Slider: {
      type: 'Component',
      components: {
        ArrayPropsNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'names',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'StringTypeAnnotation',
                },
              },
            },
            {
              name: 'disableds',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'BooleanTypeAnnotation',
                },
              },
            },
            {
              name: 'progress',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'Int32TypeAnnotation',
                },
              },
            },
            {
              name: 'radii',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'FloatTypeAnnotation',
                },
              },
            },
            {
              name: 'colors',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'ReservedPropTypeAnnotation',
                  name: 'ColorPrimitive',
                },
              },
            },
            {
              name: 'srcs',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'ReservedPropTypeAnnotation',
                  name: 'ImageSourcePrimitive',
                },
              },
            },
            {
              name: 'points',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'ReservedPropTypeAnnotation',
                  name: 'PointPrimitive',
                },
              },
            },
            {
              name: 'sizes',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'StringEnumTypeAnnotation',
                  default: 'small',
                  options: ['small', 'large'],
                },
              },
            },
            {
              name: 'object',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      name: 'stringProp',
                      optional: true,
                      typeAnnotation: {
                        type: 'StringTypeAnnotation',
                        default: '',
                      },
                    },
                  ],
                },
              },
            },
            {
              name: 'array',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      // This needs to stay the same as the object above
                      // to confirm that the structs are generated
                      // with unique non-colliding names
                      name: 'object',
                      optional: true,
                      typeAnnotation: {
                        type: 'ArrayTypeAnnotation',
                        elementType: {
                          type: 'ObjectTypeAnnotation',
                          properties: [
                            {
                              name: 'stringProp',
                              optional: true,
                              typeAnnotation: {
                                type: 'StringTypeAnnotation',
                                default: '',
                              },
                            },
                          ],
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              name: 'arrayOfArrayOfObject',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'ArrayTypeAnnotation',
                  elementType: {
                    type: 'ObjectTypeAnnotation',
                    properties: [
                      {
                        name: 'stringProp',
                        optional: true,
                        typeAnnotation: {
                          type: 'StringTypeAnnotation',
                          default: '',
                        },
                      },
                    ],
                  },
                },
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const ARRAY_PROPS_WITH_NESTED_OBJECT: SchemaType = {
  modules: {
    Slider: {
      type: 'Component',
      components: {
        ArrayPropsNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'nativePrimitives',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      name: 'colors',
                      optional: true,
                      typeAnnotation: {
                        type: 'ArrayTypeAnnotation',
                        elementType: {
                          type: 'ReservedPropTypeAnnotation',
                          name: 'ColorPrimitive',
                        },
                      },
                    },
                    {
                      name: 'srcs',
                      optional: true,
                      typeAnnotation: {
                        type: 'ArrayTypeAnnotation',
                        elementType: {
                          type: 'ReservedPropTypeAnnotation',
                          name: 'ImageSourcePrimitive',
                        },
                      },
                    },
                    {
                      name: 'points',
                      optional: true,
                      typeAnnotation: {
                        type: 'ArrayTypeAnnotation',
                        elementType: {
                          type: 'ReservedPropTypeAnnotation',
                          name: 'PointPrimitive',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const OBJECT_PROPS: SchemaType = {
  modules: {
    ObjectPropsNativeComponent: {
      type: 'Component',
      components: {
        ObjectProps: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'objectProp',
              optional: true,
              typeAnnotation: {
                type: 'ObjectTypeAnnotation',
                properties: [
                  {
                    name: 'stringProp',
                    optional: true,
                    typeAnnotation: {
                      type: 'StringTypeAnnotation',
                      default: '',
                    },
                  },
                  {
                    name: 'booleanProp',
                    optional: true,
                    typeAnnotation: {
                      type: 'BooleanTypeAnnotation',
                      default: false,
                    },
                  },
                  {
                    name: 'floatProp',
                    optional: true,
                    typeAnnotation: {
                      type: 'FloatTypeAnnotation',
                      default: 0.0,
                    },
                  },
                  {
                    name: 'intProp',
                    optional: true,
                    typeAnnotation: {
                      type: 'Int32TypeAnnotation',
                      default: 0,
                    },
                  },
                  {
                    name: 'stringEnumProp',
                    optional: true,
                    typeAnnotation: {
                      type: 'StringEnumTypeAnnotation',
                      default: 'option1',
                      options: ['option1'],
                    },
                  },
                  {
                    name: 'intEnumProp',
                    optional: true,
                    typeAnnotation: {
                      type: 'Int32EnumTypeAnnotation',
                      default: 0,
                      options: [0],
                    },
                  },
                  {
                    name: 'objectArrayProp',
                    optional: false,
                    typeAnnotation: {
                      type: 'ObjectTypeAnnotation',
                      properties: [
                        {
                          name: 'array',
                          optional: true,
                          typeAnnotation: {
                            type: 'ArrayTypeAnnotation',
                            elementType: {
                              type: 'StringTypeAnnotation',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    name: 'objectPrimitiveRequiredProp',
                    optional: false,
                    typeAnnotation: {
                      type: 'ObjectTypeAnnotation',
                      properties: [
                        {
                          name: 'image',
                          optional: true,
                          typeAnnotation: {
                            type: 'ReservedPropTypeAnnotation',
                            name: 'ImageSourcePrimitive',
                          },
                        },
                        {
                          name: 'color',
                          optional: true,
                          typeAnnotation: {
                            type: 'ReservedPropTypeAnnotation',
                            name: 'ColorPrimitive',
                          },
                        },
                        {
                          name: 'point',
                          optional: true,
                          typeAnnotation: {
                            type: 'ReservedPropTypeAnnotation',
                            name: 'PointPrimitive',
                          },
                        },
                      ],
                    },
                  },
                  {
                    name: 'nestedPropA',
                    optional: false,
                    typeAnnotation: {
                      type: 'ObjectTypeAnnotation',
                      properties: [
                        {
                          name: 'nestedPropB',
                          optional: false,
                          typeAnnotation: {
                            type: 'ObjectTypeAnnotation',
                            properties: [
                              {
                                name: 'nestedPropC',
                                optional: true,
                                typeAnnotation: {
                                  type: 'StringTypeAnnotation',
                                  default: '',
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    name: 'nestedArrayAsProperty',
                    optional: false,
                    typeAnnotation: {
                      type: 'ObjectTypeAnnotation',
                      properties: [
                        {
                          name: 'arrayProp',
                          optional: false,
                          typeAnnotation: {
                            type: 'ArrayTypeAnnotation',
                            elementType: {
                              type: 'ObjectTypeAnnotation',
                              properties: [
                                {
                                  name: 'stringProp',
                                  optional: false,
                                  typeAnnotation: {
                                    type: 'StringTypeAnnotation',
                                    default: '',
                                  },
                                },
                              ],
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const MULTI_NATIVE_PROP: SchemaType = {
  modules: {
    Slider: {
      type: 'Component',
      components: {
        ImageColorPropNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'thumbImage',
              optional: true,
              typeAnnotation: {
                type: 'ReservedPropTypeAnnotation',
                name: 'ImageSourcePrimitive',
              },
            },
            {
              name: 'color',
              optional: true,
              typeAnnotation: {
                type: 'ReservedPropTypeAnnotation',
                name: 'ColorPrimitive',
              },
            },
            {
              name: 'thumbTintColor',
              optional: true,
              typeAnnotation: {
                type: 'ReservedPropTypeAnnotation',
                name: 'ColorPrimitive',
              },
            },
            {
              name: 'point',
              optional: true,
              typeAnnotation: {
                type: 'ReservedPropTypeAnnotation',
                name: 'PointPrimitive',
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const STRING_ENUM_PROP: SchemaType = {
  modules: {
    Switch: {
      type: 'Component',
      components: {
        StringEnumPropsNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'alignment',
              optional: true,
              typeAnnotation: {
                type: 'StringEnumTypeAnnotation',
                default: 'center',
                options: ['top', 'center', 'bottom-right'],
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const INT32_ENUM_PROP: SchemaType = {
  modules: {
    Switch: {
      type: 'Component',
      components: {
        Int32EnumPropsNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'maxInterval',
              optional: true,
              typeAnnotation: {
                type: 'Int32EnumTypeAnnotation',
                default: 0,
                options: [0, 1, 2],
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const EVENT_PROPS: SchemaType = {
  modules: {
    Switch: {
      type: 'Component',
      components: {
        EventsNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [
            {
              name: 'onChange',
              optional: true,
              bubblingType: 'bubble',
              typeAnnotation: {
                type: 'EventTypeAnnotation',
                argument: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      name: 'value',
                      optional: false,
                      typeAnnotation: {
                        type: 'BooleanTypeAnnotation',
                      },
                    },
                    {
                      name: 'source',
                      optional: true,
                      typeAnnotation: {
                        type: 'StringTypeAnnotation',
                      },
                    },
                    {
                      name: 'progress',
                      optional: true,
                      typeAnnotation: {
                        type: 'Int32TypeAnnotation',
                      },
                    },
                    {
                      name: 'scale',
                      optional: true,
                      typeAnnotation: {
                        type: 'FloatTypeAnnotation',
                      },
                    },
                  ],
                },
              },
            },
            {
              name: 'onEventDirect',
              optional: true,
              bubblingType: 'direct',
              typeAnnotation: {
                type: 'EventTypeAnnotation',
                argument: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      name: 'value',
                      optional: false,
                      typeAnnotation: {
                        type: 'BooleanTypeAnnotation',
                      },
                    },
                  ],
                },
              },
            },
            {
              name: 'onOrientationChange',
              optional: true,
              bubblingType: 'direct',
              typeAnnotation: {
                type: 'EventTypeAnnotation',
                argument: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      name: 'orientation',
                      optional: false,
                      typeAnnotation: {
                        type: 'StringEnumTypeAnnotation',
                        options: ['landscape', 'portrait'],
                      },
                    },
                  ],
                },
              },
            },
            {
              name: 'onEnd',
              optional: true,
              bubblingType: 'bubble',
              typeAnnotation: {
                type: 'EventTypeAnnotation',
              },
            },
          ],
          props: [
            {
              name: 'disabled',
              optional: true,
              typeAnnotation: {
                type: 'BooleanTypeAnnotation',
                default: false,
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const EVENT_NESTED_OBJECT_PROPS: SchemaType = {
  modules: {
    Switch: {
      type: 'Component',
      components: {
        EventsNestedObjectNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [
            {
              name: 'onChange',
              optional: true,
              bubblingType: 'bubble',
              typeAnnotation: {
                type: 'EventTypeAnnotation',
                argument: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      name: 'location',
                      optional: false,
                      typeAnnotation: {
                        type: 'ObjectTypeAnnotation',
                        properties: [
                          {
                            name: 'source',
                            optional: false,
                            typeAnnotation: {
                              type: 'ObjectTypeAnnotation',
                              properties: [
                                {
                                  name: 'url',
                                  optional: false,
                                  typeAnnotation: {
                                    type: 'StringTypeAnnotation',
                                  },
                                },
                              ],
                            },
                          },
                          {
                            name: 'x',
                            optional: false,
                            typeAnnotation: {
                              type: 'Int32TypeAnnotation',
                            },
                          },
                          {
                            name: 'y',
                            optional: false,
                            typeAnnotation: {
                              type: 'Int32TypeAnnotation',
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
          ],
          props: [
            {
              name: 'disabled',
              optional: true,
              typeAnnotation: {
                type: 'BooleanTypeAnnotation',
                default: false,
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const TWO_COMPONENTS_SAME_FILE: SchemaType = {
  modules: {
    MyComponents: {
      type: 'Component',
      components: {
        MultiComponent1NativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'disabled',
              optional: true,
              typeAnnotation: {
                type: 'BooleanTypeAnnotation',
                default: false,
              },
            },
          ],
          commands: [],
        },

        MultiComponent2NativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'disabled',
              optional: true,
              typeAnnotation: {
                type: 'BooleanTypeAnnotation',
                default: true,
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const TWO_COMPONENTS_DIFFERENT_FILES: SchemaType = {
  modules: {
    ComponentFile1: {
      type: 'Component',
      components: {
        MultiFile1NativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'disabled',
              optional: true,
              typeAnnotation: {
                type: 'BooleanTypeAnnotation',
                default: false,
              },
            },
          ],
          commands: [],
        },
      },
    },

    ComponentFile2: {
      type: 'Component',
      components: {
        MultiFile2NativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'disabled',
              optional: true,
              typeAnnotation: {
                type: 'BooleanTypeAnnotation',
                default: true,
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const COMMANDS: SchemaType = {
  modules: {
    Switch: {
      type: 'Component',
      components: {
        CommandNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [
            {
              name: 'flashScrollIndicators',
              optional: false,
              typeAnnotation: {
                type: 'FunctionTypeAnnotation',
                params: [],
                returnTypeAnnotation: {
                  type: 'VoidTypeAnnotation',
                },
              },
            },
            {
              name: 'allTypes',
              optional: false,
              typeAnnotation: {
                type: 'FunctionTypeAnnotation',
                params: [
                  {
                    name: 'x',
                    optional: false,
                    typeAnnotation: {
                      type: 'Int32TypeAnnotation',
                    },
                  },
                  {
                    name: 'y',
                    optional: false,
                    typeAnnotation: {
                      type: 'FloatTypeAnnotation',
                    },
                  },
                  {
                    name: 'z',
                    optional: false,
                    typeAnnotation: {
                      type: 'DoubleTypeAnnotation',
                    },
                  },
                  {
                    name: 'message',
                    optional: false,
                    typeAnnotation: {
                      type: 'StringTypeAnnotation',
                    },
                  },
                  {
                    name: 'animated',
                    optional: false,
                    typeAnnotation: {
                      type: 'BooleanTypeAnnotation',
                    },
                  },
                ],
                returnTypeAnnotation: {
                  type: 'VoidTypeAnnotation',
                },
              },
            },
          ],
        },
      },
    },
  },
};

const COMMANDS_AND_PROPS: SchemaType = {
  modules: {
    Switch: {
      type: 'Component',
      components: {
        CommandNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'accessibilityHint',
              optional: true,
              typeAnnotation: {
                type: 'StringTypeAnnotation',
                default: '',
              },
            },
          ],
          commands: [
            {
              name: 'handleRootTag',
              optional: false,
              typeAnnotation: {
                type: 'FunctionTypeAnnotation',
                params: [
                  {
                    name: 'rootTag',
                    optional: false,
                    typeAnnotation: {
                      type: 'ReservedTypeAnnotation',
                      name: 'RootTag',
                    },
                  },
                ],
                returnTypeAnnotation: {
                  type: 'VoidTypeAnnotation',
                },
              },
            },
            {
              name: 'hotspotUpdate',
              optional: false,
              typeAnnotation: {
                type: 'FunctionTypeAnnotation',
                params: [
                  {
                    name: 'x',
                    optional: false,
                    typeAnnotation: {
                      type: 'Int32TypeAnnotation',
                    },
                  },
                  {
                    name: 'y',
                    optional: false,
                    typeAnnotation: {
                      type: 'Int32TypeAnnotation',
                    },
                  },
                ],
                returnTypeAnnotation: {
                  type: 'VoidTypeAnnotation',
                },
              },
            },
          ],
        },
      },
    },
  },
};

const EXCLUDE_ANDROID: SchemaType = {
  modules: {
    ExcludedAndroid: {
      type: 'Component',
      components: {
        ExcludedAndroidComponent: {
          excludedPlatforms: ['android'],
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
        },
      },
    },
  },
};

const EXCLUDE_ANDROID_IOS: SchemaType = {
  modules: {
    ExcludedAndroidIos: {
      type: 'Component',
      components: {
        ExcludedAndroidIosComponent: {
          excludedPlatforms: ['android', 'iOS'],
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
        },
      },
    },
  },
};

const EXCLUDE_IOS_TWO_COMPONENTS_DIFFERENT_FILES: SchemaType = {
  modules: {
    ComponentFile1: {
      type: 'Component',
      components: {
        ExcludedIosComponent: {
          excludedPlatforms: ['iOS'],
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
        },
      },
    },
    ComponentFile2: {
      type: 'Component',
      components: {
        MultiFileIncludedNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'disabled',
              optional: true,
              typeAnnotation: {
                type: 'BooleanTypeAnnotation',
                default: true,
              },
            },
          ],
          commands: [],
        },
      },
    },
  },
};

const COMPONENT_WITH_BOOL_STATE: SchemaType = {
  modules: {
    MyComponent: {
      type: 'Component',
      components: {
        SimpleComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
          state: [
            {
              name: 'disabled',
              optional: false,
              typeAnnotation: {
                type: 'BooleanTypeAnnotation',
                default: false,
              },
            },
          ],
        },
      },
    },
  },
};

const COMPONENT_WITH_STRING_STATE: SchemaType = {
  modules: {
    MyComponent: {
      type: 'Component',
      components: {
        SimpleComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
          state: [
            {
              name: 'accessibilityHint',
              optional: true,
              typeAnnotation: {
                type: 'StringTypeAnnotation',
                default: '',
              },
            },
            {
              name: 'accessibilityRole',
              optional: true,
              typeAnnotation: {
                type: 'StringTypeAnnotation',
                default: null,
              },
            },
          ],
        },
      },
    },
  },
};

const COMPONENT_WITH_INT_STATE: SchemaType = {
  modules: {
    MyComponent: {
      type: 'Component',
      components: {
        SimpleComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
          state: [
            {
              name: 'progress1',
              optional: true,
              typeAnnotation: {
                type: 'Int32TypeAnnotation',
                default: 0,
              },
            },
            {
              name: 'progress2',
              optional: true,
              typeAnnotation: {
                type: 'Int32TypeAnnotation',
                default: -1,
              },
            },
            {
              name: 'progress3',
              optional: true,
              typeAnnotation: {
                type: 'Int32TypeAnnotation',
                default: 10,
              },
            },
          ],
        },
      },
    },
  },
};

const COMPONENT_WITH_FLOAT_STATE: SchemaType = {
  modules: {
    MyComponent: {
      type: 'Component',
      components: {
        SimpleComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
          state: [
            {
              name: 'blurRadius',
              optional: false,
              typeAnnotation: {
                type: 'FloatTypeAnnotation',
                default: 0.0,
              },
            },
            {
              name: 'blurRadius2',
              optional: true,
              typeAnnotation: {
                type: 'FloatTypeAnnotation',
                default: 7.5,
              },
            },
            {
              name: 'blurRadius3',
              optional: true,
              typeAnnotation: {
                type: 'FloatTypeAnnotation',
                default: -2.1,
              },
            },
          ],
        },
      },
    },
  },
};

const COMPONENT_WITH_DOUBLE_STATE: SchemaType = {
  modules: {
    MyComponent: {
      type: 'Component',
      components: {
        SimpleComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
          state: [
            {
              name: 'd_blurRadius',
              optional: false,
              typeAnnotation: {
                type: 'DoubleTypeAnnotation',
                default: 0.0,
              },
            },
            {
              name: 'd_blurRadius2',
              optional: true,
              typeAnnotation: {
                type: 'DoubleTypeAnnotation',
                default: 8.9,
              },
            },
            {
              name: 'd_blurRadius3',
              optional: true,
              typeAnnotation: {
                type: 'DoubleTypeAnnotation',
                default: -0.5,
              },
            },
          ],
        },
      },
    },
  },
};

const COMPONENT_WITH_COLOR_STATE: SchemaType = {
  modules: {
    MyComponent: {
      type: 'Component',
      components: {
        SimpleComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
          state: [
            {
              name: 'tintColor',
              optional: true,
              typeAnnotation: {
                type: 'ReservedPropTypeAnnotation',
                name: 'ColorPrimitive',
              },
            },
          ],
        },
      },
    },
  },
};

const COMPONENT_WITH_IMAGE_STATE: SchemaType = {
  modules: {
    MyComponent: {
      type: 'Component',
      components: {
        SimpleComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
          state: [
            {
              name: 'thumbImage',
              optional: true,
              typeAnnotation: {
                type: 'ReservedPropTypeAnnotation',
                name: 'ImageSourcePrimitive',
              },
            },
          ],
        },
      },
    },
  },
};

const COMPONENT_WITH_POINT_STATE: SchemaType = {
  modules: {
    MyComponent: {
      type: 'Component',
      components: {
        SimpleComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
          state: [
            {
              name: 'startPoint',
              optional: true,
              typeAnnotation: {
                type: 'ReservedPropTypeAnnotation',
                name: 'PointPrimitive',
              },
            },
          ],
        },
      },
    },
  },
};

const COMPONENT_WITH_EDGE_INSET_STATE_PROPS: SchemaType = {
  modules: {
    MyComponent: {
      type: 'Component',
      components: {
        SimpleComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
          state: [
            {
              name: 'contentInset',
              optional: true,
              typeAnnotation: {
                type: 'ReservedPropTypeAnnotation',
                name: 'EdgeInsetsPrimitive',
              },
            },
          ],
        },
      },
    },
  },
};

const COMPONENT_WITH_ARRAY_OF_OBJECTS_STATE: SchemaType = {
  modules: {
    MyComponent: {
      type: 'Component',
      components: {
        SimpleComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
          state: [
            {
              name: 'arrayState',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      name: 'colors',
                      optional: true,
                      typeAnnotation: {
                        type: 'ArrayTypeAnnotation',
                        elementType: {
                          type: 'ReservedPropTypeAnnotation',
                          name: 'ColorPrimitive',
                        },
                      },
                    },
                    {
                      name: 'srcs',
                      optional: true,
                      typeAnnotation: {
                        type: 'ArrayTypeAnnotation',
                        elementType: {
                          type: 'ReservedPropTypeAnnotation',
                          name: 'ImageSourcePrimitive',
                        },
                      },
                    },
                    {
                      name: 'points',
                      optional: true,
                      typeAnnotation: {
                        type: 'ArrayTypeAnnotation',
                        elementType: {
                          type: 'ReservedPropTypeAnnotation',
                          name: 'PointPrimitive',
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    },
  },
};

const COMPONENT_WITH_ARRAY_STATE: SchemaType = {
  modules: {
    MyComponent: {
      type: 'Component',
      components: {
        SimpleComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
          state: [
            {
              name: 'names',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'StringTypeAnnotation',
                },
              },
            },
            {
              name: 'disableds',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'BooleanTypeAnnotation',
                },
              },
            },
            {
              name: 'progress',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'Int32TypeAnnotation',
                },
              },
            },
            {
              name: 'radii',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'FloatTypeAnnotation',
                },
              },
            },
            {
              name: 'colors',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'ReservedPropTypeAnnotation',
                  name: 'ColorPrimitive',
                },
              },
            },
            {
              name: 'srcs',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'ReservedPropTypeAnnotation',
                  name: 'ImageSourcePrimitive',
                },
              },
            },
            {
              name: 'points',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'ReservedPropTypeAnnotation',
                  name: 'PointPrimitive',
                },
              },
            },
            {
              name: 'sizes',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'StringEnumTypeAnnotation',
                  default: 'small',
                  options: ['small', 'large'],
                },
              },
            },
            {
              name: 'object',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      name: 'stringProp',
                      optional: true,
                      typeAnnotation: {
                        type: 'StringTypeAnnotation',
                        default: '',
                      },
                    },
                  ],
                },
              },
            },
            {
              name: 'array',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      // This needs to stay the same as the object above
                      // to confirm that the structs are generated
                      // with unique non-colliding names
                      name: 'object',
                      optional: true,
                      typeAnnotation: {
                        type: 'ArrayTypeAnnotation',
                        elementType: {
                          type: 'ObjectTypeAnnotation',
                          properties: [
                            {
                              name: 'stringProp',
                              optional: true,
                              typeAnnotation: {
                                type: 'StringTypeAnnotation',
                                default: '',
                              },
                            },
                          ],
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              name: 'arrayOfArrayOfObject',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'ArrayTypeAnnotation',
                  elementType: {
                    type: 'ObjectTypeAnnotation',
                    properties: [
                      {
                        name: 'stringProp',
                        optional: true,
                        typeAnnotation: {
                          type: 'StringTypeAnnotation',
                          default: '',
                        },
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
      },
    },
  },
};

const COMPONENT_WITH_OBJECT_STATE: SchemaType = {
  modules: {
    MyComponent: {
      type: 'Component',
      components: {
        SimpleComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
          state: [
            {
              name: 'objectProp',
              optional: true,
              typeAnnotation: {
                type: 'ObjectTypeAnnotation',
                properties: [
                  {
                    name: 'stringProp',
                    optional: true,
                    typeAnnotation: {
                      type: 'StringTypeAnnotation',
                      default: '',
                    },
                  },
                  {
                    name: 'booleanProp',
                    optional: true,
                    typeAnnotation: {
                      type: 'BooleanTypeAnnotation',
                      default: false,
                    },
                  },
                  {
                    name: 'floatProp',
                    optional: true,
                    typeAnnotation: {
                      type: 'FloatTypeAnnotation',
                      default: 0.0,
                    },
                  },
                  {
                    name: 'intProp',
                    optional: true,
                    typeAnnotation: {
                      type: 'Int32TypeAnnotation',
                      default: 0,
                    },
                  },
                  {
                    name: 'stringEnumProp',
                    optional: true,
                    typeAnnotation: {
                      type: 'StringEnumTypeAnnotation',
                      default: 'option1',
                      options: ['option1'],
                    },
                  },
                  {
                    name: 'intEnumProp',
                    optional: true,
                    typeAnnotation: {
                      type: 'Int32EnumTypeAnnotation',
                      default: 0,
                      options: [0],
                    },
                  },
                  {
                    name: 'objectArrayProp',
                    optional: false,
                    typeAnnotation: {
                      type: 'ObjectTypeAnnotation',
                      properties: [
                        {
                          name: 'array',
                          optional: true,
                          typeAnnotation: {
                            type: 'ArrayTypeAnnotation',
                            elementType: {
                              type: 'StringTypeAnnotation',
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    name: 'objectPrimitiveRequiredProp',
                    optional: false,
                    typeAnnotation: {
                      type: 'ObjectTypeAnnotation',
                      properties: [
                        {
                          name: 'image',
                          optional: true,
                          typeAnnotation: {
                            type: 'ReservedPropTypeAnnotation',
                            name: 'ImageSourcePrimitive',
                          },
                        },
                        {
                          name: 'color',
                          optional: true,
                          typeAnnotation: {
                            type: 'ReservedPropTypeAnnotation',
                            name: 'ColorPrimitive',
                          },
                        },
                        {
                          name: 'point',
                          optional: true,
                          typeAnnotation: {
                            type: 'ReservedPropTypeAnnotation',
                            name: 'PointPrimitive',
                          },
                        },
                      ],
                    },
                  },
                  {
                    name: 'nestedPropA',
                    optional: false,
                    typeAnnotation: {
                      type: 'ObjectTypeAnnotation',
                      properties: [
                        {
                          name: 'nestedPropB',
                          optional: false,
                          typeAnnotation: {
                            type: 'ObjectTypeAnnotation',
                            properties: [
                              {
                                name: 'nestedPropC',
                                optional: true,
                                typeAnnotation: {
                                  type: 'StringTypeAnnotation',
                                  default: '',
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    name: 'nestedArrayAsProperty',
                    optional: false,
                    typeAnnotation: {
                      type: 'ObjectTypeAnnotation',
                      properties: [
                        {
                          name: 'arrayProp',
                          optional: false,
                          typeAnnotation: {
                            type: 'ArrayTypeAnnotation',
                            elementType: {
                              type: 'ObjectTypeAnnotation',
                              properties: [
                                {
                                  name: 'stringProp',
                                  optional: false,
                                  typeAnnotation: {
                                    type: 'StringTypeAnnotation',
                                    default: '',
                                  },
                                },
                              ],
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
};

const COMPONENT_WITH_STRING_ENUM_STATE_PROPS: SchemaType = {
  modules: {
    MyComponent: {
      type: 'Component',
      components: {
        SimpleComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
          state: [
            {
              name: 'alignment',
              optional: true,
              typeAnnotation: {
                type: 'StringEnumTypeAnnotation',
                default: 'center',
                options: ['top', 'center', 'bottom-right'],
              },
            },
          ],
        },
      },
    },
  },
};

const COMPONENT_WITH_INT_ENUM_STATE: SchemaType = {
  modules: {
    MyComponent: {
      type: 'Component',
      components: {
        SimpleComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [],
          commands: [],
          state: [
            {
              name: 'maxInterval',
              optional: true,
              typeAnnotation: {
                type: 'Int32EnumTypeAnnotation',
                default: 0,
                options: [0, 1, 2],
              },
            },
          ],
        },
      },
    },
  },
};

const COMPONENTS_WITH_IMAGES_IN_STATE: SchemaType = {
  modules: {
    MyComponent: {
      type: 'Component',
      components: {
        SimpleComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'imageSource',
              optional: false,
              typeAnnotation: {
                type: 'ReservedPropTypeAnnotation',
                name: 'ImageSourcePrimitive',
              },
            },
          ],
          commands: [],
          state: [
            {
              name: 'imageSource',
              optional: false,
              typeAnnotation: {
                type: 'ReservedPropTypeAnnotation',
                name: 'ImageSourcePrimitive',
              },
            },
            {
              name: 'imageRequest',
              optional: false,
              typeAnnotation: {
                type: 'ReservedPropTypeAnnotation',
                name: 'ImageRequestPrimitive',
              },
            },
          ],
        },
      },
    },
  },
};

module.exports = {
  NO_PROPS_NO_EVENTS,
  INTERFACE_ONLY,
  BOOLEAN_PROP,
  STRING_PROP,
  INTEGER_PROPS,
  DOUBLE_PROPS,
  FLOAT_PROPS,
  COLOR_PROP,
  IMAGE_PROP,
  POINT_PROP,
  INSETS_PROP,
  ARRAY_PROPS,
  ARRAY_PROPS_WITH_NESTED_OBJECT,
  OBJECT_PROPS,
  MULTI_NATIVE_PROP,
  STRING_ENUM_PROP,
  INT32_ENUM_PROP,
  EVENT_PROPS,
  EVENTS_WITH_PAPER_NAME,
  EVENT_NESTED_OBJECT_PROPS,
  TWO_COMPONENTS_SAME_FILE,
  TWO_COMPONENTS_DIFFERENT_FILES,
  COMMANDS,
  COMMANDS_AND_PROPS,
  EXCLUDE_ANDROID,
  EXCLUDE_ANDROID_IOS,
  EXCLUDE_IOS_TWO_COMPONENTS_DIFFERENT_FILES,
  COMPONENT_WITH_BOOL_STATE,
  COMPONENT_WITH_STRING_STATE,
  COMPONENT_WITH_INT_STATE,
  COMPONENT_WITH_FLOAT_STATE,
  COMPONENT_WITH_DOUBLE_STATE,
  COMPONENT_WITH_COLOR_STATE,
  COMPONENT_WITH_POINT_STATE,
  COMPONENT_WITH_IMAGE_STATE,
  COMPONENT_WITH_EDGE_INSET_STATE_PROPS,
  COMPONENT_WITH_ARRAY_STATE,
  COMPONENT_WITH_OBJECT_STATE,
  COMPONENT_WITH_ARRAY_OF_OBJECTS_STATE,
  COMPONENT_WITH_STRING_ENUM_STATE_PROPS,
  COMPONENT_WITH_INT_ENUM_STATE,
  COMPONENTS_WITH_IMAGES_IN_STATE,
};
