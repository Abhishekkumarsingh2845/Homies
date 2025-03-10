const formatNumber = num => {
  if (!num) return 'No Data Available';
  const absNum = Math.abs(num);
  if (absNum >= 1.0e12) return (num / 1.0e12).toFixed(1) + 'T';
  if (absNum >= 1.0e9) return (num / 1.0e9).toFixed(1) + 'B';
  if (absNum >= 1.0e6) return (num / 1.0e6).toFixed(1) + 'M';
  if (absNum >= 1.0e3) return (num / 1.0e3).toFixed(1) + 'K';
  return num.toString();
};

export default formatNumber;
