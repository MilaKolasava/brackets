module.exports = function check(str, bracketsConfig) {

    let br = [];
    let pairSc = '';
    for (i = 0; i < bracketsConfig.length; i++) {
        pairSc = bracketsConfig[i][0] + bracketsConfig[i][1];
        br.push(pairSc);
        pairSc = "";
    }
    let count = 0;
    do {
        count = 0;
        for (let i = 0; i < br.length; i++) {

            if (str.indexOf(br[i]) != -1) {
                str = str.replace(br[i], '');
                count += 1;
            }
        }
    } while (count != 0);
    return (str.length == 0) ? true : false;
}
