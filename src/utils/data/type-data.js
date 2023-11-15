import ToggleFieldset from "@/components/fieldset/toggle-fieldset/ToggleFieldset";
import NumberInputFieldset from "@/components/fieldset/number-input-fieldset/NumberInputFieldset";
import ObjectInputFieldset from "@/components/fieldset/object-input-fieldset/ObjectInputFieldset";
import ColorInputFieldset from "@/components/fieldset/color-fieldset/ColorInputFieldset";
import StringInputFieldset from "@/components/fieldset/string-input-fieldset/StringInputFieldset";
import SelectFieldset from "@/components/fieldset/select-fieldset/SelectFieldset";
import DescriptionFieldset from "@/components/fieldset/description-fieldset/DescriptionFieldset";
import ArrayFieldset from "@/components/fieldset/array-fieldset/ArrayFieldset";
import ColorPaletteFieldset from "@/components/fieldset/color-palette-fieldset/ColorPaletteFieldset";

export const typeData = {
    "boolean": ToggleFieldset,
    "number": NumberInputFieldset,
    "object": ObjectInputFieldset,
    "color": ColorInputFieldset,
    "string": StringInputFieldset,
    "select": SelectFieldset,
    "description": DescriptionFieldset,
    "array": ArrayFieldset,
    "colorPalette": ColorPaletteFieldset,
}