const cutPTags = (str) => {
  if (str.slice(0,3) === '<p>' && str.slice(str.length - 4) === '</p>') {
    return str.substring(3, str.length - 4);
  }
};

export default cutPTags;
