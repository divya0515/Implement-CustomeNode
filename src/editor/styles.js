export const TEXT_SHADOW = "0 1px rgba(0,0,0,0.4)";
export const INPUT_BORDER_RADIUS = 4;
export const CHECKBOX_BORDER_RADIUS = 3;
export const ACTIVE_BUTTON_BG = "#3873b8";
export const INPUT_BG = "#545555";

export const COLORS = {
  blue: "#006487",
  darkPurple: "#411b26",
  purple: "#8e294b",
  green: "#00745e",
  lightPurple: "#3c3c88",
  black: "#1d1d1d",
};

export const SOCKET_COLORS = {
  VALUE: "#a1a1a1",
  GEOMETRY: "#00daa0",
  VECTOR: "#6363ce",
  INT: "#488d57",
  BOOLEAN: "#d3a4d9",
};
export const HEADER_COLORS = {
  INDEX: COLORS.blue,
  VALUE: COLORS.blue,
  INPUT_VECTOR: COLORS.blue,

  MAP_RANGE: COLORS.darkPurple,
  MATH: COLORS.darkPurple,
  VECT_MATH: COLORS.black,
  COMBXYZ: COLORS.darkPurple,
  SEPXYZ: COLORS.darkPurple,

  POINTS: COLORS.purple,
  FILLET_CURVE: COLORS.purple,
  CURVE_PRIMITIVE_CIRCLE: COLORS.purple,
  CURVE_PRIMITIVE_QUADRILATERAL: COLORS.purple,
  BOUNDING_BOX: COLORS.purple,
  MESH_PRIMITIVE_CUBE: COLORS.purple,
  MESH_PRIMITIVE_CYLINDER: COLORS.purple,
  MESH_PRIMITIVE_UV_SPHERE: COLORS.purple,
  MESH_PRIMITIVE_GRID: COLORS.purple,
  CURVE_TO_MESH: COLORS.purple,
  INSTANCE_ON_POINTS: COLORS.purple,
  SET_MATERIAL: COLORS.purple,
  JOIN_GEOMETRY: COLORS.purple,
  TRANSFORM: COLORS.purple,

  GROUP_OUTPUT: COLORS.green,
  GROUP_INPUT: COLORS.green,

  VIEWER: COLORS.lightPurple,
};

export const SOCKET_SHAPES = {
  CIRCLE: {},
  DIAMOND: {
    borderRadius: 0,
    transform: "rotate(45deg)",
    top: 8,
  },
  DIAMOND_DOT: {
    borderRadius: 0,
    transform: "rotate(45deg)",
    top: 8,
  },
};
