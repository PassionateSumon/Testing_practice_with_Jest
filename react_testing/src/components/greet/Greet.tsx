type PropType = {
  name?: string;
};

export const Greet = (prop: PropType) => {
  return <div>Hello {prop.name}</div>;
};

