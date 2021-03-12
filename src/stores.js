import { writable } from "svelte/store";

export const menus = {
  tips: [
    ["tips", "dos-and-donts", "Dos and Don’ts"],
    ["tips", "typography", "Typography"],
    ["tips", "layout", "Layout"],
    ["tips", "client", "Client Review"],
    ["tips", "max-widths", "Max-widths, Alignment, and Outer Margins"],
    ["tips", "images", "Advanced Strategies for Images"],
  ],
  concepts: [
    ["concepts", "responsive-design", "Responsive Design"],
    ["concepts", "design-systems", "Design Systems"],
    ["concepts", "wireframing-prototyping", "Wireframing/Prototyping"],
    ["concepts", "typography", "Typography"],
    ["concepts", "forms", "Forms"],
  ],
};
