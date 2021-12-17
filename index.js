let elemId = "invisible"
let println = console.log

function replaceInner(str1, str) {
    document.getElementById(elemId).innerText = document.getElementById(elemId).innerText.replace(str1, str)
}


function highlight() { 
    let javaKeywords = ['abstract', 'continue', 'for', 'new', 'switch', 'assert', 'default', 'goto', 'package', 'synchronized', 'boolean', 'do', 'if', 'private', 'this', 'break', 'double', 'implements', 'protected', 'throw', 'byte', 'else', 'import', 'public', 'throws', 'case', 'enum', 'instanceof', 'return', 'transient', 'catch', 'extends', 'int', 'short', 'try', 'char', 'final', 'interface', 'static', 'void', 'class', 'finally', 'long', 'strictfp', 'volatile', 'const', 'float', 'native', 'super', 'while']

    // #c678dd
    for (let i of javaKeywords) {
        replaceInner(RegExp(`${i}`, "g"), `[color="#c678dd"]${i}[/color]`)
    }   

    // #5c6370
    for (let i of document.getElementById(elemId).innerText.split("\n")) {
        if (i.indexOf("//") != -1) {
            replaceInner(i.slice(i.indexOf("//"), i.length), `[color="#5c6370"]${i.slice(i.indexOf("//"), i.length)}[/color]`)
        
            let slice = i.slice(i.indexOf("//"), i.length)

            slice = slice.replace(/\[color=".+"](.+)\[\/color]/gm, (match, g1) => {
                return g1
            })

            replaceInner(i.slice(i.indexOf("//"), i.length), slice)
        }
    }
}