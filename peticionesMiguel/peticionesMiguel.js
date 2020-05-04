
const getCatFact = async(axios) => {
    try {
        const res = await axios.get('https://cat-fact.herokuapp.com/facts/random');
        return res;
    }catch (eror){
       return err;
    }
} 

module.exports = getCatFact;