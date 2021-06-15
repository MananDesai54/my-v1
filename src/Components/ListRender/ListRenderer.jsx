import Layout from "../Layout/Layout";
import Title from "../Title/Title";
import ListItem from "./ListItem";

const ListRenderer = ({ title, number, list }) => {
  return (
    <Layout className="mt-24 overflow-scroll mb-10">
      <Title title={title} number={number} />
      {list.map((item, index) => (
        <ListItem item={item} key={index} />
      ))}
    </Layout>
  );
};

export default ListRenderer;
