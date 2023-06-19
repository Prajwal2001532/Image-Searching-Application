import axios from 'axios'
const Search = async(term) => {
      const response = await axios.get('https://api.unsplash.com/search/photos',{
            headers :{
                Authorization:'Client-ID orUWFJcwGMSGp5zCjvHdV6HvaGbQV8JcDjgSLSwij8U'
            },

            params : {
                query : term
            }
            
        });
        console.log(response.data.results);
        return response.data.results;
        
}
export default Search;