export const truncateData = (data, count) => {
  return data?.length > count ? `${data?.substring(0, count)}...` : data;
};

export default truncateData;
