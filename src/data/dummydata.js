useEffect(() => {
    const fetchData = async () => {
      const options = {
  method: 'GET',
  url: 'https://chinese-food-db.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': '002a193ce6msh60cd49b2d1eb40ep157497jsnc45e21013995',
    'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com'
  }
};
      try {
        const response = await axios.request(options);
        console.log(response)
        const allData = response.data;
        const first50 = allData.slice(0,50)
        console.log(first50);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);