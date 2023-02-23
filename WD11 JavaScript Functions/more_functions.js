
/**
 * Functii nested (imbricate)
 * Functia "copil" va avea acces la tot ce este declarat in functia parinte,
 * dar NU si viceversa.
 */

function addSquares(a, b) {
    const varParent = "Aici suntem in parinte";

    function square(x) {
        const varCopil = "Suntem in functia copil";
        console.log(varParent);
        console.log(varCopil);

        return x * x;
    }

    console.log(varParent);
    // console.log(varCopil);

    return square(a) + square(b);
}

addSquares(10, 12);