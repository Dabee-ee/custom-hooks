const content = [
  {
    tab: "Section 1",
    content: "Content 1",
  },
  {
    tab: "Section 2",
    content: "Content 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changItem: setCurrentIndex,
  };
};
