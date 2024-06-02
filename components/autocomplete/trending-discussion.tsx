import SearchResultItem from "./search-result-item";

const TrendingDiscussionSuggestion = () => {
  return (
    <div className="w-full">
      <h3 className="uppercase font-medium text-xs text-foreground/80 px-3 mb-2">
        Trending Discussions
      </h3>

      <div className="grid divide-y divide-border">
        {Array.from(Array(8).keys()).map((item) => (
          <SearchResultItem
            key="item"
            item={{
              id: 1,
              body: "some long body is here going to show so be palong body is here going to show so be pa long body is here going to show so be pa",
              title: "Best title it is however you do not know!",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingDiscussionSuggestion;
