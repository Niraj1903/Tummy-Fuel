import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () => {
  const { restMenu } = useResturantMenu();
  return (
    <>
      <div>
        <h1>Hello Dyna</h1>
      </div>
    </>
  );
};

export default ResturantMenu;
