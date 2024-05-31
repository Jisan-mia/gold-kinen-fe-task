const SpecificTopicsPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return <div>Discussions for {slug}</div>;
};

export default SpecificTopicsPage;
