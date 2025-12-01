export default function(collection) {
  return collection.getAll().filter(item => {
    return item.data.eleventyNavigation !== undefined;
  }).sort((a, b) => {
    return (a.data.eleventyNavigation.order || 0) - (b.data.eleventyNavigation.order || 0);
  });
}
