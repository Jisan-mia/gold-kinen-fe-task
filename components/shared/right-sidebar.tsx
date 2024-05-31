const RightSidebar = () => {
  return (
    <div className="sticky top-0 max-h-[calc(100vh-55px)] max-w-[315px] w-[315px] overflow-y-auto overflow-x-hidden custom-scrollbar">
      <aside className="bg-background px-4 py-4 rounded-md flex flex-col">
        <div className="flex flex-col gap-2">
          <h3 className="font-normal text-base uppercase">
            Recent Discussions
          </h3>

          <div>
            {" "}
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              laborum autem tenetur ipsam quia eos?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              laborum autem tenetur ipsam quia eos?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              laborum autem tenetur ipsam quia eos?
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default RightSidebar;
