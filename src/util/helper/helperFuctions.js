export const handleLargeNumbers = (value) => {

    const number = String(value)

    switch (true) {
      case number.length >= 13:
        return value.toLocaleString().slice(0,5) + ' T';
        // return formatPrice.format(number).slice(0,5) + ' T';
      case number.length >= 10:
        return value.toLocaleString().slice(0,5) + ' B';
      case number.length >= 7: 
      return value.toLocaleString().slice(0,5) + ' M';
      default:
        return number
    }
};