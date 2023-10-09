const paginate = (data) => {
  const itemPerPage = 10;
  const totalPage = Math.ceil(data.length / itemPerPage);
  const newArray = Array.from({ length: totalPage }, (_, index) => {
    const start = index * itemPerPage;
    return data.slice(start, start + 10);
  });
  return newArray;
};
export default paginate;
