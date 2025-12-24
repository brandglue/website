#!/usr/bin/env node

/**
 * svg-class-to-attrs
 * Converts SVG class-based CSS rules into presentation attributes.
 */

const fs = require('fs');
const path = require('path');
const css = require('css');
const { DOMParser, XMLSerializer } = require('xmldom');

/* ----------------------------- CLI ----------------------------- */

const [, , inputFile, outputFile] = process.argv;

if (!inputFile || !outputFile) {
  console.error('Usage: svg-class-to-attrs input.svg output.svg');
  process.exit(1);
}

const inputPath = path.resolve(inputFile);
const outputPath = path.resolve(outputFile);

/* ----------------------------- Helpers ----------------------------- */

function getStyleText(styleEl) {
  let cssText = '';

  if (!styleEl?.childNodes) return cssText;

  for (let i = 0; i < styleEl.childNodes.length; i++) {
    const node = styleEl.childNodes[i];

    if (typeof node.data === 'string') cssText += node.data;
    else if (typeof node.nodeValue === 'string') cssText += node.nodeValue;
    else if (typeof node.value === 'string') cssText += node.value;
  }

  return cssText.trim();
}

function parseCss(cssText) {
  const ast = css.parse(cssText);
  const classMap = {};

  if (!ast.stylesheet?.rules) return classMap;

  for (const rule of ast.stylesheet.rules) {
    if (rule.type !== 'rule') continue;

    for (const selector of rule.selectors) {
      if (!selector.startsWith('.')) continue;

      const className = selector.slice(1);
      classMap[className] ||= {};

      for (const decl of rule.declarations || []) {
        if (decl.type !== 'declaration') continue;
        classMap[className][decl.property] = decl.value;
      }
    }
  }

  return classMap;
}

/**
 * Maps CSS properties → SVG presentation attributes
 */
const SVG_ATTRS = new Set([
  'fill',
  'stroke',
  'stroke-width',
  'stroke-miterlimit',
  'font-size',
  'font-family',
  'font-weight',
  'opacity',
  'isolation',
]);

function applyClassAttributes(el, classMap) {
  const classAttr = el.getAttribute('class');
  if (!classAttr) return;

  const classes = classAttr.split(/\s+/);

  for (const cls of classes) {
    const styles = classMap[cls];
    if (!styles) continue;

    for (const [prop, value] of Object.entries(styles)) {
      if (!SVG_ATTRS.has(prop)) continue;

      // Do not override explicit attributes
      if (!el.hasAttribute(prop)) {
        el.setAttribute(prop, value);
      }
    }
  }

  el.removeAttribute('class');
}

function cleanUpAttributes(el) {
  // remove unsupported attribute
  el.removeAttribute('isolation');

  // rename attribute with React-safe version
  if (el.hasAttribute('xml:space')) {
    const value = el.getAttribute('xml:space');
    el.removeAttribute('xml:space');
    el.setAttribute('xmlSpace', value);
  }
}

/* ----------------------------- Main ----------------------------- */

const svgText = fs.readFileSync(inputPath, 'utf8');
const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml');

/* Extract CSS */
const styleEls = Array.from(doc.getElementsByTagName('style'));
const cssText = styleEls.map(getStyleText).join('\n');

const classMap = parseCss(cssText);

/* Walk all elements */
function walk(node) {
  if (node.nodeType === 1) {
    applyClassAttributes(node, classMap);
    cleanUpAttributes(node);
  }

  if (node.childNodes) {
    for (let i = 0; i < node.childNodes.length; i++) {
      walk(node.childNodes[i]);
    }
  }
}

walk(doc.documentElement);

/* Remove <style> blocks */
for (const styleEl of styleEls) {
  styleEl.parentNode.removeChild(styleEl);
}

/* Serialize */
const outputSvg = new XMLSerializer().serializeToString(doc);
fs.writeFileSync(outputPath, outputSvg, 'utf8');

console.log(`✔ Converted SVG written to ${outputPath}`);

// handle
// isolation tag
// xml:space tag
