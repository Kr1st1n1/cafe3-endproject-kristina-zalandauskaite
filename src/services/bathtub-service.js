const domain = process.env.REACT_APP_SERVER_ADDRESS;

const fetchAll = async () => {
  const response = await fetch(`${domain}/bathtubs`);
  const bathtubs = await response.json();

  return bathtubs;
};

const BathtubService = {
  fetchAll,
};

export default BathtubService;
