'use strict';

var ts = require('typescript');

var str = ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);

var lit = ts.createLiteral('test');
var testVar = ts.createVariableDeclaration('test', str, lit);
var varStatement = ts.createVariableStatement(undefined, [testVar]);

// var id = ts.createIdentifier('key1');
// console.log(id);

var enumMember = ts.createEnumMember('key1', lit);
var enumDec = ts.createEnumDeclaration(undefined, undefined, 'myThing', [enumMember])

var abc = ts.createIdentifier('abc'); // Create a variable
var def = ts.createIdentifier('def');
var comparison = ts.createBinary(abc, ts.SyntaxKind.EqualsEqualsEqualsToken, def);
var assignment = ts.createAssignment(abc, def);
var assignment2 = ts.createAssignment(def, abc);
var ifDec = ts.createIf(comparison, assignment, assignment2);
var block = ts.createBlock([assignment, assignment2], true);
var block2 = ts.createBlock([assignment2, assignment]);
var ifDec2 = ts.createIf(comparison, block, block2);


var src = ts.createSourceFile('test.ts', '', ts.ScriptTarget.ES5, false, ts.ScriptKind.TS);

var updated = ts.updateSourceFileNode(src, [varStatement, enumDec, ifDec, ifDec2]);

// console.log(updated);

var printer = ts.createPrinter();

var out = printer.printFile(updated);
console.log(out);

// console.log(ts.createBundle(['test']));