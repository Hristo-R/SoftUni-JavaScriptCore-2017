let vectorMath = (function() {
    function add (vectorA, vectorB) {
        return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]]
    }

    function multiply (vectorA, scalar) {
        return [vectorA[0] * scalar, vectorA[1] * scalar]
    }

    function length (vectorA) {
        return Math.sqrt(Math.pow(vectorA[0], 2) + Math.pow(vectorA[1], 2))
    }

    function dot (vectorA, vectorB) {
        return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1]
    }

    function cross (vectorA, vectorB) {
        return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0]
    }

    return { add, multiply, length, dot, cross}
})();

console.log(vectorMath.add([1,1], [1,0]));