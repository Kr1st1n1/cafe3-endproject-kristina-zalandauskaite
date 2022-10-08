const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'houses';
const relationsParams = '_expand=category&_expand=bathtub';

const fetchAll = async (paramsString = null) => {
  const urlParamsString = paramsString ? `&${paramsString}` : '';

  const response = await fetch(`${domain}/${collectionName}?${relationsParams}${urlParamsString}`);
  const houses = await response.json();

  return houses;
};

const fetchById = async (id) => {
  const response = await fetch(`${domain}/${collectionName}/${id}?${relationsParams}`);
  if (response.status === 404) {
    throw new Error(`House with id '${id}' not found.`);
  }
  const house = await response.json();

  return house;
};

const fetchByIdArr = async (idArr) => {
  const idsParamsString = idArr.map((id) => `id=${id}`).join('&');
  const houses = await fetchAll(idsParamsString);

  return houses;
};

const CardService = {
  fetchAll,
  fetchById,
  fetchByIdArr,
};

export default CardService;
