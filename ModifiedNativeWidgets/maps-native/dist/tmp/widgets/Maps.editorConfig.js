'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, '__esModule', {
  value: true
});
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
var dist = {};
var common$2 = {};
Object.defineProperty(common$2, "__esModule", {
  value: true
});
common$2.ensure = void 0;
function ensure(arg) {
  if (arg == null) {
    throw new Error("Did not expect an argument to be undefined");
  }
  return arg;
}
common$2.ensure = ensure;
var common$1 = {};
Object.defineProperty(common$1, "__esModule", {
  value: true
});
common$1.extractStyles = common$1.mergeNativeStyles = void 0;
function mergeNativeStyles(defaultStyle, overrideStyles) {
  var styles = [defaultStyle].concat(_toConsumableArray(overrideStyles.filter(function (object) {
    return object !== undefined;
  })));
  return Object.keys(defaultStyle).reduce(function (flattened, currentKey) {
    var styleItems = styles.map(function (object) {
      return object[currentKey];
    });
    return Object.assign(Object.assign({}, flattened), _defineProperty({}, currentKey, flattenObjects(styleItems)));
  }, {});
}
common$1.mergeNativeStyles = mergeNativeStyles;
function flattenObjects(objects) {
  return objects.reduce(function (merged, object) {
    return Object.assign(Object.assign({}, merged), object);
  }, {});
}
function extractStyles(source, extractionKeys) {
  if (!source) {
    return [{}, {}];
  }
  return Object.entries(source).reduce(function (_ref, _ref2) {
    var _ref3 = _slicedToArray(_ref, 2),
      extracted = _ref3[0],
      rest = _ref3[1];
    var _ref4 = _slicedToArray(_ref2, 2),
      key = _ref4[0],
      value = _ref4[1];
    if (extractionKeys.includes(key)) {
      extracted[key] = value;
    } else {
      rest[key] = value;
    }
    return [extracted, rest];
  }, [{}, {}]);
}
common$1.extractStyles = extractStyles;
var common = {};
Object.defineProperty(common, "__esModule", {
  value: true
});
common.parseInlineStyle = void 0;
function parseInlineStyle() {
  var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  try {
    return style.split(";").reduce(function (styleObject, line) {
      var pair = line.split(":");
      if (pair.length === 2) {
        var name = pair[0].trim().replace(/(-.)/g, function (match) {
          return match[1].toUpperCase();
        });
        styleObject[name] = pair[1].trim();
      }
      return styleObject;
    }, {});
  } catch (_) {
    return {};
  }
}
common.parseInlineStyle = parseInlineStyle;
var typings = {};
var PageEditor = {};
Object.defineProperty(PageEditor, "__esModule", {
  value: true
});
(function (exports) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = {
        enumerable: true,
        get: function get() {
          return m[k];
        }
      };
    }
    Object.defineProperty(o, k2, desc);
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  __exportStar(PageEditor, exports);
})(typings);
var utils = {};
var PageEditorUtils = {};
Object.defineProperty(PageEditorUtils, "__esModule", {
  value: true
});
PageEditorUtils.moveProperty = PageEditorUtils.transformGroupsIntoTabs = PageEditorUtils.changePropertyIn = PageEditorUtils.hideNestedPropertiesIn = PageEditorUtils.hidePropertiesIn = PageEditorUtils.hidePropertyIn = void 0;
function hidePropertyIn(propertyGroups, _value, key, nestedPropIndex, nestedPropKey) {
  modifyProperty(function (_, index, container) {
    return container.splice(index, 1);
  }, propertyGroups, key, nestedPropIndex, nestedPropKey);
}
PageEditorUtils.hidePropertyIn = hidePropertyIn;
function hidePropertiesIn(propertyGroups, _value, keys) {
  keys.forEach(function (key) {
    return modifyProperty(function (_, index, container) {
      return container.splice(index, 1);
    }, propertyGroups, key, undefined, undefined);
  });
}
PageEditorUtils.hidePropertiesIn = hidePropertiesIn;
function hideNestedPropertiesIn(propertyGroups, _value, key, nestedPropIndex, nestedPropKeys) {
  nestedPropKeys.forEach(function (nestedKey) {
    return hidePropertyIn(propertyGroups, _value, key, nestedPropIndex, nestedKey);
  });
}
PageEditorUtils.hideNestedPropertiesIn = hideNestedPropertiesIn;
function changePropertyIn(propertyGroups, _value, modify, key, nestedPropIndex, nestedPropKey) {
  modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey);
}
PageEditorUtils.changePropertyIn = changePropertyIn;
function transformGroupsIntoTabs(properties) {
  var groups = [];
  properties.forEach(function (property) {
    if (property.propertyGroups) {
      groups.push.apply(groups, _toConsumableArray(property.propertyGroups));
      property.propertyGroups = [];
    }
  });
  properties.push.apply(properties, groups);
}
PageEditorUtils.transformGroupsIntoTabs = transformGroupsIntoTabs;
function modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey) {
  propertyGroups.forEach(function (propGroup) {
    var _a;
    if (propGroup.propertyGroups) {
      modifyProperty(modify, propGroup.propertyGroups, key, nestedPropIndex, nestedPropKey);
    }
    (_a = propGroup.properties) === null || _a === void 0 ? void 0 : _a.forEach(function (prop, index, array) {
      if (prop.key === key) {
        if (nestedPropIndex === undefined || nestedPropKey === undefined) {
          modify(prop, index, array);
        } else if (prop.objects) {
          modifyProperty(modify, prop.objects[nestedPropIndex].properties, nestedPropKey);
        } else if (prop.properties) {
          modifyProperty(modify, prop.properties[nestedPropIndex], nestedPropKey);
        }
      }
    });
  });
}
function moveProperty(fromIndex, toIndex, properties) {
  if (fromIndex >= 0 && toIndex >= 0 && fromIndex < properties.length && toIndex < properties.length && fromIndex !== toIndex) {
    properties.splice.apply(properties, [toIndex, 0].concat(_toConsumableArray(properties.splice(fromIndex, 1))));
  }
}
PageEditorUtils.moveProperty = moveProperty;
(function (exports) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = {
        enumerable: true,
        get: function get() {
          return m[k];
        }
      };
    }
    Object.defineProperty(o, k2, desc);
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  __exportStar(PageEditorUtils, exports);
})(utils);
(function (exports) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = {
        enumerable: true,
        get: function get() {
          return m[k];
        }
      };
    }
    Object.defineProperty(o, k2, desc);
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  __exportStar(common$2, exports);
  __exportStar(common$1, exports);
  __exportStar(common, exports);
  __exportStar(typings, exports);
  __exportStar(utils, exports);
})(dist);

// import { StructurePreviewProps } from "@mendix/piw-utils-internal";
// import StructurePreviewMapsSVG from "./assets/StructurePreviewMaps.svg";
// export function getPreview(_: MapsPreviewProps): StructurePreviewProps {
//     return {
//         type: "Image",
//         document: decodeURIComponent(StructurePreviewMapsSVG.replace("data:image/svg+xml,", "")),
//         width: 75,
//         height: 75
//     };
// }
function getProperties(values, defaultProperties) {
  values.markers.forEach(function (f, index) {
    if (f.locationType === "address") {
      dist.hidePropertyIn(defaultProperties, values, "markers", index, "latitude");
      dist.hidePropertyIn(defaultProperties, values, "markers", index, "longitude");
    } else {
      dist.hidePropertyIn(defaultProperties, values, "markers", index, "address");
    }
  });
  values.dynamicMarkers.forEach(function (f, index) {
    if (f.locationDynamicType === "address") {
      dist.hidePropertyIn(defaultProperties, values, "dynamicMarkers", index, "latitude");
      dist.hidePropertyIn(defaultProperties, values, "dynamicMarkers", index, "longitude");
    } else {
      dist.hidePropertyIn(defaultProperties, values, "dynamicMarkers", index, "address");
    }
  });
  if (values.fitToMarkers) {
    dist.hidePropertiesIn(defaultProperties, values, ["centerAddress", "centerLatitude", "centerLongitude"]);
    if (values.markers.length > 1 || values.dynamicMarkers.length > 1) {
      dist.hidePropertyIn(defaultProperties, values, "defaultZoomLevel");
    }
  }
  dist.changePropertyIn(defaultProperties, values, function (prop) {
    var _a;
    prop.objectHeaders = ["Address", "Latitude", "Longitude"];
    (_a = prop.objects) === null || _a === void 0 ? void 0 : _a.forEach(function (object, index) {
      var column = values.markers[index];
      object.captions = [column.address, column.latitude, column.longitude];
    });
  }, "markers");
  dist.changePropertyIn(defaultProperties, values, function (prop) {
    var _a;
    prop.objectHeaders = ["Address", "Latitude", "Longitude"];
    (_a = prop.objects) === null || _a === void 0 ? void 0 : _a.forEach(function (object, index) {
      var column = values.dynamicMarkers[index];
      object.captions = [column.address, column.latitude, column.longitude];
    });
  }, "dynamicMarkers");
  return defaultProperties;
}
function check(values) {
  var errors = [];
  var zoomLevels = ["world", "continent", "country", "city", "town", "streets", "building"];
  var defaultZoomLevelIndex = zoomLevels.indexOf(values.defaultZoomLevel);
  var minZoomLevelIndex = zoomLevels.indexOf(values.minZoomLevel);
  var maxZoomLevelIndex = zoomLevels.indexOf(values.maxZoomLevel);
  if (minZoomLevelIndex > maxZoomLevelIndex) {
    errors.push({
      property: "minZoomLevel",
      severity: "error",
      message: "The minimum zoom level can not be greater than the maximum zoom level."
    });
  }
  if (defaultZoomLevelIndex < minZoomLevelIndex) {
    errors.push({
      property: "defaultZoomLevel",
      severity: "error",
      message: "The default zoom level can not be smaller than the minimum zoom level."
    });
  } else if (defaultZoomLevelIndex > maxZoomLevelIndex) {
    errors.push({
      property: "defaultZoomLevel",
      severity: "error",
      message: "The default zoom level can not be greater than the maximum zoom level."
    });
  }
  values.markers.forEach(function (marker, index) {
    if (marker.locationType === "address") {
      if (!marker.address) {
        errors.push({
          property: "markers/".concat(index + 1, "/address"),
          message: "A static marker requires an address"
        });
      }
    } else {
      if (!marker.latitude) {
        errors.push({
          property: "markers/".concat(index + 1, "/latitude"),
          message: "A static marker requires latitude"
        });
      }
      if (!marker.longitude) {
        errors.push({
          property: "markers/".concat(index + 1, "/longitude"),
          message: "A static marker requires longitude"
        });
      }
    }
  });
  values.dynamicMarkers.forEach(function (marker, index) {
    if (!marker.markersDS || "type" in marker.markersDS && marker.markersDS.type === "null") {
      errors.push({
        property: "dynamicMarkers/".concat(index + 1, "/markersDS"),
        message: "A data source should be selected in order to retrieve a list of markers"
      });
    } else {
      if (marker.locationDynamicType === "address") {
        if (!marker.address) {
          errors.push({
            property: "dynamicMarkers/".concat(index + 1, "/address"),
            message: "A dynamic marker requires an address"
          });
        }
      } else {
        if (!marker.latitude) {
          errors.push({
            property: "dynamicMarkers/".concat(index + 1, "/latitude"),
            message: "A dynamic marker requires latitude"
          });
        }
        if (!marker.longitude) {
          errors.push({
            property: "dynamicMarkers/".concat(index + 1, "/longitude"),
            message: "A dynamic marker requires longitude"
          });
        }
      }
    }
  });
  return errors;
}
exports.check = check;
exports.getProperties = getProperties;
