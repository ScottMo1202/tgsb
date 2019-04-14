// NEW selector (case insensitive)

$.extend($.expr[":"], {
    "Contains": function(elem, i, match, array) {
    return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
});

Array.prototype.any = function(func) {
    return this.some(func || function(x) { return x });
}